import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Car, Building2, User, CheckCircle2, ArrowRight } from 'lucide-react';

interface PartnerAndContactProps {
  prefillDistrict?: string;
  prefillTier?: string;
  prefillDetails?: string;
}

export const PartnerAndContact: React.FC<PartnerAndContactProps> = ({
  prefillDistrict = '',
  prefillTier = '',
  prefillDetails = '',
}) => {
  const [activeTab, setActiveTab] = useState<'traveler' | 'taxi' | 'hotel'>('traveler');

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState(prefillDistrict || 'Kandy');
  const [tier, setTier] = useState(prefillTier || 'Medium / Comfort');
  const [guestCount, setGuestCount] = useState('2');
  const [vehicleType, setVehicleType] = useState('Toyota KDH Van');
  const [licenseStatus, setLicenseStatus] = useState('SLTDA Certified');
  const [propertyRooms, setPropertyRooms] = useState('8');
  const [notes, setNotes] = useState(prefillDetails || '');
  const [submitted, setSubmitted] = useState(false);

  // Sync if prefilled props change
  React.useEffect(() => {
    if (prefillDistrict) setDistrict(prefillDistrict);
    if (prefillTier) setTier(prefillTier);
    if (prefillDetails) setNotes(prefillDetails);
  }, [prefillDistrict, prefillTier, prefillDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  return (
    <section id="partner-contact" className="py-16 sm:py-24 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Coordination & Work Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Contact Numbers for Travellers, Taxi Owners & Hotel Managers
          </h2>
          <p className="mt-3 text-stone-300 text-base leading-relaxed">
            We operate dedicated hotlines and partnership desks. Whether you are an international traveler planning your dream island holiday, a licensed call taxi owner looking to join our tour fleet, or a hotel manager wishing to list your property, connect with our team directly.
          </p>
        </div>

        {/* 3 Dedicated Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* 1. For Travellers */}
          <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between hover:border-emerald-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-400 flex items-center justify-center mb-4">
                <User className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                For International Travellers
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                24/7 Island Holiday Concierge
              </h3>
              <p className="text-xs text-stone-300 mb-4 leading-relaxed">
                Custom itineraries, blue train reservations, airport pickups, and budget-friendly stay options across all 25 districts.
              </p>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">24/7 Hotline:</span>
                    <a href="tel:+94112345678" className="font-mono text-white font-bold text-sm hover:text-amber-400 transition-colors">
                      +94 11 234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">WhatsApp Emergency Desk:</span>
                    <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="font-mono text-emerald-300 font-bold hover:underline">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="font-mono text-stone-300">trips@ceylonodyssey.lk</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('traveler');
                const formElem = document.getElementById('coordination-form');
                formElem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Traveler Booking Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. For Call Taxi & Chauffeur Owners */}
          <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between hover:border-amber-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 text-amber-400 flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                For Call Taxi & Chauffeur Owners
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Join Our Island Tour Fleet
              </h3>
              <p className="text-xs text-stone-300 mb-4 leading-relaxed">
                Partner with us to receive regular weekly airport transfers and multi-day island tour assignments with guaranteed prompt settlement.
              </p>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Fleet Operations Hotline:</span>
                    <a href="tel:+94718882345" className="font-mono text-white font-bold text-sm hover:text-amber-400 transition-colors">
                      +94 71 888 2345
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Fleet Dispatch WhatsApp:</span>
                    <a href="https://wa.me/94718882346" target="_blank" rel="noopener noreferrer" className="font-mono text-emerald-300 font-bold hover:underline">
                      +94 71 888 2346
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="font-mono text-stone-300">fleet@ceylonodyssey.lk</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('taxi');
                const formElem = document.getElementById('coordination-form');
                formElem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Driver Registration Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. For Hotel & Villa Managers */}
          <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between hover:border-sky-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                For Hotel & Villa Managers
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                List Property & Direct Placements
              </h3>
              <p className="text-xs text-stone-300 mb-4 leading-relaxed">
                Connect your boutique hotel, eco-homestay, or 5-star resort with incoming international travelers without exorbitant OTA platform cuts.
              </p>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Hotel Partnerships Line:</span>
                    <a href="tel:+94815557890" className="font-mono text-white font-bold text-sm hover:text-amber-400 transition-colors">
                      +94 81 555 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Hotel Contracting WhatsApp:</span>
                    <a href="https://wa.me/94815557891" target="_blank" rel="noopener noreferrer" className="font-mono text-emerald-300 font-bold hover:underline">
                      +94 81 555 7891
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="font-mono text-stone-300">hotels@ceylonodyssey.lk</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('hotel');
                const formElem = document.getElementById('coordination-form');
                formElem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2 bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Hotel Onboarding Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Coordination & Registration Form Container */}
        <div id="coordination-form" className="bg-stone-800 rounded-2xl border border-stone-700 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-700 mb-8">
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                Online Coordination & Registration Portal
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Select your role below to submit an inquiry or partnership proposal to our Colombo team.
              </p>
            </div>

            {/* Segmented Switcher Controls */}
            <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-xl border border-stone-700">
              <button
                type="button"
                onClick={() => { setActiveTab('traveler'); setSubmitted(false); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'traveler' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                I Am a Traveller
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('taxi'); setSubmitted(false); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'taxi' ? 'bg-amber-600 text-stone-950 font-bold shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                Call Taxi Owner
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('hotel'); setSubmitted(false); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'hotel' ? 'bg-sky-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                Hotel Manager
              </button>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-display text-white mb-2">
                Inquiry Received Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Thank you, <strong className="text-white">{name || 'Partner'}</strong>. Our Sri Lanka travel coordinator has logged your request and will call/WhatsApp you at <strong className="text-amber-400 font-mono">{phone}</strong> within 30 minutes.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-white text-xs font-medium rounded-lg"
                >
                  Submit Another Request
                </button>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
                {/* Name */}
                <div>
                  <label className="block font-semibold text-stone-300 mb-1.5">
                    {activeTab === 'traveler' ? 'Full Name' : activeTab === 'taxi' ? 'Owner / Driver Name' : 'Manager Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={activeTab === 'traveler' ? 'e.g., Sarah Jenkins' : activeTab === 'taxi' ? 'e.g., K. P. Perera' : 'e.g., Roshan Silva'}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                {/* Phone & WhatsApp */}
                <div>
                  <label className="block font-semibold text-stone-300 mb-1.5">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., +94 77 000 0000 or +44 7000..."
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold text-stone-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                {/* Role Specific Field 1 */}
                <div>
                  <label className="block font-semibold text-stone-300 mb-1.5">
                    {activeTab === 'traveler' ? 'Primary District of Interest' : 'Operating Base District'} *
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="All Island Loop">All Island Highlight Loop</option>
                    <option value="Matale (Sigiriya & Dambulla)">Matale (Sigiriya & Dambulla)</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Badulla & Ella">Badulla & Ella</option>
                    <option value="Galle">Galle</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Matara & Mirissa">Matara & Mirissa</option>
                    <option value="Hambantota & Yala">Hambantota & Yala</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Colombo">Colombo</option>
                  </select>
                </div>

                {/* Role Specific Field 2 */}
                {activeTab === 'traveler' && (
                  <>
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1.5">
                        Preferred Budget Tier
                      </label>
                      <select
                        value={tier}
                        onChange={(e) => setTier(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="Small / Budget">Small / Budget ($15–$35/night)</option>
                        <option value="Medium / Comfort">Medium / Comfort ($45–$95/night)</option>
                        <option value="High / Luxury">High / Luxury ($130–$450+/night)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-300 mb-1.5">
                        Number of Travelers
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </>
                )}

                {activeTab === 'taxi' && (
                  <>
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1.5">
                        Vehicle Model / Type
                      </label>
                      <select
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="Toyota KDH High-Roof Van (AC)">Toyota KDH High-Roof Van (AC)</option>
                        <option value="Toyota Prius / Axio Sedan (AC)">Toyota Prius / Axio Sedan (AC)</option>
                        <option value="Mini-Coach (20+ seats)">Mini-Coach (20+ seats)</option>
                        <option value="Local Tuk-Tuk Fleet">Local Tuk-Tuk Fleet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-300 mb-1.5">
                        License & Accreditation
                      </label>
                      <select
                        value={licenseStatus}
                        onChange={(e) => setLicenseStatus(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="SLTDA Certified Chauffeur Guide">SLTDA Certified Chauffeur Guide</option>
                        <option value="Registered Commercial Tourist Vehicle">Registered Commercial Tourist Vehicle</option>
                        <option value="Call Taxi Fleet with 3+ Cars">Call Taxi Fleet with 3+ Cars</option>
                      </select>
                    </div>
                  </>
                )}

                {activeTab === 'hotel' && (
                  <>
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1.5">
                        Accommodation Category
                      </label>
                      <select
                        value={tier}
                        onChange={(e) => setTier(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="Small / Budget">Small / Budget (Homestay, Eco Treehouse, Hostel)</option>
                        <option value="Medium / Comfort">Medium / Comfort (Boutique Hotel, Villa)</option>
                        <option value="High / Luxury">High / Luxury (5-Star Resort, Heritage Estate)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-300 mb-1.5">
                        Total Room Capacity
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="250"
                        value={propertyRooms}
                        onChange={(e) => setPropertyRooms(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Message / Details */}
              <div className="text-xs">
                <label className="block font-semibold text-stone-300 mb-1.5">
                  {activeTab === 'traveler'
                    ? 'Trip Dates, Preferred Places & Special Requests'
                    : activeTab === 'taxi'
                    ? 'Years of Experience, Languages Spoken & Daily Rates'
                    : 'Property Name, Website / Photos Link & Amenities'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    activeTab === 'traveler'
                      ? 'e.g., We are traveling for 10 days in April. We want to do the Ella train, visit Sigiriya, and take a leopard safari in Yala...'
                      : activeTab === 'taxi'
                      ? 'e.g., 8 years driving tourists, fluent in English and French, vehicle in immaculate condition with AC...'
                      : 'e.g., Villa Serene Ella, 10 luxury suites with mountain gap views, infinity pool, ayurvedic spa...'
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Headquarters: Colombo 03 & Regional Coordination Desk in Kandy</span>
                </div>

                <button
                  type="submit"
                  className={`w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'traveler'
                      ? 'bg-emerald-700 hover:bg-emerald-600 text-white'
                      : activeTab === 'taxi'
                      ? 'bg-amber-500 hover:bg-amber-600 text-stone-950'
                      : 'bg-sky-600 hover:bg-sky-500 text-white'
                  }`}
                >
                  <span>
                    {activeTab === 'traveler'
                      ? 'Submit Traveler Inquiry'
                      : activeTab === 'taxi'
                      ? 'Register Call Taxi / Chauffeur'
                      : 'Submit Hotel Partnership'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
