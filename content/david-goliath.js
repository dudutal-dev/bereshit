// דוד וגוליית — שמואל א י"ז. כל שדה טקסט הוא { he, en }.
// הפסוקים בעברית לפי נוסח המסורה; באנגלית לפי JPS 1917 (נחלת הכלל).
export default {
  id: "david-goliath",
  book: "samuel1",
  ref: { he: "שמואל א י״ז", en: "I Samuel 17" },
  title: { he: "דוד וגוליית", en: "David and Goliath" },
  sub: { he: "חמש אבנים מהנחל מול שריון של נחושת", en: "Five stones from a brook against a coat of bronze" },
  registers: ["tension", "drama"],
  hard: false,
  minutes: 4,

  epigraph: {
    he: "אַתָּה בָּא אֵלַי בְּחֶרֶב וּבַחֲנִית וּבְכִידוֹן",
    en: "Thou comest to me with a sword, and with a spear, and with a javelin",
    ref: { he: "י״ז, מה", en: "17:45" }, osis: "1Sam.17.45",
  },

  hook: {
    q: { he: "מה היה הקלע שבידו של דוד?", en: "What was the sling in David's hand?" },
    o: [
      { he: "צעצוע של רועים, שהצליח במקרה", en: "A shepherd's toy that got lucky" },
      { he: "נשק מלחמה של ממש, שצבאות החזיקו יחידות שלמות שלו", en: "A real weapon of war, fielded by whole army units" },
      { he: "מקל מפוצל עם רצועת עור, כמו רוגטקה", en: "A forked stick with a strap, like a slingshot" },
    ],
    a: 1,
    why: {
      he: "קלע הוא רצועה ארוכה עם כיס באמצע, שמסובבים ומשחררים. בספר שופטים מתוארים שבע מאות קלעים משבט בנימין ש״קולע באבן אל השערה ולא יחטיא״.",
      en: "A sling is a long cord with a pouch, whirled and released. The book of Judges describes seven hundred Benjaminite slingers who 'could sling stones at a hair-breadth, and not miss'.",
    },
  },

  // ההסבר המאויר: לוח לכל שלב
  plates: [
    {
      t: { he: "עמק אחד, שני הרים", en: "One valley, two hills" },
      d: {
        he: "פלשתים חונים על ההר מצד אחד, ישראל על ההר מצד שני, ועמק האלה ביניהם. מי שיורד ראשון לעמק נחשף, ולכן אף צד לא זז.",
        en: "The Philistines hold one hill, Israel the other, and the Valley of Elah lies between. Whoever goes down first is exposed, so neither side moves.",
      },
    },
    {
      t: { he: "איש הביניים", en: "The man between" },
      d: {
        he: "גוליית מגת יוצא אל השטח שבין המחנות ומציע קרב של אחד מול אחד, במקום מלחמה שלמה. גובהו שש אמות וזרת, והוא עטוף נחושת מהקובע ועד מצחות הרגליים. ארבעים יום, בוקר וערב, אף אחד לא עונה.",
        en: "Goliath of Gath steps into the ground between the camps and offers single combat instead of a full battle. He stands six cubits and a span, cased in bronze from helmet to greaves. For forty days, morning and evening, no one answers.",
      },
    },
    {
      t: { he: "השריון שלא התאים", en: "The armour that did not fit" },
      d: {
        he: "דוד, הצעיר בבני ישי, מגיע עם אוכל לאחיו ושומע את האתגר. שאול מלביש אותו את המדים והשריון שלו. דוד מנסה ללכת ומוריד הכול: ״לא אוכל ללכת באלה, כי לא נסיתי״.",
        en: "David, the youngest of Jesse's sons, arrives with food for his brothers and hears the challenge. Saul dresses him in his own armour. David tries to walk and takes it all off: 'I cannot go with these; for I have not tried them.'",
      },
    },
    {
      t: { he: "חמישה חלוקי אבנים", en: "Five smooth stones" },
      d: {
        he: "הוא לוקח את המקל שלו, בוחר חמש אבנים חלקות מהנחל ושם אותן בילקוט הרועים. הקלע בידו. גוליית מחכה לקרב מגע, עם חרב וחנית. דוד מתכוון להישאר רחוק.",
        en: "He takes his staff, chooses five smooth stones from the brook and puts them in his shepherd's bag. His sling is in his hand. Goliath expects close combat with sword and spear. David means to stay out of reach.",
      },
    },
    {
      t: { he: "אבן אחת", en: "One stone" },
      d: {
        he: "דוד רץ אל המערכה, שולח יד אל הכלי, מקלע ופוגע במצח, המקום שהקובע לא מכסה. הענק נופל על פניו ארצה. לדוד אין חרב, אז הוא שולף את החרב של גוליית עצמו.",
        en: "David runs toward the line, reaches into his bag, slings, and strikes the forehead, the one place the helmet leaves bare. The giant falls on his face to the earth. David has no sword, so he draws Goliath's own.",
      },
    },
    {
      t: { he: "המנוסה", en: "The rout" },
      d: {
        he: "הפלשתים רואים שגיבורם מת ובורחים. אנשי ישראל ויהודה רודפים אחריהם עד שערי עקרון ועד גת, העיר שממנה יצא גוליית.",
        en: "The Philistines see their champion is dead and flee. The men of Israel and Judah pursue them to the gates of Ekron and to Gath, the city Goliath came from.",
      },
    },
  ],

  // הסיפור מחדש, בקול המספר
  retold: {
    he: [
      "ארבעים יום העמק היה שקט מדי.",
      "כל בוקר וכל ערב ירד האיש מההר שממול, והשמש נתפסה בנחושת שעליו עוד לפני שראו את פניו. הוא לא מיהר. הוא ידע שאף אחד לא יבוא. הוא צעק את אותן מילים, והצבא שעל ההר השני הסתכל על הנעליים שלו.",
      "דוד הגיע עם קלי, עשרה לחם ועשרה חריצי חלב. הוא בא להביא אוכל, לא להילחם. הוא שמע את הצעקה באמצע משפט, ושאל את השאלה שאף אחד לא שאל ארבעים יום: מי זה בכלל?",
      "אליאב אחיו כעס. שאול הסתכל עליו ואמר את המובן מאליו: אתה נער, והוא איש מלחמה מנעוריו. דוד סיפר לו על אריה ועל דוב. הוא לא התרברב. ככה נראית עבודה עם צאן.",
      "השריון של המלך היה כבד וזר. דוד עשה כמה צעדים והוריד אותו.",
      "בנחל המים היו קרים. הוא בחר חמש אבנים, חלקות, כאלה שיושבות טוב בכף היד. מעליו הענק צחק: ״הכלב אנוכי, כי אתה בא אליי במקלות?״",
      "דוד לא ענה על השאלה. הוא רץ.",
      "האבן יצאה. לרגע לא קרה כלום. ואז הנחושת פגעה באדמה.",
    ],
    en: [
      "For forty days the valley was too quiet.",
      "Every morning and every evening the man came down from the opposite hill, and the sun caught the bronze on him before anyone could see his face. He did not hurry. He knew no one would come. He shouted the same words, and the army on the other hill looked at its sandals.",
      "David arrived with parched corn, ten loaves and ten cheeses. He had come to bring food, not to fight. He heard the shout mid-sentence and asked the question no one had asked in forty days: who is this, anyway?",
      "His brother Eliab was angry. Saul looked at him and said the obvious: you are a youth, and he has been a man of war from his youth. David told him about a lion and a bear. He was not boasting. That is what keeping sheep looks like.",
      "The king's armour was heavy and strange. David took a few steps and took it off.",
      "The water in the brook was cold. He chose five stones, smooth ones, the kind that sit well in the palm. Above him the giant laughed: 'Am I a dog, that thou comest to me with staves?'",
      "David did not answer the question. He ran.",
      "The stone left the sling. For a moment nothing happened. Then the bronze hit the ground.",
    ],
  },

  verses: [
    { osis: "1Sam.17.4", ref: { he: "י״ז, ד", en: "17:4" },
      he: "וַיֵּצֵא אִישׁ־הַבֵּנַיִם מִמַּחֲנוֹת פְּלִשְׁתִּים גָּלְיָת שְׁמוֹ מִגַּת גָּבְהוֹ שֵׁשׁ אַמּוֹת וָזָרֶת.",
      en: "And there went out a champion from the camp of the Philistines, named Goliath, of Gath, whose height was six cubits and a span." },
    { osis: "1Sam.17.40", ref: { he: "י״ז, מ", en: "17:40" },
      he: "וַיִּקַּח מַקְלוֹ בְּיָדוֹ וַיִּבְחַר־לוֹ חֲמִשָּׁה חַלֻּקֵי־אֲבָנִים מִן־הַנַּחַל וַיָּשֶׂם אֹתָם בִּכְלִי הָרֹעִים אֲשֶׁר־לוֹ וּבַיַּלְקוּט וְקַלְּעוֹ בְיָדוֹ וַיִּגַּשׁ אֶל־הַפְּלִשְׁתִּי.",
      en: "And he took his staff in his hand, and chose him five smooth stones out of the brook, and put them in the shepherd's bag which he had, even in his scrip; and his sling was in his hand; and he drew near to the Philistine." },
    { osis: "1Sam.17.45", ref: { he: "י״ז, מה", en: "17:45" },
      he: "וַיֹּאמֶר דָּוִד אֶל־הַפְּלִשְׁתִּי אַתָּה בָּא אֵלַי בְּחֶרֶב וּבַחֲנִית וּבְכִידוֹן וְאָנֹכִי בָא־אֵלֶיךָ בְּשֵׁם ה׳ צְבָאוֹת אֱלֹהֵי מַעַרְכוֹת יִשְׂרָאֵל אֲשֶׁר חֵרַפְתָּ.",
      en: "Then said David to the Philistine: 'Thou comest to me with a sword, and with a spear, and with a javelin; but I come to thee in the name of the LORD of hosts, the God of the armies of Israel, whom thou hast taunted.'" },
    { osis: "1Sam.17.49", ref: { he: "י״ז, מט", en: "17:49" },
      he: "וַיִּשְׁלַח דָּוִד אֶת־יָדוֹ אֶל־הַכֶּלִי וַיִּקַּח מִשָּׁם אֶבֶן וַיְקַלַּע וַיַּךְ אֶת־הַפְּלִשְׁתִּי אֶל־מִצְחוֹ וַתִּטְבַּע הָאֶבֶן בְּמִצְחוֹ וַיִּפֹּל עַל־פָּנָיו אָרְצָה.",
      en: "And David put his hand in his bag, and took thence a stone, and slung it, and smote the Philistine in his forehead; and the stone sank into his forehead, and he fell upon his face to the earth." },
  ],

  layers: [
    { id: "pshat", name: { he: "פשט", en: "Peshat" }, gloss: { he: "מה שכתוב", en: "The plain sense" },
      body: {
        he: "״איש הביניים״ הוא לוחם שיוצא אל השטח שבין שתי המערכות. גוליית מציע קרב נציגים: שני לוחמים מכריעים במקום שני צבאות, והצד המפסיד משתעבד. דוד משנה את סוג הקרב. גוליית חמוש לקרב מגע וכבד מכדי לרדוף, ודוד נלחם מרחוק, קל ובלי שריון.",
        en: "The 'man between' is a fighter who steps into the ground between two battle lines. Goliath offers a duel of champions: two fighters decide instead of two armies, and the losing side serves the other. David changes the kind of fight. Goliath is armed for close combat and too heavy to chase; David fights from a distance, light and unarmoured.",
      } },
    { id: "drash", name: { he: "דרש", en: "Derash" }, gloss: { he: "מה שחז״ל שמעו", en: "What the sages heard" },
      body: {
        he: "התלמוד (סוטה מב ע״ב) מזהה את גוליית כצאצא של ערפה, כלתה של נעמי שחזרה למואב, ואת דוד כצאצא של רות שנשארה. כך הקרב בעמק הוא גם המשך של פרידה ישנה על אם הדרך. רש״י מעיר שגוליית נפל על פניו, קדימה ולא לאחור, כדי שדוד לא יצטרך ללכת רחוק כדי לכרות את ראשו.",
        en: "The Talmud (Sotah 42b) identifies Goliath as a descendant of Orpah, Naomi's daughter-in-law who went back to Moab, and David as a descendant of Ruth, who stayed. The fight in the valley thus continues an old parting at a crossroads. Rashi notes that Goliath fell on his face, forward and not backward, so that David would not have far to walk to cut off his head.",
      } },
    { id: "sod", name: { he: "סוד", en: "Sod" }, gloss: { he: "הקריאה הקבלית", en: "The mystical reading" },
      body: {
        he: "בקבלה דוד הוא ספירת המלכות, האחרונה בספירות, שאין לה משלה כלום וכל מה שיש בה היא מקבלת. לכן הוא לא יכול ללבוש שריון של אחר. מסורת הזוהר קוראת את חמש האבנים כנגד חמש המילים ״שמע ישראל ה׳ אלוהינו ה׳״, ואת האבן האחת שפגעה כנגד המילה ״אחד״.",
        en: "In Kabbalah David is the sefirah of Malkhut, the last of the sefirot, which has nothing of its own and only receives. That is why he cannot wear another man's armour. The Zohar tradition reads the five stones against the five words 'Hear, O Israel, the LORD our God, the LORD', and the single stone that struck against the word 'One'.",
      } },
  ],

  mistake: {
    t: { he: "״ילד קטן מול ענק״", en: "'A little boy against a giant'" },
    d: {
      he: "הכתוב קורא לדוד ״נער״, אבל פרק קודם הוא מתואר כ״גיבור חיל ואיש מלחמה״, וכבר הרג אריה ודוב. גם הגובה לא חד-משמעי: נוסח המסורה אומר שש אמות וזרת, קרוב לשלושה מטרים, ואילו תרגום השבעים ומגילת שמואל מקומראן אומרים ארבע אמות וזרת, בערך שני מטרים.",
      en: "The text calls David a 'youth', but a chapter earlier he is described as 'a mighty man of valour, and a man of war', and he has already killed a lion and a bear. The height is not settled either: the Masoretic text says six cubits and a span, close to three metres, while the Septuagint and the Samuel scroll from Qumran say four cubits and a span, about two metres.",
    },
  },

  people: [
    { id: "david", name: { he: "דוד", en: "David" }, role: { he: "בן ישי מבית לחם, רועה, הצעיר משמונה אחים", en: "Son of Jesse of Bethlehem, a shepherd, youngest of eight brothers" } },
    { id: "goliath", name: { he: "גוליית", en: "Goliath" }, role: { he: "איש הביניים של פלשתים, מהעיר גת", en: "The Philistine champion, from the city of Gath" } },
    { id: "saul", name: { he: "שאול", en: "Saul" }, role: { he: "מלך ישראל, הגבוה בעם, שנשאר באוהל", en: "King of Israel, the tallest of his people, who stays in his tent" } },
    { id: "eliab", name: { he: "אליאב", en: "Eliab" }, role: { he: "האח הבכור, שכועס על דוד שבא לראות את המלחמה", en: "The eldest brother, angry that David came to watch the battle" } },
  ],

  place: {
    name: { he: "עמק האלה", en: "Valley of Elah" },
    d: {
      he: "עמק בשפלת יהודה, בין שׂוֹכֹה לעזקה. הוא הדרך הטבעית ממישור החוף הפלשתי אל הרי יהודה ובית לחם.",
      en: "A valley in the Judean lowlands, between Socoh and Azekah. It is the natural road from the Philistine coastal plain up to the hills of Judah and Bethlehem.",
    },
  },

  quiz: [
    { q: { he: "למה דוד הוריד את השריון של שאול?", en: "Why did David take off Saul's armour?" },
      o: [
        { he: "שאול התחרט וביקש אותו בחזרה", en: "Saul changed his mind and asked for it back" },
        { he: "הוא לא היה רגיל ללכת בו", en: "He was not used to walking in it" },
        { he: "הוא היה גדול עליו בכמה מידות", en: "It was several sizes too big" },
      ], a: 1,
      why: { he: "״לא אוכל ללכת באלה, כי לא נסיתי״. הכתוב לא אומר שהשריון היה גדול.", en: "'I cannot go with these; for I have not tried them.' The text does not say the armour was too big." } },
    { q: { he: "באיזו חרב נכרת ראשו של גוליית?", en: "Whose sword cut off Goliath's head?" },
      o: [
        { he: "בחרב של שאול", en: "Saul's" },
        { he: "בחרב שדוד הביא מבית לחם", en: "One David brought from Bethlehem" },
        { he: "בחרב של גוליית עצמו", en: "Goliath's own" },
      ], a: 2,
      why: { he: "״וחרב אין ביד דוד״. הוא רץ, עמד אל הפלשתי ושלף את חרבו מתערה.", en: "'There was no sword in the hand of David.' He ran, stood over the Philistine and drew his sword out of its sheath." } },
  ],

  takeaway: {
    he: "דוד לא ניצח בכלים של גוליית. הוא סירב לקרב שהוצע לו ונלחם בקרב שהוא ידע.",
    en: "David did not win with Goliath's tools. He refused the fight he was offered and fought the one he knew.",
  },
};
