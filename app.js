document.addEventListener('DOMContentLoaded', () => {
    // --- VPS Configurations ---
    const AZURACAST_BASE_URL = "https://yourvps.com"; // Replace with your VPS address
    const STATION_SHORTCODE = "mystation";                 // Replace with your station identifier
    
    const player = document.getElementById('radio-player');
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const visualizer = document.getElementById('visualizer');
    
    // AzuraCast Targeting DOM Nodes
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const albumArt = document.getElementById('album-art');
    const artPlaceholder = document.getElementById('art-placeholder');
    const listenerCount = document.getElementById('listener-count');

    let isPlaying = false;
    const coreStreamUrl = player.src;

    // 1. Fetch live song data from your VPS
    async function updateNowPlaying() {
    try {
        const response = await fetch(`${AZURACAST_BASE_URL}/api/nowplaying/${STATION_SHORTCODE}`);
        if (!response.ok) throw new Error("API Offline");
        
        const data = await response.json();
        
        // 1. Process Core Now Playing (Existing logic)
        const np = data.now_playing.song;
        if(isPlaying) {
            trackTitle.textContent = np.title || "Live Broadcast";
        } else {
            trackTitle.textContent = "Stream Paused";
        }
        trackArtist.textContent = np.artist || "Various Artists";
        listenerCount.textContent = `${data.listeners.total} Tuned In`;

        if (np.art) {
            albumArt.src = np.art;
            albumArt.classList.remove('hidden');
            artPlaceholder.classList.add('hidden');
        } else {
            albumArt.classList.add('hidden');
            artPlaceholder.classList.remove('hidden');
        }

        // 2. Process Recently Played Tracks History
        const recentTracksList = document.getElementById('recent-tracks-list');
        const history = data.song_history || []; // Grab the history array from AzuraCast
        
        if (history.length === 0) {
            recentTracksList.innerHTML = `<p class="text-xs text-slate-500 italic">No recent tracks found.</p>`;
            return;
        }

        // Clear placeholder and build the timeline list
        recentTracksList.innerHTML = '';
        
        // Take the top 3 items from the track history
        history.slice(0, 3).forEach(item => {
            // Convert AzuraCast unix timestamp to localized clean timestamp
            const playedTime = new Date(item.played_at * 1000).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });

            const trackCard = document.createElement('div');
            trackCard.className = "flex justify-between items-center bg-slate-900/40 p-3 rounded-xl border border-slate-800/50 text-sm hover:border-slate-800 transition duration-300";
            
            trackCard.innerHTML = `
                <div class="flex items-center space-x-3 truncate">
                    <img src="${item.song.art || ''}" class="w-10 h-10 rounded-md object-cover flex-shrink-0 bg-slate-800 ${!item.song.art ? 'hidden' : ''}" alt="Art">
                    <div class="truncate pr-2">
                        <p class="font-medium text-slate-200 truncate">${item.song.title}</p>
                        <p class="text-xs text-slate-400 truncate">${item.song.artist}</p>
                    </div>
                </div>
                <span class="text-xs text-slate-500 font-mono flex-shrink-0">${playedTime}</span>
            `;
            
            recentTracksList.appendChild(trackCard);
        });

    } catch (error) {
        console.error("Error communicating with AzuraCast VPS API:", error);
        if (!isPlaying) trackTitle.textContent = "Station Offline";
    }
}

// --- AzuraCast Song Request Engine Integration ---
const AZURACAST_BASE_URL = "https://yourvps.com"; // Keep consistent with your top configuration
const STATION_SHORTCODE = "mystation";                 // Keep consistent with your top configuration

const openRequestBtn = document.getElementById('open-request-btn');
const closeRequestBtn = document.getElementById('close-request-btn');
const requestModal = document.getElementById('request-modal');
const songSearchInput = document.getElementById('song-search-input');
const searchResultsContainer = document.getElementById('search-results-container');

// 1. Modal View Visual Toggles
openRequestBtn.addEventListener('click', () => {
    requestModal.classList.remove('hidden');
    songSearchInput.focus();
});

closeRequestBtn.addEventListener('click', () => {
    requestModal.classList.add('hidden');
    songSearchInput.value = '';
    searchResultsContainer.innerHTML = `<p class="text-slate-500 text-center py-8">Type a keyword above to search our automation catalog.</p>`;
});

// Close modal if user clicks background overlay mask
requestModal.addEventListener('click', (e) => {
    if (e.target === requestModal) closeRequestBtn.click();
});

// 2. Debounced Live Input API Search Listening
let searchTimeout;
songSearchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    
    if (query.length < 2) {
        searchResultsContainer.innerHTML = `<p class="text-slate-500 text-center py-8">Type at least 2 characters to search...</p>`;
        return;
    }

    searchResultsContainer.innerHTML = `<p class="text-slate-400 text-center py-8"><i class="fa-solid fa-spinner animate-spin mr-2"></i> Querying server library...</p>`;

    // Wait 400ms after user stops typing to protect VPS from request flooding
    searchTimeout = setTimeout(() => {
        executeCatalogSearch(query);
    }, 4000); // 400ms typing delay filter
});

// 3. Query AzuraCast Database Endpoint
async function executeCatalogSearch(searchString) {
    try {
        const response = await fetch(`${AZURACAST_BASE_URL}/api/station/${STATION_SHORTCODE}/requests?search=${encodeURIComponent(searchString)}`);
        if (!response.ok) throw new Error("Search offline");
        
        const tracks = await response.json();
        renderSearchResults(tracks);
    } catch (err) {
        console.error("Search error:", err);
        searchResultsContainer.innerHTML = `<p class="text-rose-400 text-center py-8">Could not connect to music database.</p>`;
    }
}

// 4. Render Available Search Target Selection List
function renderSearchResults(tracks) {
    searchResultsContainer.innerHTML = '';
    
    if (!tracks || tracks.length === 0) {
        searchResultsContainer.innerHTML = `<p class="text-slate-500 text-center py-8">No matching songs found in rotation.</p>`;
        return;
    }

    tracks.forEach(track => {
        const row = document.createElement('div');
        row.className = "flex justify-between items-center bg-slate-950/40 border border-slate-800/60 p-3 rounded-xl gap-4 hover:border-slate-700 transition";
        
        row.innerHTML = `
            <div class="flex items-center space-x-3 truncate">
                <img src="${track.song.art || ''}" class="w-9 h-9 rounded object-cover flex-shrink-0 bg-slate-800 ${!track.song.art ? 'hidden' : ''}" alt="">
                <div class="truncate">
                    <p class="font-medium text-slate-100 truncate">${track.song.title}</p>
                    <p class="text-xs text-slate-400 truncate">${track.song.artist}</p>
                </div>
            </div>
            <button class="request-submit-btn bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition flex-shrink-0" data-request-url="${track.request_url}">
                Request
            </button>
        `;
        searchResultsContainer.appendChild(row);
    });

    // Attach immediate click events to newly injected dynamic request buttons
    document.querySelectorAll('.request-submit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            submitSongRequest(this);
        });
    });
}

// 5. Fire Final Request API Target Submission to VPS
async function submitSongRequest(buttonElement) {
    const targetUrl = buttonElement.getAttribute('data-request-url');
    
    // Optimistic UI loading state update
    buttonElement.disabled = true;
    buttonElement.className = "bg-slate-800 text-slate-500 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-not-allowed";
    buttonElement.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i>`;

    try {
        // AzuraCast handles permissions internally; request submissions require a POST execution
        const response = await fetch(targetUrl, { method: 'POST' });
        const result = await response.json();

        if (response.ok && result.success) {
            buttonElement.className = "bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-semibold";
            buttonElement.innerHTML = `<i class="fa-solid fa-check"></i> Queued`;
        } else {
            // Catches playlist configuration cooling down rate blocks
            throw new Error(result.message || "Request limitation restriction hit.");
        }
    } catch (err) {
        console.error("Submission failed:", err);
        buttonElement.className = "bg-rose-500/20 text-rose-400 px-3 py-1.5 rounded-lg text-xs font-semibold";
        buttonElement.innerHTML = `Failed`;
        alert(err.message || "This track cannot be requested right now (it might have played too recently).");
    }
}


    // 2. Continuous Metadata Loop (Polls server every 15 seconds)
    updateNowPlaying();
    setInterval(updateNowPlaying, 15000);

    // 3. Audio Stream Management with Cache Protection
    playBtn.addEventListener('click', () => {
        if (!isPlaying) {
            player.src = `${coreStreamUrl}?cb=${Date.now()}`; // Prevent browser asset freeze
            player.play()
                .then(() => {
                    isPlaying = true;
                    playIcon.className = "fa-solid fa-pause text-2xl";
                    visualizer.classList.replace('hidden', 'flex');
                    updateNowPlaying();
                })
                .catch(err => console.error("Playback block:", err));
        } else {
            player.pause();
            player.src = ""; // Instantly drops network socket pipeline data consumption
            isPlaying = false;
            playIcon.className = "fa-solid fa-play text-2xl ml-1";
            visualizer.classList.replace('flex', 'hidden');
            updateNowPlaying();
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        player.volume = e.target.value;
    });
});
