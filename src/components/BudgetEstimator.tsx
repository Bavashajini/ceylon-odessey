import React, { useState } from 'react';
import { CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/currency';
import { Calculator, Check, ArrowRight, ShieldCheck, Wallet } from 'lucide-react';

interface BudgetEstimatorProps {
  currency: CurrencyCode;
  onGenerateQuote: (details: {
    days: number;
    travelers: number;
    tier: string;
    transport: string;
    totalUSD: number;
  }) => void;
}

export const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({
  currency,
  onGenerateQuote,
}) => {
  const [days, setDays] = useState<number>(10);
  const [travelers, setTravelers] = useState<number>(2);
  const [stayTier, setStayTier] = useState<'small' | 'medium' | 'high'>('medium');
  const [transportMode, setTransportMode] = useState<'train-tuktuk' | 'chauffeur-van' | 'hybrid'>('chauffeur-van');

  // Daily costs per person in USD based on configuration
  const stayCostPerRoomUSD = stayTier === 'small' ? 26 : stayTier === 'medium' ? 75 : 280;
  const roomsNeeded = Math.ceil(travelers / 2);
  const totalStayCostUSD = roomsNeeded * stayCostPerRoomUSD * days;

  let dailyTransportCostUSD = 0;
  if (transportMode === 'train-tuktuk') {
    dailyTransportCostUSD = 12 * travelers; // Train tickets + local tuk-tuks
  } else if (transportMode === 'chauffeur-van') {
    dailyTransportCostUSD = travelers <= 3 ? 70 : 95; // Full day dedicated private vehicle
  } else {
    dailyTransportCostUSD = 45; // Hybrid
  }
  const totalTransportCostUSD = dailyTransportCostUSD * days;

  const mealCostPerPersonPerDayUSD = stayTier === 'small' ? 12 : stayTier === 'medium' ? 28 : 65;
  const totalMealsCostUSD = mealCostPerPersonPerDayUSD * travelers * days;

  const activitiesCostPerPersonTotalUSD = stayTier === 'small' ? 60 : stayTier === 'medium' ? 140 : 280;
  const totalActivitiesCostUSD = activitiesCostPerPersonTotalUSD * travelers;

  const grandTotalUSD = totalStayCostUSD + totalTransportCostUSD + totalMealsCostUSD + totalActivitiesCostUSD;
  const perPersonTotalUSD = grandTotalUSD / travelers;
  const perPersonPerDayUSD = perPersonTotalUSD / days;

  const handleQuoteClick = () => {
    const tierName = stayTier === 'small' ? 'Small / Budget' : stayTier === 'medium' ? 'Medium / Comfort' : 'High / Luxury';
    const transportName =
      transportMode === 'train-tuktuk'
        ? 'Public Scenic Trains & Local Tuk-Tuks'
        : transportMode === 'chauffeur-van'
        ? 'Dedicated Private AC Chauffeur Car/Van'
        : 'Hybrid Train + Taxi Transfers';

    onGenerateQuote({
      days,
      travelers,
      tier: tierName,
      transport: transportName,
      totalUSD: grandTotalUSD,
    });
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Trip Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Plan Your Sri Lanka Budget in Seconds
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Customize your journey duration, guest count, stay category (Small, Medium, or High), and transport preference. Get a transparent, live price estimate without hidden surprises.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Trip Duration */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    1. Trip Duration: <span className="text-emerald-800 font-extrabold">{days} Days</span>
                  </label>
                  <span className="text-xs text-stone-500">Typical island loop: 7–14 days</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[3, 7, 10, 14, 21].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                        days === d
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Travelers */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    2. Travelers: <span className="text-emerald-800 font-extrabold">{travelers} {travelers === 1 ? 'Guest' : 'Guests'}</span>
                  </label>
                  <span className="text-xs text-stone-500">{roomsNeeded} Room(s) calculated</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { count: 1, label: 'Solo (1)' },
                    { count: 2, label: 'Couple (2)' },
                    { count: 4, label: 'Family (4)' },
                    { count: 6, label: 'Group (6)' },
                  ].map((item) => (
                    <button
                      key={item.count}
                      type="button"
                      onClick={() => setTravelers(item.count)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                        travelers === item.count
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accommodation Budget Tier */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                  3. Accommodation Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setStayTier('small')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      stayTier === 'small'
                        ? 'border-emerald-700 bg-white ring-2 ring-emerald-700/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900">Small / Budget</span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">Eco treehouses, clean homestays, breakfast</span>
                    <span className="text-xs font-extrabold text-emerald-800 mt-2 block tabular-nums">
                      ~{formatPrice(26, currency)}/night
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStayTier('medium')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      stayTier === 'medium'
                        ? 'border-emerald-700 bg-white ring-2 ring-emerald-700/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900">Medium / Comfort</span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">Boutique hotels with pool, tea lodges, AC</span>
                    <span className="text-xs font-extrabold text-emerald-800 mt-2 block tabular-nums">
                      ~{formatPrice(75, currency)}/night
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStayTier('high')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      stayTier === 'high'
                        ? 'border-amber-600 bg-white ring-2 ring-amber-600/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900">High / Luxury</span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">5-star heritage estates, private pool villas</span>
                    <span className="text-xs font-extrabold text-amber-700 mt-2 block tabular-nums">
                      ~{formatPrice(280, currency)}/night
                    </span>
                  </button>
                </div>
              </div>

              {/* Transport Style */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                  4. Transport Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTransportMode('chauffeur-van')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      transportMode === 'chauffeur-van'
                        ? 'border-emerald-700 bg-white ring-2 ring-emerald-700/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900">Dedicated AC Chauffeur</span>
                    <span className="text-[11px] text-stone-500">Toyota car/van, fuel & tolls included</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTransportMode('train-tuktuk')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      transportMode === 'train-tuktuk'
                        ? 'border-emerald-700 bg-white ring-2 ring-emerald-700/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900">Scenic Train & Tuk-Tuk</span>
                    <span className="text-[11px] text-stone-500">Scenic rail passes + local town hops</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTransportMode('hybrid')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      transportMode === 'hybrid'
                        ? 'border-emerald-700 bg-white ring-2 ring-emerald-700/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900">Hybrid Plan</span>
                    <span className="text-[11px] text-stone-500">Train for highlands + taxis for coast</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>All estimates include 100% transparent local pricing with zero hidden surcharges.</span>
            </div>
          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-stone-800">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                    Estimated Total Trip Investment
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tabular-nums font-display">
                    {formatPrice(grandTotalUSD, currency)}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-amber-400">
                  <Wallet className="w-6 h-6" />
                </div>
              </div>

              {/* Per Person Metric */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-stone-800/80 rounded-xl mb-6 text-xs">
                <div>
                  <span className="text-stone-400 block">Per Person Total:</span>
                  <strong className="text-sm font-bold text-white tabular-nums">
                    {formatPrice(perPersonTotalUSD, currency)}
                  </strong>
                </div>
                <div>
                  <span className="text-stone-400 block">Per Person / Day:</span>
                  <strong className="text-sm font-bold text-emerald-400 tabular-nums">
                    {formatPrice(perPersonPerDayUSD, currency)}
                  </strong>
                </div>
              </div>

              {/* Categorical Breakdown */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Estimated Breakdown:
                </p>

                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span>Accommodation ({roomsNeeded} room × {days} nights):</span>
                  <span className="font-semibold text-white tabular-nums">{formatPrice(totalStayCostUSD, currency)}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span>Transport & Fuel ({days} days):</span>
                  <span className="font-semibold text-white tabular-nums">{formatPrice(totalTransportCostUSD, currency)}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span>Authentic Meals & Teas:</span>
                  <span className="font-semibold text-white tabular-nums">{formatPrice(totalMealsCostUSD, currency)}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span>Park Tickets & Experiences (Sigiriya, Yala, etc.):</span>
                  <span className="font-semibold text-white tabular-nums">{formatPrice(totalActivitiesCostUSD, currency)}</span>
                </div>
              </div>

              <div className="p-3 bg-stone-800/50 rounded-xl border border-stone-700/60 text-xs text-stone-300 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Includes driver accommodation & meals allowance</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Free 24/7 WhatsApp emergency coordination</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleQuoteClick}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lock In This Itinerary & Request Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
