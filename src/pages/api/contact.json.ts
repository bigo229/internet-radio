import type { APIRoute } from 'astro';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const prerender = false;

const DATA_DIR = fileURLToPath(new URL('../../../data', import.meta.url));
const DATA_FILE = path.join(DATA_DIR, 'contacts.json');

interface ContactEntry {
	name: string;
	email: string;
	subject?: string;
	message: string;
	at: string;
}

export const POST: APIRoute = async ({ request }) => {
	const body = (await request.json().catch(() => null)) as Partial<ContactEntry> | null;

	if (!body || !body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
		return new Response(JSON.stringify({ error: 'Name, email and message are required.' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}

	const entry: ContactEntry = {
		name: body.name.trim(),
		email: body.email.trim(),
		subject: body.subject?.trim() || undefined,
		message: body.message.trim(),
		at: new Date().toISOString(),
	};

	try {
		await mkdir(DATA_DIR, { recursive: true });
		let existing: ContactEntry[] = [];
		try {
			existing = JSON.parse(await readFile(DATA_FILE, 'utf-8'));
		} catch {
			/* no file yet */
		}
		existing.push(entry);
		await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), 'utf-8');
	} catch {
		return new Response(JSON.stringify({ error: 'Could not send your message.' }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { 'content-type': 'application/json' },
	});
};
