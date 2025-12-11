import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Funktion, um zum oberen Rand der Seite zu scrollen
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Für sanftes Scrollen
        });
    }

    const { t } = useTranslation();

    const footerText = t('footer').split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <footer className='max-w-screen-2xl mx-auto flex flex-col justify-center px-8 md:px-16 pt-32 md:pt-48 pb-16'>
            <span className='text-[2rem] leading-[2rem] sm:text-[4rem] sm:leading-[4rem] lg:text-[6rem] lg:leading-[6rem] 2xl:text-[8rem] 2xl:leading-[8rem] text-black'>{footerText}</span>
            <div className='mt-8 flex justify-end'>
                <p className='md:max-w-[387px] uppercase text-base leading-6 text-black font-medium'>
                    {t('outreach')}
                </p>
            </div>
            <Link to='mailto:info@joschka-kreusser.de' className='text-black border border-black uppercase px-6 py-6 mt-8 md:mt-24 flex flex-row justify-center items-center hover:bg-black hover:text-white rounded-full md:text-2xl gap-2 hover-path-white cursor-pointer'>
                {t('call-to-action')}
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='ml-2 h-4 w-4'
                >
                    <path d="M1 1H9V9" stroke="black" />
                    <path d="M1.15997 8.84L8.99997 1" stroke="black" />
                </svg>
            </Link>
            <div className='flex flex-col-reverse sm:flex-row justify-between sm:items-center mt-32 md:mt-48 sm:gap-8'>
                <span className='text-black py-2 mt-8 sm:mt-0'>
                    &copy;{currentYear} Joschka Kreusser, All Rights Reserved
                </span>
                <nav className='w-full md:w-fit'>
                    <ul className='flex flex-col sm:flex-row gap-2 sm:gap-8 items-start sm:items-center'>
                        <li className='text-black flex flex-row items-center justify-start gap-2 sm:py-2 cursor-pointer' onClick={scrollToTop}>
                            <svg className="stroke-black" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05023 7.70712L7.70709 2.05027L13.3639 7.70712" stroke="border-current" />
                                <path d="M7.70711 13.1377V2.05028" stroke="border-current" />
                            </svg>
                            {t('back-to-top')}
                        </li>
                        <Link to="/imprint">
                            <li className='text-black sm:py-2 cursor-pointer'>{t('imprint')}</li>
                        </Link>
                        <Link to="/privacy-policy">
                            <li className='text-black sm:py-2 cursor-pointer'>{t('privacy-policy')}</li>
                        </Link>
                        <Link to="/terms">
                            <li className='text-black sm:py-2 cursor-pointer'>{t('terms')}</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
