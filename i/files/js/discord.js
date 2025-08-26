(() => {
  const USER_ID = '972907501127344179';
  const API = `https://api.lanyard.rest/v1/users/${USER_ID}`;

  const els = {
    status: document.getElementById('status'),
    activity: document.getElementById('activity'),
    playing: document.getElementById('playing'),
  };

  if (!els.status) return;

  const sets = (status) => {
    const map = {
      online: { label: 'online', cls: 'online', bracket: true },
      idle: { label: 'idle', cls: 'idle', bracket: true },
      dnd: { label: 'dnd', cls: 'dnd', bracket: true },
      offline: { label: 'offline', cls: 'offline', bracket: false },
    };
    const m = map[status] || map.offline;
    els.status.classList.remove('online', 'idle', 'dnd', 'offline');
    els.status.classList.add(m.cls);
    els.status.textContent = m.bracket ? `${m.label}` : m.label;
  };

  const seth = (el, hidden) => {
    if (!el) return;
    el.classList.toggle('hidden', hidden);
  };

  const update = async () => {
    try {
      const res = await fetch(API, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch presence');
      const json = await res.json();
      const data = json.data;

      sets(data.discord_status);

      let lisl = '';
      if (data.spotify) {
        const song = data.spotify.song;
        const artist = data.spotify.artist;
        lisl = `Listening to ${song}${artist ? ` by ${artist}` : ''} on Spotify`;
      } else if (Array.isArray(data.activities)) {
        const listening = data.activities.find((a) => a.type === 2);
        if (listening) {
          const track = listening.details || '';
          let artist = '';
          if (listening.state) {
            artist = listening.state.replace(/^by\s*/i, '');
          }
          const service = listening.name || 'music';
          let main = '';
          if (track) main = track;
          else if (listening.state && !/^by\s*/i.test(listening.state)) main = listening.state;

          if (main) lisl = `Listening to ${main}${artist ? ` by ${artist}` : ''} on ${service}`;
          else lisl = `Listening on ${service}`;
        }
      }
      if (els.activity) {
        if (lisl) {
          els.activity.textContent = lisl;
          seth(els.activity, false);
        } else {
          seth(els.activity, true);
        }
      }

      let plal = '';
      if (Array.isArray(data.activities)) {
        const playing = data.activities.find((a) => a.type === 0);
        if (playing) {
          const game = playing.name || playing.details || '';
          if (game) plal = `Playing ${game}`;
        }
      }
      if (els.playing) {
        if (plal) {
          els.playing.textContent = plal;
          seth(els.playing, false);
        } else {
          seth(els.playing, true);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  update();
  setInterval(update, 15000);
})();

