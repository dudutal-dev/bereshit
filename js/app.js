// בראשית: בית, מפת הספרים, "אני", ומסך הסיפור. אין שלב בנייה; הכול מודולים רגילים.
import { t, L, ord, getLang, setLang, applyLang } from "./i18n.js";
import { STORIES, PLANNED, BOOKS, SECTIONS, REGISTERS } from "../content/index.js";
import { DEFS, W, H } from "../scenes/kit.js";

const app = document.getElementById("app");
const PKEY = "bereshit.progress";
const load = () => { try { return JSON.parse(localStorage.getItem(PKEY) || "{}"); } catch { return {}; } };
const save = (p) => { try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch { /* מצב פרטי */ } };
let progress = load();
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const story = (id) => STORIES.find((s) => s.id === id);
const book = (id) => BOOKS.find((b) => b.id === id);
const scenes = new Map(); // id → רשימת לוחות
async function plates(id) { if (!scenes.has(id)) scenes.set(id, (await import(`../scenes/${id}.js`)).default); return scenes.get(id); }
const plateSvg = (fn, cls = "") => `<svg class="plate ${cls}" viewBox="0 0 ${W} ${H}" role="img">${fn(L)}</svg>`;

const ICON = {
  stories: '<path d="M6 4h10a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H6z"/><path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2"/><path d="M9 8h6M9 11.500h6"/>',
  books: '<circle cx="6" cy="7" r="1.600"/><circle cx="17" cy="5" r="1.600"/><circle cx="12" cy="13" r="2"/><circle cx="19" cy="17" r="1.600"/><circle cx="6" cy="19" r="1.600"/><path d="M7.400 7.800l3.200 3.800M13.700 11.800l2.600-5.400M13.800 14l3.800 2.300M10.400 14.300L7.200 18"/>',
  me: '<circle cx="12" cy="8" r="3.500"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  play: '<path d="M8 5.500v13l11-6.500z" fill="currentColor" stroke="none"/>',
  check: '<path d="M5 12.500l4.500 4.500L19 7.500"/>',
};
const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;
const orn = '<svg class="orn" viewBox="0 0 120 12" aria-hidden="true"><path d="M0 6h46M74 6h46"/><path d="M60 1l5 5-5 5-5-5z"/><circle cx="50" cy="6" r="1.200"/><circle cx="70" cy="6" r="1.200"/></svg>';
const chips = (s) => s.registers.map((r) => `<span class="chip">${esc(L(REGISTERS[r]))}</span>`).join("");
const head = (i, title) => `<header class="sec-h"><span class="sec-n">${ord(i)}</span><h2>${esc(title)}</h2></header>`;

// ───── מעטפת: כותרת עליונה ופס הניווט ("המגילה") ─────
function shell(view, body) {
  const nav = [["", "stories", t("navStories")], ["books", "books", t("navBooks")], ["me", "me", t("navMe")]];
  app.className = "v-" + (view || "home");
  app.innerHTML = `
    <header class="top"><a class="brand" href="#/"><span class="brand-m">${esc(t("app"))}</span></a>
      <button class="lang" data-act="lang" aria-label="${esc(t("language"))}">${getLang() === "he" ? "EN" : "עב"}</button></header>
    <main>${body}</main>
    <nav class="rail" aria-label="main"><span class="rail-end"></span>
      ${nav.map(([h, ic, name]) => `<a href="#/${h}" class="${h === view ? "on" : ""}" ${h === view ? 'aria-current="page"' : ""}>${icon(ic)}<span>${esc(name)}</span></a>`).join("")}
      <span class="rail-end"></span></nav>`;
}

async function home() {
  const s = STORIES[0], pl = await plates(s.id), done = progress[s.id]?.done;
  const cards = [
    ...STORIES.map((x) => `<a class="card" href="#/s/${x.id}"><div class="card-art">${plateSvg(scenes.get(x.id)[1])}</div><div class="card-b"><small>${esc(L(x.ref))}</small><b>${esc(L(x.title))}</b>${progress[x.id]?.done ? `<span class="tag ok">${icon("check")}${esc(t("done"))}</span>` : ""}</div></a>`),
    ...PLANNED.map((x) => `<div class="card soon"><div class="card-art"><span class="seal">${esc(L(book(x.book)).slice(0, 1))}</span></div><div class="card-b"><small>${esc(L(x.ref))}</small><b>${esc(L(x.title))}</b><span class="tag">${esc(t("soon"))}</span></div></div>`),
  ].join("");
  shell("", `
    <section class="intro"><p class="eyebrow">${esc(t("tagline"))}</p></section>
    <a class="hero" href="#/s/${s.id}">
      <div class="hero-art">${plateSvg(pl[4])}</div>
      <div class="hero-b"><p class="eyebrow">${esc(t("featured"))} · ${esc(L(s.ref))}</p><h1>${esc(L(s.title))}</h1><p class="sub">${esc(L(s.sub))}</p>
        <div class="row">${chips(s)}<span class="chip ghost">${s.minutes} ${esc(t("minutes"))}</span></div>
        <span class="btn">${esc(done ? t("again") : t("open"))}</span></div>
    </a>
    ${orn}
    <section><header class="sec-h plain"><h2>${esc(t("scroll"))}</h2><p>${esc(t("scrollSub"))}</p></header>
      <div class="scroll">${cards}</div></section>`);
}

function books(sel) {
  const count = (id) => STORIES.filter((s) => s.book === id).length, planned = (id) => PLANNED.filter((s) => s.book === id).length;
  const cur = book(sel) || book("samuel1");
  const line = BOOKS.map((b) => `${b.x} ${b.y}`).join("L");
  const nodes = BOOKS.map((b) => {
    const n = count(b.id), p = planned(b.id), st = n ? "lit" : p ? "dawn" : "dim";
    return `<a href="#/books/${b.id}" class="star ${st} ${b.id === cur.id ? "sel" : ""}" aria-label="${esc(L(b))}"><circle class="halo" cx="${b.x}" cy="${b.y}" r="15"/><circle class="core" cx="${b.x}" cy="${b.y}" r="${n ? 5 : p ? 3.6 : 2.4}"/><text x="${b.x}" y="${b.y + 17}" text-anchor="middle">${esc(L(b))}</text></a>`;
  }).join("");
  const list = [
    ...STORIES.filter((s) => s.book === cur.id).map((x) => `<a class="rowi" href="#/s/${x.id}"><span><b>${esc(L(x.title))}</b><small>${esc(L(x.ref))}</small></span>${progress[x.id]?.done ? `<span class="tag ok">${icon("check")}${esc(t("done"))}</span>` : icon("play")}</a>`),
    ...PLANNED.filter((s) => s.book === cur.id).map((x) => `<div class="rowi soon"><span><b>${esc(L(x.title))}</b><small>${esc(L(x.ref))}</small></span><span class="tag">${esc(t("soon"))}</span></div>`),
  ].join("") || `<p class="muted">${esc(t("noStories"))}</p>`;
  shell("books", `
    <header class="sec-h plain"><h2>${esc(t("booksTitle"))}</h2><p>${esc(t("booksSub"))}</p></header>
    <div class="sky"><svg viewBox="0 0 360 300" class="skymap"><path class="thread" d="M${line}"/>${nodes}</svg>
      <div class="legend">${SECTIONS.map((s) => `<span>${esc(L(s.name))}</span>`).join("")}</div></div>
    <section class="panel"><p class="eyebrow">${esc(t("storiesIn"))}</p><h3>${esc(L(cur))}</h3>${list}</section>`);
}

function me() {
  const read = STORIES.filter((s) => progress[s.id]?.done).length;
  const ok = Object.values(progress).reduce((n, p) => n + (p.quiz ? Object.values(p.quiz).filter(Boolean).length : 0), 0);
  shell("me", `
    <header class="sec-h plain"><h2>${esc(t("meTitle"))}</h2><p>${esc(t("local"))}</p></header>
    <div class="stats"><div><b>${read}<i>/${STORIES.length}</i></b><span>${esc(t("meRead"))}</span></div><div><b>${ok}</b><span>${esc(t("meQuiz"))}</span></div></div>
    <section class="panel"><p class="eyebrow">${esc(t("settings"))}</p>
      <div class="set"><span>${esc(t("language"))}</span><div class="seg"><button data-act="setlang" data-v="he" class="${getLang() === "he" ? "on" : ""}">עברית</button><button data-act="setlang" data-v="en" class="${getLang() === "en" ? "on" : ""}">English</button></div></div>
      <button class="btn ghost wide" data-act="reset">${esc(t("reset"))}</button></section>`);
}

// ───── מסך הסיפור ─────
function question(q, key, sid) {
  const picked = progress[sid]?.pick?.[key];
  return `<div class="q" data-q="${key}"><h3>${esc(L(q.q))}</h3>
    ${q.o.map((o, i) => `<button class="opt ${picked == null ? "" : i === q.a ? "good" : i === picked ? "bad" : "off"}" data-act="pick" data-i="${i}" ${picked == null ? "" : "disabled"}><span class="opt-k">${ord(i)}</span><span>${esc(L(o))}</span></button>`).join("")}
    ${picked == null ? "" : `<p class="why"><b>${esc(picked === q.a ? t("right") : t("wrong"))}.</b> ${esc(L(q.why))}</p>`}</div>`;
}

async function storyView(id) {
  const s = story(id); if (!s) return (location.hash = "#/");
  const pl = await plates(id), p = progress[id] || {}, step = Math.min(p.step || 0, pl.length - 1), layer = p.layer || "pshat";
  const he = getLang() === "he";
  const secs = [["plates", t("plates")], ["retold", t("retold")], ["source", t("source")], ["layers", t("layers")], ["people", t("people")], ["quiz", t("quiz")]];
  app.className = "v-story";
  app.innerHTML = `
    <header class="top story-top"><a class="round" href="#/" aria-label="${esc(t("back"))}">${icon("back")}</a>
      <nav class="chapters" aria-label="sections">${secs.map(([k, n]) => `<a href="#/s/${id}/${k}" data-sec="${k}">${esc(n)}</a>`).join("")}</nav>
      <button class="lang" data-act="lang" aria-label="${esc(t("language"))}">${he ? "EN" : "עב"}</button></header>
    <main>
      <section class="s-hero"><div class="hero-art">${plateSvg(pl[4])}</div>
        <p class="eyebrow">${esc(L(s.ref))}</p><h1>${esc(L(s.title))}</h1><p class="sub">${esc(L(s.sub))}</p><div class="row center">${chips(s)}</div>
        <blockquote class="epi"><p ${he ? "" : 'lang="he" dir="rtl"'} class="heb">${esc(s.epigraph.he)}</p>${he ? "" : `<p>${esc(s.epigraph.en)}</p>`}<cite>${esc(L(s.epigraph.ref))}</cite></blockquote></section>

      <section class="film"><div class="film-b">${icon("play")}<span><b>${esc(t("film"))}</b><small>${esc(t("filmSoon"))}</small></span><span class="tag">${esc(t("soon"))}</span></div></section>

      <section class="panel">${head(0, t("before"))}${question(s.hook, "hook", id)}</section>

      <section id="plates" class="panel flush">${head(1, t("plates"))}
        <div class="stage">${pl.map((fn, i) => `<div class="slide ${i === step ? "on" : ""}" data-i="${i}">${plateSvg(fn)}</div>`).join("")}</div>
        <div class="beads" role="tablist">${pl.map((_, i) => `<button class="${i === step ? "on" : ""}" data-act="step" data-i="${i}" aria-label="${esc(t("plate"))} ${i + 1}"></button>`).join("")}</div>
        <div class="cap"><p class="eyebrow">${esc(t("plate"))} ${step + 1} ${esc(t("of"))} ${pl.length}</p><h3>${esc(L(s.plates[step].t))}</h3><p>${esc(L(s.plates[step].d))}</p></div>
        <div class="row split"><button class="btn ghost" data-act="step" data-i="${step - 1}" ${step === 0 ? "disabled" : ""}>${esc(t("prev"))}</button><button class="btn" data-act="step" data-i="${step + 1}" ${step === pl.length - 1 ? "disabled" : ""}>${esc(t("next"))}</button></div></section>

      <section id="retold" class="panel prose">${head(2, t("retold"))}${L(s.retold).map((x, i) => `<p class="${i === 0 ? "lead" : ""}">${esc(x)}</p>`).join("")}</section>

      <section id="source" class="panel">${head(3, t("source"))}
        ${s.verses.map((v) => `<figure class="verse"><p class="heb" lang="he" dir="rtl">${esc(v.he)}</p>${he ? "" : `<p class="tr">${esc(v.en)}</p>`}<figcaption>${esc(L(s.ref))} · ${esc(L(v.ref))}</figcaption></figure>`).join("")}</section>

      <section id="layers" class="panel">${head(4, t("layers"))}
        <div class="seg three">${s.layers.map((l) => `<button data-act="layer" data-v="${l.id}" class="${l.id === layer ? "on" : ""}"><b>${esc(L(l.name))}</b><small>${esc(L(l.gloss))}</small></button>`).join("")}</div>
        <p class="layer-b">${esc(L(s.layers.find((l) => l.id === layer).body))}</p>
        <div class="note"><p class="eyebrow">${esc(t("mistake"))}</p><h3>${esc(L(s.mistake.t))}</h3><p>${esc(L(s.mistake.d))}</p></div></section>

      <section id="people" class="panel">${head(5, t("people"))}
        <div class="people">${s.people.map((x) => `<div><span class="seal sm">${esc(L(x.name).slice(0, 1))}</span><span><b>${esc(L(x.name))}</b><small>${esc(L(x.role))}</small></span></div>`).join("")}</div>
        <div class="note"><p class="eyebrow">${esc(t("place"))}</p><h3>${esc(L(s.place.name))}</h3><p>${esc(L(s.place.d))}</p></div></section>

      <section id="quiz" class="panel">${head(6, t("quiz"))}${s.quiz.map((q, i) => question(q, "q" + i, id)).join("")}</section>

      <section class="take">${orn}<p class="eyebrow">${esc(t("take"))}</p><p class="take-l">${esc(L(s.takeaway))}</p>
        <button class="btn wide" data-act="finish" ${p.done ? "disabled" : ""}>${p.done ? icon("check") + esc(t("finished")) : esc(t("finish"))}</button></section>
    </main>`;
  watchChapters();
}

// סימון הפרק הנוכחי בפס הפרקים בזמן הגלילה
let io;
function watchChapters() {
  io?.disconnect();
  const links = [...app.querySelectorAll(".chapters a")];
  io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) {
      links.forEach((a) => a.classList.toggle("on", a.dataset.sec === e.target.id));
      links.find((a) => a.dataset.sec === e.target.id)?.scrollIntoView({ block: "nearest", inline: "center" });
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  app.querySelectorAll("main > section[id]").forEach((s) => io.observe(s));
}

// ───── ניתוב ─────
let lastView = "";
async function route() {
  const [, view, id, sub] = location.hash.split("/");
  const key = `${view || ""}/${id || ""}`, same = key === lastView, y = scrollY;
  if (view === "s") {
    if (!same || !sub) await storyView(id);
    if (sub) document.getElementById(sub)?.scrollIntoView({ behavior: same ? "smooth" : "auto", block: "start" });
    else if (!same) scrollTo(0, 0);
  } else {
    if (view === "books") books(id); else if (view === "me") me(); else await home();
    scrollTo(0, same ? y : 0);
  }
  lastView = key;
}
async function rerender() { const y = scrollY; lastView = ""; const h = location.hash.split("/").slice(0, 3).join("/"); if (h !== location.hash) history.replaceState(null, "", h || "#/"); await route(); scrollTo(0, y); }

app.addEventListener("click", async (e) => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act, sid = location.hash.split("/")[2], p = story(sid) ? (progress[sid] ||= {}) : {};
  if (act === "lang") setLang(getLang() === "he" ? "en" : "he");
  else if (act === "setlang") setLang(b.dataset.v);
  else if (act === "reset") { if (!confirm(t("resetQ"))) return; progress = {}; }
  else if (act === "step") p.step = +b.dataset.i;
  else if (act === "layer") p.layer = b.dataset.v;
  else if (act === "finish") p.done = true;
  else if (act === "pick") {
    const key = b.closest(".q").dataset.q, s = story(sid), q = key === "hook" ? s.hook : s.quiz[+key.slice(1)], i = +b.dataset.i;
    (p.pick ||= {})[key] = i; if (key !== "hook") (p.quiz ||= {})[key] = i === q.a;
  }
  save(progress); await rerender();
});

document.body.insertAdjacentHTML("afterbegin", DEFS);
applyLang();
addEventListener("hashchange", route);
route();
if ("serviceWorker" in navigator && !/^(localhost|127\.)/.test(location.hostname)) navigator.serviceWorker.register("sw.js").catch(() => {});
