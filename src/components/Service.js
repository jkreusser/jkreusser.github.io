import React from 'react';
import { useTranslation } from 'react-i18next';

const Service = () => {
    const { t } = useTranslation();

    return (
        <section id="service" className="max-w-screen-2xl mx-auto flex flex-col items-start justify-center text-left mt-32 md:mt-48 mb-16 md:mb-48 px-8 md:px-16">
            <h2 className='mb-8 text-4xl'>Service</h2>
            <hr className='border-white/10 w-full'></hr>
            <div className="flex flex-col md:flex-row w-full justify-between items-stretch md:gap-8 lg:gap-24">
                <div className="flex flex-col items-start gap-16 py-24 flex-1">
                    <h3 className="uppercase text-2xl md:text-base md:leading-6">1 {t('strategy')}</h3>
                    <ul className='flex flex-col gap-1'>
                        <li className="text-white/50">Creative Lead</li>
                        <li className="text-white/50">Design Research</li>
                        <li className="text-white/50">Competitor Analysis</li>
                        <li className="text-white/50">User Journeys / Flows</li>
                        <li className="text-white/50">Mind Mapping</li>
                        <li className="text-white/50">Personas</li>
                    </ul>
                </div>
                <div className="w-[1px] bg-white/10 hidden md:block"></div>
                <div className="h-[1px] bg-white/10 md:hidden"></div>
                <div className="flex flex-col items-start gap-16 py-24 flex-1">
                    <h3 className="uppercase text-2xl md:text-base md:leading-6">2 Design</h3>
                    <ul className='flex flex-col gap-1'>
                        <li className="text-white/50">User Experience (UX)</li>
                        <li className="text-white/50">User Interface (UI)</li>
                        <li className="text-white/50">Brand Design</li>
                        <li className="text-white/50">Motion Design</li>
                        <li className="text-white/50">Visual Communication</li>
                        <li className="text-white/50">Prototypes</li>
                    </ul>
                </div>
                <div className="w-[1px] bg-white/10 hidden md:block"></div>
                <div className="h-[1px] bg-white/10 md:hidden"></div>
                <div className="flex flex-col items-start gap-16 py-24 flex-1">
                    <h3 className="uppercase text-2xl md:text-base md:leading-6">3 {t('development')}</h3>
                    <ul className='flex flex-col gap-1'>
                        <li className="text-white/50">Front End Development</li>
                        <li className="text-white/50">Content Management Systems</li>
                        <li className="text-white/50">Version Management</li>
                        <li className="text-white/50">eCommerce</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Service;
