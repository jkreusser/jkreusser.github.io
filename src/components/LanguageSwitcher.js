import React, { useState } from 'react';
import i18n from '../i18n';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState(i18n.language);

    const handleToggle = () => {
        const newLanguage = language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <div className="flex items-center cursor-pointer">
            <div
                className="relative inline-block w-18 h-10 align-middle select-none transition duration-200 ease-in"
                onClick={handleToggle}
            >
                <div className="block overflow-hidden h-10 rounded-full bg-white/10"></div>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between px-3">
                    <span className={`text-xs font-bold ${language === 'en' ? 'text-white/50' : 'text-white/50'}`}>EN</span>
                    <span className={`text-xs font-bold ${language === 'de' ? 'text-white/50' : 'text-white/50'}`}>DE</span>
                </div>
                <div className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white transition-transform duration-200 ease-in-out transform ${language === 'de' ? 'translate-x-full' : ''}`}>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
