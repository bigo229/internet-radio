import type { APIRoute } from 'astro';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const prerender = false;

const DATA_DIR = fileURLToPath(new URL('../../../data', import.meta.url));
const DATA_FILE = path.join(DATA_DIR, 'requests.json');

interface RequestEntry {
	song: string;
	artist: string;
	name?: string;
	message?: string;
	at: string;
}

export const POST: APIRoute = async ({ request }) => {
	const body = (await request.json().catch(() => null)) as Partial<RequestEntry> | null;

	if (!body || !body.song?.trim() || !body.artist?.trim()) {
		return new Response(JSON.stringify({ error: 'Song title and artist are required.' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}

	const entry: RequestEntry = {
		song: body.song.trim(),
		artist: body.artist.trim(),
		name: body.name?.trim() || undefined,
		message: body.message?.trim() || undefined,
		at: new Date().toISOString(),
	};

	try {
		await mkdir(DATA_DIR, { recursive: true });
		let existing: RequestEntry[] = [];
		try {
			existing = JSON.parse(await readFile(DATA_FILE, 'utf-8'));
		} catch {
			/* no file yet */
		}
		existing.push(entry);
		await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), 'utf-8');
	} catch {
		return new Response(JSON.stringify({ error: 'Could not save your request.' }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { 'content-type': 'application/json' },
	});
};
