import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
    { nameKey: 'work', href: '/#work' },
    { nameKey: 'process', href: '/#process' },
    { nameKey: 'profile', href: '/#profile' },
    { nameKey: 'service', href: '/#service' },
    { nameKey: 'contact', href: 'mailto:info@joschka-kreusser.de', hasIcon: true },
];

const Navigation = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='max-w-screen-2xl w-full mt-16 flex justify-between items-center px-8 md:px-16'>
            <Link to="/">
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9203 0H13.2891V32H23.9203V0Z" fill="white" />
                    <path d="M26.5781 10.6667V0H37.2093L26.5781 10.6667Z" fill="white" />
                    <path d="M37.2093 32H26.5781V21.3333L37.2093 32Z" fill="white" />
                    <path d="M5.31561 21.3333C8.24983 21.3333 10.6312 23.7227 10.6312 26.6667V32H0V26.6667C0 23.7227 2.3814 21.3333 5.31561 21.3333Z" fill="white" />
                </svg>
            </Link>
            <div className='lg:hidden flex items-center'>
                <button onClick={toggleMenu} className='focus:outline-none'>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="square" />
                    </svg>
                </button>
            </div>
            <ul className={`fixed inset-0 bg-black z-10 flex flex-col items-center justify-center space-y-6 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:flex lg:flex-row lg:space-y-0 lg:space-x-8 lg:bg-transparent lg:translate-x-0`}>
                <li className='lg:hidden absolute top-16 right-8 md:right-16'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="square" />
                        </svg>
                    </button>
                </li>
                {navItems.map((item, index) => (
                    <li key={index} className='flex items-center'>
                        <Link
                            to={item.href}
                            className={`cursor-pointer uppercase px-4 py-2 flex items-center hover:bg-white hover:text-black rounded-full ${item.hasIcon ? 'border border-white/10 hover-path' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {t(item.nameKey)}
                            {item.hasIcon && (
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
                            )}
                        </Link>
                    </li>
                ))}
                <li className="pt-2 lg:pt-0"><LanguageSwitcher /></li>
            </ul>
        </nav>
    );
};

export default Navigation;
