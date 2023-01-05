import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';

const PageLayout = ({ children, pageTitle }) => {
  document.title = `J's Hostel Plaza - ${pageTitle && pageTitle}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
