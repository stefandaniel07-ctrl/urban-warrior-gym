(function () {
  const ALLOWED_HOSTS = [
    "stefandaniel07-ctrl.github.io",
    "urbanwarriorgym.ro",
    "www.urbanwarriorgym.ro",
    "localhost",
    "127.0.0.1",
    "",
  ];

  const KILL_ENABLED = false;

  const KILL_DATE = null;

  const REMOTE_STATUS_URL = null;

  const OWNER = {
    name: "Stoian Daniel-Stefan",
    email: "stefandaniel.07@gmail.com",
    site: "urbanwarriorgym.ro",
  };

  function buildLockdownHTML(reason, code) {
    return `
      <!doctype html><html lang="ro"><head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>${code || "ACCES RESTRICȚIONAT"} • Urban Warrior Gym</title>
      <style>
        *{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        body{background:#0a0a0a;color:#fff;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;overflow:hidden;position:relative}
        body::before{content:"";position:fixed;inset:0;background-image:
          linear-gradient(rgba(255,0,0,.05) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,0,0,.05) 1px,transparent 1px);
          background-size:40px 40px;pointer-events:none;animation:gridScan 8s linear infinite}
        @keyframes gridScan{0%{transform:translate(0,0)}100%{transform:translate(40px,40px)}}
        .lock-card{max-width:520px;text-align:center;position:relative;z-index:1;background:linear-gradient(145deg,#0e0e0e,#050505);border:1px solid rgba(255,0,0,.3);border-left:4px solid #ff0000;padding:50px 40px;box-shadow:0 30px 80px rgba(0,0,0,.8)}
        .lock-icon{font-size:72px;line-height:1;margin-bottom:18px;filter:drop-shadow(0 0 20px rgba(255,0,0,.5));animation:pulse 2s ease-in-out infinite}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.05);opacity:.85}}
        .lock-code{display:inline-block;color:#ff0000;font-size:11px;letter-spacing:5px;font-family:"Courier New",monospace;font-weight:700;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid rgba(255,0,0,.3);margin-bottom:14px}
        .lock-title{font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:#fff;margin-bottom:18px;line-height:1.1}
        .lock-msg{color:#bbb;font-size:14px;line-height:1.7;margin-bottom:30px}
        .lock-info{padding:18px;background:rgba(0,0,0,.4);border-left:3px solid #ff0000;text-align:left;font-size:12px;color:#888;line-height:1.8}
        .lock-info strong{color:#fff;font-weight:700}
        .lock-info a{color:#ff0000;text-decoration:none}
        .lock-info a:hover{text-decoration:underline}
        .lock-meta{margin-top:30px;padding-top:20px;border-top:1px solid #1a1a1a;font-size:10px;color:#444;font-family:"Courier New",monospace;letter-spacing:1px}
        .lock-meta strong{color:#666}
      </style></head><body>
      <div class="lock-card">
        <div class="lock-icon">⛔</div>
        <span class="lock-code">// ${code || "INTEGRITY VIOLATION"}</span>
        <h1 class="lock-title">Acces Restricționat</h1>
        <p class="lock-msg">${reason}</p>
        <div class="lock-info">
          <strong>Pentru reactivare contactează proprietarul:</strong><br>
          ${OWNER.name}<br>
          <a href="mailto:${OWNER.email}">${OWNER.email}</a><br>
          <span style="opacity:.6">Domain oficial: ${OWNER.site}</span>
        </div>
        <div class="lock-meta">© ${new Date().getFullYear()} ${OWNER.name} • Toate drepturile rezervate<br>Site-ul C.S. Urban Warrior Gym • Toate drepturile rezervate</div>
      </div>
      </body></html>
    `;
  }

  function lockdown(reason, code) {
    document.open();
    document.write(buildLockdownHTML(reason, code));
    document.close();
    if (window.stop) window.stop();
  }

  if (KILL_ENABLED) {
    lockdown(
      "Site-ul a fost dezactivat manual de proprietar. Contactează pentru reactivare.",
      "MANUAL KILL"
    );
    return;
  }

  if (KILL_DATE && new Date() > new Date(KILL_DATE)) {
    lockdown(
      `Licența a expirat la ${new Date(KILL_DATE).toLocaleDateString("ro-RO")}. Contactează proprietarul pentru reactivare.`,
      "LICENSE EXPIRED"
    );
    return;
  }

  const host = (location.hostname || "").toLowerCase();
  const protocol = location.protocol;

  // Permite orice mediu local / offline (CD, USB, LAN, intranet, dev server)
  function isLocalEnv(h, p) {
    if (p === "file:") return true;                            // dublu-click pe HTML
    if (h === "" || h === "localhost") return true;
    if (h === "[::1]" || h === "::1") return true;             // IPv6 loopback
    if (/^127\./.test(h)) return true;                          // 127.x.x.x loopback
    if (h === "0.0.0.0") return true;
    if (/^10\./.test(h)) return true;                           // private class A
    if (/^192\.168\./.test(h)) return true;                     // private class C
    if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(h)) return true;  // private class B
    if (/^169\.254\./.test(h)) return true;                     // link-local
    if (/\.local$/.test(h)) return true;                        // mDNS / Bonjour
    if (/\.lan$/.test(h)) return true;
    if (/\.localhost$/.test(h)) return true;
    return false;
  }

  const isOffline = isLocalEnv(host, protocol);
  const isAllowed = ALLOWED_HOSTS.indexOf(host) !== -1;

  if (!isOffline && !isAllowed) {
    lockdown(
      `Site-ul nu este autorizat să ruleze pe domeniul <strong style="color:#ff0000">"${host}"</strong>. ` +
        `Acest cod este licențiat exclusiv pentru ${OWNER.site}. ` +
        `Dacă ai clonat acest site fără permisiune, încalci dreptul de autor și termenii de licențiere.`,
      "UNAUTHORIZED DOMAIN"
    );
    return;
  }

  if (REMOTE_STATUS_URL) {
    try {
      fetch(REMOTE_STATUS_URL, { cache: "no-cache" })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.locked) {
            lockdown(
              data.message || "Site temporar dezactivat de proprietar prin remote config.",
              "REMOTE LOCKDOWN"
            );
          }
        })
        .catch(function () {});
    } catch (e) {}
  }

  try {
    const localKill = localStorage.getItem("uwg_force_lock");
    if (localKill === "true") {
      lockdown(
        "Site-ul a fost setat în modul TEST LOCKDOWN. Pentru a-l reactiva, șterge cheia 'uwg_force_lock' din localStorage.",
        "LOCAL TEST LOCK"
      );
      return;
    }
  } catch (e) {}

  console.log(
    "%c⚡ Urban Warrior Gym • integrity check OK",
    "color:#ff0000;font-weight:bold;font-size:11px;letter-spacing:2px"
  );
  console.log(
    "%c© " + OWNER.name + " • " + OWNER.email,
    "color:#666;font-size:10px"
  );
})();
