# NextJS_with_nagishli_3.0-beta
 
תוסף נגיש-לי עם Next-JS:

התקנת תוסף נגיש לי בגרסאת 3.0 בטא עם NextJS (framework for react) בגרסאת 12.3.1 .

ניתן לראות דוגמה בגיטהאב בקישור:
 --------------------

שלבי התקנה:

1. יש להעביר את כל תכני תיקיית התוסף (תיקיית nagishli files והקובץ nagishi\_beta.js) אל תיקיית public.
 \* בגיטהאב המצורף התיקייה נקראת nagishut\_v3\_beta.


2. יש לייבא את רכיב הScript של נקסט בתחילת הקובץ \_app.js בעזרת השורה:
 import Script from 'next/Script'


3. בקובץ \_app.js יש לוודא כי מוחזר בreturn רכיב ריאקט או div (\<\>\</\> או \<div\> \</div\>)


4. עדיין בקובץ \_app.js , בתחתית הסוגר של רכיב הריאקט או הdiv (בהתאם למה ששמתם), לפני התגית הסוגרת, יש להכניס את הקוד הבא\*:

\<Script

id='nagish\_v3\_beta'

dangerouslySetInnerHTML={{

\_\_html: `

nagishli\_config = {

// Plugin language, you can choose "en" for English, and "he" for Hebrew

language: "en",

// Currently, you can choose from Blue, Red, Green, Purple, Pink, Yellow, Gray, Orange, Brown, Turquoise and Black

color: "Blue",

//addon not supports position at time of upload - check nagishli documentations for latest updates

nl\_pos: "br"

};

`

}}\>\</Script\>

\<Script src="/nagishut\_v3\_beta/nagishli\_beta.js?v=3.0b" defer\>\</Script\>

1. \* שימו לב - יש לשנות את המיקום של "/nagishut\_v3\_beta/nagishli\_beta.js?v=3.0b" בתגית הסקריפט השנייה למיקום של הקובץ nagishli\_beta.js וכן להוסיף לכתובת ?v=3.0b ממש כמו בדוגמה.