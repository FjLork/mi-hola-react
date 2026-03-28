export const texts = {
  es: {
 getAppTitle: "Mi aplicación React",
 getFooterText: "© 2026 Mi app 12",

}

export const getI18n = (lang = 'es') => texts[lang] || texts.es
