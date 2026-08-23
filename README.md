# Pulse Radio

An internet radio site built with [Astro](https://astro.build). It showcases **six AzuraCast streams**, each with live now-playing, song history, and song requests, plus a persistent audio player with a station switcher and a light/dark theme toggle.

## Commands

All commands run from the project root:

| Command             | Action                                      |
| ------------------- | ------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start the dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the production build locally        |

## Configure your stations

All stations live in **`src/config.ts`** in the `STATIONS` array. Each entry looks like:

```ts
{
  id: 'chill',                                   // URL slug, e.g. /stations/chill
  name: 'Pulse Chill',
  genre: 'Lo-Fi & Ambient',
  description: 'Slow beats and soft textures to drift away to.',
  azuraBase: 'https://your-azuracast.example.com', // AzuraCast base URL
  azuraStation: 'chill',                          // station shortcode / id used in API URLs
  streamUrl: 'https://your-azuracast.example.com/listen/chill/radio.mp3',
  apiKey: 'YOUR_AZURACAST_API_KEY',               // needed for song requests
  accent: '#8b5cf6',                              // theme accent colour (hex)
}
```

To go live, fill in for each station:

- **`azuraBase`** — your AzuraCast instance URL (e.g. `https://radio.example.com`).
- **`azuraStation`** — the station shortcode (or numeric id) shown in your AzuraCast dashboard; it is used in the API paths `/api/nowplaying/{shortcode}` and `/api/station/{shortcode}/requests`.
- **`streamUrl`** — the direct audio stream URL used by the `<audio>` player.
- **`apiKey`** — an AzuraCast API key (with request permission) so visitors can search and submit song requests. Without it, the request form runs in demo mode.

Until these are set, the site falls back to demo data so the UI stays fully functional.

### How it works

- `src/lib/azuracast.ts` — fetches/normalises now-playing and proxies the song-request API (server-side, avoiding CORS).
- `src/pages/api/station/[id]/nowplaying.json.ts` and `requests.json.ts` — per-station API routes.
- `src/components/RequestForm.astro` — search + submit UI, reused on each station page and the `/request` picker.
- `src/scripts/radio.ts` — the shared player store (play/pause/volume + per-station now-playing polling).

## Project structure

```text
src/
├── components/      # Navbar, Footer, PlayerBar, NowPlaying, SongHistory, StationCard, RequestForm
├── layouts/         # Layout.astro
├── lib/             # azuracast.ts (API helpers), tracks.ts (demo data)
├── pages/
│   ├── index.astro          # home: station grid + featured now playing
│   ├── stations/             # /stations index + /stations/[id] per-station page
│   ├── request.astro         # station picker -> request a song
│   ├── contact.astro         # contact form
│   └── api/station/[id]/      # nowplaying.json.ts, requests.json.ts
├── scripts/         # radio.ts (player store)
├── styles/          # global.css (design tokens + light/dark themes)
└── config.ts        # SITE + STATIONS
```
# internet-radio
