import React from 'react';
import Image from 'next/image'; // Import Image separately
import HomeNavBar from './components/user/Homepage/HomeNavBar';
import CardVideoSection from './components/user/Homepage/CardVideoSection';
import Banner from './components/user/Homepage/Banner'; // Import Banner component
import Footer from './components/user/Homepage/Footer';

export default function Home() {
  return (
    <main className="">
        <HomeNavBar />
      <Banner />
      <CardVideoSection />
      <Footer />
   
    </main>
  );
}

