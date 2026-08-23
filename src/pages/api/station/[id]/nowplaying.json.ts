import type { APIRoute } from 'astro';
import { STATIONS } from '../../../../config';
import { fetchNowPlaying } from '../../../../lib/azuracast';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	if (!station) {
		return new Response(JSON.stringify({ error: 'Station not found' }), {
			status: 404,
			headers: { 'content-type': 'application/json' },
		});
	}
	const np = await fetchNowPlaying(station);
	return new Response(JSON.stringify(np), {
		status: 200,
		headers: { 'content-type': 'application/json' },
	});
};
