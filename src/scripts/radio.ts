import { SITE, STATIONS, type Station } from '../config';

export interface Track {
	artist: string;
	title: string;
	artwork?: string;
}

interface RadioState {
	playing: boolean;
	buffering: boolean;
	track: Track;
	station: Station | null;
}

type Listener = (state: RadioState) => void;

const state: RadioState = {
	playing: false,
	buffering: false,
	track: { artist: SITE.name, title: 'Live Stream' },
	station: STATIONS[0] ?? null,
};

const listeners = new Set<Listener>();
let audio: HTMLAudioElement | null = null;
let pollTimer: number | undefined;

function emit() {
	for (const fn of listeners) fn(state);
}

export function subscribe(fn: Listener): () => void {
	listeners.add(fn);
	fn(state);
	return () => listeners.delete(fn);
}

export function getStation(): Station | null {
	return state.station;
}

export function setStation(station: Station, autoplay = false) {
	state.station = station;
	if (audio) {
		audio.src = station.streamUrl;
		audio.load();
		if (autoplay) play();
	}
	emit();
	pollNowPlaying();
}

export function initRadio(audioEl: HTMLAudioElement) {
	audio = audioEl;
	if (state.station) audio.src = state.station.streamUrl;
	audio.preload = 'none';
	audio.volume = 0.8;

	audio.addEventListener('playing', () => {
		state.playing = true;
		state.buffering = false;
		emit();
	});
	audio.addEventListener('pause', () => {
		state.playing = false;
		emit();
	});
	audio.addEventListener('waiting', () => {
		state.buffering = true;
		emit();
	});
	audio.addEventListener('canplay', () => {
		state.buffering = false;
		emit();
	});

	pollNowPlaying();
	pollTimer = window.setInterval(pollNowPlaying, 15000);
}

export function toggle() {
	if (!audio) return;
	if (audio.paused) void audio.play().catch(() => {});
	else audio.pause();
}

export function play() {
	if (audio && audio.paused) void audio.play().catch(() => {});
}

export function pause() {
	if (audio && !audio.paused) audio.pause();
}

export function setVolume(v: number) {
	if (audio) audio.volume = Math.min(1, Math.max(0, v));
}

function nowPlayingUrl(): string {
	return state.station
		? `/api/station/${state.station.id}/nowplaying.json`
		: '/api/nowplaying.json';
}

async function pollNowPlaying() {
	try {
		const res = await fetch(nowPlayingUrl(), { cache: 'no-store' });
		if (!res.ok) return;
		const data = (await res.json()) as Partial<Track> & { error?: string };
		if (data?.error) return;
		if (data?.title || data?.artist) {
			state.track = {
				artist: data.artist ?? state.track.artist,
				title: data.title ?? state.track.title,
				artwork: data.artwork,
			};
			emit();
		}
	} catch {
		/* offline / endpoint unavailable — keep last known track */
	}
}

export function destroyRadio() {
	if (pollTimer) window.clearInterval(pollTimer);
}
