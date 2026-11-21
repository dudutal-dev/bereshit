// דוד וגוליית: שישה לוחות. כל לוח מקבל L (בוחר שפה) ומחזיר את תוכן ה-SVG.
import { W, H, sky, stars, sun, frame, label, torch, tent, figure, ground } from "./kit.js";

const SPEAR = (x, top, bottom) => `<path d="M${x} ${top}V${bottom}" stroke="#8f6420" stroke-width="2.200" stroke-linecap="round"/><path d="M${x} ${top - 13}l3.500 13h-7z" fill="#cfd6e4" stroke="url(#k-gold)" stroke-width=".6"/>`;
const SWORD = (x, y, rot, len = 40) => `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M-1.800 0V-${len}L0-${len + 7} 1.800-${len}V0z" fill="#dfe6f2" stroke="url(#k-gold)" stroke-width=".6"/><path d="M-6 0H6M0 0V8" stroke="url(#k-gold)" stroke-width="2.600" stroke-linecap="round"/></g>`;
const DAVID = { tunic: "url(#k-linen)", belt: "#a8323a", hair: "#6b3a1c" };
const GOLIATH = { armour: true, beard: true, tunic: "url(#k-crimson)" };

const valley = (L) => `
  ${sky()}${stars(11, 50, 120)}${sun(180, 150, 20)}
  <path d="M0 150Q60 128 120 146T240 140 360 150V270H0z" fill="#16204a" opacity=".8"/>
  <path d="M0 270V118Q48 92 98 114 140 134 162 196L176 270z" fill="url(#k-hill2)" stroke="url(#k-gold)" stroke-width=".9"/>
  <path d="M360 270V118Q312 92 262 114 220 134 198 196L184 270z" fill="url(#k-hill)" stroke="url(#k-gold)" stroke-width=".9"/>
  <path d="M0 270V118Q48 92 98 114 140 134 162 196L176 270z" fill="url(#k-hatch)" opacity=".5"/>
  <path d="M360 270V118Q312 92 262 114 220 134 198 196L184 270z" fill="url(#k-hatch)" opacity=".5"/>
  <path d="M181 172Q174 200 182 226T178 270" fill="none" stroke="url(#k-water)" stroke-width="5" stroke-linecap="round" opacity=".85"/>
  <path class="k-flow" d="M181 172Q174 200 182 226T178 270"/>
  ${[[22, 120], [50, 109], [78, 113], [102, 126], [36, 148], [70, 146]].map(([x, y]) => tent(x, y, 1, "#6a1e2c")).join("")}
  ${[[338, 120], [310, 109], [282, 113], [258, 126], [324, 148], [290, 146]].map(([x, y]) => tent(x, y, 1, "#2a3a7a")).join("")}
  ${torch(118, 138, 0.8)}${torch(242, 138, 0.8)}${torch(14, 150, 0.7)}${torch(346, 150, 0.7)}
  ${figure(148, 200, 34, 1, { ...GOLIATH, extra: SPEAR(22, -118, 0) })}
  <circle cx="148" cy="184" r="24" fill="url(#k-halo)" opacity=".5"/>
  ${[226, 236, 246, 256].map((x, i) => `<path d="M${x} ${168 - i * 7}v-15" stroke="url(#k-gold)" stroke-width="1"/><circle cx="${x}" cy="${172 - i * 7}" r="2.600" fill="#c98f62"/>`).join("")}
  ${label(60, 82, L({ he: "מחנה פלשתים", en: "Philistine camp" }))}
  ${label(300, 82, L({ he: "מחנה ישראל", en: "Camp of Israel" }))}
  ${label(180, 258, L({ he: "עמק האלה", en: "Valley of Elah" }), { cls: "k-big" })}
  ${label(118, 222, L({ he: "איש הביניים", en: "The champion" }), { to: [146, 204], cls: "k-sm" })}
  ${frame()}`;

const giant = (L) => {
  const gy = 238, gh = 180, cub = gh / 6.5, rx = 34;
  return `
  ${sky("k-dusk")}${stars(3, 26, 90)}${sun(300, 196, 26)}
  ${ground(gy)}
  <circle cx="176" cy="130" r="120" fill="url(#k-halo)" opacity=".35"/>
  <g class="k-rule"><path d="M${rx} ${gy}V${gy - gh}"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${rx - 5} ${gy - i * cub}h10"/>`).join("")}<path d="M${rx - 5} ${gy - gh}h10"/>
    ${[1, 2, 3, 4, 5, 6].map((i) => `<text class="k-num" x="${rx - 12}" y="${gy - (i - 0.5) * cub + 3}" text-anchor="middle">${L({ he: "אבגדהו"[i - 1], en: String(i) })}</text>`).join("")}</g>
  ${figure(232, gy, 108, -1, { tunic: "#3b4a8c", extra: `<ellipse cx="22" cy="-52" rx="13" ry="30" fill="url(#k-bronze)" stroke="url(#k-gold)" stroke-width="1.200"/><circle cx="22" cy="-52" r="4" fill="url(#k-gold)"/>`, arms: [[[16, -60], [20, -50]], [[-14, -60], [-12, -46]]] })}
  ${figure(160, gy, gh, 1, { ...GOLIATH, arms: [[[18, -62], [26, -54]], [[-15, -60], [-17, -44]]], extra: SPEAR(27, -112, 0), back: SWORD(-14, -48, 200, 30) })}
  ${label(92, 52, L({ he: "כובע נחושת", en: "Bronze helmet" }), { to: [150, 70] })}
  ${label(88, 118, L({ he: "שריון קשקשים", en: "Coat of mail" }), { to: [143, 124] })}
  ${label(92, 204, L({ he: "מצחות נחושת", en: "Bronze greaves" }), { to: [146, 216] })}
  ${label(268, 30, L({ he: "חנית כמנור אורגים", en: "Spear like a weaver's beam" }), { to: [209, 22], cls: "k-sm" })}
  ${label(292, 112, L({ he: "נושא הצינה", en: "Shield-bearer" }), { to: [240, 150] })}
  ${label(66, 26, L({ he: "שש אמות וזרת", en: "6 cubits and a span" }), { cls: "k-sm" })}
  ${frame()}`;
};

const armour = (L) => `
  <rect width="${W}" height="${H}" fill="#120a14"/>
  <path d="M180 14L-20 150V270H380V150z" fill="url(#k-crimson)" opacity=".5"/>
  ${[40, 90, 135, 180, 225, 270, 320].map((x) => `<path d="M180 14L${x} 270" stroke="url(#k-gold)" stroke-width=".7" opacity=".35"/>`).join("")}
  <path d="M180 14V40" stroke="url(#k-gold)" stroke-width="2"/>
  <circle cx="200" cy="150" r="110" fill="url(#k-halo)" opacity=".4"/>
  ${ground(234, "#1c1220")}
  ${torch(52, 150, 1.300)}${torch(318, 138, 1.300)}
  <!-- מעמד עם המדים -->
  <g><path d="M200 234V130M178 148H222M188 234h24" stroke="#8f6420" stroke-width="3" stroke-linecap="round"/>
    <path d="M180 146Q200 140 220 146L224 196Q200 204 176 196z" fill="url(#k-bronze)"/><path d="M180 146Q200 140 220 146L224 196Q200 204 176 196z" fill="url(#k-scale)" stroke="url(#k-gold)" stroke-width="1.200"/>
    <path d="M187 132A13 14 0 0 1 213 132z" fill="url(#k-bronze)" stroke="url(#k-gold)" stroke-width="1.200"/><path d="M185 132h30" stroke="url(#k-gold)" stroke-width="2.400" stroke-linecap="round"/><path d="M192 118Q200 106 210 117" fill="none" stroke="url(#k-crimson)" stroke-width="3.500" stroke-linecap="round"/>
    ${SWORD(236, 232, 14, 58)}</g>
  ${figure(290, 234, 132, -1, { tunic: "url(#k-crimson)", crown: true, beard: true, belt: "#e2b955", arms: [[[20, -62], [32, -58]], [[-14, -60], [-15, -46]]] })}
  ${figure(112, 234, 100, 1, { ...DAVID, arms: [[[17, -62], [26, -66]], [[-16, -62], [-24, -66]]] })}
  ${label(112, 120, L({ he: "דוד", en: "David" }), { cls: "k-big" })}
  ${label(290, 88, L({ he: "שאול", en: "Saul" }), { cls: "k-big" })}
  ${label(204, 96, L({ he: "מדי המלך", en: "The king's armour" }))}
  ${label(112, 258, L({ he: "״לא נסיתי״", en: "'I have not tried them'" }), { cls: "k-sm" })}
  ${frame()}`;

const stones = (L) => {
  const st = [[150, 214], [182, 196], [212, 222], [240, 200], [270, 226]];
  return `
  ${sky()}${stars(21, 40, 110)}
  <path d="M0 150Q80 120 170 138T360 96V270H0z" fill="url(#k-hill)" stroke="url(#k-gold)" stroke-width=".9"/>
  <path d="M0 150Q80 120 170 138T360 96V270H0z" fill="url(#k-hatch)" opacity=".5"/>
  <circle cx="318" cy="78" r="34" fill="url(#k-halo)"/>
  ${figure(318, 104, 44, -1, { ...GOLIATH, extra: SPEAR(22, -116, 0) })}
  <path d="M110 270Q130 206 210 198T360 178V270z" fill="#0d1838"/>
  <path d="M96 248Q150 196 226 196T366 170" fill="none" stroke="url(#k-water)" stroke-width="34" stroke-linecap="round" opacity=".5"/>
  <path class="k-flow" d="M100 236Q150 190 226 190T366 162"/><path class="k-flow" d="M112 258Q160 210 232 208T366 184" style="animation-delay:-.8s"/>
  ${st.map(([x, y], i) => `<g><circle cx="${x}" cy="${y}" r="13" fill="url(#k-halo)"><animate attributeName="opacity" values=".4;1;.4" dur="2.400s" begin="${i * 0.4}s" repeatCount="indefinite"/></circle><ellipse cx="${x}" cy="${y}" rx="7.500" ry="5.200" fill="#d9cfb8" stroke="url(#k-gold)" stroke-width="1"/><path d="M${x - 4} ${y - 1.500}q3-2.500 6-1" stroke="#fff" stroke-width=".8" fill="none" opacity=".7"/><text class="k-num" x="${x}" y="${y - 12}" text-anchor="middle">${L({ he: "אבגדה"[i], en: String(i + 1) })}</text></g>`).join("")}
  ${figure(76, 236, 112, 1, { ...DAVID, arms: [[[18, -60], [27, -50]], [[-14, -60], [-18, -47]]],
    extra: `<path d="M-18-47L-21 0M-18-47V-96" stroke="#8f6420" stroke-width="2.600" stroke-linecap="round"/><path d="M-4-56l9 2 1 12-11 1z" fill="#8a5a34" stroke="url(#k-gold)" stroke-width=".7"/><path d="M-10-78L3-55" stroke="#8a5a34" stroke-width="1.400"/><path d="M27-50q5 10 0 20q-5-10 0-20" fill="none" stroke="#d9cfb8" stroke-width="1.200"/>` })}
  <!-- תקריב: הקלע -->
  <g transform="translate(58 58)"><circle r="40" fill="#0a1027" stroke="url(#k-gold)" stroke-width="1.200"/><circle r="36" fill="none" stroke="url(#k-gold)" stroke-width=".5" opacity=".5"/>
    <path d="M-24-20Q-8 4 0 12M24-20Q8 4 0 12" fill="none" stroke="#d9cfb8" stroke-width="1.600"/><path d="M-9 8Q0 20 9 8Q0 14-9 8z" fill="#8a5a34" stroke="url(#k-gold)" stroke-width=".8"/><ellipse cx="0" cy="9" rx="4.500" ry="3.200" fill="#d9cfb8"/>
    <circle cx="-24" cy="-20" r="2" fill="url(#k-gold)"/><circle cx="24" cy="-20" r="2" fill="url(#k-gold)"/></g>
  ${label(58, 112, L({ he: "קלע", en: "Sling" }))}
  ${label(212, 252, L({ he: "חמישה חלוקי אבנים", en: "Five smooth stones" }), { cls: "k-big" })}
  ${label(26, 150, L({ he: "ילקוט", en: "Bag" }), { to: [72, 178], cls: "k-sm" })}
  ${frame()}`;
};

const oneStone = (L) => {
  const gy = 236, fx = 276, fy = 72, path = `M104 132Q190 40 ${fx} ${fy}`;
  return `
  ${sky("k-dusk")}${stars(5, 30, 100)}${sun(60, 190, 24)}
  <path d="M0 190Q100 170 200 186T360 176V270H0z" fill="#241a3c"/>
  ${ground(gy)}
  ${figure(292, gy, 178, -1, { ...GOLIATH, arms: [[[20, -60], [30, -52]], [[-15, -60], [-17, -44]]], extra: SPEAR(31, -112, 0), back: SWORD(-14, -48, 200, 30) })}
  ${figure(76, gy, 98, 1, { ...DAVID, legs: [17, -17], arms: [[[20, -84], [26, -104]], [[-17, -62], [-24, -52]]] })}
  <!-- הקלע המסתובב -->
  <g transform="translate(101 134)"><circle r="20" fill="none" stroke="url(#k-gold)" stroke-width=".8" stroke-dasharray="2 4" opacity=".7"/>
    <g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur=".7s" repeatCount="indefinite"/><path d="M0 0L20 0" stroke="#d9cfb8" stroke-width="1.200"/><circle cx="20" r="3" fill="#d9cfb8" filter="url(#k-glow)"/></g></g>
  <path d="${path}" fill="none" stroke="url(#k-gold)" stroke-width="1.200" stroke-dasharray="1 6" stroke-linecap="round"/>
  <circle r="4" fill="#fff3c9" filter="url(#k-glow2)"><animateMotion dur="2.200s" repeatCount="indefinite" path="${path}" keyPoints="0;1;1" keyTimes="0;.45;1" calcMode="linear"/></circle>
  <circle cx="${fx}" cy="${fy}" r="6" fill="none" stroke="#fff3c9" stroke-width="1.500"><animate attributeName="r" values="3;3;22" keyTimes="0;.45;1" dur="2.200s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" keyTimes="0;.45;1" dur="2.200s" repeatCount="indefinite"/></circle>
  <circle cx="${fx}" cy="${fy}" r="9" fill="none" stroke="#c64552" stroke-width="1.400" stroke-dasharray="3 2"/>
  ${label(196, 30, L({ he: "המצח: בלי כיסוי", en: "The forehead: left bare" }), { to: [fx - 8, fy - 5] })}
  ${label(76, 258, L({ he: "דוד רץ אל המערכה", en: "David runs to the line" }), { cls: "k-sm" })}
  ${frame()}`;
};

const rout = (L) => {
  const gy = 220;
  const gate = (x, y, name) => `<g transform="translate(${x} ${y})"><path d="M-16 0V-22h6v-5h5v5h10v-5h5v5h6V0z" fill="#2a2550" stroke="url(#k-gold)" stroke-width=".9"/><path d="M-5 0V-9a5 5 0 0 1 10 0V0z" fill="#07090f" stroke="url(#k-gold)" stroke-width=".7"/><text class="k-label" y="-34" text-anchor="middle">${name}</text></g>`;
  const runner = (x, y, i) => figure(x, y, 22, 1, { tunic: "#6a1e2c", legs: [18, -18], arms: [[[18, -66], [28, -72]], [[-16, -66], [-26, -60]]], skin: "#b07a50" }).replace('class="k-fig"', `class="k-fig k-run" style="animation-delay:-${i * 0.13}s"`);
  return `
  ${sky("k-dusk")}${stars(9, 30, 80)}${sun(52, 150, 22)}
  <path d="M0 160Q90 128 190 146T360 118V270H0z" fill="url(#k-hill2)" stroke="url(#k-gold)" stroke-width=".8"/>
  <path d="M0 160Q90 128 190 146T360 118V270H0z" fill="url(#k-hatch)" opacity=".5"/>
  ${gate(262, 128, L({ he: "גת", en: "Gath" }))}${gate(328, 120, L({ he: "עקרון", en: "Ekron" }))}
  <path d="M150 160Q200 150 244 134" fill="none" stroke="url(#k-gold)" stroke-width=".9" stroke-dasharray="2 4"/>
  ${[[150, 164], [168, 158], [186, 156], [204, 150], [222, 146]].map(([x, y], i) => runner(x, y, i)).join("")}
  ${ground(gy)}
  <ellipse cx="246" cy="240" rx="96" ry="7" fill="#000" opacity=".4"/>
  <g transform="translate(170 224) rotate(90)">${figure(0, 0, 158, 1, { ...GOLIATH, arms: [[[16, -70], [20, -96]], [[-14, -66], [-10, -90]]] })}</g>
  <circle cx="106" cy="150" r="70" fill="url(#k-halo)" opacity=".5"/>
  ${figure(106, gy + 6, 104, 1, { ...DAVID, arms: [[[20, -82], [24, -102]], [[-16, -62], [-20, -48]]], extra: SWORD(24, -102, 12, 46) })}
  ${label(106, 100, L({ he: "חרבו של גוליית", en: "Goliath's own sword" }), { to: [128, 78], cls: "k-sm" })}
  ${label(180, 34, L({ he: "״ויפול על פניו ארצה״", en: "'He fell upon his face to the earth'" }))}
  ${frame()}`;
};

export default [valley, giant, armour, stones, oneStone, rout];
export { W, H };
