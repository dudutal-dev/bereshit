// בדיקת פסוקים: משווה כל פסוק עברי בתוכן (שדה osis) לנוסח כתב יד לנינגרד (WLC), אות-אות וניקוד-ניקוד.
// המקור: github.com/openscriptures/morphhb, התיקייה wlc. מריצים:
//   git clone --depth 1 https://github.com/openscriptures/morphhb /tmp/morphhb
//   node tools/verses.mjs /tmp/morphhb/wlc
// ההבדלים המותרים: טעמי המקרא מוסרים, שם ה׳ נכתב "ה׳", ונקודה בסוף הפסוק. האפיגרף יכול להיות חלק מפסוק.
import { readFileSync } from "node:fs";
import { STORIES } from "../content/index.js";

const dir = process.argv[2];
if (!dir) { console.error("usage: node tools/verses.mjs <path to morphhb/wlc>"); process.exit(2); }
const books = new Map();
const norm = (s) => s.normalize("NFC").replace(/[֑-ֽ֯׀׃]/g, "").replace(/[.]+$/, "").replace(/\s+/g, " ").trim();
function wlc(osis) {
  const book = osis.split(".")[0];
  if (!books.has(book)) books.set(book, readFileSync(`${dir}/${book}.xml`, "utf8"));
  const m = new RegExp(`<verse osisID="${osis.replaceAll(".", "\\.")}">([\\s\\S]*?)</verse>`).exec(books.get(book));
  if (!m) return null;
  const body = m[1].replace(/<note[\s\S]*?<\/note>/g, "");
  let out = "";
  for (const t of body.matchAll(/<(w|seg)\b[^>]*>([^<]*)<\/\1>/g)) {
    if (t[1] === "w") out += " " + t[2].replaceAll("/", "");
    else if (t[2] === "־") out += "־";
  }
  return norm(out.replaceAll("־ ", "־")).replace(/(?<=^|[\s־])(וַ|לַ|בַּ|מֵ|כַּ)?יהוָה/g, (x, p) => (p ? p[0] : "") + "ה׳").replace(/יְהוָה|יְהוִה/g, "ה׳");
}

let bad = 0, n = 0;
for (const s of STORIES) {
  const items = [...s.verses.map((v) => ({ ...v, part: false })), ...(s.epigraph?.osis ? [{ ...s.epigraph, part: true }] : [])];
  for (const v of items) {
    n++;
    if (!v.osis) { bad++; console.log(`✗ ${s.id}: verse without osis: ${v.he.slice(0, 30)}`); continue; }
    const src = wlc(v.osis), mine = norm(v.he);
    if (src && (v.part ? src.includes(mine) : src === mine)) continue;
    bad++; console.log(`✗ ${s.id} ${v.osis}\n  content: ${mine}\n  WLC:     ${src}`);
  }
}
console.log(bad ? `${bad} of ${n} verses differ` : `all ${n} verses match the Leningrad Codex text`);
process.exit(bad ? 1 : 0);
