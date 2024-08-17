import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';

const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
};

// Ermitteln der bevorzugten Sprache des Browsers
const getBrowserLanguage = () => {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('de') ? 'de' : 'en'; // Standard auf Englisch, außer es ist Deutsch
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getBrowserLanguage(), // Setze die Sprache basierend auf der Browsereinstellung
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
