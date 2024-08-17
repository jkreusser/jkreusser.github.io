import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Work = () => {
    const { t } = useTranslation();

    return (
        <section id="work" className="max-w-screen-2xl w-full mx-auto flex flex-col items-start justify-center text-left my-16 md:my-32 px-8 md:px-16">
            <h2 className='mb-8 text-4xl'>{t('work')}</h2>
            <hr className='border-white/10 w-full' />
            <div className="relative group w-full">
                <Link to="/personakit" className="relative block text-4xl lg:text-6xl font-extralight px-8 2xl:px-16 py-16 md:py-24 text-white overflow-hidden group-hover:text-black transition-colors duration-[800ms]">
                    PersonaKit - Web App Design & Development
                    <span className="absolute inset-0 bg-white transition-transform duration-[800ms] transform -translate-x-full group-hover:translate-x-0 z-[-1]"></span>
                </Link>
            </div>
            <hr className='border-white/10 w-full' />
            <div className="relative group w-full">
                <Link to="/dentaltechnik-weber" className="relative block text-4xl lg:text-6xl font-extralight px-8 2xl:px-16 py-16 md:py-24 text-white overflow-hidden group-hover:text-black transition-colors duration-[800ms]">
                    Dentaltechnik Weber - Corporate Identity
                    <span className="absolute inset-0 bg-white transition-transform duration-[800ms] transform -translate-x-full group-hover:translate-x-0 z-[-1]"></span>
                </Link>
            </div>
            <hr className='border-white/10 w-full' />
            <div className="relative group w-full">
                <Link to="/shape-up" className="relative block text-4xl lg:text-6xl font-extralight px-8 2xl:px-16 py-16 md:py-24 text-white overflow-hidden group-hover:text-black transition-colors duration-[800ms]">
                    Shape Up - App Design
                    <span className="absolute inset-0 bg-white transition-transform duration-[800ms] transform -translate-x-full group-hover:translate-x-0 z-[-1]"></span>
                </Link>
            </div>
            <hr className='border-white/10 w-full' />
        </section>
    );
}

export default Work;
