import React, { useState } from 'react';
import { STAY_OPTIONS } from '../data/travelOptions';
import { CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/currency';
import { BedDouble, Star, Check, Sparkles, Building, ArrowRight } from 'lucide-react';

interface HotelStayOptionsProps {
  currency: CurrencyCode;
  onBookHotel: (hotelName: string, tier: string) => void;
}

export const HotelStayOptions: React.FC<HotelStayOptionsProps> = ({
  currency,
  onBookHotel,
}) => {
  const [selectedTier, setSelectedTier] = useState<'all' | 'small' | 'medium' | 'high'>('all');

  const filteredStays = STAY_OPTIONS.filter((stay) => {
    if (selectedTier === 'all') return true;
    return stay.tierCategory === selectedTier;
  });

  return (
    <section id="stays" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <BedDouble className="w-3.5 h-3.5" />
            <span>Accommodation & Stay Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Curated Hotel Options for Small, Medium & High Budgets
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Sri Lanka provides phenomenal hospitality across every budget range. Whether you seek a welcoming family-run treehouse in Sigiriya, a boutique courtyard hotel in Galle Fort, or a 5-star private plunge pool villa in Yala, explore our handpicked stays below.
          </p>
        </div>

        {/* Comparative Tier Matrix Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Small / Budget */}
          <div className={`p-6 rounded-2xl border transition-all ${
            selectedTier === 'small' ? 'border-emerald-700 bg-emerald-50/50 shadow-md ring-2 ring-emerald-700/20' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Tier 01</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Backpacker & Eco</span>
            </div>
            <h3 className="text-xl font-bold font-display text-stone-900 mb-1">Small / Budget Friendly</h3>
            <p className="text-2xl font-extrabold text-stone-900 tabular-nums mb-3">
              {formatPrice(15, currency)} – {formatPrice(35, currency)}
              <span className="text-xs font-normal text-stone-500"> / night</span>
            </p>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Warm family-run homestays, surf cabins, jungle treehouses, and backpacker hostels. Clean private rooms with fans or AC, mosquito nets, and hearty homemade Ceylon breakfasts.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-700 mb-5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Authentic home-cooked meals included</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Direct insider hiking & travel advice</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Free high-speed Wi-Fi in rooms</span>
              </li>
            </ul>
            <button
              onClick={() => setSelectedTier('small')}
              className={`w-full py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedTier === 'small' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
              }`}
            >
              Filter Small / Budget Stays
            </button>
          </div>

          {/* Medium / Comfort */}
          <div className={`p-6 rounded-2xl border transition-all ${
            selectedTier === 'medium' ? 'border-emerald-700 bg-emerald-50/50 shadow-md ring-2 ring-emerald-700/20' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Tier 02</span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold font-display text-stone-900 mb-1">Medium / Comfort & Boutique</h3>
            <p className="text-2xl font-extrabold text-stone-900 tabular-nums mb-3">
              {formatPrice(45, currency)} – {formatPrice(95, currency)}
              <span className="text-xs font-normal text-stone-500"> / night</span>
            </p>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Restored colonial bungalows, beachfront chalets, and tea estate lodges with swimming pools, panoramic views, full air conditioning, and gourmet dining options.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-700 mb-5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Outdoor swimming pools & scenic sundecks</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Ensuite modern rainfall showers & AC</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>On-site chef & English-speaking concierge</span>
              </li>
            </ul>
            <button
              onClick={() => setSelectedTier('medium')}
              className={`w-full py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedTier === 'medium' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
              }`}
            >
              Filter Medium / Comfort Stays
            </button>
          </div>

          {/* High / Luxury */}
          <div className={`p-6 rounded-2xl border transition-all ${
            selectedTier === 'high' ? 'border-amber-600 bg-amber-50/50 shadow-md ring-2 ring-amber-600/20' : 'border-stone-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Tier 03</span>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">Signature Luxury</span>
            </div>
            <h3 className="text-xl font-bold font-display text-stone-900 mb-1">High / Luxury & Heritage</h3>
            <p className="text-2xl font-extrabold text-stone-900 tabular-nums mb-3">
              {formatPrice(130, currency)} – {formatPrice(450, currency)}+
              <span className="text-xs font-normal text-stone-500"> / night</span>
            </p>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Geoffrey Bawa architectural icons, private safari tented pavilions in Yala, and 19th-century Ceylon tea planters’ estates with private butler service and helicopter pads.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-700 mb-5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Private plunge pool & personal butler</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>All-inclusive sommelier & bespoke fine dining</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Private game naturalists & VIP transfers</span>
              </li>
            </ul>
            <button
              onClick={() => setSelectedTier('high')}
              className={`w-full py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedTier === 'high' ? 'bg-amber-600 text-stone-950 font-bold' : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
              }`}
            >
              Filter High / Luxury Stays
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-stone-500">Viewing:</span>
            <div className="flex items-center gap-1 bg-stone-200/60 p-1 rounded-lg">
              <button
                onClick={() => setSelectedTier('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedTier === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Options ({STAY_OPTIONS.length})
              </button>
              <button
                onClick={() => setSelectedTier('small')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedTier === 'small' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Small / Budget
              </button>
              <button
                onClick={() => setSelectedTier('medium')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedTier === 'medium' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Medium / Comfort
              </button>
              <button
                onClick={() => setSelectedTier('high')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedTier === 'high' ? 'bg-white text-amber-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                High / Luxury
              </button>
            </div>
          </div>

          <span className="text-xs text-stone-500 hidden sm:inline">
            All stays verified by our regional travel team
          </span>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStays.map((stay) => (
            <article
              key={stay.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-stone-900">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm ${
                    stay.tierCategory === 'small'
                      ? 'bg-emerald-900/80 text-emerald-200'
                      : stay.tierCategory === 'medium'
                      ? 'bg-sky-900/80 text-sky-200'
                      : 'bg-amber-900/80 text-amber-200'
                  }`}>
                    {stay.tier}
                  </span>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-semibold bg-stone-950/70 px-2 py-0.5 rounded">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{stay.rating}</span>
                    <span className="text-stone-300 font-normal">({stay.reviewCount})</span>
                  </div>
                </div>

                <div className="p-4">
                  {/* Location unboxed metadata */}
                  <div className="text-xs text-stone-500 mb-1">
                    <span>District: {stay.district}</span>
                    <span aria-hidden="true" className="mx-1">·</span>
                    <span className="text-emerald-700 font-medium">{stay.vibe}</span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 leading-snug mb-2 font-display">
                    {stay.name}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                    {stay.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    {stay.amenities.slice(0, 3).map((a, i) => (
                      <div key={i} className="text-[11px] text-stone-700 flex items-center gap-1.5 truncate">
                        <Sparkles className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Starting from</span>
                  <span className="text-base font-bold text-stone-900 tabular-nums">
                    {formatPrice(stay.pricePerNightUSD, currency)}
                    <span className="text-xs font-normal text-stone-500"> / night</span>
                  </span>
                </div>

                <button
                  onClick={() => onBookHotel(stay.name, stay.tier)}
                  className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Hotelier Partnership Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display">Are you a Hotel, Villa or Homestay Manager in Sri Lanka?</h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                Join our agency partner directory to receive verified international tourist bookings with zero high platform commissions.
              </p>
            </div>
          </div>
          <a
            href="#partner-contact"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm rounded-lg whitespace-nowrap transition-colors shrink-0"
          >
            Hotel Manager Partnership Desk
          </a>
        </div>
      </div>
    </section>
  );
};
