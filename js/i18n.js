/**
 * Urban Warrior Gym - i18n RO/EN
 * Light-weight translation system: data-i18n attributes + localStorage preference.
 *
 * Usage in HTML:
 *   <span data-i18n="nav.home">ACASĂ</span>
 *   <input data-i18n-attr="placeholder" data-i18n="form.name" placeholder="Nume" />
 *
 * The Romanian text in HTML is the source of truth fallback.
 * If a key is missing for a language, the original DOM text is preserved.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "uwg_lang";
  var DEFAULT_LANG = "ro";

  // ====== TRANSLATIONS ======
  var DICT = {
    // ---------- NAVIGATION ----------
    "nav.home":     { ro: "ACASĂ",         en: "HOME" },
    "nav.club":     { ro: "CLUBUL NOSTRU", en: "OUR CLUB" },
    "nav.schedule": { ro: "PROGRAM",       en: "SCHEDULE" },
    "nav.gallery":  { ro: "GALERIE",       en: "GALLERY" },
    "nav.plans":    { ro: "ABONAMENTE",    en: "MEMBERSHIPS" },
    "nav.contact":  { ro: "CONTACT",       en: "CONTACT" },
    "nav.cta":      { ro: "HAI LA SALĂ!",  en: "JOIN NOW!" },

    // Footer (lowercase versions)
    "nav.home.lower":     { ro: "Acasă",         en: "Home" },
    "nav.club.lower":     { ro: "Clubul Nostru", en: "Our Club" },
    "nav.schedule.lower": { ro: "Program",       en: "Schedule" },
    "nav.gallery.lower":  { ro: "Galerie",       en: "Gallery" },
    "nav.plans.lower":    { ro: "Abonamente",    en: "Memberships" },
    "nav.contact.lower":  { ro: "Contact",       en: "Contact" },

    // ---------- TITLES ----------
    "title.program": { ro: "Program Săptămânal - Urban Warrior Gym", en: "Weekly Schedule - Urban Warrior Gym" },
    "meta.program.description": {
      ro: "Programul săptămânal C.S. Urban Warrior Gym Brăila - Kickboxing pentru toate nivelurile, copii, performanță, circuit training.",
      en: "Weekly schedule for C.S. Urban Warrior Gym Brăila - Kickboxing for all levels, kids, performance, circuit training."
    },

    // ---------- SCHEDULE PAGE ----------
    "schedule.title":           { ro: "PROGRAM",            en: "WEEKLY" },
    "schedule.title.suffix":    { ro: "SĂPTĂMÂNAL",         en: "SCHEDULE" },
    "schedule.intro": {
      ro: "Toate clasele săptămânii. Alege antrenamentul potrivit nivelului și obiectivului tău.",
      en: "All classes of the week. Pick the training that fits your level and goal."
    },
    "schedule.legend.circuit":  { ro: "CIRCUIT TRAINING",   en: "CIRCUIT TRAINING" },
    "schedule.legend.initiere": { ro: "INIȚIERE",           en: "BEGINNERS" },
    "schedule.legend.avansati": { ro: "AVANSAȚI / PERFORMANȚĂ", en: "ADVANCED / PERFORMANCE" },
    "schedule.legend.kids":     { ro: "COPII",              en: "KIDS" },
    "schedule.note": {
      ro: "Programul se poate ajusta în funcție de competiții și sărbători. Pentru rezervări sau detalii suplimentare, contactează-ne direct.",
      en: "The schedule may change due to competitions and holidays. For reservations or additional details, contact us directly."
    },
    "schedule.cta":             { ro: "REZERVĂ O PROBĂ GRATUITĂ", en: "BOOK A FREE TRIAL" },
    "schedule.modal.cta":       { ro: "REZERVĂ ACUM",       en: "BOOK NOW" },
    "schedule.modal.day":       { ro: "Ziua:",              en: "Day:" },
    "schedule.modal.level":     { ro: "Nivel:",             en: "Level:" },
    "schedule.modal.desc":      { ro: "Detalii:",           en: "Details:" },

    // Day names (for modal)
    "day.monday":    { ro: "LUNI",     en: "MONDAY" },
    "day.tuesday":   { ro: "MARȚI",    en: "TUESDAY" },
    "day.wednesday": { ro: "MIERCURI", en: "WEDNESDAY" },
    "day.thursday":  { ro: "JOI",      en: "THURSDAY" },
    "day.friday":    { ro: "VINERI",   en: "FRIDAY" },
    "day.saturday":  { ro: "SÂMBĂTĂ",  en: "SATURDAY" },
    "day.sunday":    { ro: "DUMINICĂ", en: "SUNDAY" },
    "day.closed":    { ro: "Închis",   en: "Closed" },

    // ---------- HOME PAGE ----------
    "home.hero.welcome":  { ro: "Bine ai venit!",     en: "Welcome!" },
    "home.hero.title":    { ro: "URBAN WARRIOR GYM",  en: "URBAN WARRIOR GYM" },
    "home.hero.subtitle": { ro: "Sală K1 • Kickboxing • MMA • Box • Brăila", en: "K1 • Kickboxing • MMA • Boxing Gym • Brăila" },
    "home.hero.cta":      { ro: "ÎNCEPE ACUM",        en: "GET STARTED" },
    "home.hero.secondary":{ ro: "VEZI ABONAMENTE",    en: "VIEW MEMBERSHIPS" },
    "home.hero.description": {
      ro: "Urban Warrior Gym nu este doar o sală de antrenament, ci o comunitate dedicată pasionaților de sporturi de contact și performanță. Aici, fiecare antrenament înseamnă mai mult decât exercițiu fizic este o oportunitate de a evolua, de a depăși limitele și de a face parte dintr-un colectiv care te motivează să atingi noi performanțe.",
      en: "Urban Warrior Gym is more than a training facility - it's a community dedicated to combat sports enthusiasts and high performance. Every session here is more than exercise: it's an opportunity to evolve, push your limits, and become part of a team that motivates you to reach new heights."
    },

    // ---------- CONTACT / FOOTER ----------
    "footer.location":   { ro: "LOCALIZARE",     en: "LOCATION" },
    "footer.menu":       { ro: "MENIU",          en: "MENU" },
    "footer.hours":      { ro: "Luni - Vineri: 15:45 - 20:00", en: "Monday - Friday: 15:45 - 20:00" },
    "footer.map.hint":   { ro: "Apasă pentru harta interactivă", en: "Tap for interactive map" },
    "footer.credit":     { ro: "Site creat și administrat de", en: "Site built and managed by" },

    // ---------- COMMON CTAs ----------
    "cta.book.trial":    { ro: "REZERVĂ O PROBĂ", en: "BOOK A TRIAL" },
    "cta.see.more":      { ro: "VEZI MAI MULT",   en: "SEE MORE" },
    "cta.contact.us":    { ro: "CONTACTEAZĂ-NE",  en: "CONTACT US" },
    "cta.call.us":       { ro: "SUNĂ-NE",         en: "CALL US" }
  };

  // ====== STATE ======
  function getLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ro" || saved === "en") return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (lang !== "ro" && lang !== "en") return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  // ====== APPLY ======
  function t(key) {
    var entry = DICT[key];
    var lang = getLang();
    if (!entry) return null;
    return entry[lang] || entry[DEFAULT_LANG] || null;
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    // Update all elements with data-i18n
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = DICT[key];
      if (!entry) return;
      var translation = entry[lang];
      if (!translation && lang !== DEFAULT_LANG) {
        translation = entry[DEFAULT_LANG];
      }
      if (!translation) return;

      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, translation);
      } else if (el.tagName === "TITLE") {
        document.title = translation;
      } else {
        el.textContent = translation;
      }
    });

    // Update toggle button label
    var toggleLabels = document.querySelectorAll("[data-lang-current]");
    toggleLabels.forEach(function (el) {
      el.textContent = (lang === "ro") ? "EN" : "RO";
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  // ====== INIT ======
  function init() {
    applyLang(getLang());

    // Wire up toggle buttons
    var toggles = document.querySelectorAll("[data-lang-toggle]");
    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = getLang();
        setLang(current === "ro" ? "en" : "ro");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose API for inline scripts
  window.UWG_I18N = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: function () { applyLang(getLang()); }
  };
})();
