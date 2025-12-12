import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Imprint from './components/Imprint';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Service from './components/Service';
import Profile from './components/Profile';
import Work from './components/Work';
import Process from './components/Process';
import PersonaKit from './work/PersonaKit';
import DentaltechnikWeber from './work/DentaltechnikWeber';
import ShapeUp from './work/ShapeUp';
import Lottie from 'lottie-react';
import logoAnimation from './lottie/logoAnimation.json';
import { useState, useEffect, createRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const location = useLocation();
  const [firstLoad, setFirstLoad] = useState(true);
<<<<<<< HEAD
  const [showAnimation, setShowAnimation] = useState(true); // Zustand für die Logo-Animation
  const [isHomepage, setIsHomepage] = useState(true); // Zustand für Homepage-Status

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomepage(true); // Setze isHomepage auf true, wenn die aktuelle Route die Homepage ist
    } else {
      setIsHomepage(false); // Setze isHomepage auf false, wenn die aktuelle Route nicht die Homepage ist
    }

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Hash ohne #
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setShowAnimation(false); // Animation nicht anzeigen, wenn zu IDs navigiert wird
    } else {
      window.scrollTo(0, 0);
      setShowAnimation(true); // Animation anzeigen bei Seitenwechsel
=======
  const nodeRef = createRef(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
>>>>>>> main
    }
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App flex flex-col items-center w-full">
      <Navigation />
      <TransitionGroup className="w-full">
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={1100}
          classNames="black-screen"
        >
          {state => (
            <div ref={nodeRef} className="relative w-full h-full">
              <Routes location={location} className="w-full">
                <Route
                  path="/"
                  element={
                    <>
                      <Helmet>
                        <title>{t('home-seo-title')}</title>
                        <meta name="description" content={t('home-seo-description')} />
                        <meta property="og:title" content={t('home-seo-title')} />
                        <meta property="og:description" content={t('home-seo-description')} />
                        <meta property="og:image" content="/android-chrome-512x512.png" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/" />
                      </Helmet>
                      <Header />
                      <main>
                        <Work />
                        <Process />
                        <Profile />
                        <Service />
                      </main>
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
                <Route
                  path="/imprint"
                  element={
                    <>
                      <Helmet>
                        <title>{t('imprint-seo-title')}</title>
                        <meta name="description" content={t('imprint-seo-description')} />
                        <meta property="og:title" content={t('imprint-seo-title')} />
                        <meta property="og:description" content={t('imprint-seo-description')} />
                        <meta property="og:image" content="/android-chrome-512x512.png" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/imprint" />
                      </Helmet>
                      <Imprint />
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <>
                      <Helmet>
                        <title>AGB | Joschka Kreusser</title>
                        <meta name="description" content="Allgemeine Geschäftsbedingungen von Joschka Kreusser - Webdesign & Entwicklung in München." />
                        <meta property="og:title" content="AGB | Joschka Kreusser" />
                        <meta property="og:description" content="Allgemeine Geschäftsbedingungen von Joschka Kreusser." />
                        <meta property="og:image" content="/android-chrome-512x512.png" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/terms" />
                      </Helmet>
                      <TermsAndConditions />
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
                <Route
                  path="/privacy-policy"
                  element={
                    <>
                      <Helmet>
                        <title>{t('privacy-seo-title')}</title>
                        <meta name="description" content={t('privacy-seo-description')} />
                        <meta property="og:title" content={t('privacy-seo-title')} />
                        <meta property="og:description" content={t('privacy-seo-description')} />
                        <meta property="og:image" content="/android-chrome-512x512.png" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/privacy-policy" />
                      </Helmet>
                      <PrivacyPolicy />
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
                <Route
                  path="/personakit"
                  element={
                    <>
                      <Helmet>
                        <title>{t('personakit-seo-title')}</title>
                        <meta name="description" content={t('personakit-seo-description')} />
                        <meta property="og:title" content={t('personakit-seo-title')} />
                        <meta property="og:description" content={t('personakit-seo-description')} />
                        <meta property="og:image" content="/personakit/personakit_cover.webp" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/personakit" />
                      </Helmet>
                      <PersonaKit />
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
                <Route
                  path="/dentaltechnik-weber"
                  element={
                    <>
                      <Helmet>
                        <title>{t('weber-seo-title')}</title>
                        <meta name="description" content={t('weber-seo-description')} />
                        <meta property="og:title" content={t('weber-seo-title')} />
                        <meta property="og:description" content={t('weber-seo-description')} />
                        <meta property="og:image" content="/weber/weber_cover.webp" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/dentaltechnik-weber" />
                      </Helmet>
                      <DentaltechnikWeber />
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
                <Route
                  path="/shape-up"
                  element={
                    <>
                      <Helmet>
                        <title>{t('shapeup-seo-title')}</title>
                        <meta name="description" content={t('shapeup-seo-description')} />
                        <meta property="og:title" content={t('shapeup-seo-title')} />
                        <meta property="og:description" content={t('shapeup-seo-description')} />
                        <meta property="og:image" content="/shapeup/shapeup_cover.webp" />
                        <link rel="canonical" href="https://www.joschka-kreusser.de/shape-up" />
                      </Helmet>
                      <ShapeUp />
                      <section className='w-full bg-white'>
                        <Footer />
                      </section>
                    </>
                  }
                />
              </Routes>
              {(firstLoad || state === 'entering' || state === 'exiting') && showAnimation && !isHomepage && ( // Animation nur anzeigen, wenn showAnimation true ist und nicht auf Homepage
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                  <Lottie animationData={logoAnimation} style={{ height: '200px', width: '200px' }} />
                </div>
              )}
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default function Root() {
  return (
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  );
}