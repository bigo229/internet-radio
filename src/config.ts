export interface Station {
	id: string;
	name: string;
	genre: string;
	description: string;
	/** AzuraCast base URL, e.g. https://radio.example.com */
	azuraBase: string;
	/** AzuraCast station shortcode or numeric id used in API URLs */
	azuraStation: string;
	/** Direct audio stream URL for the <audio> element */
	streamUrl: string;
	/** Optional AzuraCast API key (required for song requests) */
	apiKey?: string;
	/** Theme accent colour (hex) */
	accent: string;
}

/**
 * The six AzuraCast streams shown on the site.
 *
 * Fill in `azuraBase`, `azuraStation`, `streamUrl` and (for song requests)
 * `apiKey` for each real AzuraCast installation. Until then the UI falls back
 * to demo data so the site stays alive.
 */
export const STATIONS: Station[] = [
	{
		id: 'chill',
		name: 'Pulse Chill',
		genre: 'Lo-Fi & Ambient',
		description: 'Slow beats and soft textures to drift away to.',
		azuraBase: 'https://azuracast1.example.com',
		azuraStation: 'chill',
		streamUrl: 'https://azuracast1.example.com/listen/chill/radio.mp3',
		accent: '#8b5cf6',
	},
	{
		id: 'house',
		name: 'Pulse House',
		genre: 'Deep House & Groove',
		description: 'Four-on-the-floor rhythms built for the floor.',
		azuraBase: 'https://azuracast2.example.com',
		azuraStation: 'house',
		streamUrl: 'https://azuracast2.example.com/listen/house/radio.mp3',
		accent: '#ec4899',
	},
	{
		id: 'rock',
		name: 'Pulse Rock',
		genre: 'Indie & Alt Rock',
		description: 'Guitars, hooks and a little attitude.',
		azuraBase: 'https://azuracast3.example.com',
		azuraStation: 'rock',
		streamUrl: 'https://azuracast3.example.com/listen/rock/radio.mp3',
		accent: '#f59e0b',
	},
	{
		id: 'jazz',
		name: 'Pulse Jazz',
		genre: 'Smooth Jazz & Soul',
		description: 'Warm late-night jazz, funk and soul.',
		azuraBase: 'https://azuracast4.example.com',
		azuraStation: 'jazz',
		streamUrl: 'https://azuracast4.example.com/listen/jazz/radio.mp3',
		accent: '#22d3ee',
	},
	{
		id: 'retro',
		name: 'Pulse Retro',
		genre: '80s & 90s Hits',
		description: 'The throwback bangers you forgot you loved.',
		azuraBase: 'https://azuracast5.example.com',
		azuraStation: 'retro',
		streamUrl: 'https://azuracast5.example.com/listen/retro/radio.mp3',
		accent: '#34d399',
	},
	{
		id: 'techno',
		name: 'Pulse Techno',
		genre: 'Techno & Electronic',
		description: 'Relentless electronic pulses for heads-down sessions.',
		azuraBase: 'https://azuracast6.example.com',
		azuraStation: 'techno',
		streamUrl: 'https://azuracast6.example.com/listen/techno/radio.mp3',
		accent: '#f43f5e',
	},
];

export const SITE = {
	name: 'Pulse Radio',
	tagline: 'Six streams. One community. 24/7.',
	description:
		'Pulse Radio — six curated AzuraCast streams spanning chill, house, rock, jazz, retro and techno, streaming around the clock.',
	contactEmail: 'hello@pulseradio.fm',
	socials: {
		twitter: 'https://twitter.com',
		instagram: 'https://instagram.com',
		discord: 'https://discord.com',
	},
} as const;
