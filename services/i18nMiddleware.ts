import en from '../public/locales/en.json'; // Import all language files
import de from '../public/locales/de.json';
import no from '../public/locales/no.json';
import et from '../public/locales/et.json';
// Import other language files...

type TranslationKey = keyof typeof en; // Use "en" as the default language

export const langs = ["en", "de", "no", "et"]

const locales: Record<string, typeof en> = {
    en,
    de,
    no,
    et
    // Other languages...
};

// Function to get the translated value based on key and locale
export const t = (key: TranslationKey, locale: string,  ...params: any[]): string => {
    const selectedLocale = locales[locale] || en;
    let translation = selectedLocale[key] || locales.en[key] || key;

    // Replace placeholders with provided parameters
    if (params.length > 0) {
        params.forEach((param, index) => {
            translation = translation.replace(`{${index}}`, param);
        });
    }

    return translation;
};
