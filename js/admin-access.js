(function () {
  const KEYS = {
    visits: "uwg_visits",
    messages: "uwg_messages",
    plans: "uwg_plan_clicks",
    activity: "uwg_activity",
    edits: "uwg_content_edits",
  };

  const path = (location.pathname.split("/").pop() || "index.html");
  const today = new Date().toISOString().slice(0, 10);
  try {
    const visits = JSON.parse(localStorage.getItem(KEYS.visits) || "{}");
    if (!visits[path]) visits[path] = { total: 0, byDay: {} };
    visits[path].total = (visits[path].total || 0) + 1;
    visits[path].byDay[today] = (visits[path].byDay[today] || 0) + 1;
    localStorage.setItem(KEYS.visits, JSON.stringify(visits));
  } catch (e) {}

  function bindLogoClicks() {
    const logos = document.querySelectorAll(".logo-img, .footer-logo");
    let clickCount = 0;
    let resetTimer;
    logos.forEach(function (logo) {
      logo.addEventListener("click", function (e) {
        clickCount++;
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () { clickCount = 0; }, 1500);
        if (clickCount >= 7) {
          clickCount = 0;
          e.preventDefault();
          window.location.href = "admin.html";
        }
      });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindLogoClicks);
  } else {
    bindLogoClicks();
  }

  function applyContentEdits() {
    try {
      const edits = JSON.parse(localStorage.getItem(KEYS.edits) || "{}");
      if (!edits || !Object.keys(edits).length) return;

      document.querySelectorAll('[href^="tel:"]').forEach(function (a) {
        const href = a.getAttribute("href");
        if (href.includes("0748145453") && edits.tel1) {
          a.setAttribute("href", "tel:" + edits.tel1.replace(/\s/g, ""));
          if (a.querySelector("strong")) a.querySelector("strong").textContent = edits.tel1;
          else if (!a.querySelector("svg") && a.textContent.includes("0748")) a.textContent = edits.tel1;
        }
        if (href.includes("0766621622") && edits.tel2) {
          a.setAttribute("href", "tel:" + edits.tel2.replace(/\s/g, ""));
          if (!a.querySelector("svg") && a.textContent.includes("0766")) a.textContent = edits.tel2;
        }
      });

      document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
        if (edits.email && a.getAttribute("href").includes("contact@urbanwarriorgym.ro")) {
          a.setAttribute("href", "mailto:" + edits.email);
          if (a.querySelector("strong")) a.querySelector("strong").textContent = edits.email;
        }
      });
    } catch (e) {}
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyContentEdits);
  } else {
    applyContentEdits();
  }

  window.UWG_ADMIN = {
    saveMessage: function (data) {
      try {
        const list = JSON.parse(localStorage.getItem(KEYS.messages) || "[]");
        list.unshift({
          ts: Date.now(),
          name: ((data.prenume || "") + " " + (data.nume || "")).trim(),
          phone: data.telefon || "",
          email: data.email || "",
          message: data.mesaj || "",
          read: false,
        });
        if (list.length > 200) list.length = 200;
        localStorage.setItem(KEYS.messages, JSON.stringify(list));
      } catch (e) {}
    },
    savePlanClick: function (planKey, planName, price) {
      try {
        const list = JSON.parse(localStorage.getItem(KEYS.plans) || "[]");
        list.unshift({
          ts: Date.now(),
          plan: planName || planKey,
          price: price || "?",
          referer: path,
        });
        if (list.length > 200) list.length = 200;
        localStorage.setItem(KEYS.plans, JSON.stringify(list));
      } catch (e) {}
    },
  };
})();
