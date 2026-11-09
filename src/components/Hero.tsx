import React, { useState } from 'react';
import { Search, Compass, MapPin, Sparkles, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onExploreDistricts: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreDistricts, onOpenEstimator }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleQuickTag = (tag: string) => {
    setSearchInput(tag);
    onSearch(tag);
  };

  return (
    <section id="hero" className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background Hero Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sri_lanka_landscape_1794234436219.jpg"
          alt="Aerial view of Sigiriya Lion Rock fortress at sunrise, Sri Lanka"
          className="w-full h-full object-cover object-center brightness-60"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Overlay for WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Natural Editorial Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-amber-300 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Official Sri Lanka Travel & District Guide</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2014</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight font-display text-balance">
            Discover the Precious & Unique Wonders in Every District of Sri Lanka
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
            From the cloud-forest peaks of Ella and ancient citadels of Sigiriya to turquoise whale sanctuaries in Mirissa. We provide authentic local guidance, seamless chauffeur transport, and handpicked stays for small, medium, and high budgets.
          </p>

          {/* Interactive Search Bar */}
          <form onSubmit={handleSearchSubmit} className="mb-6 max-w-2xl">
            <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl p-1.5 shadow-2xl border border-stone-200">
              <div className="flex-1 flex items-center px-3 py-2 text-stone-700">
                <Search className="w-5 h-5 text-stone-400 shrink-0 mr-2.5" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    onSearch(e.target.value);
                  }}
                  placeholder="Search district or place (e.g., Sigiriya, Ella, Galle Fort, Kandy)..."
                  className="w-full text-sm sm:text-base text-stone-900 placeholder:text-stone-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 sm:mt-0 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shrink-0"
              >
                <span>Find Places</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Popular Fast Filters - Clean unboxed text with interactive pills for controls */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300 mb-8">
            <span className="font-medium text-stone-400">Popular Searches:</span>
            {['Nine Arch Bridge', 'Sigiriya Rock', 'Mirissa Whales', 'Temple of Tooth', 'Yala Safari', 'Galle Fort'].map((place) => (
              <button
                key={place}
                onClick={() => handleQuickTag(place)}
                className="bg-white/10 hover:bg-white/20 text-white rounded-md px-2.5 py-1 text-xs transition-colors"
              >
                {place}
              </button>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreDistricts}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm rounded-lg shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              <span>Explore 25 Districts</span>
            </button>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-600 text-white font-semibold text-sm rounded-lg backdrop-blur-sm transition-colors"
            >
              Calculate Trip Budget (Small/Med/High)
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Proof / Trust Strip */}
      <div className="relative z-10 bg-stone-950/90 border-t border-stone-800 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white tabular-nums">25 Districts</p>
              <p className="text-xs text-stone-400">All 9 provinces mapped</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white tabular-nums">120+ Certified Drivers</p>
              <p className="text-xs text-stone-400">SLTDA registered fleet</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white tabular-nums">24/7 Tourist Support</p>
              <p className="text-xs text-stone-400">Direct phone & WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-bold text-white tabular-nums">Transparent Rates</p>
              <p className="text-xs text-stone-400">Small, Medium & High stays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
