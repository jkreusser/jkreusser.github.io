import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    const headerText = t('header').split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <section className='max-w-screen-2xl mx-auto flex flex-col justify-center my-32 px-8 md:px-16 mt-24 mb-32'>
            <span className='text-[2rem] leading-[2rem] sm:text-[4rem] sm:leading-[4rem] lg:text-[6rem] lg:leading-[6rem] 2xl:text-[10rem] 2xl:leading-[10rem]'>{headerText}</span>
            {/*
                    <Link>
                        <div className='hover-path flex justify-center items-center w-24 h-24 hover:border hover:border-black hover:bg-white bg-black rounded-full'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 2H37V38" stroke="white" stroke-width="3" />
                                <path d="M1.72015 37.28L37.0002 2" stroke="white" stroke-width="3" />
                            </svg>
                        </div>
                    </Link>
                    */}
            <div className='mt-8 flex justify-end'> <p className='md:max-w-[387px] uppercase leading-6'>{t('specialization')}</p></div>
        </section >
    );
}

export default Header;
