/**
 * Simple i18n utility for R‑Shell.
 *
 * This module provides a tiny internationalisation helper that can be
 * extended over time. It defines a central translations registry and a
 * helper function to resolve strings by key. When a translation is not
 * available for the requested locale, the default English text will be
 * returned instead. See the individual locale modules in this folder for
 * examples of how to structure your translations.
 */

export type SupportedLocale = 'en' | 'zh';

/**
 * Translations registry keyed by locale. Each locale maps to a flat
 * dictionary of message keys to translated strings. New locales can be
 * added by extending this object and providing a corresponding module
 * alongside this file (see `en.ts` and `zh.ts`).
 */
export const translations: Record<SupportedLocale, Record<string, string>> = {
  en: {},
  zh: {},
};

/**
 * Looks up a translated string by key for the specified locale.
 *
 * If the key cannot be resolved for the given locale, the function
 * gracefully falls back to the default English translation. When no
 * translation is available at all, the key itself will be returned.
 *
 * @param key A dot‑separated lookup key (e.g. `welcome.getStarted`).
 * @param locale The ISO language code to resolve. Defaults to `'en'`.
 */
export function t(key: string, locale: SupportedLocale = 'en'): string {
  const localeMap = translations[locale] || {};
  const enMap = translations.en || {};
  return localeMap[key] ?? enMap[key] ?? key;
}

/**
 * Registers a translations map for a locale. This helper allows locale
 * modules to lazily extend the global registry without mutating it
 * directly from consumer code. It should be called once per locale
 * module to merge its contents into the `translations` object.
 *
 * @param locale The locale to register (e.g. `'en'`, `'zh'`).
 * @param messages An object mapping keys to translated strings.
 */
export function registerLocale(
  locale: SupportedLocale,
  messages: Record<string, string>,
): void {
  translations[locale] = {
    ...(translations[locale] || {}),
    ...messages,
  };
}
