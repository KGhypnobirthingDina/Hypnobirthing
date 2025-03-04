import React from "react";
import styles from "./About.module.css";
import Contact from "./Contact";
import imgSrc from "../dina-img.jpeg";
export default function About() {
  return (
    <div className={styles.container}>
      <h2>:קצת עליי </h2>

      <img src={imgSrc} alt="About Me" />
      <p>
        שלום, שמי דינה לויטן תורגמן אימא לארבעה ילדים, גרה במודיעין. מדריכת הכנה
        ללידה בשיטת לידה רכה היפנוברת'ינג, מורה לביולוגיה, מדעי הסביבה וחינוך
        מיוחד. בלידות של ארבעת ילדי השתמשתי בנשימות והדימויים של שיטת
        ההיפנוברת'ינג וחוויתי לידות עוצמתיות ורכות שהותירו בי חוויה מדהימה ורצון
        ללמוד להיות מדריכת היפנוברת'ינג כדי להעניק את הידע והכלים ליולדות רבות
        נוספות. אני מאמינה שלידה היא דבר עוצמתי ביותר שבסופו מגיע לעולם תינוק
        מדהים שמוליד אימא ומשפחה. התנאים הטובים ביותר ללידה הם כאשר קיים רוגע
        וביטחון של האם והצוות המלווה. בשיטת ההיפנוברת'ינג אנו לומדים על תהליך
        הלידה מבחינה פיסיולוגית, מנטלית ונפשית. בקורס נתמודד עם הפחדים שעולים
        בהריון לקראת הלידה ונמיר אותם לחשיבה חיובית ומקדמת ללידה. תקבלו כלים
        אפקטיביים ללידה רכה, יעילה וממוקדת שאף עשויה להיות ללא כאב. אני מזמינה
        אתכן לבוא וללמוד, לעבור תהליך מעצים לקראת הלידה שייתן לכם כלים לחיים
        עצמם
      </p>
      <p></p>
      <Contact />
    </div>
  );
}
