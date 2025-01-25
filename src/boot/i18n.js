// // import { defineBoot } from '#q-app/wrappers'
// // import { createI18n } from 'vue-i18n'
// // import messages from 'src/i18n'

// // export default defineBoot(({ app }) => {

// //   const i18n = createI18n({
// //     locale: 'fa-IR',
// //     fallbackLocale: 'en-US',  // زبان پشتیبان
// //     messages,
// //   })

// //   // Set i18n instance on app
// //   app.use(i18n)
// // })
// import { defineBoot } from '#q-app/wrappers';
// import { createI18n } from 'vue-i18n';
// import messages from 'src/i18n';

// export default defineBoot(({ app }) => {
//   // دریافت زبان ذخیره‌شده یا زبان پیش‌فرض مرورگر
//   const savedLocale = localStorage.getItem('locale') || (navigator.language.startsWith('fa') ? 'fa-IR' : 'en-US');

//   // نمونه i18n
//   const i18n = createI18n({
//     locale: savedLocale, // زبان اولیه
//     fallbackLocale: 'en-US', // زبان جایگزین در صورت نبود ترجمه
//     messages, // فایل پیام‌ها
//     missing: (locale, key) => {
//       console.warn(`[i18n] Missing translation for key "${key}" in locale "${locale}"`);
//       return key; // کلید ترجمه به عنوان متن پیش‌فرض
//     },
//   });

//   // تغییر زبان و ذخیره آن
//   app.config.globalProperties.$changeLocale = (newLocale) => {
//     i18n.global.locale = newLocale;
//     localStorage.setItem('locale', newLocale);
//   };

//   // اتصال i18n به Vue
//   app.use(i18n);
// });

import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

export default defineBoot(({ app }) => {
  // دریافت زبان ذخیره‌شده یا زبان پیش‌فرض مرورگر
  const savedLocale = localStorage.getItem('locale') || (navigator.language.startsWith('fa') ? 'fa-IR' : 'en-US');

  // نمونه i18n
  const i18n = createI18n({
    locale: savedLocale, // زبان اولیه
    fallbackLocale: 'en-US', // زبان جایگزین در صورت نبود ترجمه
    messages, // فایل پیام‌ها
    missing: (locale, key) => {
      console.warn(`[i18n] Missing translation for key "${key}" in locale "${locale}"`);
      return key; // کلید ترجمه به عنوان متن پیش‌فرض
    },
  });

  // تغییر زبان و ذخیره آن
  app.config.globalProperties.$changeLocale = (newLocale) => {
    i18n.global.locale = newLocale;
    localStorage.setItem('locale', newLocale);
  };

  // اتصال i18n به Vue
  app.use(i18n);

  // اضافه کردن کلاس RTL یا LTR به Body برای استایل‌ها
  app.config.globalProperties.$isRtl = savedLocale === 'fa-IR';
  document.body.classList.toggle('rtl', app.config.globalProperties.$isRtl);
});


