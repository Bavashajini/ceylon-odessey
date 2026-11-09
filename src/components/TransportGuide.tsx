import React from 'react';
import { TRANSPORT_OPTIONS } from '../data/travelOptions';
import { CurrencyCode } from '../types/travel';
import { Train, Car, ShieldAlert, Check, ArrowRight, Compass } from 'lucide-react';

interface TransportGuideProps {
  currency: CurrencyCode;
  onBookTransport: (transportName: string) => void;
}

export const TransportGuide: React.FC<TransportGuideProps> = ({
  currency: _currency,
  onBookTransport,
}) => {
  return (
    <section id="transport" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Train className="w-3.5 h-3.5" />
            <span>Sri Lanka Transit & Travel Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Transport Facilities & Scenic Chauffeur Services
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Whether you dream of leaning out the door of the world-famous blue mountain train, riding a dedicated private AC van with an SLTDA-certified driver, or hailing local tuk-tuks, here is everything you need to navigate Sri Lanka smoothly.
          </p>
        </div>

        {/* Transport Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TRANSPORT_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-emerald-700 transition-colors"
            >
              <div>
                <div className="relative h-48 w-full bg-stone-900">
                  <img
                    src={opt.image}
                    alt={opt.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-stone-900/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {opt.category}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-display leading-tight">{opt.name}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium text-emerald-800 mb-2">{opt.tagline}</p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">{opt.description}</p>

                  <div className="p-3 bg-white rounded-xl border border-stone-200 mb-4 text-xs">
                    <div className="flex items-center justify-between text-stone-700 mb-1">
                      <span className="text-stone-500 font-medium">Estimated Pricing:</span>
                      <strong className="text-stone-900 font-bold tabular-nums">{opt.approxRateUSD}</strong>
                    </div>
                    <div className="text-[11px] text-stone-500 flex items-center justify-between">
                      <span>Local Currency:</span>
                      <span className="font-mono text-stone-700">{opt.approxRateLKR}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                      Included Facilities:
                    </p>
                    <ul className="space-y-1">
                      {opt.amenities.map((item, i) => (
                        <li key={i} className="text-xs text-stone-700 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                    <strong>Traveler Note: </strong>{opt.bookingNote}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookTransport(opt.name)}
                  className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Book / Inquire Transport</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Transit Guidance Bento Strip */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-10 border border-stone-800">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Essential Rules for Traveling Across Sri Lanka
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Keep these verified local transit realities in mind when calculating distances and schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <div className="flex items-center gap-2 font-bold text-amber-400 mb-1.5">
                <Train className="w-4 h-4" />
                <span>Mountain Train Tickets</span>
              </div>
              <p className="text-stone-300 leading-relaxed text-xs">
                Tickets for the Kandy-Nanu Oya-Ella route open exactly 30 days prior. During peak season (Dec-April), observation cars sell out in 15 minutes. Our booking desk secures tickets on launch day.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <div className="flex items-center gap-2 font-bold text-amber-400 mb-1.5">
                <Car className="w-4 h-4" />
                <span>Southern Expressway (E01)</span>
              </div>
              <p className="text-stone-300 leading-relaxed text-xs">
                Traveling from Colombo to Galle or Matara takes only 1.5 to 2 hours via the smooth Southern Expressway, compared to 4+ hours on old coastal roads. All our chauffeur hires include expressway toll passes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <div className="flex items-center gap-2 font-bold text-amber-400 mb-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>Driver Accreditation</span>
              </div>
              <p className="text-stone-300 leading-relaxed text-xs">
                Always ensure your chauffeur carries an official Sri Lanka Tourist Development Authority (SLTDA) Chauffeur Tourist Guide badge. All 120+ drivers in our network are verified and insured.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-stone-300">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Are you a licensed driver or call taxi owner? Join our fleet today.</span>
            </div>
            <a
              href="#partner-contact"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-lg transition-colors"
            >
              Taxi Owner Registration Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
