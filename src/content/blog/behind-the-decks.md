---
title: Behind the Decks — How We Programme a Station
description: A peek at how the Pulse team keeps six streams feeling fresh around the clock.
pubDate: 2026-08-10
author: Maya (Music Director)
tags: ['behind-the-scenes']
---

People often ask how we keep six stations sounding alive 24/7. The short answer: a
lot of listening, and a little maths.

## Our workflow

1. **Morning scan** — we review overnight requests and song history.
2. **Midday curation** — new releases get slotted next to the classics they rhyme with.
3. **Prime-time energy** — faster tempos when the commute hits.

We lean on the **song history** feed to spot what's resonating, then double down on
it. If a track keeps showing up in requests, it earns a permanent spot in rotation.

```text
if (requests_for(track) > threshold) {
  add_to_rotation(track);
}
```

At the end of the day, radio is about taste. The tools just help us hear you
better.
