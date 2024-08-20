import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DentaltechnikWeber = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-screen-2xl mx-auto flex flex-col justify-center mt-24 mb-32 md:mb-64 px-8 md:px-16">
            <img src="/weber/weber_cover.webp" alt="Dentaltechnik Weber Cover" className='object-contain w-full h-auto' />
            <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-16 md:mb-24'>
                {/* Container for sticky content */}
                <div className='lg:w-1/4 flex flex-col gap-8 mt-8 mb-16 lg:my-0'>
                    <div className='lg:sticky top-24 flex flex-col gap-8'>
                        <hr className='border-white/10 w-full'></hr>
                        <h1 className='text-4xl w-full mb-8'>Dentaltechnik Weber</h1>
                        <p>{t('weber-description')}</p>
                        <div className='flex flex-col gap-2'>
                            <h2 className="uppercase text-base leading-6">Service</h2>
                            <p className='text-white/50'>Corporate Identity, Brand Design, Visual Communication</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="uppercase text-base leading-6">{t('industry')}</h2>
                            <p className='text-white/50'>{t('weber-industry')}</p>
                        </div>
                        <a href="/" className="hidden uppercase px-4 py-2 items-center hover:bg-white hover:text-black rounded-full border border-white/10 hover-path w-fit" target="_blank" rel="noopener noreferrer">
                            {t('view-site')}
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='ml-2'
                            >
                                <path d="M1 1H9V9" stroke="white" />
                                <path d="M1.15997 8.84L8.99997 1" stroke="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Right-side content */}
                <div className='lg:w-3/4 flex flex-col gap-8'>
                    <img src="/weber/weber_business_cards.webp" alt="Dentaltechnik Weber Business Cards" className='object-contain w-full h-auto' />
                    <img src="/weber/weber_letter.webp" alt="Dentaltechnik Weber Letter" className='object-contain w-full h-auto' />
                    <div className='flex flex-col sm:flex-row gap-8 w-full'>
                        <div>
                            <img src="/weber/weber_social_media.webp" alt="Dentaltechnik Weber Social Media" className='object-contain w-full h-auto' />
                        </div>
                        <div>
                            <img src="/weber/weber_favicon.webp" alt="Dentaltechnik Weber Favicon" className='object-contain w-full h-auto' />
                        </div>
                    </div>
                    <img src="/weber/weber_shirts.webp" alt="Dentaltechnik Weber Shirts" className='object-contain w-full h-auto' />
                </div>
            </div>
            {/* Next project section */}
            <div className='mt-16 md:mt-24 flex flex-col gap-24'>
                <div>
                    <h2 className='text-4xl w-full mb-8'>{t('next-project')}</h2>
                    <hr className='border-white/10 w-full'></hr>
                </div>
                <Link to="/shape-up">
                    <img src="/shapeup/shapeup_cover.webp" alt="Shape Up Cover" className='object-contain w-full h-auto' />
                </Link>
            </div>
        </section>
    );
}

export default DentaltechnikWeber;
