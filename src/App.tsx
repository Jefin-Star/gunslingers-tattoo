import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { SchoolSection } from './components/SchoolSection';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedArtist, setSelectedArtist] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToBooking = (artist?: string, service?: string) => {
    if (artist) setSelectedArtist(artist);
    if (service) setSelectedService(service);
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onPortfolioClick={scrollToPortfolio}
        />

        {/* 3. About Our Studio & Safety Standards */}
        <About />

        {/* 4. Artist Portfolio with Modal Zoom */}
        <Portfolio
          onBookSpecific={(artist, style) => {
            scrollToBooking(artist, style ? `Custom Tattoo (${style})` : undefined);
          }}
        />

        {/* 5. Our Services & Highlighted Bio Pricing */}
        <Services
          onBookService={(serviceName) => {
            scrollToBooking(undefined, serviceName);
          }}
        />

        {/* 6. Tattoo School & Diploma Training */}
        <SchoolSection
          onApplyClick={() => {
            scrollToBooking(undefined, 'Tattoo Training');
          }}
        />

        {/* 7. Booking / Consultation Form */}
        <BookingForm
          initialArtist={selectedArtist}
          initialService={selectedService}
        />

        {/* 8. Contact Us & Interactive Google Maps */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
