import React from 'react';
import { District, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/currency';
import { X, MapPin, Calendar, Compass, Car, Utensils, CheckCircle2, BedDouble, ArrowRight } from 'lucide-react';

interface DistrictModalProps {
  district: District | null;
  currency: CurrencyCode;
  onClose: () => void;
  onBookDistrict: (districtName: string) => void;
}

export const DistrictModal: React.FC<DistrictModalProps> = ({
  district,
  currency,
  onClose,
  onBookDistrict,
}) => {
  if (!district) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="district-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative bg-white text-stone-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-950 text-white flex items-center justify-center transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl bg-stone-900">
          <img
            src={district.image}
            alt={district.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
              <span>{district.province}</span>
              <span aria-hidden="true">·</span>
              <span>{district.region}</span>
              <span aria-hidden="true">·</span>
              <span className="font-normal font-sans text-stone-300">{district.sinhalaName} / {district.tamilName}</span>
            </div>
            <h2 id="district-modal-title" className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display">
              {district.name}
            </h2>
            <p className="text-sm sm:text-base text-stone-200 mt-1 max-w-2xl font-light">
              {district.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-8 space-y-8">
          {/* Introduction */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              District Overview & Character
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {district.intro}
            </p>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
              <div>
                <strong className="block text-stone-900 font-semibold">Best Season:</strong>
                <span className="text-stone-600">{district.bestSeason}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
              <div>
                <strong className="block text-stone-900 font-semibold">Recommended Stay:</strong>
                <span className="text-stone-600">{district.recommendedDays} Days for full immersion</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
              <div>
                <strong className="block text-stone-900 font-semibold">Weather & Climate:</strong>
                <span className="text-stone-600">{district.weatherInfo}</span>
              </div>
            </div>
          </div>

          {/* Most Precious & Unique Places */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  Most Precious & Unique Places in {district.name}
                </h3>
                <p className="text-xs text-stone-500">
                  Curated monuments, nature sanctuaries, and historical wonders you cannot miss.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {district.preciousPlaces.map((place, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-white hover:border-emerald-600 transition-colors shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {place.name}
                    </h4>
                    <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {place.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    {place.description}
                  </p>
                  <div className="text-[11px] font-semibold text-amber-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>{place.highlightTag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transit & Travel Guidance */}
          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-950 mb-1">
                  Travel Guidance & Transport Facilities
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                  {district.transitTips}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <span>Our agency provides:</span>
                  <span className="text-stone-700 font-normal">Private AC chauffeur hire · Pre-booked train seats · Intercity call taxis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local Food Specialties */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 flex items-start gap-3">
            <Utensils className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-amber-950 mb-0.5">
                Must-Try Authentic Culinary Specialties
              </h4>
              <p className="text-xs sm:text-sm text-amber-900/90">
                {district.mustTryFood}
              </p>
            </div>
          </div>

          {/* Budget Hotel Options in this District */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-emerald-700" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                  Stay Budget Tiers in {district.name}
                </h4>
              </div>
              <span className="text-xs text-stone-500">Average price per night</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg border border-stone-200 bg-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">Small / Budget</span>
                <p className="text-lg font-bold text-stone-900 mt-0.5 tabular-nums">
                  {formatPrice(district.budgetOverview.budgetStayUSD, currency)}
                  <span className="text-xs font-normal text-stone-500"> / night</span>
                </p>
                <p className="text-[11px] text-stone-500 mt-1">Homestays, treehouses, fan/AC guest rooms, breakfast included.</p>
              </div>

              <div className="p-3.5 rounded-lg border border-emerald-300 bg-emerald-50/30">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">Medium / Comfort</span>
                <p className="text-lg font-bold text-stone-900 mt-0.5 tabular-nums">
                  {formatPrice(district.budgetOverview.midStayUSD, currency)}
                  <span className="text-xs font-normal text-stone-500"> / night</span>
                </p>
                <p className="text-[11px] text-stone-500 mt-1">Boutique hotels, swimming pools, mountain/sea view balconies, AC.</p>
              </div>

              <div className="p-3.5 rounded-lg border border-stone-200 bg-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">High / Luxury</span>
                <p className="text-lg font-bold text-stone-900 mt-0.5 tabular-nums">
                  {formatPrice(district.budgetOverview.luxuryStayUSD, currency)}
                  <span className="text-xs font-normal text-stone-500"> / night</span>
                </p>
                <p className="text-[11px] text-stone-500 mt-1">5-star heritage estates, private pool villas, butler service, fine dining.</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-stone-500">
              Need custom itinerary planning or certified driver guide for {district.name}?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onBookDistrict(district.name);
                  onClose();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Plan Trip to {district.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
