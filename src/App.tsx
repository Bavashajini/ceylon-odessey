import { useState } from 'react';
import { SRI_LANKA_DISTRICTS } from './data/sriLankaDistricts';
import { District, CurrencyCode } from './types/travel';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DistrictExplorer } from './components/DistrictExplorer';
import { DistrictModal } from './components/DistrictModal';
import { TransportGuide } from './components/TransportGuide';
import { HotelStayOptions } from './components/HotelStayOptions';
import { BudgetEstimator } from './components/BudgetEstimator';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { PartnerAndContact } from './components/PartnerAndContact';
import { Footer } from './components/Footer';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Prefill states for Partner & Contact Form
  const [contactDistrict, setContactDistrict] = useState<string>('');
  const [contactTier, setContactTier] = useState<string>('');
  const [contactDetails, setContactDetails] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingModal = (districtName?: string) => {
    if (districtName) {
      setContactDistrict(districtName);
      setContactDetails(`I am interested in exploring ${districtName} and nearby attractions.`);
    }
    scrollToSection('partner-contact');
  };

  const handleBookTransport = (transportName: string) => {
    setContactDetails(`I would like to inquire about booking: ${transportName}.`);
    scrollToSection('partner-contact');
  };

  const handleBookHotel = (hotelName: string, tier: string) => {
    setContactTier(tier);
    setContactDetails(`I would like to reserve accommodation at "${hotelName}" (${tier}).`);
    scrollToSection('partner-contact');
  };

  const handleGenerateQuote = (details: {
    days: number;
    travelers: number;
    tier: string;
    transport: string;
    totalUSD: number;
  }) => {
    setContactTier(details.tier);
    setContactDetails(
      `Trip Plan Estimate: ${details.days} Days for ${details.travelers} Guests with ${details.tier} accommodation and ${details.transport}. Estimated budget: $${details.totalUSD.toLocaleString()}. Please assist with customized itinerary details.`
    );
    scrollToSection('partner-contact');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-800 selection:text-white">
      {/* Top Header */}
      <Header
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSearch={(query) => {
            setSearchQuery(query);
            scrollToSection('districts');
          }}
          onExploreDistricts={() => scrollToSection('districts')}
          onOpenEstimator={() => scrollToSection('estimator')}
        />

        {/* District Explorer with Popup on Picture Click */}
        <DistrictExplorer
          districts={SRI_LANKA_DISTRICTS}
          currency={currency}
          selectedSearchQuery={searchQuery}
          onSelectDistrict={(district) => setSelectedDistrict(district)}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* Transport Facilities Guide */}
        <TransportGuide
          currency={currency}
          onBookTransport={handleBookTransport}
        />

        {/* Hotel Stay Options (Small, Medium, High) */}
        <HotelStayOptions
          currency={currency}
          onBookHotel={handleBookHotel}
        />

        {/* Interactive Trip Cost Calculator */}
        <BudgetEstimator
          currency={currency}
          onGenerateQuote={handleGenerateQuote}
        />

        {/* Reviews and FAQs */}
        <ReviewsAndFaq />

        {/* Dedicated Partner & Contact Coordination Hub */}
        <PartnerAndContact
          prefillDistrict={contactDistrict}
          prefillTier={contactTier}
          prefillDetails={contactDetails}
        />
      </main>

      {/* District Detail Modal Popup */}
      <DistrictModal
        district={selectedDistrict}
        currency={currency}
        onClose={() => setSelectedDistrict(null)}
        onBookDistrict={(districtName) => handleOpenBookingModal(districtName)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
