import React from 'react';
import { CurrencyCode } from '../types/travel';
import { Phone, Compass } from 'lucide-react';

interface HeaderProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenBookingModal: (prefillDistrict?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBookingModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Emergency & Hotline Top Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Traveler Hotline: <strong className="text-white font-mono">+94 11 234 5678</strong></span>
            </span>
            <span className="hidden sm:inline text-emerald-500">·</span>
            <span className="hidden sm:inline">Taxi & Hotel Partner Desk: <strong className="text-white font-mono">+94 71 888 2345</strong></span>
          </div>
          <div className="flex items-center gap-3 text-xs text-emerald-200">
            <span className="hidden md:inline">Sri Lanka Tourism Development Authority (SLTDA) Licensed</span>
            <span className="text-amber-400 font-medium">WhatsApp: +94 77 123 4567</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Action + Currency) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0">
          <span className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5 text-amber-300" />
          </span>
          <span className="font-display tracking-normal">Ceylon Odyssey</span>
        </a>

        {/* Zone 2: Clean 4-5 single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#districts" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            District Explorer
          </a>
          <a href="#transport" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Transport & Chauffeurs
          </a>
          <a href="#stays" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Hotel Stays & Budget
          </a>
          <a href="#estimator" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Cost Estimator
          </a>
          <a href="#reviews" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Reviews
          </a>
          <a href="#partner-contact" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 text-emerald-700 font-semibold">
            Partner With Us
          </a>
        </nav>

        {/* Zone 3: Currency Switcher + Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <select
              value={currentCurrency}
              aria-label="Select Currency"
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="text-xs font-semibold uppercase bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md py-1.5 px-2.5 border border-stone-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <option value="USD">USD ($)</option>
              <option value="LKR">LKR (Rs)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-98"
          >
            Plan My Journey
          </button>
        </div>
      </div>
    </header>
  );
};
