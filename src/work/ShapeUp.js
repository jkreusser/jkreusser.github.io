import React from 'react';
import { useTranslation } from 'react-i18next';

const ShapeUp = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-screen-2xl mx-auto flex flex-col justify-center mt-24 mb-32 md:mb-64 px-8 md:px-16">
            <img src="/shapeup/shapeup_cover.webp" alt="Shape Up Cover" className='object-contain w-full h-auto' />
            <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-16 md:mb-24'>
                {/* Container for sticky content */}
                <div className='lg:w-1/4 flex flex-col gap-8 mt-8 mb-16 lg:my-0'>
                    <div className='lg:sticky top-24 flex flex-col gap-8'>
                        <hr className='border-white/10 w-full'></hr>
                        <h1 className='text-4xl w-full mb-8'>Shape Up</h1>
                        <p>{t('shapeup-description')}</p>
                        <div className='flex flex-col gap-2'>
                            <h2 className="uppercase text-base leading-6">Service</h2>
                            <p className='text-white/50'>App Design, User Experience, User Interface, Brand Design, Prototypes</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="uppercase text-base leading-6">{t('industry')}</h2>
                            <p className='text-white/50'>{t('shapeup-industry')}</p>
                        </div>
                        <a href="https://personak.it/" className="hidden uppercase px-4 py-2 items-center hover:bg-white hover:text-black rounded-full border border-white/10 hover-path w-fit" target="_blank" rel="noopener noreferrer">
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
                    <div className='flex flex-row gap-8 w-full'>
                        <div>
                            <img src="/shapeup/shapeup_font.webp" alt="Shape Up Font" className='object-contain w-full h-auto' />
                        </div>
                        <div>
                            <img src="/shapeup/shapeup_icon.webp" alt="Shape Up Icon" className='object-contain w-full h-auto' />
                        </div>
                    </div>
                    <img src="/shapeup/shapeup_overview.webp" alt="Shape Up Overview" className='object-contain w-full h-auto' />
                    <div className='flex flex-row gap-8 w-full'>
                        <div>
                            <img src="/shapeup/shapeup_schedule.webp" alt="Shape Up Schedule" className='object-contain w-full h-auto' />
                        </div>
                        <div>
                            <img src="/shapeup/shapeup_watch.webp" alt="Shape Up Watch" className='object-contain w-full h-auto' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Next project section */}
            <div className='mt-16 md:mt-24 flex flex-col gap-24'>
                <div>
                    <h2 className='text-4xl w-full mb-8'>{t('next-project')}</h2>
                    <hr className='border-white/10 w-full'></hr>
                </div>
                <a href="/personakit">
                    <img src="/personakit/personakit_cover.webp" alt="PersonaKit Cover" className='object-contain w-full h-auto' />
                </a>
            </div>
        </section>
    );
}

export default ShapeUp;
