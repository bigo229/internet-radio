// src/pages/api/station/[id]/nowplaying.json.ts
import type { APIRoute } from 'astro';
// 🔑 FIXED: Points natively to your unified radioApi utility file
import { fetchNowPlaying } from '../../../../lib/radioApi';
import { STATIONS } from '../../../../config';

export const prerender = false; // Runs live dynamically on Cloudflare Pages runtime

export const GET: APIRoute = async ({ params }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	
	if (!station) {
		return new Response(JSON.stringify({ error: 'Station not found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const data = await fetchNowPlaying(station);
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=10'
			}
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: 'Failed to fetch station data' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
