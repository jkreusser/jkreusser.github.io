import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsAndConditions = () => {
    const { t } = useTranslation();

    const revocationTo = t('revocation-form-to').split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <section className="max-w-screen-2xl mx-auto flex flex-col justify-center mt-24 mb-16 md:mb-48 px-8 md:px-16">
            <h1 className='mb-8 text-4xl w-full'>{t('terms-heading')}</h1>
            <hr className='border-white/10 w-full mb-16'></hr>
            <div className="space-y-4 lg:w-1/2">
                <p>{t('terms-date')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-1-heading')}</h3>
                <p>{t('terms-1-1')}</p>
                <p>{t('terms-1-2')}</p>
                <p>{t('terms-1-3')}</p>
                <p>{t('terms-1-4')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-2-heading')}</h3>
                <p>{t('terms-2-1')}</p>
                <p>{t('terms-2-2')}</p>
                <p>{t('terms-2-3')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-3-heading')}</h3>
                <p>{t('terms-3-1')}</p>
                <p>{t('terms-3-2')}</p>
                <p>{t('terms-3-3')}</p>
                <p>{t('terms-3-4')}</p>
                <p>{t('terms-3-5')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-4-heading')}</h3>
                <p>{t('terms-4-1')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-5-heading')}</h3>
                <p>{t('terms-5-1')}</p>
                <p>{t('terms-5-2')}</p>
                <p>{t('terms-5-3')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-6-heading')}</h3>
                <p>{t('terms-6-1')}</p>
                <p>{t('terms-6-2')}</p>
                <p>{t('terms-6-3')}</p>
                <p>{t('terms-6-4')}</p>
                <p>{t('terms-6-5')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-7-heading')}</h3>
                <p>{t('terms-7-1')}</p>
                <p>{t('terms-7-2')}</p>
                <p>{t('terms-7-3')}</p>
                <p>{t('terms-7-4')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-8-heading')}</h3>
                <p>{t('terms-8-1')}</p>
                <p>{t('terms-8-2')}</p>
                <p>{t('terms-8-3')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-9-heading')}</h3>
                <p>{t('terms-9-1')}</p>
                <p>{t('terms-9-2')}</p>
                <p>{t('terms-9-3')}</p>
                <p>{t('terms-9-4')}</p>
                <p>{t('terms-9-5')}</p>
                <p>{t('terms-9-6')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-10-heading')}</h3>
                <p>{t('terms-10-1')}</p>
                <p>{t('terms-10-2')}</p>
                <p>{t('terms-10-3')}</p>
                <p>{t('terms-10-4')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-11-heading')}</h3>
                <p>{t('terms-11-1')}</p>
                <p>{t('terms-11-2')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-12-heading')}</h3>
                <p>{t('terms-12-1')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-13-heading')}</h3>
                <p>{t('terms-13-1')}</p>
                <p>{t('terms-13-2')}</p>
                <p>{t('terms-13-3')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-14-heading')}</h3>
                <p>{t('terms-14-1')}</p>

                <h3 className="pt-8 font-bold text-2xl md:text-base md:leading-6">{t('terms-15-heading')}</h3>
                <p>{t('terms-15-1')}</p>
                <p>{t('terms-15-2')}</p>
                <p>{t('terms-15-3')}</p>

                <h2 className="text-lg font-semibold pt-16 mb-2">{t('revocation-heading')}</h2>
                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('revocation-right-heading')}</h3>
                <p>{t('revocation-right-text-1')}</p>
                <p>{t('revocation-right-text-2')}</p>
                <p>{t('revocation-right-text-3')}</p>
                <p>{t('revocation-right-text-4')}</p>

                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('revocation-consequences-heading')}</h3>
                <p>{t('revocation-consequences-text-1')}</p>
                <p>{t('revocation-consequences-text-2')}</p>

                <h3 className="pt-8 uppercase text-2xl md:text-base md:leading-6">{t('revocation-expiry-heading')}</h3>
                <p>{t('revocation-expiry-text')}</p>

                <h2 className="text-lg font-semibold pt-16 mb-2">{t('revocation-form-heading')}</h2>
                <p>{t('revocation-form-text-1')}</p>
                <p>{revocationTo}</p>
                <p>{t('revocation-form-text-2')}</p>
                <p>{t('revocation-form-ordered')}</p>
                <p>{t('revocation-form-name')}</p>
                <p>{t('revocation-form-address')}</p>
                <p>{t('revocation-form-signature')}</p>
                <p>{t('revocation-form-date')}</p>
                <p>{t('revocation-form-note')}</p>
            </div>
        </section>
    );
}

export default TermsAndConditions;
