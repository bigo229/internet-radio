import type { APIRoute } from 'astro';
import { STATIONS } from '../../../../config';
import { searchRequests, submitRequest } from '../../../../lib/azuracast';

export const prerender = false;

export const GET: APIRoute = async ({ params, url }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	if (!station) {
		return new Response(JSON.stringify({ error: 'Station not found' }), {
			status: 404,
			headers: { 'content-type': 'application/json' },
		});
	}
	const q = url.searchParams.get('q') ?? '';
	const results = await searchRequests(station, q);
	return new Response(JSON.stringify({ results }), {
		status: 200,
		headers: { 'content-type': 'application/json' },
	});
};

export const POST: APIRoute = async ({ params, request }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	if (!station) {
		return new Response(JSON.stringify({ error: 'Station not found' }), {
			status: 404,
			headers: { 'content-type': 'application/json' },
		});
	}
	const body = (await request.json().catch(() => null)) as { request_id?: string } | null;
	if (!body?.request_id) {
		return new Response(JSON.stringify({ error: 'Missing request_id.' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}
	const result = await submitRequest(station, body.request_id);
	return new Response(JSON.stringify(result), {
		status: result.ok ? 200 : 400,
		headers: { 'content-type': 'application/json' },
	});
};
