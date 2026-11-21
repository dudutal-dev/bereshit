// שפת הממשק: עברית או אנגלית. הבחירה נשמרת במכשיר.
const KEY = "bereshit.lang";
const STR = {
  app: { he: "בְּרֵאשִׁית", en: "Bereshit" },
  tagline: { he: "סיפורי התנ״ך, כמו שלא ראיתם אותם", en: "The stories of the Hebrew Bible, as you have not seen them" },
  navStories: { he: "סיפורים", en: "Stories" },
  navBooks: { he: "ספרים", en: "Books" },
  navMe: { he: "אני", en: "Me" },
  featured: { he: "הסיפור הפותח", en: "Opening story" },
  open: { he: "לפתוח את הסיפור", en: "Open the story" },
  again: { he: "לקרוא שוב", en: "Read again" },
  minutes: { he: "דקות", en: "min" },
  scroll: { he: "המגילה", en: "The scroll" },
  scrollSub: { he: "הסיפורים לפי הסדר. הבאים בתור כבר בהפקה.", en: "The stories in order. The next ones are in production." },
  soon: { he: "בהפקה", en: "In production" },
  done: { he: "נקרא", en: "Read" },
  booksTitle: { he: "מפת הספרים", en: "Map of the books" },
  booksSub: { he: "כל כוכב הוא ספר. הכוכבים המוארים כבר נפתחו.", en: "Every star is a book. The lit ones are already open." },
  storiesIn: { he: "סיפורים בספר", en: "Stories in" },
  noStories: { he: "עדיין אין סיפורים בספר הזה.", en: "No stories in this book yet." },
  film: { he: "הסרטון", en: "The film" },
  filmSoon: { he: "סרטון של 60 שניות לסיפור הזה נמצא בהפקה.", en: "A 60-second film for this story is in production." },
  before: { he: "לפני שמתחילים", en: "Before we begin" },
  plates: { he: "הסיפור בלוחות", en: "The story in plates" },
  retold: { he: "הסיפור מחדש", en: "The story, retold" },
  source: { he: "מה כתוב במקור", en: "What the text says" },
  layers: { he: "שכבות", en: "Layers" },
  mistake: { he: "טעות נפוצה", en: "A common mistake" },
  people: { he: "הדמויות", en: "The people" },
  place: { he: "המקום", en: "The place" },
  quiz: { he: "שתי שאלות", en: "Two questions" },
  take: { he: "משפט אחד לקחת", en: "One line to take" },
  next: { he: "הבא", en: "Next" },
  prev: { he: "הקודם", en: "Back" },
  plate: { he: "לוח", en: "Plate" },
  of: { he: "מתוך", en: "of" },
  right: { he: "נכון", en: "Correct" },
  wrong: { he: "לא בדיוק", en: "Not quite" },
  finish: { he: "סיימתי את הסיפור", en: "I finished the story" },
  finished: { he: "הסיפור נשמר אצלך", en: "Saved to your scroll" },
  back: { he: "חזרה", en: "Back" },
  meTitle: { he: "המגילה שלי", en: "My scroll" },
  meRead: { he: "סיפורים שקראת", en: "Stories read" },
  meQuiz: { he: "תשובות נכונות", en: "Correct answers" },
  settings: { he: "הגדרות", en: "Settings" },
  language: { he: "שפה", en: "Language" },
  reset: { he: "לאפס את ההתקדמות", en: "Reset progress" },
  resetQ: { he: "לאפס את כל ההתקדמות במכשיר הזה?", en: "Reset all progress on this device?" },
  local: { he: "הכול נשמר במכשיר בלבד, בלי הרשמה.", en: "Everything is stored on this device only. No sign-up." },
  torah: { he: "תורה", en: "Torah" }, neviim: { he: "נביאים", en: "Prophets" }, ketuvim: { he: "כתובים", en: "Writings" },
};

let lang = "he";
try { lang = localStorage.getItem(KEY) || ((navigator.language || "he").toLowerCase().startsWith("he") ? "he" : "en"); } catch { /* מצב פרטי */ }
const q = new URLSearchParams(location.search).get("lang");
if (q === "he" || q === "en") lang = q;

export const getLang = () => lang;
export function setLang(l) { lang = l === "en" ? "en" : "he"; try { localStorage.setItem(KEY, lang); } catch { /* מצב פרטי */ } applyLang(); }
export function applyLang() {
  const h = document.documentElement; h.lang = lang; h.dir = lang === "he" ? "rtl" : "ltr";
  document.title = lang === "he" ? "בראשית · סיפורי התנ״ך" : "Bereshit · Stories of the Hebrew Bible";
}
// t("key") למחרוזות ממשק; L({he,en}) לשדות תוכן
export const t = (k) => (STR[k] ? STR[k][lang] : k);
export const L = (o) => (o == null ? "" : typeof o === "string" ? o : o[lang] ?? o.he);
// מספור סעיפים: אותיות בעברית, ספרות רומיות באנגלית
export const ord = (i) => (lang === "he" ? "אבגדהוזחטיכל"[i] : ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][i]);
