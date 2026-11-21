// מפת הספרים והסיפורים. סיפור חדש: קובץ ב-content/, איורים ב-scenes/, ושורה ברשימה STORIES.
import davidGoliath from "./david-goliath.js";

export const STORIES = [davidGoliath];

// המשלבים הרגשיים של הסיפורים
export const REGISTERS = {
  love: { he: "אהבה", en: "Love" }, passion: { he: "תשוקה", en: "Passion" }, joy: { he: "שמחה", en: "Joy" },
  drama: { he: "דרמה", en: "Drama" }, tension: { he: "מתח", en: "Suspense" }, betrayal: { he: "בגידה", en: "Betrayal" },
  lament: { he: "קינה", en: "Lament" }, humor: { he: "הומור", en: "Irony" }, awe: { he: "יראה", en: "Awe" },
  wisdom: { he: "חוכמה", en: "Wisdom" }, wrath: { he: "זעם", en: "Wrath" }, hope: { he: "נחמה", en: "Comfort" },
};

export const SECTIONS = [
  { id: "torah", name: { he: "תורה", en: "Torah" } },
  { id: "neviim", name: { he: "נביאים", en: "Prophets" } },
  { id: "ketuvim", name: { he: "כתובים", en: "Writings" } },
];

// מיקום כל ספר במפת הכוכבים (x,y בתוך 360×300)
export const BOOKS = [
  { id: "genesis", sec: "torah", he: "בראשית", en: "Genesis", x: 300, y: 44 },
  { id: "exodus", sec: "torah", he: "שמות", en: "Exodus", x: 252, y: 70 },
  { id: "leviticus", sec: "torah", he: "ויקרא", en: "Leviticus", x: 212, y: 40 },
  { id: "numbers", sec: "torah", he: "במדבר", en: "Numbers", x: 166, y: 66 },
  { id: "deuteronomy", sec: "torah", he: "דברים", en: "Deuteronomy", x: 118, y: 42 },
  { id: "joshua", sec: "neviim", he: "יהושע", en: "Joshua", x: 62, y: 84 },
  { id: "judges", sec: "neviim", he: "שופטים", en: "Judges", x: 96, y: 126 },
  { id: "samuel1", sec: "neviim", he: "שמואל א", en: "I Samuel", x: 150, y: 150 },
  { id: "samuel2", sec: "neviim", he: "שמואל ב", en: "II Samuel", x: 206, y: 132 },
  { id: "kings", sec: "neviim", he: "מלכים", en: "Kings", x: 262, y: 150 },
  { id: "isaiah", sec: "neviim", he: "ישעיהו", en: "Isaiah", x: 312, y: 126 },
  { id: "jeremiah", sec: "neviim", he: "ירמיהו", en: "Jeremiah", x: 322, y: 184 },
  { id: "ezekiel", sec: "neviim", he: "יחזקאל", en: "Ezekiel", x: 278, y: 212 },
  { id: "twelve", sec: "neviim", he: "תרי עשר", en: "The Twelve", x: 226, y: 196 },
  { id: "psalms", sec: "ketuvim", he: "תהילים", en: "Psalms", x: 172, y: 226 },
  { id: "proverbs", sec: "ketuvim", he: "משלי", en: "Proverbs", x: 118, y: 204 },
  { id: "job", sec: "ketuvim", he: "איוב", en: "Job", x: 66, y: 222 },
  { id: "scrolls", sec: "ketuvim", he: "חמש מגילות", en: "Five Scrolls", x: 40, y: 168 },
  { id: "daniel", sec: "ketuvim", he: "דניאל", en: "Daniel", x: 100, y: 268 },
  { id: "ezra", sec: "ketuvim", he: "עזרא ונחמיה", en: "Ezra–Nehemiah", x: 196, y: 276 },
  { id: "chronicles", sec: "ketuvim", he: "דברי הימים", en: "Chronicles", x: 290, y: 264 },
];

// הסיפורים הבאים בתור (גל ראשון). מוצגים כ"בהפקה" עד שהקובץ שלהם נכנס ל-STORIES.
export const PLANNED = [
  { book: "genesis", ref: { he: "בראשית א׳", en: "Genesis 1" }, title: { he: "בריאת העולם", en: "The Creation" } },
  { book: "genesis", ref: { he: "בראשית ב׳–ג׳", en: "Genesis 2–3" }, title: { he: "גן עדן", en: "The Garden of Eden" } },
  { book: "genesis", ref: { he: "בראשית ו׳–ט׳", en: "Genesis 6–9" }, title: { he: "המבול", en: "The Flood" } },
  { book: "genesis", ref: { he: "בראשית כ״ב", en: "Genesis 22" }, title: { he: "עקדת יצחק", en: "The Binding of Isaac" } },
  { book: "genesis", ref: { he: "בראשית כ״ט", en: "Genesis 29" }, title: { he: "יעקב ורחל", en: "Jacob and Rachel" } },
  { book: "genesis", ref: { he: "בראשית ל״ז", en: "Genesis 37" }, title: { he: "יוסף ואחיו", en: "Joseph and His Brothers" } },
  { book: "exodus", ref: { he: "שמות ג׳", en: "Exodus 3" }, title: { he: "הסנה הבוער", en: "The Burning Bush" } },
  { book: "exodus", ref: { he: "שמות י״ד", en: "Exodus 14" }, title: { he: "קריעת ים סוף", en: "The Parting of the Sea" } },
  { book: "judges", ref: { he: "שופטים ט״ז", en: "Judges 16" }, title: { he: "שמשון ודלילה", en: "Samson and Delilah" } },
];
