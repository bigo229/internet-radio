export interface Track {
	artist: string;
	title: string;
}

/** Default demo playlist used when no live now-playing source is configured. */
export const DEMO_TRACKS: Track[] = [
	{ artist: 'Tame Impala', title: 'The Less I Know The Better' },
	{ artist: 'ODESZA', title: 'A Moment Apart' },
	{ artist: 'Bonobo', title: 'Kerala' },
	{ artist: 'Khruangbin', title: 'Time (You and I)' },
	{ artist: 'Tycho', title: 'Awake' },
	{ artist: 'Caribou', title: "Can't Do Without You" },
	{ artist: 'Four Tet', title: 'Teenage Birdsong' },
];
