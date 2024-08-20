import React from 'react';
import Lottie from 'lottie-react';
import strategyAnimation from '../lottie/strategyAnimation.json';
import designAnimation from '../lottie/designAnimation.json';
import developmentAnimation from '../lottie/developmentAnimation.json';
import { useTranslation } from 'react-i18next';

const Process = () => {
    const { t } = useTranslation();

    return (
        <section id="process" className="max-w-screen-2xl mx-auto flex flex-col items-start justify-center text-left my-32 md:my-48 px-8 md:px-16">
            <h2 className='mb-8 text-4xl'>{t('process')}</h2>
            <hr className='border-white/10 w-full' />
            <div className="flex flex-col md:flex-row w-full justify-between items-stretch md:gap-8 lg:gap-24">
                <div className="flex flex-col items-start gap-16 py-24 flex-1">
                    <div className='w-full flex justify-center'>
                        <Lottie
                            animationData={strategyAnimation}
                            loop={true}
                            autoplay={true}
                            style={{ height: 'auto', width: '80%' }}
                        />
                    </div>
                    <h3 className="uppercase text-2xl md:text-base md:leading-6">1 {t('discussion')}</h3>
                    <p className='text-white/50 max-w-[272px]'>{t('discussion-text')}</p>
                </div>
                <div className="w-[1px] bg-white/10 hidden md:block"></div>
                <div className="h-[1px] bg-white/10 md:hidden"></div>
                <div className="flex flex-col items-start gap-16 py-24 flex-1">
                    <div className='w-full flex justify-center'>
                        <Lottie
                            animationData={designAnimation}
                            loop={true}
                            autoplay={true}
                            style={{ height: 'auto', width: '80%' }}
                        />
                    </div>
                    <h3 className="uppercase text-2xl md:text-base md:leading-6">2 {t('ideation')}</h3>
                    <p className='text-white/50 max-w-[272px]'>{t('ideation-text')}</p>
                </div>
                <div className="w-[1px] bg-white/10 hidden md:block"></div>
                <div className="h-[1px] bg-white/10 md:hidden"></div>
                <div className="flex flex-col items-start gap-16 py-24 flex-1">
                    <div className='w-full flex justify-center'>
                        <Lottie
                            animationData={developmentAnimation}
                            loop={true}
                            autoplay={true}
                            style={{ height: 'auto', width: '80%' }}
                        />
                    </div>
                    <h3 className="uppercase text-2xl md:text-base md:leading-6">3 {t('execution')}</h3>
                    <p className='text-white/50 max-w-[272px]'>{t('execution-text')}</p>
                </div>
            </div>
        </section>
    );
}

export default Process;
