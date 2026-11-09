import React, { useState } from 'react';
import { District, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/currency';
import { MapPin, Sparkles, Eye, ArrowUpRight } from 'lucide-react';

interface DistrictExplorerProps {
  districts: District[];
  currency: CurrencyCode;
  selectedSearchQuery: string;
  onSelectDistrict: (district: District) => void;
  onClearSearch: () => void;
}

const REGIONS = [
  'All Regions',
  'Cultural Triangle',
  'Central Highlands',
  'Southern Coast',
  'Eastern Paradise',
  'Northern Heritage',
  'Western Hub',
] as const;

export const DistrictExplorer: React.FC<DistrictExplorerProps> = ({
  districts,
  currency,
  selectedSearchQuery,
  onSelectDistrict,
  onClearSearch,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All Regions');

  const filteredDistricts = districts.filter((d) => {
    const matchesRegion = activeRegion === 'All Regions' || d.region === activeRegion;
    if (!matchesRegion) return false;

    if (!selectedSearchQuery.trim()) return true;
    const query = selectedSearchQuery.toLowerCase();
    const inName = d.name.toLowerCase().includes(query);
    const inIntro = d.intro.toLowerCase().includes(query);
    const inTagline = d.tagline.toLowerCase().includes(query);
    const inPlaces = d.preciousPlaces.some(
      (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
    );
    return inName || inIntro || inTagline || inPlaces;
  });

  return (
    <section id="districts" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sri Lanka District Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Precious Places & Unique Gems by District
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Click on any district photograph to trigger the detailed guide popup with hidden heritage spots, best travel months, and stay options for every budget tier.
          </p>
        </div>

        {/* Region Filter Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeRegion === region
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Search Results Notice */}
        {selectedSearchQuery && (
          <div className="mb-6 flex items-center justify-between bg-white px-4 py-2.5 rounded-lg border border-stone-200 text-xs">
            <span className="text-stone-600">
              Showing districts matching: <strong className="text-stone-900 font-semibold">"{selectedSearchQuery}"</strong>
            </span>
            <button
              onClick={onClearSearch}
              className="text-emerald-700 hover:text-emerald-900 font-semibold underline"
            >
              Clear search filter
            </button>
          </div>
        )}

        {/* District Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDistricts.map((district) => (
            <article
              key={district.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              {/* Picture with Interactive Click Trigger for Popup Message */}
              <div
                onClick={() => onSelectDistrict(district)}
                className="relative h-60 w-full overflow-hidden cursor-pointer bg-stone-900"
                role="button"
                tabIndex={0}
                aria-label={`Open details popup for ${district.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectDistrict(district);
                  }
                }}
              >
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Region Tag & Script Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-stone-900/70 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {district.region}
                  </span>
                </div>

                {/* Popup Click Prompt Overlay Badge */}
                <div className="absolute bottom-3 right-3 bg-emerald-800/90 hover:bg-emerald-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1.5 transition-transform group-hover:scale-105 shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click photo for guide</span>
                </div>

                {/* District Name on Image */}
                <div className="absolute bottom-3 left-3 text-white max-w-[65%]">
                  <h3 className="text-xl font-bold font-display leading-tight drop-shadow-sm">
                    {district.name}
                  </h3>
                  <span className="text-xs text-amber-300 font-sans opacity-95">
                    {district.sinhalaName} · {district.tamilName}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators (§1.A Zero-Pill) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2.5">
                    <span>{district.province}</span>
                    <span aria-hidden="true">·</span>
                    <span>{district.recommendedDays} Days ideal</span>
                    <span aria-hidden="true">·</span>
                    <span>{district.bestSeason.split(',')[0]}</span>
                  </div>

                  {/* Intro Prose */}
                  <p className="text-stone-700 text-sm line-clamp-2 leading-relaxed mb-4">
                    {district.intro}
                  </p>

                  {/* Most Precious Places Preview */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                      Precious Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {district.preciousPlaces.slice(0, 3).map((place, i) => (
                        <li key={i} className="text-xs text-stone-800 flex items-baseline gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1" />
                          <span className="font-semibold">{place.name}:</span>
                          <span className="text-stone-600 truncate">{place.highlightTag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Strip with Budget Indicator and Trigger */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-medium">Stays from</span>
                    <span className="text-sm font-bold text-stone-900 tabular-nums">
                      {formatPrice(district.budgetOverview.budgetStayUSD, currency)}
                      <span className="text-xs font-normal text-stone-500"> / night</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectDistrict(district)}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View District Popup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200">
            <MapPin className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-stone-900">No districts match your search</h3>
            <p className="text-sm text-stone-500 mt-1">Try searching for "Ella", "Galle", "Kandy", or clear your filter.</p>
            <button
              onClick={() => {
                setActiveRegion('All Regions');
                onClearSearch();
              }}
              className="mt-4 px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
