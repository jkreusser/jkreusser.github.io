import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonaKit = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-screen-2xl mx-auto flex flex-col justify-center mt-24 mb-32 md:mb-64 px-8 md:px-16">
            <img src="/personakit/personakit_cover.webp" alt="PersonaKit Cover" className='object-contain w-full h-auto' />
            <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-16 md:mb-24'>
                {/* Container for sticky content */}
                <div className='lg:w-1/4 flex flex-col gap-8 mt-8 mb-16 lg:my-0'>
                    <div className='lg:sticky top-24 flex flex-col gap-8'>
                        <hr className='border-white/10 w-full'></hr>
                        <h1 className='text-4xl w-full mb-8'>PersonaKit</h1>
                        <p>{t('personakit-description')}</p>
                        <div className='flex flex-col gap-2'>
                            <h2 className="uppercase text-base leading-6">Service</h2>
                            <p className='text-white/50'>Design Research, User Journeys / Flows, User Experience, User Interface, Brand Design, Motion Design, Prototypes, Development</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="uppercase text-base leading-6">{t('industry')}</h2>
                            <p className='text-white/50'>{t('personakit-industry')}</p>
                        </div>
                        <a href="https://personak.it/" className="uppercase px-4 py-2 flex items-center hover:bg-white hover:text-black rounded-full border border-white/10 hover-path w-fit" target="_blank" rel="noopener noreferrer">
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
                    <img src="/personakit/personakit_styleguide.webp" alt="PersonaKit Styleguide" className='object-contain w-full h-auto' />
                    <div className="relative pt-[56.25%]">
                        <iframe
                            src="https://player.vimeo.com/video/999348080?h=19dd9fe9e2&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&muted=1&dnt=1"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture">
                        </iframe>
                    </div>
                    <div className='flex flex-row gap-8 w-full'>
                        <div>
                            <img src="/personakit/personakit_logo_1.webp" alt="PersonaKit Logo 1" className='object-contain w-full h-auto' />
                        </div>
                        <div>
                            <img src="/personakit/personakit_logo_2.webp" alt="PersonaKit Logo 2" className='object-contain w-full h-auto' />
                        </div>
                    </div>
                    <img src="/personakit/personakit_customer_journey.webp" alt="PersonaKit Customer Journey" className='object-contain w-full h-auto' />
                    <img src="/personakit/personakit_generator.webp" alt="PersonaKit Generator" className='object-contain w-full h-auto' />
                    <div className='flex flex-row gap-8 w-full'>
                        <div>
                            <img src="/personakit/personakit_chat.webp" alt="PersonaKit Chat" className='object-contain w-full h-auto' />
                        </div>
                        <div>
                            <img src="/personakit/personakit_testimonial.webp" alt="PersonaKit Testimonial" className='object-contain w-full h-auto' />
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
                <a href="/dentaltechnik-weber">
                    <img src="/weber/weber_cover.webp" alt="Dentaltechnik Weber Cover" className='object-contain w-full h-auto' />
                </a>
            </div>
        </section>
    );
}

export default PersonaKit;
