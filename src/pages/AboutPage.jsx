import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import heroImg from '../assets/about-hero.svg';
import BenefitsSection from '../components/sections/BenefitsSection';
// import FounderSection from '../components/sections/FounderSection';
import Mission from '../components/sections/Mission';

import AboutGetStartedSection from '../components/sections/AboutGetStartedSection';
import Features from '../components/Features';

import PageLayout from '../layout/PageLayout';
const AboutPage = () => {
  const heroInfo = {
    hero: 'homepage',
    h1: 'COMFORT, SAFETY AND EXCELLENCE OUR PRIORITY',
    p1: 'Comfortable accommodations, centrally located and friendly atmosphere the only thing missing is you.',
    p2: '',
    btn: null,
  };

  return (
    <PageLayout pageTitle="About">
      <HeroSection
        heroImg={heroImg}
        heading={heroInfo.h1}
        subHeading={heroInfo.p1}
        otherText={heroInfo.p2}
        btnText={heroInfo.btn}
      />
      <BenefitsSection />
      <Mission />
      <AboutGetStartedSection />
      <Features />
    </PageLayout>
  );
};

export default AboutPage;
