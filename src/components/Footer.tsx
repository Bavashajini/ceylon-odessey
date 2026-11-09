import React from 'react';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white text-lg font-bold font-display mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
                <Compass className="w-4 h-4 text-amber-300" />
              </span>
              <span>Ceylon Odyssey</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm mb-4">
              Your premier destination guide and licensed travel coordination agency for Sri Lanka. Specializing in district hidden gems, scenic railway journeys, certified chauffeurs, and handpicked stays for all budget tiers.
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>SLTDA Registered Agency Reg: TS/TA/2014/1982</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Districts & Regions
            </h4>
            <ul className="space-y-2">
              <li><a href="#districts" className="hover:text-white transition-colors">Matale & Sigiriya</a></li>
              <li><a href="#districts" className="hover:text-white transition-colors">Kandy & Dalada Maligawa</a></li>
              <li><a href="#districts" className="hover:text-white transition-colors">Badulla & Ella Railway</a></li>
              <li><a href="#districts" className="hover:text-white transition-colors">Galle Fort & Coast</a></li>
              <li><a href="#districts" className="hover:text-white transition-colors">Matara & Mirissa Whales</a></li>
              <li><a href="#districts" className="hover:text-white transition-colors">Hambantota & Yala Safari</a></li>
            </ul>
          </div>

          {/* Travel & Stay Guidance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Travel Guidance
            </h4>
            <ul className="space-y-2">
              <li><a href="#transport" className="hover:text-white transition-colors">Scenic Blue Mountain Train</a></li>
              <li><a href="#transport" className="hover:text-white transition-colors">Private Chauffeur Car/Van</a></li>
              <li><a href="#stays" className="hover:text-white transition-colors">Small / Budget Eco-Stays</a></li>
              <li><a href="#stays" className="hover:text-white transition-colors">Medium / Boutique Hotels</a></li>
              <li><a href="#stays" className="hover:text-white transition-colors">High / Luxury Villas</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Interactive Cost Estimator</a></li>
            </ul>
          </div>

          {/* Partner & Emergency Hotlines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Contact & Work With Us
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-500 text-[10px]">Traveler 24/7 Hotline:</span>
                  <a href="tel:+94112345678" className="text-white hover:text-amber-400 font-mono">+94 11 234 5678</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-500 text-[10px]">Taxi & Fleet Desk:</span>
                  <a href="tel:+94718882345" className="text-white hover:text-amber-400 font-mono">+94 71 888 2345</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-500 text-[10px]">Hotel Manager Desk:</span>
                  <a href="tel:+94815557890" className="text-white hover:text-amber-400 font-mono">+94 81 555 7890</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <a href="mailto:info@ceylonodyssey.lk" className="hover:text-white font-mono">info@ceylonodyssey.lk</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                <span>Galle Face, Colombo 03, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Safety Strip */}
      <div className="border-t border-stone-800/80 py-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Ceylon Odyssey Travel Agency Ltd. All rights reserved. Registered in the Democratic Socialist Republic of Sri Lanka.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Tourist Police Helpline: <strong className="text-amber-400 font-mono">1912</strong></span>
            <span aria-hidden="true">·</span>
            <span>Emergency Ambulance: <strong className="text-amber-400 font-mono">1990</strong></span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Sri Lanka
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
