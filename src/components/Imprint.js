import React from 'react';
import { useTranslation } from 'react-i18next';

const Imprint = () => {
    const { t } = useTranslation();

    const adressText = t('adress').split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <section className="max-w-screen-2xl mx-auto flex flex-col justify-center mt-24 mb-16 md:mb-48 px-8 md:px-16">
            <h1 className='mb-8 text-4xl w-full'>{t('imprint')}</h1>
            <hr className='border-white/10 w-full mb-16'></hr>
            <div className='flex flex-col md:flex-row gap-8 md:gap-32'>
                <div className='flex flex-col gap-8 md:w-1/2'>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{t('information-heading')}</h2>
                        <p>{adressText}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{t('contact')}</h2>
                        <p>Email: {t('e-mail')}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{t('vat-id-heading')}</h2>
                        <p>{t('vat-id-paragraph')}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 md:w-1/2'>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{t('eu-resolution-heading')}</h2>
                        <p className='max-w-2xl'>{t('eu-resolution-praragraph-1')} <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>https://ec.europa.eu/consumers/odr/</a>. {t('eu-resolution-praragraph-2')}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{t('consumer-resolution-heading')}</h2>
                        <p className='max-w-2xl'>{t('consumer-resolution-paragraph')} (<a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>https://www.verbraucher-schlichter.de</a>).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Imprint;
