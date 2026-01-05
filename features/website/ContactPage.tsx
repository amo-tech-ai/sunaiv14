
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactHero from './components/contact/ContactHero';
import ContactBooking from './components/contact/ContactBooking';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <ContactHero />
      <ContactBooking />
      <Footer />
    </div>
  );
};

export default ContactPage;
