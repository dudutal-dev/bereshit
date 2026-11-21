// ערכת האיור של בראשית: לוחות בסגנון חריטת זהב על לפיס. כל לוח הוא SVG ב-360×270.
// DEFS מוזרק פעם אחת לעמוד; כל הלוחות משתמשים באותם מעברי צבע ומסננים.
export const W = 360, H = 270;

export const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <linearGradient id="k-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050813"/><stop offset=".55" stop-color="#101d47"/><stop offset="1" stop-color="#27356e"/></linearGradient>
  <linearGradient id="k-dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0c1c"/><stop offset=".6" stop-color="#3a2046"/><stop offset="1" stop-color="#8a4a34"/></linearGradient>
  <linearGradient id="k-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbe9b0"/><stop offset=".45" stop-color="#e2b955"/><stop offset="1" stop-color="#8f6420"/></linearGradient>
  <linearGradient id="k-bronze" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0b27a"/><stop offset=".5" stop-color="#b9683a"/><stop offset="1" stop-color="#5c2c16"/></linearGradient>
  <linearGradient id="k-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d2a5c"/><stop offset="1" stop-color="#0a1027"/></linearGradient>
  <linearGradient id="k-hill2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2550"/><stop offset="1" stop-color="#0c0b1e"/></linearGradient>
  <linearGradient id="k-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2140"/><stop offset="1" stop-color="#0b0a18"/></linearGradient>
  <linearGradient id="k-linen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efe3c4"/><stop offset="1" stop-color="#a89468"/></linearGradient>
  <linearGradient id="k-crimson" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c64552"/><stop offset="1" stop-color="#5e1722"/></linearGradient>
  <linearGradient id="k-water" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f6fc0"/><stop offset=".5" stop-color="#7fc0f0"/><stop offset="1" stop-color="#2f6fc0"/></linearGradient>
  <radialGradient id="k-sun"><stop offset="0" stop-color="#fff3c9"/><stop offset=".35" stop-color="#f3c764"/><stop offset="1" stop-color="#f3c764" stop-opacity="0"/></radialGradient>
  <radialGradient id="k-halo"><stop offset="0" stop-color="#f6d98a" stop-opacity=".55"/><stop offset="1" stop-color="#f6d98a" stop-opacity="0"/></radialGradient>
  <radialGradient id="k-fire"><stop offset="0" stop-color="#fff0b8"/><stop offset=".4" stop-color="#f29a3c"/><stop offset="1" stop-color="#f29a3c" stop-opacity="0"/></radialGradient>
  <filter id="k-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="k-glow2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <pattern id="k-scale" width="6" height="5" patternUnits="userSpaceOnUse"><path d="M0 0a3 3 0 0 0 6 0M-3 2.5a3 3 0 0 0 6 0M3 2.5a3 3 0 0 0 6 0" fill="none" stroke="#5c2c16" stroke-width=".7"/></pattern>
  <pattern id="k-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V4" stroke="#e2b955" stroke-width=".5" opacity=".35"/></pattern>
</defs></svg>`;

// PRNG קבוע, כדי שהכוכבים לא יקפצו בין רינדורים
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

export function stars(seed = 7, n = 46, maxY = 130) {
  const r = rng(seed); let s = "";
  for (let i = 0; i < n; i++) {
    const x = (r() * W).toFixed(1), y = (r() * maxY).toFixed(1), rad = (0.35 + r() * 0.9).toFixed(2), d = (2 + r() * 4).toFixed(1);
    s += `<circle cx="${x}" cy="${y}" r="${rad}" fill="#f6e7b8" opacity="${(0.35 + r() * 0.6).toFixed(2)}">${i % 4 === 0 ? `<animate attributeName="opacity" values=".2;1;.2" dur="${d}s" repeatCount="indefinite"/>` : ""}</circle>`;
  }
  return s;
}

export const sky = (g = "k-sky") => `<rect width="${W}" height="${H}" fill="url(#${g})"/>`;
export const sun = (x, y, r = 22) => `<circle cx="${x}" cy="${y}" r="${r * 3}" fill="url(#k-halo)"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#k-sun)"/><circle cx="${x}" cy="${y}" r="${r * 0.42}" fill="#fff3c9"/>`;

// מסגרת הלוח: קו זהב כפול ופינות
export const frame = () => `<g class="k-frame"><rect x="5" y="5" width="${W - 10}" height="${H - 10}" rx="6"/><rect x="9" y="9" width="${W - 18}" height="${H - 18}" rx="3" opacity=".45"/>
  ${[[9, 9, 1, 1], [W - 9, 9, -1, 1], [9, H - 9, 1, -1], [W - 9, H - 9, -1, -1]].map(([x, y, a, b]) => `<path d="M${x} ${y + 14 * b}V${y}H${x + 14 * a}M${x + 4 * a} ${y + 4 * b}l${5 * a} ${5 * b}"/>`).join("")}</g>`;

// תווית זהב עם קו מוביל
export function label(x, y, text, { to, anchor = "middle", cls = "" } = {}) {
  const lead = to ? `<path class="k-lead" d="M${x} ${y + 3}L${to[0]} ${to[1]}"/><circle class="k-dot" cx="${to[0]}" cy="${to[1]}" r="1.8"/>` : "";
  return `${lead}<text class="k-label ${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${text}</text>`;
}

export const torch = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0V14" stroke="#8f6420" stroke-width="1.6" stroke-linecap="round"/><circle r="9" cy="-3" fill="url(#k-fire)"><animate attributeName="r" values="8;11;7;10;8" dur="1.3s" repeatCount="indefinite"/></circle><path d="M0 1C-3-2-1-5 0-8 1-5 3-2 0 1z" fill="#fff0b8"><animate attributeName="d" dur=".7s" repeatCount="indefinite" values="M0 1C-3-2-1-5 0-8 1-5 3-2 0 1z;M0 1C-2-2-2-6 1-9 1-5 3-2 0 1z;M0 1C-3-2-1-5 0-8 1-5 3-2 0 1z"/></path></g>`;

export const tent = (x, y, s = 1, fill = "#2a3a7a") => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-11 0L0-13 11 0z" fill="${fill}" stroke="url(#k-gold)" stroke-width=".9" stroke-linejoin="round"/><path d="M0-13V-17M0 0L-2.5-5M0 0L2.5-5" stroke="url(#k-gold)" stroke-width=".8" fill="none"/></g>`;

/* דמות בסגנון תבליט. היחידה: גובה 100, כפות הרגליים ב-(0,0), פונה ימינה.
   opts: tunic (מילוי), arms [[מרפק,יד] קדמית, אחורית] בנקודות יחידה, extra (SVG נוסף בתוך הדמות),
   armour (שריון קשקשים, קובע, מצחות), crown, beard, legs [[x קדמית, x אחורית]] */
export function figure(x, y, h, face = 1, o = {}) {
  const s = h / 100, tunic = o.tunic || "url(#k-linen)";
  const [af, ab] = o.arms || [[[16, -58], [20, -44]], [[-14, -60], [-16, -46]]];
  const [lf, lb] = o.legs || [9, -8];
  const limb = (pts, w, c) => `<path d="M${pts.map((p) => p.join(" ")).join("L")}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const skin = o.skin || "#c98f62", greave = o.armour ? "url(#k-bronze)" : skin;
  return `<g transform="translate(${x} ${y}) scale(${s * face} ${s})" class="k-fig">
    ${limb([[-5, -44], [lb, -22], [lb - 1, 0]], 7, skin)}${o.armour ? limb([[lb, -22], [lb - 1, -2]], 8.5, greave) : ""}
    ${limb([[-11, -74], ab[0], ab[1]], 5.5, skin)}
    ${o.back || ""}
    ${limb([[5, -44], [lf, -22], [lf + 1, 0]], 7, skin)}${o.armour ? limb([[lf, -22], [lf + 1, -2]], 8.5, greave) : ""}
    <path d="M${lb - 5} 0h9M${lf - 2} 0h9" stroke="#3a2415" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M-13-79Q0-83 13-79L16-38Q0-34-16-38Z" fill="${tunic}" stroke="url(#k-gold)" stroke-width="1"/>
    ${o.armour ? `<path d="M-13-79Q0-83 13-79L15-46Q0-42-15-46Z" fill="url(#k-bronze)"/><path d="M-13-79Q0-83 13-79L15-46Q0-42-15-46Z" fill="url(#k-scale)" stroke="url(#k-gold)" stroke-width="1"/>` : ""}
    <path d="M-15-52Q0-48 15-52" fill="none" stroke="${o.belt || "#8f6420"}" stroke-width="2.6"/>
    <path d="M-3-80v-4h6v4" fill="${skin}"/>
    <circle cx="0" cy="-90" r="8.6" fill="${skin}" stroke="url(#k-gold)" stroke-width=".8"/>
    ${o.beard ? `<path d="M-1-86Q8-84 8-90 9-80 2-78-2-80-1-86z" fill="${o.hair || "#2a1a12"}"/>` : ""}
    ${o.armour ? `<path d="M-9.5-90A9.5 9.5 0 0 1 9.5-91L9.5-93-9.5-89z" fill="url(#k-bronze)" stroke="url(#k-gold)" stroke-width=".8"/><path d="M-9.5-91A9.6 10.5 0 0 1 9.5-92.500" fill="url(#k-bronze)" stroke="url(#k-gold)" stroke-width=".8"/><path d="M-7-99Q0-110 8-100" fill="none" stroke="url(#k-crimson)" stroke-width="3" stroke-linecap="round"/>`
      : `<path d="M-8.600-91A8.600 8.600 0 0 1 8-93Q2-96-4-93-7-91-8.600-88z" fill="${o.hair || "#2a1a12"}"/>`}
    ${o.crown ? `<path d="M-8-96l2-7 3 5 3-7 3 7 3-5 2 7z" fill="url(#k-gold)" stroke="#8f6420" stroke-width=".5"/>` : ""}
    <circle cx="4.500" cy="-91" r=".9" fill="#1a0f0a"/>
    ${limb([[11, -74], af[0], af[1]], 5.5, skin)}
    ${o.extra || ""}
  </g>`;
}

export const ground = (y, fill = "url(#k-ground)") => `<path d="M0 ${y}Q90 ${y - 6} 180 ${y - 2}T${W} ${y - 4}V${H}H0z" fill="${fill}"/><path d="M0 ${y}Q90 ${y - 6} 180 ${y - 2}T${W} ${y - 4}" fill="none" stroke="url(#k-gold)" stroke-width=".8" opacity=".6"/>`;
