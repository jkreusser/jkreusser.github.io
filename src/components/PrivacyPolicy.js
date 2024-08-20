import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    const adressText = t('adress').split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    const hosterAdress = t('hosting-provider-details').split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <section className="max-w-screen-2xl mx-auto flex flex-col justify-center mt-24 mb-16 md:mb-48 px-8 md:px-16">
            <h1 className='mb-8 text-4xl w-full'>{t('privacy-policy')}</h1>
            <hr className='border-white/10 w-full mb-16'></hr>
            <div className="space-y-4 lg:w-1/2">
                <h2 className="text-lg font-semibold mb-2">1 {t('privacy-overview-heading')}</h2>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('general-notice-heading-small')}</h3>
                <p>{t('general-notice-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('data-collection-heading')}</h3>
                <h4 className="pt-4 font-bold">{t('responsible-party-heading')}</h4>
                <p>{t('responsible-party-text')}</p>
                <h4 className="pt-4 font-bold">{t('data-collection-method-heading')}</h4>
                <p>{t('data-collection-method-text-1')}</p>
                <p>{t('data-collection-method-text-2')}</p>
                <h4 className="pt-4 font-bold">{t('data-use-heading')}</h4>
                <p>{t('data-use-text')}</p>
                <h4 className="pt-4 font-bold">{t('data-rights-heading')}</h4>
                <p>{t('data-rights-text-1')}</p>
                <p>{t('data-rights-text-2')}</p>
                <h2 className="text-lg font-semibold pt-16 mb-2">2 {t('hosting-heading')}</h2>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('external-hosting-heading')}</h3>
                <p>{t('external-hosting-text-1')}</p>
                <p>{t('external-hosting-text-2')}</p>
                <p>{t('external-hosting-text-3')}</p>
                <p>{t('external-hosting-text-4')}</p>
                <p>{hosterAdress}</p>
                <h2 className="text-lg font-semibold pt-16 mb-2">3 {t('general-notice-heading')}</h2>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('data-protection-heading')}</h3>
                <p>{t('data-protection-text-1')}</p>
                <p>{t('data-protection-text-2')}</p>
                <p>{t('data-protection-text-3')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('responsible-party-notice-heading')}</h3>
                <p>{t('responsible-party-text-2')}</p>
                <p>{adressText}</p>
                <p>{t('e-mail')}</p>
                <p>{t('responsible-party-definition')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('storage-duration-heading')}</h3>
                <p>{t('storage-duration-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('legal-basis-heading')}</h3>
                <p>{t('legal-basis-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('data-recipients-heading')}</h3>
                <p>{t('data-recipients-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('consent-withdrawal-heading')}</h3>
                <p>{t('consent-withdrawal-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('objection-rights-heading')}</h3>
                <p>{t('objection-rights-text-1')}</p>
                <p>{t('objection-rights-text-2')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('complaint-right-heading')}</h3>
                <p>{t('complaint-right-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('data-portability-right-heading')}</h3>
                <p>{t('data-portability-right-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('access-right-heading')}</h3>
                <p>{t('access-right-text')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('processing-restriction-right-heading')}</h3>
                <p>{t('processing-restriction-right-text-1')}</p>
                <ul className='list-disc pl-4'>
                    <li className='pt-4'>{t('processing-restriction-right-li-1')}</li>
                    <li className='pt-4'>{t('processing-restriction-right-li-2')}</li>
                    <li className='pt-4'>{t('processing-restriction-right-li-3')}</li>
                    <li className='pt-4'>{t('processing-restriction-right-li-4')}</li>
                </ul>
                <p>{t('processing-restriction-right-text-2')}</p>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('ssl-tls-encryption-heading')}</h3>
                <p>{t('ssl-tls-encryption-text-1')}</p>
                <p>{t('ssl-tls-encryption-text-2')}</p>
                <h2 className="text-lg font-semibold pt-16 mb-2">4 {t('plugins-tools-heading')}</h2>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('vimeo-tracking-heading')}</h3>
                <p>{t('vimeo-tracking-text-1')}</p>
                <p>{t('vimeo-tracking-text-2')}</p>
                <p>{t('vimeo-tracking-text-3')}</p>
                <p>{t('vimeo-tracking-text-4')}</p>
                <p>{t('vimeo-tracking-text-5')}</p>
                <p>{t('vimeo-tracking-text-6')}</p>
            </div>
        </section>
    );
}

export default PrivacyPolicy;
