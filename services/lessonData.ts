
import type { Lesson } from '../types';
import { ActivityType } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'שיעור 1: מתחילים עם ה-ABC! (A-I)',
    description: 'שני, יאללה מתחילים! ✨ בשיעור הראשון נכיר את 9 האותיות הראשונות באנגלית. זה הבסיס להכל! את מוכנה? אני יודעת שתהיי אלופה!',
    activities: [
      { type: ActivityType.PHONICS, letter: 'A', sound: 'אה / איי', hebrew_example: 'כמו פתח במילה "אבא" או כמו במילה "Game"' },
      { type: ActivityType.PHONICS, letter: 'B', sound: 'בּי', hebrew_example: 'כמו האות ב׳ במילה "בית"' },
      { type: ActivityType.PHONICS, letter: 'C', sound: 'סי', hebrew_example: 'כמו האות ס׳ במילה "סוכר"' },
      { type: ActivityType.PHONICS, letter: 'D', sound: 'די', hebrew_example: 'כמו האות ד׳ במילה "דלת"' },
      { type: ActivityType.PHONICS, letter: 'E', sound: 'אי', hebrew_example: 'כמו חיריק במילה "אימא"' },
      { type: ActivityType.PHONICS, letter: 'F', sound: 'אף', hebrew_example: 'כמו האות פ׳ רפה במילה "פיל"' },
      { type: ActivityType.PHONICS, letter: 'G', sound: 'ג׳י', hebrew_example: 'כמו האות ג׳ במילה "ג׳ירפה"' },
      { type: ActivityType.PHONICS, letter: 'H', sound: 'אייץ׳', hebrew_example: 'כמו האות ה׳ במילה "היפופוטם"' },
      { type: ActivityType.PHONICS, letter: 'I', sound: 'איי', hebrew_example: 'כמו במילה "I" (אני) באנגלית' },
    ],
  },
  {
    id: 2,
    title: 'שיעור 2: ממשיכות להכיר אותיות (J-R)',
    description: 'כל הכבוד על השיעור הראשון, אלופה! את קולטת מהר. עכשיו נמשיך עם 9 האותיות הבאות. כל אות חדשה היא עוד צעד בדרך להרפתקה הגדולה!',
    activities: [
      { type: ActivityType.PHONICS, letter: 'J', sound: 'ג׳יי', hebrew_example: 'כמו האות ג׳ במילה "ג׳ינס"' },
      { type: ActivityType.PHONICS, letter: 'K', sound: 'קיי', hebrew_example: 'כמו האות ק׳ במילה "קנגורו"' },
      { type: ActivityType.PHONICS, letter: 'L', sound: 'אל', hebrew_example: 'כמו האות ל׳ במילה "לימון"' },
      { type: ActivityType.PHONICS, letter: 'M', sound: 'אם', hebrew_example: 'כמו האות מ׳ במילה "מים"' },
      { type: ActivityType.PHONICS, letter: 'N', sound: 'אן', hebrew_example: 'כמו האות נ׳ במילה "נמר"' },
      { type: ActivityType.PHONICS, letter: 'O', sound: 'אוֹ', hebrew_example: 'כמו חולם במילה "כתום" (Orange)' },
      { type: ActivityType.PHONICS, letter: 'P', sound: 'פּי', hebrew_example: 'כמו האות פ׳ דגושה במילה "פיצה"' },
      { type: ActivityType.PHONICS, letter: 'Q', sound: 'קיו', hebrew_example: 'צליל שמורכב מק׳ ו-ו׳, כמו במילה "Queen"' },
      { type: ActivityType.PHONICS, letter: 'R', sound: 'אר', hebrew_example: 'כמו האות ר׳ במילה "רדיו"' },
    ],
  },
  {
    id: 3,
    title: 'שיעור 3: מסיימות את כל האותיות! (S-Z)',
    description: 'וואו, שני, תראי אותך! אנחנו כבר לקראת סוף לימוד האותיות. בשיעור הזה נכיר את 8 האותיות האחרונות. אחרי זה, את תדעי את כל ה-ABC!',
    activities: [
      { type: ActivityType.PHONICS, letter: 'S', sound: 'אס', hebrew_example: 'כמו האות ס׳ במילה "שמש" (Sun)' },
      { type: ActivityType.PHONICS, letter: 'T', sound: 'טי', hebrew_example: 'כמו האות ט׳ במילה "תה" (Tea)' },
      { type: ActivityType.PHONICS, letter: 'U', sound: 'יוּ', hebrew_example: 'כמו במילה "You" (אתה/את) באנגלית' },
      { type: ActivityType.PHONICS, letter: 'V', sound: 'וי', hebrew_example: 'כמו האות ו׳ במילה "וידאו"' },
      { type: ActivityType.PHONICS, letter: 'W', sound: 'דאבל יו', hebrew_example: 'נשמע כמו ו׳ כפולה, כמו במילה "מים" (Water)' },
      { type: ActivityType.PHONICS, letter: 'X', sound: 'אקס', hebrew_example: 'צליל של ק׳ ו-ס׳, כמו במילה "Box" (קופסה)' },
      { type: ActivityType.PHONICS, letter: 'Y', sound: 'וואי', hebrew_example: 'כמו במילה "למה" (Why) באנגלית' },
      { type: ActivityType.PHONICS, letter: 'Z', sound: 'זד / זי', hebrew_example: 'כמו האות ז׳ במילה "זברה"' },
    ],
  },
  {
    id: 4,
    title: 'שיעור 4: להזמין אוכל בסטייל',
    description: 'אחת החוויות הכי כיפיות בטיול זה האוכל! בשיעור הזה נלמד איך להזמין אוכל טעים, לבקש פאד תאי לא חריף בתאילנד או את הראמן הכי שווה ביפן. בתיאבון!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Menu', translation: 'תפריט', category: 'מסעדה', imageUrl: 'https://picsum.photos/400/300?random=12' },
      { type: ActivityType.VOCABULARY, word: 'Not spicy', translation: 'לא חריף', category: 'אוכל', imageUrl: 'https://picsum.photos/400/300?random=55' },
      { type: ActivityType.VOCABULARY, word: 'Sushi', translation: 'סושי', category: 'אוכל', imageUrl: 'https://picsum.photos/400/300?random=56' },
      { type: ActivityType.PRONUNCIATION, phrase: 'The menu, please', translation: 'את התפריט, בבקשה' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Not spicy, please', translation: 'לא חריף, בבקשה' },
    ],
  },
  {
    id: 5,
    title: 'שיעור 5: קניות וכסף',
    description: 'תראי אותך, מתקדמת בטירוף! הגיע הזמן לדבר על כסף 💸. אל תדאגי, זה לא מפחיד. נלמד איך לשאול \'כמה זה עולה?\' כדי שתדעי בדיוק כמה באט או ין להוציא בשווקים. את הולכת להיות מומחית!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'How much?', translation: 'כמה עולה?', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=15' },
      { type: ActivityType.VOCABULARY, word: 'Money', translation: 'כסף', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=16' },
      { type: ActivityType.VOCABULARY, word: 'Baht', translation: 'באט (מטבע תאילנדי)', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=58' },
      { type: ActivityType.VOCABULARY, word: 'Yen', translation: 'ין (מטבע יפני)', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=59' },
      { type: ActivityType.PRONUNCIATION, phrase: 'How much is this?', translation: 'כמה זה עולה?' },
    ],
  },
  {
    id: 6,
    title: 'שיעור 6: להתנייד כמו מקומית',
    description: 'מוכנה להרגיש את הקצב של העיר? נלמד איך להתנייד בטוק-טוק צבעוני בבנגקוק, או ברכבת העילית המהירה בטוקיו. את תראי שזה ממש קל להגיע לכל מקום!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Tuk-tuk', translation: 'טוק-טוק', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=60' },
      { type: ActivityType.VOCABULARY, word: 'Subway', translation: 'רכבת תחתית', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=61' },
      { type: ActivityType.VOCABULARY, word: 'Ticket', translation: 'כרטיס', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=22' },
      { type: ActivityType.PRONUNCIATION, phrase: 'One ticket to Kyoto, please', translation: 'כרטיס אחד לקיוטו, בבקשה' },
    ],
  },
  {
    id: 7,
    title: 'שיעור 7: למצוא את הדרך',
    description: 'את כבר כמעט שם! בשיעור הזה נלמד את מילות הקסם שיעזרו לך להגיע לכל מקום, בין אם זה למצוא את הדרך למעבר החצייה המפורסם בשיבויה או חוף סודי בתאילנד. אין סיכוי שתלכי לאיבוד!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Left', translation: 'שמאל', category: 'כיוונים', imageUrl: 'https://picsum.photos/400/300?random=23' },
      { type: ActivityType.VOCABULARY, word: 'Right', translation: 'ימין', category: 'כיוונים', imageUrl: 'https://picsum.photos/400/300?random=24' },
      { type: ActivityType.VOCABULARY, word: 'Straight', translation: 'ישר', category: 'כיוונים', imageUrl: 'https://picsum.photos/400/300?random=25' },
      { type: ActivityType.PRONUNCIATION, phrase: 'How do I get to Shibuya Crossing?', translation: 'איך אני מגיעה למעבר שיבויה?' },
    ],
  },
  {
    id: 8,
    title: 'שיעור 8: צ\'ק-אין למלון',
    description: 'אחרי יום ארוך, אין כמו להגיע למלון. נלמד את כל מה שצריך כדי לעשות צ\'ק-אין חלק ומהיר ולהתחיל את החופשה כמו שצריך. מגיע לך לנוח!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Hotel', translation: 'מלון', category: 'לינה', imageUrl: 'https://picsum.photos/400/300?random=26' },
      { type: ActivityType.VOCABULARY, word: 'Check-in', translation: 'צ\'ק-אין / קבלת חדר', category: 'לינה', imageUrl: 'https://picsum.photos/400/300?random=63' },
      { type: ActivityType.VOCABULARY, word: 'Reservation', translation: 'הזמנה', category: 'לינה', imageUrl: 'https://picsum.photos/400/300?random=29' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I have a reservation', translation: 'יש לי הזמנה' },
      { type: ActivityType.PRONUNCIATION, phrase: 'My name is Shani Gal', translation: 'השם שלי הוא שני גל' },
    ],
  },
  {
    id: 9,
    title: 'שיעור 9: הפסקת קפה',
    description: 'מגיע לך פינוק! כיף לעצור לקפה. נלמד להזמין אייס קפה מרענן בחום של תאילנד או מאצ\'ה לאטה טעים ביפן. את תרגישי כמו מקומית אמיתית.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Coffee', translation: 'קפה', category: 'אוכל ושתיה', imageUrl: 'https://picsum.photos/400/300?random=30' },
      { type: ActivityType.VOCABULARY, word: 'Iced coffee', translation: 'קפה קר', category: 'אוכל ושתיה', imageUrl: 'https://picsum.photos/400/300?random=65' },
      { type: ActivityType.VOCABULARY, word: 'Matcha latte', translation: 'מאצ\'ה לאטה', category: 'אוכל ושתיה', imageUrl: 'https://picsum.photos/400/300?random=66' },
      { type: ActivityType.PRONUNCIATION, phrase: 'One iced coffee, please', translation: 'קפה קר אחד, בבקשה' },
    ]
  },
  {
    id: 10,
    title: 'שיעור 10: שופינג תרפיה!',
    description: 'אלופה! תראי כמה התקדמת! עכשיו, בואי נדבר תכל\'ס - שופינג! 🛍️ בשיעור הזה תלמדי איך לקנות מזכרות מיוחדות מהשווקים הצבעוניים בתאילנד. מוכנה למסע קניות וירטואלי?',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Shop', translation: 'חנות', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=34' },
      { type: ActivityType.VOCABULARY, word: 'Souvenir', translation: 'מזכרת', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=67' },
      { type: ActivityType.VOCABULARY, word: 'Credit Card', translation: 'כרטיס אשראי', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=37' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Do you take credit card?', translation: 'אתם מקבלים כרטיס אשראי?' },
    ]
  },
  {
    id: 11,
    title: 'שיעור 11: סמול טוק',
    description: 'זה שיעור סופר חשוב! נלמד איך לפתוח שיחה קצרה, להציג את עצמך ולהגיד שאת מישראל. אנשים כל כך יתלהבו לפגוש אותך ולשמוע על המסע שלך!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Nice to meet you', translation: 'נעים מאוד', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=39' },
      { type: ActivityType.VOCABULARY, word: 'I am from Israel', translation: 'אני מישראל', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=40' },
      { type: ActivityType.VOCABULARY, word: 'I am traveling', translation: 'אני מטיילת', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=68' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I am traveling for a month and a half', translation: 'אני מטיילת לחודש וחצי' },
    ]
  },
  {
    id: 12,
    title: 'שיעור 12: כשצריך עזרה',
    description: 'אני יודעת שאף אחד לא אוהב לחשוב על זה, אבל חשוב לדעת לבקש עזרה. זה ייתן לך המון ביטחון. אני פה איתך, וביחד נלמד את המשפטים שישמרו עלייך.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Help', translation: 'עזרה', category: 'חירום', imageUrl: 'https://picsum.photos/400/300?random=42' },
      { type: ActivityType.VOCABULARY, word: 'Police', translation: 'משטרה', category: 'חירום', imageUrl: 'https://picsum.photos/400/300?random=43' },
      { type: ActivityType.VOCABULARY, word: 'Doctor', translation: 'רופא/ה', category: 'חירום', imageUrl: 'https://picsum.photos/400/300?random=44' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Help me, please', translation: 'עזרו לי, בבקשה' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I lost my passport', translation: 'איבדתי את הדרכון שלי' },
    ]
  },
  {
    id: 13,
    title: 'שיעור 13: מספרים וזמנים',
    description: 'היי כוכבת! ✨ בשיעור הזה נשדרג את המספרים שלנו וגם נלמד להגיד מה השעה. זה סופר שימושי כדי לא לפספס את הרכבת ליעד הבא שלך או את תחילת הסיור שקבעת. את תשלטי בזה!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Hundred', translation: 'מאה', category: 'מספרים', imageUrl: 'https://picsum.photos/400/300?random=70' },
      { type: ActivityType.VOCABULARY, word: 'Thousand', translation: 'אלף', category: 'מספרים', imageUrl: 'https://picsum.photos/400/300?random=71' },
      { type: ActivityType.VOCABULARY, word: 'What time is it?', translation: 'מה השעה?', category: 'זמן', imageUrl: 'https://picsum.photos/400/300?random=72' },
      { type: ActivityType.PRONUNCIATION, phrase: 'It is three o\'clock', translation: 'השעה שלוש' },
    ]
  },
  {
    id: 14,
    title: 'שיעור 14: עולם של צבעים',
    description: 'בואי נוסיף קצת צבע לחיים! 🎨 לדעת שמות של צבעים יעזור לך לבקש בדיוק את החולצה שאת רוצה בשוק או לתאר משהו יפה שראית. זה שיעור כיפי וצבעוני במיוחד!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Red', translation: 'אדום', category: 'צבעים', imageUrl: 'https://picsum.photos/seed/red/400/300' },
      { type: ActivityType.VOCABULARY, word: 'Blue', translation: 'כחול', category: 'צבעים', imageUrl: 'https://picsum.photos/seed/blue/400/300' },
      { type: ActivityType.VOCABULARY, word: 'Green', translation: 'ירוק', category: 'צבעים', imageUrl: 'https://picsum.photos/seed/green/400/300' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I want the blue one', translation: 'אני רוצה את הכחול' },
    ]
  },
  {
    id: 15,
    title: 'שיעור 15: קניות בגדים',
    description: 'זהירות, שיעור ממכר! 👚 נלמד איך לשאול על מידות, אם אפשר למדוד וכל מה שצריך כדי שתחזרי עם פריטים הורסים מיפן ותאילנד. המזוודה הולכת להתפוצץ!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Size', translation: 'מידה', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=75' },
      { type: ActivityType.VOCABULARY, word: 'Small / Medium / Large', translation: 'קטן / בינוני / גדול', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=76' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Can I try this on?', translation: 'אפשר למדוד את זה?' },
    ]
  },
  {
    id: 16,
    title: 'שיעור 16: אמנות המיקוח',
    description: 'מוכנה להיות אשת עסקים? 😉 בשווקים בתאילנד, מיקוח הוא חלק מהמשחק. נלמד כמה משפטים פשוטים שיעזרו לך להשיג מחיר טוב יותר, והכל בחיוך. את תהיי מופתעת מעצמך!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Too expensive', translation: 'יקר מדי', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=77' },
      { type: ActivityType.VOCABULARY, word: 'Discount', translation: 'הנחה', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=78' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Can you give me a discount?', translation: 'אפשר הנחה?' },
    ]
  },
  {
    id: 17,
    title: 'שיעור 17: בבית המרקחת',
    description: 'אני מקווה שלא תצטרכי את השיעור הזה, אבל תמיד טוב להיות מוכנה. נלמד איך להסביר דברים פשוטים כמו כאב ראש או צינון. הידע הזה ייתן לך המון שקט נפשי.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Pharmacy', translation: 'בית מרקחת', category: 'בריאות', imageUrl: 'https://picsum.photos/400/300?random=79' },
      { type: ActivityType.VOCABULARY, word: 'Headache', translation: 'כאב ראש', category: 'בריאות', imageUrl: 'https://picsum.photos/400/300?random=80' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I need something for a headache', translation: 'אני צריכה משהו לכאב ראש' },
    ]
  },
  {
    id: 18,
    title: 'שיעור 18: מסעדה למתקדמות',
    description: 'את כבר שולטת בהזמנות בסיסיות, אז בואי נעלה שלב! נלמד איך לבקש את החשבון, לשאול על מרכיבים (אם יש לך אלרגיות), ולהחמיא על האוכל. כולם יחשבו שאת מקומית!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'The bill, please', translation: 'את החשבון, בבקשה', category: 'מסעדה', imageUrl: 'https://picsum.photos/400/300?random=81' },
      { type: ActivityType.VOCABULARY, word: 'Delicious', translation: 'טעים', category: 'מסעדה', imageUrl: 'https://picsum.photos/400/300?random=82' },
      { type: ActivityType.PRONUNCIATION, phrase: 'The food was delicious!', translation: 'האוכל היה טעים!' },
    ]
  },
  {
    id: 19,
    title: 'שיעור 19: בואי נזמין מונית',
    description: 'לפעמים הדרך הכי נוחה להגיע ממקום למקום היא במונית או בגרסה המקומית שלה (כמו טוק-טוק!). נלמד איך להגיד לנהג לאן את צריכה להגיע ולוודא שהכל ברור. נסיעה טובה!',
    activities: [
        { type: ActivityType.VOCABULARY, word: 'Taxi', translation: 'מונית', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=85' },
        { type: ActivityType.PRONUNCIATION, phrase: 'To the hotel, please', translation: 'למלון, בבקשה' },
        { type: ActivityType.PRONUNCIATION, phrase: 'Stop here, please', translation: 'עצור כאן, בבקשה' },
    ]
  },
  {
    id: 20,
    title: 'שיעור 20: נימוסים ביפן',
    description: 'זה שיעור בונוס מיוחד ליפן! 🇯🇵 נלמד דברים קטנים אבל סופר חשובים, כמו איך להגיד "תודה על האוכל" ועל אומנות הקידה. היפנים כל כך יעריכו את המאמץ שלך!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Bow', translation: 'קידה', category: 'תרבות', imageUrl: 'https://picsum.photos/400/300?random=88' },
      { type: ActivityType.VOCABULARY, word: 'Itadakimasu', translation: 'אני מקבל/ת את האוכל הזה (נאמר לפני ארוחה)', category: 'תרבות', imageUrl: 'https://picsum.photos/400/300?random=89' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Arigato gozaimasu', translation: 'תודה רבה (מאוד מנומס)' },
    ]
  },
  {
    id: 21,
    title: 'שיעור 21: בדרך לשדה התעופה',
    description: 'הזמן טס כשנהנים! אבל גם את הדרך לשדה התעופה צריך לדעת. נלמד לשאול על זמנים, שערים וכל מה שצריך כדי שהטיסה הביתה (או ליעד הבא!) תהיה רגועה.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Airport', translation: 'שדה תעופה', category: 'טיסה', imageUrl: 'https://picsum.photos/400/300?random=90' },
      { type: ActivityType.VOCABULARY, word: 'Flight', translation: 'טיסה', category: 'טיסה', imageUrl: 'https://picsum.photos/400/300?random=91' },
      { type: ActivityType.VOCABULARY, word: 'Gate', translation: 'שער', category: 'טיסה', imageUrl: 'https://picsum.photos/400/300?random=92' },
      { type: ActivityType.PRONUNCIATION, phrase: 'What gate is the flight to Bangkok?', translation: 'באיזה שער הטיסה לבנגקוק?' },
    ]
  },
  {
    id: 22,
    title: 'שיעור 22: נימוסים בתאילנד',
    description: 'ועכשיו בונוס לתאילנד! 🇹🇭 האנשים שם מקסימים, והם אפילו יותר יאהבו אותך כשתדעי כמה כללי נימוס בסיסיים, כמו ברכת ה-"וואי" המפורסמת. חיוך וכבוד יפתחו לך כל דלת!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Wai', translation: 'וואי (ברכת שלום תאילנדית)', category: 'תרבות', imageUrl: 'https://picsum.photos/400/300?random=93' },
      { type: ActivityType.VOCABULARY, word: 'Sawasdee ka', translation: 'שלום/להתראות (אישה אומרת)', category: 'תרבות', imageUrl: 'https://picsum.photos/400/300?random=94' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Khop khun ka', translation: 'תודה (אישה אומרת)' },
    ]
  },
  {
    id: 23,
    title: 'שיעור 23: מבחן פתע קטן!',
    description: 'הגיע הזמן לבדוק את עצמנו קצת, מה אומרת? 😉 זה משחק קצר וכיפי שיעזור לך לראות כמה למדת. בלי לחץ, זה רק כדי לחגוג את ההתקדמות המדהימה שלך!',
    activities: [
       { 
         type: ActivityType.QUIZ_IMAGE_MATCH,
         word: 'Tuk-tuk',
         options: [
           { imageUrl: 'https://picsum.photos/400/300?random=60', isCorrect: true },
           { imageUrl: 'https://picsum.photos/400/300?random=85', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=62', isCorrect: false },
         ]
       },
       { 
         type: ActivityType.QUIZ_IMAGE_MATCH,
         word: 'Sushi',
         options: [
           { imageUrl: 'https://picsum.photos/400/300?random=57', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=56', isCorrect: true },
           { imageUrl: 'https://picsum.photos/400/300?random=66', isCorrect: false },
         ]
       }
    ]
  },
  {
    id: 24,
    title: 'שיעור 24: יום בחוף הים',
    description: 'דמייני את זה: את בחוף אקזוטי בתאילנד. 🏝️ בשיעור הזה נלמד אוצר מילים שימושי ליום כזה, כמו איך לבקש שמשיה או לשאול איפה אפשר לשנרקל. את הולכת לעשות חיים!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Beach', translation: 'חוף', category: 'טבע', imageUrl: 'https://picsum.photos/400/300?random=95' },
      { type: ActivityType.VOCABULARY, word: 'Sunscreen', translation: 'קרם הגנה', category: 'בריאות', imageUrl: 'https://picsum.photos/400/300?random=96' },
      { type: ActivityType.PRONUNCIATION, phrase: 'This is a beautiful beach', translation: 'זה חוף יפהפה' },
    ]
  },
  {
    id: 25,
    title: 'שיעור 25: במקדש או באונסן',
    description: 'יפן ותאילנד מלאות במקומות קסומים ושקטים כמו מקדשים ובתי מרחץ (אונסן). נלמד כמה מילים על כללי התנהגות במקומות האלה כדי שנוכל ליהנות מהם ולכבד את התרבות המקומית.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Onsen', translation: 'מרחצאות חמים יפניים', category: 'תרבות', imageUrl: 'https://picsum.photos/400/300?random=97' },
      { type: ActivityType.VOCABULARY, word: 'Quiet, please', translation: 'שקט, בבקשה', category: 'נימוסים', imageUrl: 'https://picsum.photos/400/300?random=98' },
      { type: ActivityType.PRONUNCIATION, phrase: 'This place is amazing', translation: 'המקום הזה מדהים' },
    ]
  },
  {
    id: 26,
    title: 'שיעור 26: מחמאות ופרגונים',
    description: 'את יודעת מה תמיד עובד? לחייך ולהחמיא! בשיעור הזה נלמד איך להגיד שהאוכל טעים, שהנוף יפה, או שאת נהנית. זה יעשה לאנשים שמחה בלב ויראה להם כמה את מקסימה.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Beautiful', translation: 'יפה', category: 'מחמאות', imageUrl: 'https://picsum.photos/400/300?random=99' },
      { type: ActivityType.VOCABULARY, word: 'I like it', translation: 'אני אוהבת את זה', category: 'מחמאות', imageUrl: 'https://picsum.photos/400/300?random=100' },
      { type: ActivityType.PRONUNCIATION, phrase: 'The view is beautiful', translation: 'הנוף יפהפה' },
    ]
  },
  {
    id: 27,
    title: 'שיעור 27: כשיש בעיה קטנה',
    description: 'לפעמים דברים קטנים משתבשים, וזה בסדר גמור. קיבלת מנה לא נכונה? החדר לא נקי? נלמד איך להגיד את זה בנימוס ובלי דרמה. את תראי שישר יבואו לעזור לך.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Excuse me, there is a problem', translation: 'סליחה, יש בעיה', category: 'בעיות', imageUrl: 'https://picsum.photos/400/300?random=101' },
      { type: ActivityType.PRONUNCIATION, phrase: 'This is not what I ordered', translation: 'זה לא מה שהזמנתי' },
    ]
  },
  {
    id: 28,
    title: 'שיעור 28: חזרה על אוצר מילים - תאילנד',
    description: 'בואי נעשה ריענון קטן וממוקד לכל מה שלמדנו שרלוונטי במיוחד לתאילנד. זה יעזור לך להרגיש בטוחה במיוחד כשתנחתי שם. את כבר יודעת כל כך הרבה!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Pad Thai', translation: 'פאד תאי', category: 'אוכל תאילנדי', imageUrl: 'https://picsum.photos/400/300?random=102' },
      { type: ActivityType.VOCABULARY, word: 'Island', translation: 'אי', category: 'טבע', imageUrl: 'https://picsum.photos/400/300?random=103' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I want to go to the islands', translation: 'אני רוצה לנסוע לאיים' },
    ]
  },
  {
    id: 29,
    title: 'שיעור 29: חזרה על אוצר מילים - יפן',
    description: 'ועכשיו, חזרה ממוקדת ליפן! נרכז את המילים והמשפטים הכי חשובים שיעזרו לך להסתדר שם. הנוף, האוכל, התרבות... הכל מחכה לך ואת תהיי מוכנה!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Shinkansen', translation: 'שינקנסן (רכבת קליע)', category: 'תחבורה יפנית', imageUrl: 'https://picsum.photos/400/300?random=62' },
      { type: ActivityType.VOCABULARY, word: 'Konbini', translation: 'חנות נוחות יפנית', category: 'קניות', imageUrl: 'https://picsum.photos/400/300?random=104' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Where is the nearest konbini?', translation: 'איפה חנות הנוחות הקרובה?' },
    ]
  },
  {
    id: 30,
    title: 'שיעור 30: הכנה אחרונה לטיסה!',
    description: 'זהו, שני, הגענו לקו הסיום! את מדהימה ואני כל כך גאה בך. השיעור האחרון הוא סיכום קליל ובעיקר המון איחולי דרך צלחה. הטיול שלך הולך להיות הדבר הכי מדהים שעשית! תעשי חיים!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Ready', translation: 'מוכנה', category: 'טיול', imageUrl: 'https://picsum.photos/400/300?random=105' },
      { type: ActivityType.VOCABULARY, word: 'Adventure', translation: 'הרפתקה', category: 'טיול', imageUrl: 'https://picsum.photos/400/300?random=106' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I am ready for my adventure!', translation: 'אני מוכנה להרפתקה שלי!' },
    ]
  },
  {
    id: 31,
    title: 'שיעור 31: שואלות כמו מקצועניות',
    description: 'שני, את כבר יודעת לשאול "איך" ו"כמה", בואי נלמד לשאול "מתי" ו"למה". זה ייתן לך עוד כוח להבין הכל סביבך.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'When?', translation: 'מתי?', category: 'שאלות', imageUrl: 'https://picsum.photos/400/300?random=110' },
      { type: ActivityType.VOCABULARY, word: 'Why?', translation: 'למה?', category: 'שאלות', imageUrl: 'https://picsum.photos/400/300?random=111' },
      { type: ActivityType.PRONUNCIATION, phrase: 'When does the train leave?', translation: 'מתי הרכבת יוצאת?' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Why is the shop closed?', translation: 'למה החנות סגורה?' },
    ]
  },
  {
    id: 32,
    title: 'שיעור 32: מה עשיתי אתמול?',
    description: 'בואי נדבר על כל הדברים המדהימים שכבר הספקת לעשות! נלמד איך לספר על החוויות שלך בזמן עבר. כולם ירצו לשמוע!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Yesterday', translation: 'אתמול', category: 'זמן', imageUrl: 'https://picsum.photos/400/300?random=112' },
      { type: ActivityType.VOCABULARY, word: 'I went', translation: 'אני הלכתי', category: 'עבר', imageUrl: 'https://picsum.photos/400/300?random=113' },
      { type: ActivityType.VOCABULARY, word: 'I ate', translation: 'אני אכלתי', category: 'עבר', imageUrl: 'https://picsum.photos/400/300?random=114' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Yesterday, I went to a temple.', translation: 'אתמול הלכתי למקדש.' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I ate delicious ramen.', translation: 'אכלתי ראמן טעים.' },
    ]
  },
  {
    id: 33,
    title: 'שיעור 33: מה התכניות למחר?',
    description: 'הטיול שלך הוא הרפתקה אחת גדולה! נלמד לדבר על מה שאת מתכננת לעשות מחר. לתכנן זה חצי מהכיף!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Tomorrow', translation: 'מחר', category: 'זמן', imageUrl: 'https://picsum.photos/400/300?random=115' },
      { type: ActivityType.VOCABULARY, word: 'I will go', translation: 'אני אלך', category: 'עתיד', imageUrl: 'https://picsum.photos/400/300?random=116' },
      { type: ActivityType.VOCABULARY, word: 'I will see', translation: 'אני אראה', category: 'עתיד', imageUrl: 'https://picsum.photos/400/300?random=117' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Tomorrow I will go to Kyoto.', translation: 'מחר אני אסע לקיוטו.' },
    ]
  },
  {
    id: 34,
    title: 'שיעור 34: לתאר את העולם',
    description: 'יש כל כך הרבה מה לראות! בואי נלמד עוד מילים כדי לתאר את החוויות שלך בצורה עשירה יותר. את תראי איזה כיף זה!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Crowded', translation: 'צפוף', category: 'תיאורים', imageUrl: 'https://picsum.photos/400/300?random=118' },
      { type: ActivityType.VOCABULARY, word: 'Quiet', translation: 'שקט', category: 'תיאורים', imageUrl: 'https://picsum.photos/400/300?random=119' },
      { type: ActivityType.VOCABULARY, word: 'Modern', translation: 'מודרני', category: 'תיאורים', imageUrl: 'https://picsum.photos/400/300?random=120' },
      { type: ActivityType.VOCABULARY, word: 'Traditional', translation: 'מסורתי', category: 'תיאורים', imageUrl: 'https://picsum.photos/400/300?random=121' },
      { type: ActivityType.PRONUNCIATION, phrase: 'The market is very crowded.', translation: 'השוק מאוד צפוף.' },
    ]
  },
  {
    id: 35,
    title: 'שיעור 35: מילות חיבור',
    description: 'בואי נחבר משפטים! נלמד להשתמש במילים כמו "ו...", "אבל", "אז" כדי שהדיבור שלך ישמע טבעי וזורם. את תרגישי את ההבדל מיד.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'And', translation: 'ו...', category: 'חיבור', imageUrl: 'https://picsum.photos/400/300?random=122' },
      { type: ActivityType.VOCABULARY, word: 'But', translation: 'אבל', category: 'חיבור', imageUrl: 'https://picsum.photos/400/300?random=123' },
      { type: ActivityType.VOCABULARY, word: 'Because', translation: 'בגלל', category: 'חיבור', imageUrl: 'https://picsum.photos/400/300?random=124' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I am tired but I am happy.', translation: 'אני עייפה אבל אני שמחה.' },
    ]
  },
  {
    id: 36,
    title: 'שיעור 36: בריאות למתקדמות',
    description: 'שוב בבית המרקחת, אבל הפעם את באה מוכנה יותר! בואי נלמד לתאר דברים ספציפיים יותר כדי שתקבלי בדיוק את העזרה שאת צריכה.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Stomach ache', translation: 'כאב בטן', category: 'בריאות', imageUrl: 'https://picsum.photos/400/300?random=125' },
      { type: ActivityType.VOCABULARY, word: 'Allergy', translation: 'אלרגיה', category: 'בריאות', imageUrl: 'https://picsum.photos/400/300?random=126' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I have an allergy to peanuts.', translation: 'יש לי אלרגיה לבוטנים.' },
    ]
  },
  {
    id: 37,
    title: 'שיעור 37: שיחת טלפון ראשונה',
    description: 'זה נראה קצת מאיים, אבל את לגמרי יכולה לעשות את זה! נלמד משפטים פשוטים כדי להתקשר למלון או למסעדה. אני איתך!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'To call', translation: 'להתקשר', category: 'תקשורת', imageUrl: 'https://picsum.photos/400/300?random=127' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Hello, I would like to make a reservation.', translation: 'שלום, ארצה להזמין מקום.' },
    ]
  },
  {
    id: 38,
    title: 'שיעור 38: להבין כיוונים למתקדמות',
    description: 'לפעמים ההסברים קצת מסובכים. נלמד להבין ביטויים כמו "תעברי את..." או "זה בפינה של...". אין מצב שתלכי לאיבוד!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Go past the...', translation: 'תעברי את...', category: 'כיוונים', imageUrl: 'https://picsum.photos/400/300?random=128' },
      { type: ActivityType.VOCABULARY, word: 'On the corner', translation: 'בפינה', category: 'כיוונים', imageUrl: 'https://picsum.photos/400/300?random=129' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Go past the 7-Eleven, it\'s on the corner.', translation: 'תעברי את הסבן-אילבן, זה בפינה.' },
    ]
  },
  {
    id: 39,
    title: 'שיעור 39: עוד נימוסים והערכה',
    description: 'את כבר יודעת להגיד תודה, אבל יש עוד דרכים להראות הערכה. זה יפתח לך לבבות בכל מקום שתלכי אליו. תהיי מוכנה לקסם!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'You are very kind', translation: 'את/ה מאוד נחמד/ה', category: 'נימוסים', imageUrl: 'https://picsum.photos/400/300?random=130' },
      { type: ActivityType.VOCABULARY, word: 'I appreciate it', translation: 'אני מעריכה את זה', category: 'נימוסים', imageUrl: 'https://picsum.photos/400/300?random=131' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Thank you, you are very kind.', translation: 'תודה לך, את/ה מאוד נחמד/ה.' },
    ]
  },
  {
    id: 40,
    title: 'שיעור 40: בוחן אמצע! (2)',
    description: 'עברת עוד עשרה שיעורים, כל הכבוד! בואי נשחק משחק קטן כדי לרענן את כל מה שלמדת. את תראי שאת זוכרת הכל!',
    activities: [
       { 
         type: ActivityType.QUIZ_IMAGE_MATCH,
         word: 'Tomorrow',
         options: [
           { imageUrl: 'https://picsum.photos/400/300?random=115', isCorrect: true },
           { imageUrl: 'https://picsum.photos/400/300?random=112', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=120', isCorrect: false },
         ]
       },
       { 
         type: ActivityType.QUIZ_IMAGE_MATCH,
         word: 'Crowded',
         options: [
           { imageUrl: 'https://picsum.photos/400/300?random=119', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=121', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=118', isCorrect: true },
         ]
       }
    ]
  },
  {
    id: 41,
    title: 'שיעור 41: להתמודד עם אי הבנות',
    description: 'לפעמים לא מבינים אותנו או שאנחנו לא מבינות. זה קורה לכולם! נלמד משפטים שיעזרו לך לפתור את זה בקלות ובלי לחץ.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'I\'m sorry', translation: 'אני מצטערת', category: 'תקשורת', imageUrl: 'https://picsum.photos/400/300?random=132' },
      { type: ActivityType.VOCABULARY, word: 'I don\'t understand', translation: 'אני לא מבינה', category: 'תקשורת', imageUrl: 'https://picsum.photos/400/300?random=133' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Sorry, can you repeat that slowly?', translation: 'סליחה, אפשר לחזור על זה לאט?' },
    ]
  },
  {
    id: 42,
    title: 'שיעור 42: שיעור בישול',
    description: 'דמייני שאת בשיעור בישול תאילנדי! נלמד מילים שימושיות כמו "לחתוך", "לערבב", "חריף", "מתוק". את חוזרת הביתה שפית!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'To chop', translation: 'לחתוך', category: 'בישול', imageUrl: 'https://picsum.photos/400/300?random=134' },
      { type: ActivityType.VOCABULARY, word: 'To mix', translation: 'לערבב', category: 'בישול', imageUrl: 'https://picsum.photos/400/300?random=135' },
      { type: ActivityType.VOCABULARY, word: 'Sweet', translation: 'מתוק', category: 'טעמים', imageUrl: 'https://picsum.photos/400/300?random=136' },
      { type: ActivityType.PRONUNCIATION, phrase: 'First, we chop the vegetables.', translation: 'קודם, אנחנו חותכים את הירקות.' },
    ]
  },
  {
    id: 43,
    title: 'שיעור 43: במוזיאון',
    description: 'מוכנה לקצת תרבות? נלמד כמה מילים שיעזרו לך בביקור במוזיאון או גלריה. זה יעשה את החוויה להרבה יותר מעניינת.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Museum', translation: 'מוזיאון', category: 'תרבות', imageUrl: 'https://picsum.photos/400/300?random=137' },
      { type: ActivityType.VOCABULARY, word: 'Painting', translation: 'ציור', category: 'אמנות', imageUrl: 'https://picsum.photos/400/300?random=138' },
      { type: ActivityType.PRONUNCIATION, phrase: 'No photos, please.', translation: 'נא לא לצלם, בבקשה.' },
    ]
  },
  {
    id: 44,
    title: 'שיעור 44: שכירת קטנוע',
    description: 'להרגיש את הרוח בשיער על קטנוע בתאילנד? חלום! נלמד את כל מה שצריך לדעת כדי לשכור קטנוע בבטחה. קדימה, להרפתקה!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'To rent', translation: 'לשכור', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=139' },
      { type: ActivityType.VOCABULARY, word: 'Helmet', translation: 'קסדה', category: 'בטיחות', imageUrl: 'https://picsum.photos/400/300?random=140' },
      { type: ActivityType.VOCABULARY, word: 'Driver\'s license', translation: 'רישיון נהיגה', category: 'מסמכים', imageUrl: 'https://picsum.photos/400/300?random=141' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I want to rent a scooter for one day.', translation: 'אני רוצה לשכור קטנוע ליום אחד.' },
    ]
  },
  {
    id: 45,
    title: 'שיעור 45: כשהרכבת מתעכבת',
    description: 'לפעמים דברים לא הולכים לפי התכנית, וזה בסדר. נלמד מה להגיד כשהרכבת מאחרת או כשפספסת את האוטובוס. את תדעי להסתדר!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Delayed', translation: 'מתעכב / מאחר', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=142' },
      { type: ActivityType.VOCABULARY, word: 'I missed the bus', translation: 'פספסתי את האוטובוס', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=143' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Excuse me, is my train delayed?', translation: 'סליחה, האם הרכבת שלי מתעכבת?' },
    ]
  },
  {
    id: 46,
    title: 'שיעור 46: לשלוח גלויה הביתה',
    description: 'איזה כיף לשלוח גלויה למשפחה ולחברים! נלמד איך לבקש בול ולשלוח גלויה מיפן או תאילנד. הם כל כך ישמחו!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Post office', translation: 'סניף דואר', category: 'שירותים', imageUrl: 'https://picsum.photos/400/300?random=144' },
      { type: ActivityType.VOCABULARY, word: 'Postcard', translation: 'גלויה', category: 'שירותים', imageUrl: 'https://picsum.photos/400/300?random=145' },
      { type: ActivityType.VOCABULARY, word: 'Stamp', translation: 'בול', category: 'שירותים', imageUrl: 'https://picsum.photos/400/300?random=146' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I want to send a postcard to Israel.', translation: 'אני רוצה לשלוח גלויה לישראל.' },
    ]
  },
  {
    id: 47,
    title: 'שיעור 47: יום כביסה',
    description: 'גם בטיול ארוך צריך לפעמים לעשות כביסה. זה אולי נשמע משעמם, אבל זה חלק מהחוויה! נלמד את כל המילים שצריך.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Laundry', translation: 'כביסה', category: 'סידורים', imageUrl: 'https://picsum.photos/400/300?random=147' },
      { type: ActivityType.VOCABULARY, word: 'Washing machine', translation: 'מכונת כביסה', category: 'סידורים', imageUrl: 'https://picsum.photos/400/300?random=148' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Where is the nearest laundromat?', translation: 'איפה המכבסה הקרובה?' },
    ]
  },
  {
    id: 48,
    title: 'שיעור 48: מקרה חירום מתקדם',
    description: 'אני יודעת שזה לא נעים, אבל הידע הזה ייתן לך המון כוח וביטחון. נלמד משפטים חשובים למקרה שהארנק נגנב או שצריך להגיע לשגרירות.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'My wallet was stolen', translation: 'גנבו לי את הארנק', category: 'חירום', imageUrl: 'https://picsum.photos/400/300?random=149' },
      { type: ActivityType.VOCABULARY, word: 'Embassy', translation: 'שגרירות', category: 'חירום', imageUrl: 'https://picsum.photos/400/300?random=150' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Can you call the police for me?', translation: 'אפשר להתקשר למשטרה בשבילי?' },
    ]
  },
  {
    id: 49,
    title: 'שיעור 49: לדבר על תחביבים',
    description: 'לדבר על מה שאת אוהבת לעשות זו דרך מעולה להתחבר לאנשים! בואי נלמד איך לספר על התחביבים שלך, כמו צילום או טיולים.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Hobby', translation: 'תחביב', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=151' },
      { type: ActivityType.VOCABULARY, word: 'I like photography', translation: 'אני אוהבת צילום', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=152' },
      { type: ActivityType.PRONUNCIATION, phrase: 'What are your hobbies?', translation: 'מה התחביבים שלך?' },
    ]
  },
  {
    id: 50,
    title: 'שיעור 50: בוחן גדול! (3)',
    description: 'הגעת לשיעור 50! זה מדהים! את תותחית! בואי נחגוג עם עוד משחק קטן וכיפי. אני כל כך גאה בהתקדמות שלך.',
    activities: [
       { 
         type: ActivityType.QUIZ_IMAGE_MATCH,
         word: 'Helmet',
         options: [
           { imageUrl: 'https://picsum.photos/400/300?random=139', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=140', isCorrect: true },
           { imageUrl: 'https://picsum.photos/400/300?random=141', isCorrect: false },
         ]
       },
       { 
         type: ActivityType.QUIZ_IMAGE_MATCH,
         word: 'Postcard',
         options: [
           { imageUrl: 'https://picsum.photos/400/300?random=146', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=144', isCorrect: false },
           { imageUrl: 'https://picsum.photos/400/300?random=145', isCorrect: true },
         ]
       }
    ]
  },
  {
    id: 51,
    title: 'שיעור 51: כתיבת ביקורת טובה',
    description: 'נהנית במלון או במסעדה? בואי נלמד איך להשאיר להם ביקורת טובה באינטרנט. זה יעזור להם מאוד וזו דרך נפלאה להגיד תודה.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Review', translation: 'ביקורת', category: 'אינטרנט', imageUrl: 'https://picsum.photos/400/300?random=153' },
      { type: ActivityType.VOCABULARY, word: 'Great service', translation: 'שירות מעולה', category: 'מחמאות', imageUrl: 'https://picsum.photos/400/300?random=154' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Great service and delicious food.', translation: 'שירות מעולה ואוכל טעים.' },
    ]
  },
  {
    id: 52,
    title: 'שיעור 52: נסיעות ארוכות',
    description: 'לפעמים צריך לנסוע רחוק באוטובוס לילה או רכבת שינה. נלמד את אוצר המילים שיעזור לך להפוך את הנסיעה לנוחה ונעימה.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Overnight bus', translation: 'אוטובוס לילה', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=155' },
      { type: ActivityType.VOCABULARY, word: 'Sleeper train', translation: 'רכבת שינה', category: 'תחבורה', imageUrl: 'https://picsum.photos/400/300?random=156' },
      { type: ActivityType.PRONUNCIATION, phrase: 'What time is the arrival?', translation: 'מה שעת ההגעה?' },
    ]
  },
  {
    id: 53,
    title: 'שיעור 53: דיבורים על מזג האוויר',
    description: 'לדבר על מזג האוויר זו דרך קלאסית לפתוח שיחה. חם? יורד גשם? בואי נלמד את המילים כדי שתמיד יהיה לך על מה לדבר!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Weather', translation: 'מזג אוויר', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=157' },
      { type: ActivityType.VOCABULARY, word: 'Hot', translation: 'חם', category: 'מזג אוויר', imageUrl: 'https://picsum.photos/400/300?random=158' },
      { type: ActivityType.VOCABULARY, word: 'Raining', translation: 'יורד גשם', category: 'מזג אוויר', imageUrl: 'https://picsum.photos/400/300?random=159' },
      { type: ActivityType.PRONUNCIATION, phrase: 'The weather is very hot today.', translation: 'מזג האוויר חם מאוד היום.' },
    ]
  },
  {
    id: 54,
    title: 'שיעור 54: מה יש בתיק שלך?',
    description: 'בואי נדבר על כל הדברים החשובים שיש לך בתיק. זה תרגול טוב וגם יעזור לך אם אי פעם תצטרכי להסביר מה חסר לך.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Backpack', translation: 'תיק גב', category: 'חפצים', imageUrl: 'https://picsum.photos/400/300?random=160' },
      { type: ActivityType.VOCABULARY, word: 'Phone', translation: 'טלפון', category: 'חפצים', imageUrl: 'https://picsum.photos/400/300?random=161' },
      { type: ActivityType.VOCABULARY, word: 'Water bottle', translation: 'בקבוק מים', category: 'חפצים', imageUrl: 'https://picsum.photos/400/300?random=162' },
      { type: ActivityType.PRONUNCIATION, phrase: 'My phone is in my backpack.', translation: 'הטלפון שלי בתיק.' },
    ]
  },
  {
    id: 55,
    title: 'שיעור 55: לבקש המלצה',
    description: 'הדרך הכי טובה לגלות מקומות סודיים היא לבקש המלצה ממקומיים! נלמד איך לשאול על מסעדה טובה או מקום יפה לראות.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Recommendation', translation: 'המלצה', category: 'שיחה', imageUrl: 'https://picsum.photos/400/300?random=163' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Can you recommend a good restaurant?', translation: 'תוכל/י להמליץ על מסעדה טובה?' },
      { type: ActivityType.PRONUNCIATION, phrase: 'What is your favorite place here?', translation: 'מה המקום האהוב עליך פה?' },
    ]
  },
  {
    id: 56,
    title: 'שיעור 56: בילוי לילי',
    description: 'מוכנה לצאת לשתות משהו? בואי נלמד איך להזמין בירה או קוקטייל בבר. זה שיעור כיפי במיוחד לסוף היום.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Bar', translation: 'בר', category: 'בילוי', imageUrl: 'https://picsum.photos/400/300?random=164' },
      { type: ActivityType.VOCABULARY, word: 'Beer', translation: 'בירה', category: 'שתיה', imageUrl: 'https://picsum.photos/400/300?random=165' },
      { type: ActivityType.VOCABULARY, word: 'Cocktail', translation: 'קוקטייל', category: 'שתיה', imageUrl: 'https://picsum.photos/400/300?random=166' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Another beer, please.', translation: 'עוד בירה, בבקשה.' },
    ]
  },
  {
    id: 57,
    title: 'שיעור 57: סיכום מקיף - תאילנד',
    description: 'ריכזתי לך את כל המילים והמשפטים הכי חשובים לתאילנד. זה ריענון אחרון לפני הנחיתה. את הולכת להיות מלכה שם!',
    activities: [
      { type: ActivityType.PRONUNCIATION, phrase: 'Sawasdee ka, one pad thai please, not spicy.', translation: 'שלום, פאד תאי אחד בבקשה, לא חריף.' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Khop khun ka, can you give me a discount?', translation: 'תודה, אפשר הנחה?' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I want to go to the beach.', translation: 'אני רוצה ללכת לחוף הים.' },
    ]
  },
  {
    id: 58,
    title: 'שיעור 58: סיכום מקיף - יפן',
    description: 'ועכשיו, סיכום מיוחד ליפן! כל מה שאת צריכה כדי לכבוש את ארץ השמש העולה. אני יודעת שתהיי מדהימה שם.',
    activities: [
      { type: ActivityType.PRONUNCIATION, phrase: 'Sumimasen, where is the subway station?', translation: 'סליחה, איפה תחנת הרכבת התחתית?' },
      { type: ActivityType.PRONUNCIATION, phrase: 'Arigato gozaimasu, the food was delicious.', translation: 'תודה רבה, האוכל היה טעים.' },
      { type: ActivityType.PRONUNCIATION, phrase: 'I would like to go to the onsen.', translation: 'אני ארצה ללכת לאונסן.' },
    ]
  },
  {
    id: 59,
    title: 'שיעור 59: לחלוק את החוויה',
    description: 'כשחוזרים הביתה, כולם ישאלו איך היה. בואי נלמד איך לסכם את הטיול המדהים שלך בכמה משפטים. זה יהיה כיף להיזכר בהכל.',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'Amazing trip', translation: 'טיול מדהים', category: 'סיכום', imageUrl: 'https://picsum.photos/400/300?random=167' },
      { type: ActivityType.VOCABULARY, word: 'Unforgettable', translation: 'בלתי נשכח', category: 'סיכום', imageUrl: 'https://picsum.photos/400/300?random=168' },
      { type: ActivityType.PRONUNCIATION, phrase: 'It was an unforgettable adventure.', translation: 'זו הייתה הרפתקה בלתי נשכחת.' },
    ]
  },
  {
    id: 60,
    title: 'שיעור 60: את מוכנה!',
    description: 'שני, זהו. סיימת את כל השיעורים. אני לא יכולה להיות יותר גאה בך! עברת דרך מדהימה, למדת המון, ואת מוכנה לגמרי לכבוש את העולם. הטיול הזה שלך, תיהני מכל רגע. את אלופה!',
    activities: [
      { type: ActivityType.VOCABULARY, word: 'I am ready', translation: 'אני מוכנה', category: 'סיום', imageUrl: 'https://picsum.photos/400/300?random=169' },
      { type: ActivityType.VOCABULARY, word: 'Let\'s go!', translation: 'יאללה!', category: 'סיום', imageUrl: 'https://picsum.photos/400/300?random=170' },
      { type: ActivityType.PRONUNCIATION, phrase: 'My adventure begins now!', translation: 'ההרפתקה שלי מתחילה עכשיו!' },
    ]
  }
];
