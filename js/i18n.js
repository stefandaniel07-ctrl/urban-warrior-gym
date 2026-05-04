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
    "cta.call.us":       { ro: "SUNĂ-NE",         en: "CALL US" },
    "cta.contact":       { ro: "CONTACTEAZĂ",     en: "CONTACT" },
    "cta.schedule":      { ro: "PROGRAMEAZĂ",     en: "BOOK NOW" },

    // ---------- HOME PAGE: ABOUT SECTION ----------
    "home.about.label":      { ro: "DESPRE URBAN WARRIOR GYM", en: "ABOUT URBAN WARRIOR GYM" },
    "home.about.title":      { ro: "PERFORMANȚĂ ÎN", en: "PERFORMANCE IN" },
    "home.about.description": {
      ro: "Kickboxing-ul este o disciplină complexă ce îmbină tehnici din karate, Muay Thai și boxul clasic. Fie că este practicat pentru autoapărare, condiție fizică sau competiție, acest sport contribuie la dezvoltarea forței, disciplinei și încrederii în sine.",
      en: "Kickboxing is a complex discipline that combines techniques from karate, Muay Thai, and classical boxing. Whether practiced for self-defense, physical conditioning, or competition, this sport develops strength, discipline, and self-confidence."
    },
    "home.about.cta":        { ro: "DESCOPERĂ", en: "DISCOVER" },

    // Home features
    "home.feature.training.title":  { ro: "Antrenamente", en: "Training" },
    "home.feature.training.desc":   { ro: "Programe personalizate pentru fiecare nivel.", en: "Personalized programs for every level." },
    "home.feature.prices.title":    { ro: "Prețuri avantajoase", en: "Great Prices" },
    "home.feature.prices.desc":     { ro: "Abonamente accesibile și flexibile.", en: "Affordable and flexible memberships." },
    "home.feature.coaches.title":   { ro: "Antrenori calificați", en: "Qualified Coaches" },
    "home.feature.coaches.desc":    { ro: "Certificați cu ani de experiență în ring.", en: "Certified with years of experience in the ring." },
    "home.feature.groups.title":    { ro: "Grupe Kickboxing", en: "Kickboxing Groups" },
    "home.feature.groups.desc":     { ro: "Pregătire fizică pentru toate vârstele.", en: "Physical training for all ages." },

    // Home benefits
    "home.benefit.diverse.title":  { ro: "DIVERSE <br /> ACTIVITĂȚI SPORTIVE", en: "DIVERSE <br /> SPORTS ACTIVITIES" },
    "home.benefit.diverse.desc": {
      ro: "Centrul de antrenament oferă o gamă largă de oportunități sportive, inclusiv arte marțiale, cursuri de fitness și antrenamente funcționale.",
      en: "Our training center offers a wide range of sports opportunities, including martial arts, fitness classes, and functional training."
    },
    "home.benefit.coaches.title": { ro: "ANTRENORI <br /> EXPERIMENTAȚI", en: "EXPERIENCED <br /> COACHES" },
    "home.benefit.coaches.desc": {
      ro: "Antrenorii noștri au o vastă experiență și expertiză în arte marțiale și fitness pentru a asigura un suport de înaltă calitate și siguranță.",
      en: "Our coaches have extensive experience and expertise in martial arts and fitness to provide top-quality support and safety."
    },
    "home.benefit.inclusive.title": { ro: "MEDIU <br /> INCLUZIV", en: "INCLUSIVE <br /> ENVIRONMENT" },
    "home.benefit.inclusive.desc": {
      ro: "Creăm un mediu deschis pentru femei, copii, adolescenți și seniori, oferind cursuri special adaptate nevoilor fiecărei categorii.",
      en: "We create an open environment for women, children, teenagers, and seniors, offering classes specifically tailored to each group."
    },

    // Home services
    "home.services.title":              { ro: "SERVICIILE NOASTRE", en: "OUR SERVICES" },
    "home.service.martial.title":       { ro: "ARTE MARȚIALE", en: "MARTIAL ARTS" },
    "home.service.martial.subtitle":    { ro: "Descoperă-ți puterea", en: "Discover your power" },
    "home.service.martial.box":         { ro: "Box", en: "Boxing" },
    "home.service.fitness.title":       { ro: "FITNESS", en: "FITNESS" },
    "home.service.fitness.subtitle":    { ro: "Depășește-ți limitele", en: "Push your limits" },
    "home.service.fitness.personal":    { ro: "Antrenament Personal", en: "Personal Training" },

    // ---------- CLUB PAGE ----------
    "club.heading.who":         { ro: "CINE SUNTEM", en: "WHO WE ARE" },
    "club.vision.title":        { ro: "Viziunea Noastră", en: "Our Vision" },
    "club.vision.desc": {
      ro: "Construim o comunitate puternică și motivată, unde fiecare antrenament devine un pas spre progres. Credem în dezvoltare continuă, disciplină și pasiune pentru sport.",
      en: "We build a strong, motivated community where every training session becomes a step toward progress. We believe in continuous development, discipline, and passion for sport."
    },
    "club.mission.title":       { ro: "Misiunea Noastră", en: "Our Mission" },
    "club.mission.desc": {
      ro: "Oferim antrenamente dinamice, susținute de antrenori dedicați, pentru a ajuta fiecare membru să-și atingă obiectivele fizice și mentale, depășindu-și limitele.",
      en: "We offer dynamic training sessions led by dedicated coaches to help every member reach their physical and mental goals, pushing past their limits."
    },
    "club.awards.title":        { ro: "Premiile Noastre", en: "Our Awards" },
    "club.awards.desc": {
      ro: "Munca și dedicarea noastră au fost recunoscute prin multiple premii și aprecieri. Ne mândrim cu rezultatele obținute și cu impactul asupra comunității noastre.",
      en: "Our work and dedication have been recognized through multiple awards and accolades. We take pride in our results and our impact on the community."
    },
    "club.team.title":          { ro: "ECHIPA DE", en: "OUR" },
    "club.team.title.red":      { ro: "ANTRENORI", en: "COACHES" },
    "club.staff.dan.role":      { ro: "Fondator & Antrenor Coordonator", en: "Founder & Head Coach" },
    "club.staff.dan.bio": {
      ro: "Cu o experiență vastă în domeniul sporturilor de contact, Dan Căpățînă este fondatorul și antrenorul coordonator al clubului sportiv Urban Warrior Gym, proiect lansat în 2014. Absolvent al cursului de instructori în arte marțiale, a consolidat disciplina și rigoarea școlii Naționale de Antrenori. Este liderul unei comunități unite prin disciplină, respect și dorința de a evolua.",
      en: "With vast experience in combat sports, Dan Căpățînă is the founder and head coach of Urban Warrior Gym, a project launched in 2014. Graduate of the Martial Arts Instructor Course, he consolidated the discipline and rigor of the National School of Coaches. He leads a community united by discipline, respect, and the drive to evolve."
    },
    "club.staff.daniel.role":   { ro: "Instructor Urban Warrior Gym", en: "Urban Warrior Gym Instructor" },
    "club.staff.daniel.bio": {
      ro: "Instructor de arte marțiale în cadrul Ministerului Afacerilor Interne din anul 2013 și membru esențial al echipei. Absolvent al cursului de instructori, Daniel și-a dedicat cariera formării și perfecționării sportivilor. Prin experiența sa vastă și disciplina riguroasă, el reprezintă un model de profesionalism și devotament pentru toți membrii clubului.",
      en: "Martial arts instructor with the Ministry of Internal Affairs since 2013 and a key team member. A graduate of the instructor course, Daniel has dedicated his career to training and developing athletes. Through his vast experience and rigorous discipline, he represents a model of professionalism and dedication for all club members."
    },
    "club.quote.text": {
      ro: "\"Urban Warrior Gym nu este doar un club sportiv – este visul meu devenit realitate. Am înființat acest proiect din dorința de a construi un loc unde oamenii, în special copiii și tinerii, să se poată dezvolta nu doar fizic, ci și mental și emoțional.\"",
      en: "\"Urban Warrior Gym is not just a sports club – it's my dream come true. I founded this project out of a desire to build a place where people, especially children and young adults, can develop not only physically but also mentally and emotionally.\""
    },
    "club.quote.author.role":   { ro: "Fondator Urban Warrior Gym", en: "Founder of Urban Warrior Gym" },
    "club.results.title":       { ro: "PALMARES", en: "TRACK RECORD" },
    "club.results.title.red":   { ro: "OFICIAL", en: "OFFICIAL" },
    "club.results.subtitle":    { ro: "Rezultate confirmate în competiții naționale și internaționale.", en: "Confirmed results in national and international competitions." },
    "club.badge.pro":           { ro: "PROFESIONIST", en: "PROFESSIONAL" },
    "club.fight.win.ko":        { ro: "VICTORIE (KO)", en: "WIN (KO)" },
    "club.stat.competitions":   { ro: "Competiții", en: "Competitions" },

    // Medal labels
    "medal.gold":               { ro: "Aur",     en: "Gold" },
    "medal.silver":             { ro: "Argint",  en: "Silver" },
    "medal.bronze":             { ro: "Bronz",   en: "Bronze" },
    "medal.gold.label":         { ro: "AUR:",    en: "GOLD:" },
    "medal.silver.label":       { ro: "ARGINT:", en: "SILVER:" },
    "medal.bronze.label":       { ro: "BRONZ:",  en: "BRONZE:" },

    // ---------- GALLERY PAGE ----------
    "gallery.title":            { ro: "GALERIE",   en: "PHOTO" },
    "gallery.title.red":        { ro: "FOTO",      en: "GALLERY" },
    "gallery.subtitle":         { ro: "Imagini din timpul antrenamentelor și competițiilor.", en: "Images from training sessions and competitions." },
    "gallery.value.honor":      { ro: "ONOARE",     en: "HONOR" },
    "gallery.value.discipline": { ro: "DISCIPLINĂ", en: "DISCIPLINE" },
    "gallery.value.respect":    { ro: "RESPECT",    en: "RESPECT" },
    "gallery.value.victory":    { ro: "VICTORIE",   en: "VICTORY" },
    "gallery.value.focus":      { ro: "FOCUS",      en: "FOCUS" },

    // ---------- PLANS / ABONAMENTE ----------
    "plans.title":          { ro: "ABONAMENTE", en: "MEMBERSHIPS" },
    "plans.title.suffix":   { ro: "PLANURI",    en: "PLANS" },
    "plans.subtitle": {
      ro: "Alege ce ți se potrivește sau lasă sistemul nostru inteligent să-ți recomande planul perfect pe baza obiectivelor tale.",
      en: "Pick what suits you, or let our smart system recommend the perfect plan based on your goals."
    },
    "plans.all.title":      { ro: "TOATE",     en: "ALL" },
    "plans.all.title.red":  { ro: "PLANURILE", en: "PLANS" },
    "plans.extras.title":     { ro: "PACHETE",   en: "SPECIAL" },
    "plans.extras.title.red": { ro: "SPECIALE",  en: "PACKAGES" },
    "plans.per.month":      { ro: "PE LUNĂ",   en: "PER MONTH" },

    // Wizard
    "wizard.tag":           { ro: "SISTEM EXPERT", en: "EXPERT SYSTEM" },
    "wizard.title":         { ro: "GĂSEȘTE-ȚI PLANUL PERFECT", en: "FIND YOUR PERFECT PLAN" },
    "wizard.sub": {
      ro: "Răspunde la 6 întrebări scurte. Algoritmul calculează scorul de potrivire pe 7 planuri și îți recomandă optim.",
      en: "Answer 6 short questions. The algorithm calculates a match score across 7 plans and recommends the best fit."
    },
    "wizard.q.age":            { ro: "Care este vârsta ta?", en: "What is your age?" },
    "wizard.q.age.hint":       { ro: "Ne ajută să recomandăm grupa potrivită și intensitatea antrenamentului.", en: "Helps us recommend the right group and training intensity." },
    "wizard.q.goal":           { ro: "Care este obiectivul tău principal?", en: "What is your main goal?" },
    "wizard.q.goal.hint":      { ro: "Alege ce te aduce la sală — definește planul ideal.", en: "Pick what brings you to the gym — defines the ideal plan." },
    "wizard.q.experience":     { ro: "Ce nivel de experiență ai?", en: "What's your experience level?" },
    "wizard.q.experience.hint":{ ro: "Sincer — fiecare începe de undeva.", en: "Be honest — everyone starts somewhere." },
    "wizard.q.frequency":      { ro: "Cât de des poți să vii?", en: "How often can you come?" },
    "wizard.q.frequency.hint": { ro: "Fii realist — consistența bate intensitatea.", en: "Be realistic — consistency beats intensity." },
    "wizard.q.budget":         { ro: "Care este bugetul tău lunar?", en: "What is your monthly budget?" },
    "wizard.q.budget.hint":    { ro: "Recomandăm doar planuri în limita bugetului tău.", en: "We only recommend plans within your budget." },
    "wizard.q.preference":     { ro: "Cum preferi să te antrenezi?", en: "How do you prefer to train?" },
    "wizard.q.preference.hint":{ ro: "Ultima întrebare — apoi vezi rezultatul.", en: "Last question — then see your result." },
    "wizard.result.tag":       { ro: "RECOMANDAREA TA", en: "YOUR RECOMMENDATION" },

    // Plans
    "plan.junior.tag":      { ro: "COPII 6-14 ANI", en: "KIDS 6-14 YEARS" },
    "plan.junior.desc":     { ro: "Pentru micii războinici care încep drumul.", en: "For little warriors starting their journey." },
    "plan.starter.tag":     { ro: "PLAN DE BAZĂ", en: "BASIC PLAN" },
    "plan.starter.desc":    { ro: "Acces nelimitat la toate grupele de adulți.", en: "Unlimited access to all adult groups." },
    "plan.standard.tag":    { ro: "CEL MAI ALES", en: "MOST POPULAR" },
    "plan.standard.desc":   { ro: "Echilibru perfect între grup și privat.", en: "Perfect balance between group and private sessions." },
    "plan.pro.tag":         { ro: "COMPETIȚIE", en: "COMPETITION" },
    "plan.pro.desc":        { ro: "Pentru sportivii care vor să câștige.", en: "For athletes who want to win." },

    // FAQ
    "faq.title":      { ro: "ÎNTREBĂRI",  en: "FREQUENTLY" },
    "faq.title.red":  { ro: "FRECVENTE",  en: "ASKED" },
    "faq.q1": { ro: "Pot încerca o ședință gratuit?", en: "Can I try a session for free?" },
    "faq.a1": {
      ro: "Da. Prima ședință este gratuită pentru toți membrii noi — trebuie doar să suni înainte la 0748145453 sau 0766621622 ca să rezervi locul.",
      en: "Yes. The first session is free for all new members — just call in advance at 0748145453 or 0766621622 to reserve your spot."
    },
    "faq.q2": { ro: "Ce echipament îmi trebuie la început?", en: "What equipment do I need to start?" },
    "faq.a2": {
      ro: "Pentru prima lună, echipament sportiv normal este suficient. Mănușile, banderolele și protecția se cumpără ulterior — îți recomandăm noi modelul potrivit nivelului tău.",
      en: "For the first month, regular sports gear is enough. Gloves, hand wraps, and protective equipment are purchased later — we'll recommend the right model for your level."
    },
    "faq.q3": { ro: "Cum se plătește abonamentul?", en: "How do I pay for the membership?" },
    "faq.a3": {
      ro: "Plata se face direct la sală — cash sau card. Pentru abonamentele anuale acceptăm și transfer bancar (cu factură). Nu avem comisioane ascunse.",
      en: "Payment is made at the gym — cash or card. For annual memberships, we also accept bank transfer (with invoice). No hidden fees."
    },
    "faq.q4": { ro: "Pot îngheța abonamentul dacă plec o perioadă?", en: "Can I freeze my membership if I'm away?" },
    "faq.a4": {
      ro: "Membrii cu abonament Anual au dreptul la 30 de zile de înghețare pe an. Pentru abonamentele lunare, nu se aplică reportare — dar poți cumpăra direct un pachet de Private dacă mergi neregulat.",
      en: "Annual members are entitled to 30 days of freeze per year. For monthly memberships, no rollover applies — but you can buy a Private package if you train irregularly."
    },
    "faq.q5": { ro: "De ce vârstă pot începe copiii?", en: "What age can children start?" },
    "faq.a5": {
      ro: "Acceptăm copii de la 6 ani în grupa JUNIOR. Antrenorii sunt specializați în lucru cu copii, iar accentul cade pe disciplină, coordonare și încredere în sine — nu pe contact dur.",
      en: "We accept children from age 6 in the JUNIOR group. Coaches are specialized in working with children, with emphasis on discipline, coordination, and confidence — not heavy contact."
    },
    "faq.q6": { ro: "Pachetele de Private expiră?", en: "Do Private packages expire?" },
    "faq.a6": {
      ro: "Pachetul de 8 are valabilitate 3 luni, cel de 12 are 4 luni. După expirare, ședințele neefectuate nu se mai pot folosi — așa că alege un pachet pe care chiar îl poți consuma.",
      en: "The 8-session package is valid for 3 months, the 12-session for 4 months. After expiry, unused sessions cannot be used — so choose a package you can actually consume."
    },

    // ---------- CONTACT PAGE ----------
    "contact.hero.title":      { ro: "CONTACT", en: "CONTACT" },
    "contact.hero.subtitle":   { ro: "Suntem la un mesaj distanță. Răspundem rapid la orice întrebare despre abonamente, antrenori sau programe.", en: "We're just a message away. We answer fast on any question about memberships, coaches, or programs." },
    "contact.kicker":          { ro: "// LEGĂTURA DIRECTĂ", en: "// DIRECT LINE" },
    "contact.heading":         { ro: "Ne poți contacta", en: "You can contact us" },
    "contact.heading.red":     { ro: "oricând.", en: "anytime." },
    "contact.sub": {
      ro: "Fie că vrei să afli prețuri, să rezervi un antrenament gratuit sau pur și simplu să întrebi ceva — suntem aici pentru tine. Răspundem de luni până vineri, în programul de antrenament.",
      en: "Whether you want to know pricing, book a free training session, or just ask something — we're here for you. We respond Monday through Friday during training hours."
    },
    "contact.label.phone":     { ro: "Telefon", en: "Phone" },
    "contact.note.phone":      { ro: "Apel direct sau SMS", en: "Direct call or SMS" },
    "contact.label.email":     { ro: "E-Mail", en: "E-Mail" },
    "contact.note.email":      { ro: "Răspundem în maxim 24h", en: "We reply within 24h" },
    "contact.label.hours":     { ro: "Program", en: "Hours" },
    "contact.hours.days":      { ro: "Luni - Vineri", en: "Monday - Friday" },
    "contact.note.closed":     { ro: "Sâmbăta închis &nbsp;·&nbsp; Duminică închis", en: "Saturday closed &nbsp;·&nbsp; Sunday closed" },
    "contact.label.address":   { ro: "Adresa", en: "Address" },
    "contact.note.address":    { ro: "Acces direct, parcare disponibilă", en: "Direct access, parking available" },
    "contact.follow":          { ro: "URMĂREȘTE-NE", en: "FOLLOW US" },
    "contact.form.tag":        { ro: "// FORMULAR", en: "// FORM" },
    "contact.form.title":      { ro: "Trimite-ne un mesaj", en: "Send us a message" },
    "contact.form.firstname":  { ro: "Prenume *", en: "First Name *" },
    "contact.form.firstname.error": { ro: "Te rugăm să completezi prenumele.", en: "Please enter your first name." },
    "contact.form.lastname":   { ro: "Nume *", en: "Last Name *" },
    "contact.form.lastname.error": { ro: "Te rugăm să completezi numele.", en: "Please enter your last name." },
    "contact.form.phone":      { ro: "Număr de telefon *", en: "Phone number *" },
    "contact.form.phone.error":{ ro: "Numărul nu pare corect.", en: "The number doesn't look right." },
    "contact.form.email":      { ro: "E-Mail *", en: "E-Mail *" },
    "contact.form.email.error":{ ro: "Adresa de email nu e validă.", en: "Email address is not valid." },
    "contact.form.message":    { ro: "Mesajul tău *", en: "Your message *" },
    "contact.form.message.error": { ro: "Te rugăm să scrii un mesaj.", en: "Please write a message." },
    "contact.form.gdpr":       { ro: "Sunt de acord ca datele mele să fie folosite pentru procesarea solicitării. Nu trimitem spam.", en: "I agree to my data being used to process this request. We don't send spam." },
    "contact.form.submit":     { ro: "Trimite mesajul", en: "Send message" },
    "contact.form.success.title": { ro: "Mesaj pregătit ✓", en: "Message ready ✓" },
    "contact.form.success.text": {
      ro: "Se va deschide aplicația ta de email cu mesajul precompletat către contact@urbanwarriorgym.ro. Trimite-l de acolo și îți răspundem rapid.",
      en: "Your email app will open with the message pre-filled to contact@urbanwarriorgym.ro. Send it from there and we'll reply quickly."
    },
    "contact.map.title":       { ro: "UNDE NE", en: "WHERE TO" },
    "contact.map.title.red":   { ro: "GĂSEȘTI", en: "FIND US" },
    "contact.map.label":       { ro: "// LOCAȚIA NOASTRĂ", en: "// OUR LOCATION" },
    "contact.cta.title":       { ro: "Vrei să ne cunoști în persoană?", en: "Want to meet us in person?" },
    "contact.cta.subtitle":    { ro: "Rezervă o ședință de probă — gratuită pentru toți noii membri.", en: "Book a trial session — free for all new members." },
    "contact.cta.button":      { ro: "VEZI ABONAMENTE", en: "VIEW MEMBERSHIPS" }
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
        // Folosim innerHTML ca sa pastram <br>, <strong>, etc. din traduceri
        // Traducerile vin din dictionarul hardcoded, nu din user input -> safe.
        el.innerHTML = translation;
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
