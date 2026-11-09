/**
 * Ceylon Odyssey - Pure Vanilla JavaScript Webpage Logic
 * Handles interactive district picture popups, transport guides,
 * hotel budget filters, trip estimator, customer reviews, and partner portal.
 */

// 1. DATASETS
const DISTRICTS = [
  {
    id: 'matale',
    name: 'Matale (Sigiriya & Dambulla)',
    sinhala: 'මාතලේ',
    tamil: 'மாத்தளை',
    province: 'Central Province',
    region: 'Cultural Triangle',
    tagline: 'Citadel of the 5th-century Lion Rock & Golden Cave Temples',
    intro: 'Home to Sri Lanka\'s most iconic UNESCO World Heritage wonder—the towering rock citadel of Sigiriya—alongside the subterranean marvel of Dambulla Cave Temple and fragrant spice gardens nestled at the foot of the Knuckles mountain range.',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'December to April, July to September (dry & sunny)',
    weather: 'Warm tropical dry zone with pleasant breezy evenings (26°C - 33°C)',
    days: 2,
    transit: 'Direct highway from Colombo via Kurunegala (3.5 hrs), or scenic bus/cab from Kandy (2 hrs). Best explored locally by private tuk-tuk or AC van.',
    food: 'Sigiriya clay-pot red rice curry, Kurakkan Rotti with spicy Katta Sambol, and fresh King Coconut water at roadside stalls.',
    budgetUSD: { small: 18, medium: 55, high: 180 },
    places: [
      { name: 'Sigiriya Lion Rock Fortress', category: 'Heritage', desc: 'An ancient volcanic rock fortress built in 477 AD with water gardens and celestial frescoes.', tag: 'UNESCO World Heritage #1 Wonder' },
      { name: 'Pidurangala Rock', category: 'Adventure', desc: 'Colossal boulder standing opposite Sigiriya, famed for sunrise 360-degree views of Lion Rock.', tag: 'Best Sunrise Photo Spot' },
      { name: 'Dambulla Golden Cave Temple', category: 'Heritage', desc: 'Five sacred caverns housing 150+ gilded Buddha statues and 2,000-year-old ceiling murals.', tag: 'Ancient Cave Art Sanctuary' },
      { name: 'Riverston & Knuckles Range', category: 'Nature', desc: 'The dramatic "Mini World\'s End" precipice and cascading Sera Ella waterfalls in the cloud forest.', tag: 'Hiking & Cloud Forest Mist' }
    ]
  },
  {
    id: 'kandy',
    name: 'Kandy (The Sacred Hill Capital)',
    sinhala: 'මහනුවර',
    tamil: 'கண்டி',
    province: 'Central Province',
    region: 'Central Highlands',
    tagline: 'Sanctuary of the Sacred Tooth Relic & Royal Lakeside Heritage',
    intro: 'The last royal kingdom of independent Sri Lanka, cradled amid mist-wrapped highlands and centered on the sacred waters of Kandy Lake. Famous for traditional Kandyan drumming and pageantry.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'December to April (August hosts the Esala Perahera pageant)',
    weather: 'Temperate hill climate, mild days and cool evenings (20°C - 28°C)',
    days: 2,
    transit: 'Iconic train from Colombo Fort (2.5 hrs, observation cars). Expressway buses run frequently from Katunayake Airport.',
    food: 'Traditional Kandyan curries with tender jackfruit (Polos), crispy egg hoppers, and artisanal highland spice tea.',
    budgetUSD: { small: 20, medium: 60, high: 210 },
    places: [
      { name: 'Sri Dalada Maligawa (Temple of the Tooth)', category: 'Culture', desc: 'Golden-roofed inner sanctum housing the sacred canine relic of Gautama Buddha.', tag: 'Spiritual Heart of Sri Lanka' },
      { name: 'Royal Botanical Gardens, Peradeniya', category: 'Nature', desc: '147 lush acres bordered by the Mahaweli River with 4,000+ tropical botanical species.', tag: 'Giant Palms & Orchid House' },
      { name: 'Bahirawakanda Giant Buddha', category: 'Heritage', desc: 'An immense 88-foot white Buddha statue perched atop a hill with panoramic vistas.', tag: 'Panoramic Cityscape Vista' },
      { name: 'Udawattakele Sanctuary', category: 'Wildlife', desc: 'Historic royal rainforest reserve with meditation hermit caves and wild monkeys.', tag: 'Urban Rainforest Walk' }
    ]
  },
  {
    id: 'badulla',
    name: 'Badulla & Ella (The Highland Railway Valley)',
    sinhala: 'බදුල්ල / ඇල්ල',
    tamil: 'பதுளை / எல்லா',
    province: 'Uva Province',
    region: 'Central Highlands',
    tagline: 'The Blue Train crossing the Nine Arch Viaduct & Emerald Peaks',
    intro: 'Perched high in the southern Uva highlands, Badulla and Ella form the epic culmination of the world’s most scenic mountain train journey. Terraced tea valleys and waterfalls make this an adventure haven.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'January to May (clearest skies and trekking trails)',
    weather: 'Crisp mountain air, misty mornings, cool alpine nights (15°C - 24°C)',
    days: 3,
    transit: 'Take the legendary blue passenger train from Kandy or Nanu Oya through tea valleys. Tuk-tuks and scooters operate locally.',
    food: 'Freshly baked coconut roti with lunu miris, mountain buffalo curd with kithul treacle, and Ceylon black tea.',
    budgetUSD: { small: 16, medium: 50, high: 170 },
    places: [
      { name: 'Nine Arch Bridge (Demodara)', category: 'Heritage', desc: 'Granite colonial viaduct with zero steel reinforcement where the blue train passes.', tag: 'The "Bridge in the Sky"' },
      { name: 'Little Adam\'s Peak & Ella Rock', category: 'Adventure', desc: 'Gentle sunrise trail through tea hills overlooking the 1,000m Ella Gap drop.', tag: 'World-Class Trekking Peaks' },
      { name: 'Ravana Falls & Secret Caves', category: 'Nature', desc: 'Multi-tiered 25-meter cascade linked to Ramayana folklore where Princess Sita was hidden.', tag: 'Iconic Roadside Waterfall' },
      { name: 'Dunhinda Falls (Badulla)', category: 'Nature', desc: 'The Smoky Cascade plunging 64 meters into a roaring forest cauldron.', tag: 'Dramatic Mountain Waterfall' }
    ]
  },
  {
    id: 'galle',
    name: 'Galle (Colonial Ramparts & Turquoise Surf)',
    sinhala: 'ගාල්ල',
    tamil: 'காலி',
    province: 'Southern Province',
    region: 'Southern Coast',
    tagline: '17th-Century Dutch Fort, Stilt Fishermen & Golden Coastline',
    intro: 'Where timeless Dutch colonial cobbled alleyways meet the turquoise rhythm of the Indian Ocean. Galle Fort is a living UNESCO fortress packed with art galleries, boutique gems, and nearby calm surf beaches.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'November to April (calm sunny sea, ideal swimming & snorkeling)',
    weather: 'Warm tropical maritime warmth with gentle coastal breezes (27°C - 31°C)',
    days: 2,
    transit: 'Fast 1-hour Southern Expressway drive from Colombo or scenic coastal train hugging the shoreline.',
    food: 'Galle prawn & crab curry, fresh seer fish steak, coconut sambol with fresh hoppers, and artisan gelato.',
    budgetUSD: { small: 22, medium: 75, high: 240 },
    places: [
      { name: 'Galle Dutch Fort Ramparts & Lighthouse', category: 'Heritage', desc: 'Massive coral and granite sea walls built in the 1600s sheltering boutique cafes.', tag: 'UNESCO Living Fortress' },
      { name: 'Unawatuna & Jungle Beach', category: 'Beach', desc: 'Golden horseshoe bay with tranquil turquoise waves and coral snorkeling.', tag: 'Protected Coral Swimming Bay' },
      { name: 'Koggala Stilt Fishermen', category: 'Culture', desc: 'Ancient artisanal fishing method where men balance on crossbars casting lines in the surf.', tag: 'Timeless Coastal Tradition' },
      { name: 'Kosgoda Sea Turtle Sanctuary', category: 'Wildlife', desc: 'Rescuing injured ocean turtles and releasing endangered Green and Hawksbill hatchlings.', tag: 'Marine Wildlife Protection' }
    ]
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya (Little England & Ceylon Tea)',
    sinhala: 'නුවරඑළිය',
    tamil: 'நுவரெலியா',
    province: 'Central Province',
    region: 'Central Highlands',
    tagline: 'Misty Tea Country, Colonial Cottages & World\'s End Precipice',
    intro: 'Sri Lanka’s highest town perched at 1,868 meters above sea level. Famed for crisp eucalyptus air, British Tudor-style mansions, sprawling Ceylon black tea plantations, and the dramatic drop of World’s End.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'February to May (cool, dry, blossoming flowers)',
    weather: 'Cool alpine highland climate; daytime 16°C - 20°C, night drops to 9°C',
    days: 2,
    transit: 'Train to Nanu Oya Station, followed by a 20-min scenic uphill taxi to Nuwara Eliya.',
    food: 'Highland strawberry sundaes at Adma Agro, traditional high tea at the Grand Hotel, and hot leek soup.',
    budgetUSD: { small: 18, medium: 65, high: 220 },
    places: [
      { name: 'Horton Plains & World’s End', category: 'Nature', desc: 'Cloud forest plateau with Baker\'s Falls and an astonishing vertical 880-meter sheer cliff drop.', tag: 'Spectacular 880m Sheer Abyss' },
      { name: 'Pedro Tea Factory', category: 'Culture', desc: 'Historic operational tea factory where pure single-estate Pekoe is processed and tasted.', tag: 'Birthplace of Ceylon Tea' },
      { name: 'Lake Gregory & Victoria Park', category: 'Nature', desc: 'Highland lake offering pedal boats, horse riding paths, and manicured colonial gardens.', tag: 'Colonial Hillside Retreat' },
      { name: 'Ramboda Falls', category: 'Nature', desc: 'Majestic roaring twin falls cascading through rocky gorges along the highway.', tag: 'Thundering Mountain Waterfalls' }
    ]
  },
  {
    id: 'matara',
    name: 'Matara & Mirissa (Whale Haven & Coconut Hill)',
    sinhala: 'මාතර / මිරිස්ස',
    tamil: 'மாத்தறை',
    province: 'Southern Province',
    region: 'Southern Coast',
    tagline: 'Blue Whale Safaris, Surfing Breaks & Dondra Southernmost Point',
    intro: 'The heart of Sri Lanka’s deep south, celebrated worldwide for offering the highest chance to encounter Blue Whales and playful spinner dolphins just offshore, plus the palm-lined Coconut Tree Hill.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'November to April (whale watching season & calm coastal surf)',
    weather: 'Sunny tropical beach climate with golden sunset breezes (28°C - 32°C)',
    days: 2,
    transit: 'Southern Expressway connects Matara in 2 hours from Colombo.',
    food: 'Southern Ambul Thiyal (sour clay-pot tuna), fresh grilled calamari, and buffalo curd with palm treacle.',
    budgetUSD: { small: 16, medium: 52, high: 195 },
    places: [
      { name: 'Mirissa Blue Whale Safari', category: 'Wildlife', desc: 'Encounters with the world\'s largest mammal and pods of spinner dolphins close to shore.', tag: 'World Premier Whale Watching' },
      { name: 'Coconut Tree Hill', category: 'Nature', desc: 'A natural red-dirt promontory jutting into the ocean crowned with swaying coconut palms.', tag: 'Iconic Sunset Photography' },
      { name: 'Dondra Head Lighthouse', category: 'Heritage', desc: 'The southernmost point of Sri Lanka and the tallest lighthouse in the country.', tag: 'Southernmost Tip of the Island' },
      { name: 'Polhena Beach Coral Reef', category: 'Beach', desc: 'A shallow reef pool where wild sea turtles swim calmly alongside snorkelers.', tag: 'Snorkel with Wild Turtles' }
    ]
  },
  {
    id: 'hambantota',
    name: 'Hambantota & Yala (Leopard Safaris & Salt Lagoons)',
    sinhala: 'හම්බන්තොට / යාල',
    tamil: 'அம்பாந்தோட்டை',
    province: 'Southern Province',
    region: 'Southern Coast',
    tagline: 'World’s Highest Leopard Density & Wild Coastal Wilderness',
    intro: 'Where dry thorn scrub and ancient monastic ruins meet the ocean surf. Renowned globally for Yala National Park—home to the highest concentration of Sri Lankan leopards on earth.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'February to July (dry season when wildlife congregates at waterholes)',
    weather: 'Sunny dry zone climate with open blue skies (29°C - 34°C)',
    days: 2,
    transit: 'Southern Expressway connects Colombo directly to Hambantota in 2.5 hours. 4x4 open safari jeeps are mandatory inside national parks.',
    food: 'Hambantota pure buffalo curd, fiery wild jackfruit curry, and rustic village pol roti.',
    budgetUSD: { small: 20, medium: 70, high: 260 },
    places: [
      { name: 'Yala National Park', category: 'Wildlife', desc: 'World-renowned coastal game reserve harboring the wild leopard, sloth bears, and elephants.', tag: 'Highest Leopard Density on Earth' },
      { name: 'Bundala Wetland Reserve', category: 'Wildlife', desc: 'Ramsar wetland sanctuary where thousands of migratory Greater Flamingos gather.', tag: 'Ramsar Wetland Bird Sanctuary' },
      { name: 'Kirinda Fishermen Temple', category: 'Heritage', desc: 'Seaside rock shrine perched above crashing ocean waves and towering white coastal dunes.', tag: 'Ancient Seaside Legend' },
      { name: 'Ridiyagama Open Safari Park', category: 'Wildlife', desc: 'Sri Lanka’s first open-range safari zoo with free-roaming lions, zebras, and herbivores.', tag: 'Open-Range Safari Adventure' }
    ]
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee (Sacred Swami Rock & Nilaveli Sands)',
    sinhala: 'ත්‍රිකුණාමලය',
    tamil: 'திருகோணமலை',
    province: 'Eastern Province',
    region: 'Eastern Paradise',
    tagline: 'Clifftop Koneswaram Temple, Pigeon Island Reef & Whale Sanctuary',
    intro: 'A legendary natural deep-water harbor on the eastern coast. Known for the sacred clifftop Hindu shrine Koneswaram perched above Lovers Leap, powdery white coral beaches in Nilaveli, and snorkeling at Pigeon Island.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'April to October (calm turquoise seas, ideal diving & whale watching)',
    weather: 'Sunny eastern coast sunshine, gentle onshore sea breeze (28°C - 33°C)',
    days: 3,
    transit: 'Night sleeper or express train from Colombo Fort (7 hrs), or private AC car via Dambulla (5 hrs).',
    food: 'Trincomalee spiced crab curry, freshly tossed seafood kothu roti, and hot Jaffna-style dosas.',
    budgetUSD: { small: 18, medium: 58, high: 190 },
    places: [
      { name: 'Koneswaram Clifftop Temple', category: 'Culture', desc: 'Thousand-year-old Hindu temple of Shiva perched upon Swami Rock dropping sheer 130 meters into the ocean.', tag: 'The "Rome of the Orient"' },
      { name: 'Pigeon Island Marine Park', category: 'Wildlife', desc: 'Pristine live coral reefs where you swim alongside harmless blacktip reef sharks and sea turtles.', tag: 'Premier Snorkeling & Coral Reef' },
      { name: 'Nilaveli & Marble Beach', category: 'Beach', desc: 'Endless stretches of fine powdery sand with shallow, glass-clear turquoise waters.', tag: 'Pristine White Sand Coast' },
      { name: 'Kanniya Hot Water Springs', category: 'Heritage', desc: 'Seven square stone wells with naturally warm healing thermal mineral waters.', tag: 'Ancient Natural Thermal Wells' }
    ]
  },
  {
    id: 'jaffna',
    name: 'Jaffna (Northern Heritage & Delft Island)',
    sinhala: 'යාපනය',
    tamil: 'யாழ்ப்பாணம்',
    province: 'Northern Province',
    region: 'Northern Heritage',
    tagline: 'Golden Nallur Kovil, Coastal Fort & Wild Island Ponies',
    intro: 'The cultural capital of Tamil heritage in Sri Lanka, boasting towering gold-gilded Hindu temple gopurams, Dutch star forts overlooking lagoons, Palmyra palm landscapes, and the secluded island of Delft.',
    image: 'https://images.unsplash.com/photo-1609137144822-38686d115be5?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'December to March (pleasant sunshine, dry weather)',
    weather: 'Warm northern maritime sunshine, dry breeze (27°C - 32°C)',
    days: 3,
    transit: 'Take the Yal Devi express train across Elephant Pass into Jaffna station (6 hrs from Colombo).',
    food: 'Authentic Jaffna fiery crab curry with roasted spices, Odiyal Kool seafood chowder, and Rio ice cream.',
    budgetUSD: { small: 18, medium: 50, high: 155 },
    places: [
      { name: 'Nallur Kandaswamy Kovil', category: 'Culture', desc: 'Architectural masterpiece with towering golden gopurams and sacred silver chariot festivals.', tag: 'Grandest Hindu Temple in North' },
      { name: 'Delft Island (Neduntheevu)', category: 'Adventure', desc: 'Secluded coral-stone island reachable by ferry, featuring herds of wild feral ponies left by Dutch colonists.', tag: 'Feral Ponies & Coral Island' },
      { name: 'Jaffna Dutch Fort', category: 'Heritage', desc: 'One of the largest surviving colonial fortifications in Asia built in 1618 overlooking the lagoon.', tag: 'Massive Dutch Colonial Bastion' },
      { name: 'Keerimalai Sacred Springs', category: 'Heritage', desc: 'Natural freshwater spring pool built on the ocean edge where visitors bathe in mineral healing waters.', tag: 'Natural Ocean-Edge Healing Pool' }
    ]
  },
  {
    id: 'colombo',
    name: 'Colombo (Vibrant Coastal Metropolis)',
    sinhala: 'කොළඹ',
    tamil: 'கொழும்பு',
    province: 'Western Province',
    region: 'Western Hub',
    tagline: 'Lakeside Gangaramaya, Sunset Promenades & High-Rise Dining',
    intro: 'The dynamic commercial heart of Sri Lanka, blending colonial clock towers and Dutch hospitals with futuristic skyscrapers like the Colombo Lotus Tower. World-class street food and ocean sunset walks.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'November to April, though vibrant year-round',
    weather: 'Tropical ocean climate with warm days and refreshing evening breezes (26°C - 32°C)',
    days: 2,
    transit: '30-minute expressway ride from Bandaranaike International Airport (CMB). Ride-hailing via PickMe/Uber or metered tuk-tuks.',
    food: 'Ministry of Crab garlic chili mud crab, Isso Vadai prawn fritters at Galle Face Green, and Kottu Rotti.',
    budgetUSD: { small: 20, medium: 70, high: 230 },
    places: [
      { name: 'Gangaramaya & Seema Malaka', category: 'Culture', desc: 'Floating pavilion on Beira Lake designed partly by legendary architect Geoffrey Bawa.', tag: 'Floating Pavilion on Beira Lake' },
      { name: 'Galle Face Green Promenade', category: 'Culture', desc: 'Oceanfront lawn facing the Indian Ocean, bustling with kite flyers and sizzling street food stalls.', tag: 'Sunset Gathering & Street Food' },
      { name: 'Colombo Lotus Tower', category: 'Adventure', desc: 'South Asia’s tallest tower at 350 meters with revolving dining and observation deck.', tag: '350m Modern Skyline Landmark' },
      { name: 'Dutch Hospital & Pettah', category: 'Heritage', desc: 'Restored 17th-century colonial hospital courtyard alongside vibrant historic street markets.', tag: 'Colonial Courtyards & Bazaars' }
    ]
  }
];

const TRANSPORTS = [
  { name: 'The Scenic Hill Country & Coastal Train', category: 'Train', tagline: 'World-famous tea mountain rail & ocean-hugging railway lines', desc: 'Travel through misty mountain viaducts and tea estates. Routes: Colombo to Kandy, Kandy to Ella (over Nine Arch Bridge), and coastal line to Galle.', rateUSD: '$8 - $22 / ticket', rateLKR: 'Rs. 2,400 - 6,800', note: 'Train tickets open 30 days prior. We pre-reserve official seats.', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dedicated Private AC Car / Van & Chauffeur', category: 'Private Chauffeur', tagline: 'Door-to-door flexibility with certified English-speaking drivers', desc: 'Toyota Prius or luxury Toyota KDH high-roof van. Unlimited fuel, highway expressway tolls, and driver lodging included.', rateUSD: '$60 - $95 / full day', rateLKR: 'Rs. 18,500 - 29,500', note: 'Tourist Board Certified guide. Driver expenses fully covered.', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80' },
  { name: 'Airport Transfer & Intercity Call Taxi', category: 'Call Taxi', tagline: 'Fixed-price point-to-point transfers and on-demand cabs', desc: 'Direct point-to-point transfers from airport to Colombo, Negombo, Galle, Kandy, or Sigiriya with flight tracking.', rateUSD: '$35 - $65 / route', rateLKR: 'Rs. 10,800 - 20,000', note: '120+ verified call taxi owners islandwide.', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Authentic Local Tuk-Tuk & Self-Drive Rental', category: 'Tuk-Tuk', tagline: 'The quintessential Ceylon thrill for village alleys & beach hopping', desc: 'Chauffeured tuk-tuk hops and self-drive rentals with local international driving permits.', rateUSD: '$2 - $5 / hop | $18 / day rental', rateLKR: 'Rs. 600 - 1,500', note: 'Pre-negotiated transparent rates across districts.', img: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=600&q=80' },
  { name: 'Intercity Expressway Luxury AC Bus', category: 'Expressway Bus', tagline: 'Fast and pocket-friendly journeys along modern expressways', desc: 'Nonstop AC coaches connecting Colombo with Galle, Matara, Hambantota, and Kandy via tollways.', rateUSD: '$3 - $6 / trip', rateLKR: 'Rs. 950 - 1,850', note: 'Departures every 20-30 minutes from key terminals.', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' }
];

const STAYS = [
  { id: '1', name: 'Sigiriya Treehouse Eco Lodge', district: 'Matale', tier: 'Small / Budget', tierCat: 'small', priceUSD: 24, img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80', desc: 'Rustic wooden treehouse in teak forest overlooking Pidurangala rock. Homemade rice and curry.', rating: 4.8 },
  { id: '2', name: 'Ella Valley View Homestay', district: 'Badulla & Ella', tier: 'Small / Budget', tierCat: 'small', priceUSD: 28, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', desc: 'Perched on the rim of Ella Gap with mountain views. Walking distance to Nine Arch Bridge trail.', rating: 4.9 },
  { id: '3', name: 'Mirissa Palm Surf Bungalows', district: 'Matara & Mirissa', tier: 'Small / Budget', tierCat: 'small', priceUSD: 30, img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80', desc: '150 meters from Mirissa surf reef. Hammock garden and whale watching reservation support.', rating: 4.7 },
  { id: '4', name: 'Fort Printers Heritage Boutique', district: 'Galle', tier: 'Medium / Comfort', tierCat: 'medium', priceUSD: 78, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', desc: 'Restored 18th-century Dutch colonial mansion inside Galle Fort with lap pool and seafood bistro.', rating: 4.9 },
  { id: '5', name: 'Earl’s Regency River Lodge', district: 'Kandy', tier: 'Medium / Comfort', tierCat: 'medium', priceUSD: 85, img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80', desc: 'Mahaweli riverside resort with emerald mountain backdrops, spa treatments, and open-air dining.', rating: 4.8 },
  { id: '6', name: 'Crest Highland Manor & Tea Lodge', district: 'Nuwara Eliya', tier: 'Medium / Comfort', tierCat: 'medium', priceUSD: 70, img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80', desc: 'British hill-station architecture with wood-burning fireplaces and tea peaks views.', rating: 4.8 },
  { id: '7', name: 'Water Garden Sigiriya Villas', district: 'Matale', tier: 'High / Luxury', tierCat: 'high', priceUSD: 240, img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80', desc: 'Ultra-exclusive private pool villas inspired by royal water gardens facing Sigiriya Rock.', rating: 5.0 },
  { id: '8', name: 'Ceylon Tea Trails - Castlereagh', district: 'Nuwara Eliya', tier: 'High / Luxury', tierCat: 'high', priceUSD: 380, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', desc: 'Relais & Châteaux restored British planter bungalow with personal butler and tea sommelier.', rating: 5.0 },
  { id: '9', name: 'Wild Coast Tented Lodge - Yala', district: 'Hambantota & Yala', tier: 'High / Luxury', tierCat: 'high', priceUSD: 420, img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80', desc: 'Cocoon domes where the jungle meets the sea. Guided private safari game drives with naturalists.', rating: 4.9 },
  { id: '10', name: 'Amangalla Colonial Heritage Estate', district: 'Galle', tier: 'High / Luxury', tierCat: 'high', priceUSD: 360, img: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=600&q=80', desc: 'Grand 17th-century landmark in Galle Fort with antique four-poster beds and hydrotherapy baths.', rating: 4.9 }
];

const REVIEWS = [
  { name: 'Elena & Marcus Vance', country: 'United Kingdom', rating: 5, route: 'Sigiriya → Kandy → Ella → Galle', title: 'Flawless 10-day loop around Sri Lanka!', comment: 'Our driver was an absolute gem—always on time, knowledgeable about every hidden temple, and drove safely. Clicking the district pictures helped us plan each stop. We did the scenic train and loved the mix of boutique stays in Galle Fort and treehouses in Sigiriya.' },
  { name: 'Dr. Sophie Meyer', country: 'Germany', rating: 5, route: 'Colombo → Anuradhapura → Trincomalee → Jaffna', title: 'Incredible budget-friendly advice for solo travel', comment: 'As a solo woman traveling across northern and eastern districts, I felt completely safe. The budget accommodation recommendations were clean and welcoming, and train ticket reservations from Colombo saved me hours.' },
  { name: 'The Gallagher Family (David & Sarah)', country: 'Australia', rating: 5, route: 'Yala Safari → Mirissa Whales → Ella', title: 'Saw 3 leopards in Yala and blue whales in Mirissa!', comment: 'Traveling with two teenagers was seamless. Ceylon Odyssey organized a spacious Toyota KDH van with AC, excellent kid-friendly hotels with pools, and VIP safari jeeps. The cost calculator was spot on!' },
  { name: 'Rajiv & Ananya Sharma', country: 'India', rating: 5, route: 'Kandy → Nuwara Eliya → Galle', title: 'Exceptional luxury recommendations', comment: 'The high-tier curation was impeccable—Amangalla in Galle and Ceylon Tea Trails were pure paradise. The agency coordinator was available round-the-clock on WhatsApp.' }
];

const FAQS = [
  { q: 'Do I need a visa to travel to Sri Lanka and how do I apply?', a: 'Most international travelers require an Electronic Travel Authorization (ETA) or tourist eVisa prior to boarding their flight. You can apply easily online. Our team assists with fast-track documentation.' },
  { q: 'When is the best time to visit Sri Lanka given the two monsoons?', a: 'Sri Lanka is a year-round sunshine island! From Nov to April, the South/West coasts (Galle, Mirissa, Colombo) and Highlands (Ella, Kandy) are sunny. From May to September, the East coast (Trincomalee) and Cultural Triangle (Sigiriya) enjoy calm blue waters and dry weather.' },
  { q: 'How do we book the famous Kandy to Ella blue train tickets?', a: 'Tickets open 30 days before the travel date and sell out in minutes during peak season. Our transport desk pre-reserves 1st/2nd class seats for clients in advance and delivers tickets to your hotel.' },
  { q: 'How much should I budget per day across Small, Medium, and High tiers?', a: 'Small (Budget): $35–$50/person covers eco-homestays, curries, and public trains. Medium (Comfort): $75–$130/person covers boutique hotels with pools and private chauffeur segments. High (Luxury): $220–$450+/person covers 5-star villas, dedicated luxury AC vans, and fine dining.' },
  { q: 'How do Call Taxi owners and Hotel managers partner with Ceylon Odyssey?', a: 'Chauffeurs and taxi owners with clean tourist vehicles can register via our Partner section for weekly pre-paid tour assignments. Hotel managers can list properties for direct guest placements without heavy OTA commissions.' },
  { q: 'What is the dress code for visiting sacred temples like Kandy or Anuradhapura?', a: 'Shoulders and knees must be covered. White or light-colored attire is respectful. Shoes and hats must be removed at temple entrances. Never pose with your back turned to a Buddha statue for photos.' }
];

// 2. CURRENCY CONVERSION
let currentCurrency = 'USD';
const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  LKR: { symbol: 'Rs. ', rate: 310 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 }
};

function formatPrice(amountUSD) {
  const c = CURRENCIES[currentCurrency];
  const val = Math.round(amountUSD * c.rate);
  return currentCurrency === 'LKR' ? c.symbol + val.toLocaleString() : c.symbol + val;
}

function changeCurrency(newCurr) {
  currentCurrency = newCurr;
  renderDistricts();
  renderStays();
  updateEstimator();
}

// 3. DISTRICTS & MODAL POPUP
let currentRegion = 'All Regions';
let searchQuery = '';
let activeModalDistrict = null;

function renderDistricts() {
  const grid = document.getElementById('district-cards-grid');
  if (!grid) return;

  const filtered = DISTRICTS.filter(d => {
    const matchesRegion = currentRegion === 'All Regions' || d.region === currentRegion;
    if (!matchesRegion) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return d.name.toLowerCase().includes(q) || d.intro.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q) || d.places.some(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; background: #fff; border-radius: 12px; border: 1px solid #e7e5e4;"><p style="color: #78716c;">No districts match your search query. Try "Sigiriya", "Ella", or "Galle".</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <article class="district-card">
      <!-- Clickable Picture for District Popup -->
      <div class="district-img-wrap" onclick="openDistrictModal('${d.id}')" title="Click photo to open district details popup">
        <img src="${d.image}" alt="${d.name}" class="district-img" loading="lazy">
        <div class="district-img-overlay"></div>
        <div class="click-prompt-badge">
          <span>👁️ Click photo for popup</span>
        </div>
        <div class="district-img-info">
          <h3>${d.name}</h3>
          <span class="district-script">${d.sinhala} · ${d.tamil}</span>
        </div>
      </div>

      <div class="district-card-body">
        <div>
          <div class="district-meta">
            <span>${d.province}</span> · <span>${d.days} Days ideal</span> · <span>${d.bestSeason.split(',')[0]}</span>
          </div>
          <p class="district-intro">${d.intro}</p>
          <ul class="precious-list">
            ${d.places.slice(0, 3).map(p => `
              <li><strong>${p.name}:</strong> ${p.tag}</li>
            `).join('')}
          </ul>
        </div>

        <div class="district-card-foot">
          <div class="stay-price-text">
            ${formatPrice(d.budgetUSD.small)} <span>/ night</span>
          </div>
          <button class="popup-link-btn" onclick="openDistrictModal('${d.id}')">
            View District Popup ↗
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function filterRegion(reg) {
  currentRegion = reg;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.region === reg);
  });
  renderDistricts();
}

function handleSearch(val) {
  searchQuery = val;
  renderDistricts();
}

function setSearchFilter(val) {
  const input = document.getElementById('district-search-input');
  if (input) input.value = val;
  searchQuery = val;
  renderDistricts();
  const el = document.getElementById('districts');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// DISTRICT MODAL LOGIC (POPUP MSG REQUIREMENT)
function openDistrictModal(districtId) {
  const d = DISTRICTS.find(x => x.id === districtId);
  if (!d) return;
  activeModalDistrict = d;

  document.getElementById('modal-img').src = d.image;
  document.getElementById('modal-region-province').innerText = `${d.province} · ${d.region} · ${d.sinhala} / ${d.tamil}`;
  document.getElementById('modal-title').innerText = d.name;
  document.getElementById('modal-tagline').innerText = d.tagline;
  document.getElementById('modal-intro').innerText = d.intro;
  document.getElementById('modal-season').innerText = d.bestSeason;
  document.getElementById('modal-days').innerText = `${d.days} Days for full immersion`;
  document.getElementById('modal-weather').innerText = d.weather;
  document.getElementById('modal-transit').innerText = d.transit;
  document.getElementById('modal-food').innerText = d.food;

  const placesGrid = document.getElementById('modal-places-grid');
  placesGrid.innerHTML = d.places.map(p => `
    <div class="place-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <h5>${p.name}</h5>
        <span style="font-size:10px; font-weight:700; color:#064e3b; background:#ecfdf5; padding:2px 6px; border-radius:4px;">${p.category}</span>
      </div>
      <p>${p.desc}</p>
      <span class="place-tag">✓ ${p.tag}</span>
    </div>
  `).join('');

  const budgetGrid = document.getElementById('modal-budget-grid');
  budgetGrid.innerHTML = `
    <div class="tier-box">
      <h6>Small / Budget</h6>
      <div class="price">${formatPrice(d.budgetUSD.small)}</div>
      <span style="font-size:10px; color:#78716c;">Homestays & eco-rooms</span>
    </div>
    <div class="tier-box highlight">
      <h6 style="color:#064e3b; font-weight:700;">Medium / Comfort</h6>
      <div class="price" style="color:#064e3b;">${formatPrice(d.budgetUSD.medium)}</div>
      <span style="font-size:10px; color:#064e3b;">Boutique hotels with pool</span>
    </div>
    <div class="tier-box">
      <h6>High / Luxury</h6>
      <div class="price">${formatPrice(d.budgetUSD.high)}</div>
      <span style="font-size:10px; color:#78716c;">5-star heritage villas</span>
    </div>
  `;

  const modal = document.getElementById('district-modal');
  modal.classList.add('active');
}

function closeDistrictModal() {
  const modal = document.getElementById('district-modal');
  modal.classList.remove('active');
}

function planForCurrentModalDistrict() {
  if (activeModalDistrict) {
    const distSelect = document.getElementById('form-district');
    if (distSelect) distSelect.value = activeModalDistrict.name;
    const notesInput = document.getElementById('form-notes');
    if (notesInput) notesInput.value = `I would like to explore ${activeModalDistrict.name} and nearby precious attractions.`;
  }
  closeDistrictModal();
  const contactSec = document.getElementById('partner-contact');
  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
}

// 4. TRANSPORTS RENDER
function renderTransports() {
  const grid = document.getElementById('transport-grid');
  if (!grid) return;

  grid.innerHTML = TRANSPORTS.map(t => `
    <div class="district-card">
      <div style="position:relative; height:180px; background:#1c1917;">
        <img src="${t.img}" alt="${t.name}" style="width:100%; height:100%; object-fit:cover;">
        <span style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.7); color:#fff; font-size:11px; padding:2px 8px; border-radius:4px;">${t.category}</span>
        <div style="position:absolute; bottom:10px; left:14px; right:14px; color:#fff; font-weight:800; font-size:16px;">${t.name}</div>
      </div>
      <div style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; flex:1;">
        <div>
          <p style="font-size:12px; font-weight:700; color:#064e3b; margin-bottom:6px;">${t.tagline}</p>
          <p style="font-size:12px; color:#57534e; line-height:1.5; margin-bottom:12px;">${t.desc}</p>
          <div style="background:#fafaf9; border:1px solid #e7e5e4; padding:8px 12px; border-radius:8px; margin-bottom:12px; font-size:12px; display:flex; justify-content:space-between;">
            <span style="color:#78716c;">Estimated Rate:</span>
            <strong>${t.rateUSD}</strong>
          </div>
          <div style="font-size:11px; color:#92400e; background:#fef3c7; padding:8px; border-radius:6px; margin-bottom:16px;">
            <strong>Note:</strong> ${t.note}
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="bookTransport('${t.name}')">
          Book / Inquire Transport
        </button>
      </div>
    </div>
  `).join('');
}

function bookTransport(name) {
  const notesInput = document.getElementById('form-notes');
  if (notesInput) notesInput.value = `I would like to inquire about booking: ${name}.`;
  const el = document.getElementById('partner-contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// 5. STAYS RENDER & FILTER
let currentStayTier = 'all';

function renderStays() {
  const grid = document.getElementById('stays-grid');
  if (!grid) return;

  const filtered = STAYS.filter(s => currentStayTier === 'all' || s.tierCat === currentStayTier);
  grid.innerHTML = filtered.map(s => `
    <article class="district-card">
      <div style="position:relative; height:180px; background:#1c1917;">
        <img src="${s.img}" alt="${s.name}" style="width:100%; height:100%; object-fit:cover;">
        <span style="position:absolute; top:12px; left:12px; background:${s.tierCat === 'small' ? '#064e3b' : s.tierCat === 'medium' ? '#0369a1' : '#b45309'}; color:#fff; font-size:10px; font-weight:700; padding:2px 8px; border-radius:4px;">${s.tier}</span>
        <span style="position:absolute; bottom:10px; left:12px; background:rgba(0,0,0,0.7); color:#f59e0b; font-size:11px; font-weight:700; padding:2px 6px; border-radius:4px;">★ ${s.rating}</span>
      </div>
      <div style="padding:16px; display:flex; flex-direction:column; justify-content:space-between; flex:1;">
        <div>
          <span style="font-size:11px; color:#78716c; display:block; margin-bottom:4px;">${s.district}</span>
          <h4 style="font-size:15px; font-weight:700; margin-bottom:6px;">${s.name}</h4>
          <p style="font-size:12px; color:#57534e; line-height:1.45; margin-bottom:12px;">${s.desc}</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #f5f5f4; padding-top:12px;">
          <div>
            <span style="font-size:10px; color:#78716c; display:block; text-transform:uppercase;">From</span>
            <strong>${formatPrice(s.priceUSD)}</strong> <span style="font-size:11px; color:#78716c;">/nt</span>
          </div>
          <button class="btn btn-primary" style="padding:6px 12px; font-size:12px;" onclick="bookHotel('${s.name}', '${s.tier}')">Book</button>
        </div>
      </div>
    </article>
  `).join('');
}

function filterStays(tier) {
  currentStayTier = tier;
  document.querySelectorAll('.stay-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tier === tier);
  });
  renderStays();
}

function bookHotel(hotel, tier) {
  const tierSelect = document.getElementById('form-tier');
  if (tierSelect) tierSelect.value = tier;
  const notes = document.getElementById('form-notes');
  if (notes) notes.value = `I would like to reserve accommodation at "${hotel}" (${tier}).`;
  const el = document.getElementById('partner-contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// 6. BUDGET ESTIMATOR DYNAMICS
let estDays = 10;
let estTravelers = 2;
let estTier = 'medium';
let estTransport = 'chauffeur-van';

function setEstDays(d) {
  estDays = d;
  document.getElementById('est-days-display').innerText = `${d} Days`;
  document.querySelectorAll('.est-d-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.innerText) === d);
  });
  updateEstimator();
}

function setEstTravelers(t) {
  estTravelers = t;
  const rooms = Math.ceil(t / 2);
  document.getElementById('est-travelers-display').innerText = `${t} ${t === 1 ? 'Guest' : 'Guests'}`;
  document.getElementById('est-rooms-display').innerText = `${rooms} Room(s) calculated`;
  document.querySelectorAll('.est-t-btn').forEach(b => {
    b.classList.toggle('active', b.innerText.includes('(' + t + ')'));
  });
  updateEstimator();
}

function setEstTier(tier) {
  estTier = tier;
  document.querySelectorAll('.est-tier-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tier === tier);
  });
  updateEstimator();
}

function setEstTransport(tr) {
  estTransport = tr;
  document.querySelectorAll('.est-tr-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.transport === tr);
  });
  updateEstimator();
}

function updateEstimator() {
  const stayRate = estTier === 'small' ? 26 : estTier === 'medium' ? 75 : 280;
  const rooms = Math.ceil(estTravelers / 2);
  const totalStay = rooms * stayRate * estDays;

  let dailyTransport = 0;
  if (estTransport === 'train-tuktuk') dailyTransport = 12 * estTravelers;
  else if (estTransport === 'chauffeur-van') dailyTransport = estTravelers <= 3 ? 70 : 95;
  else dailyTransport = 45;
  const totalTransport = dailyTransport * estDays;

  const mealPerPerson = estTier === 'small' ? 12 : estTier === 'medium' ? 28 : 65;
  const totalMeals = mealPerPerson * estTravelers * estDays;

  const actPerPerson = estTier === 'small' ? 60 : estTier === 'medium' ? 140 : 280;
  const totalAct = actPerPerson * estTravelers;

  const grandTotal = totalStay + totalTransport + totalMeals + totalAct;
  const perPerson = grandTotal / estTravelers;
  const perPersonDay = perPerson / estDays;

  document.getElementById('est-grand-total').innerText = formatPrice(grandTotal);
  document.getElementById('est-per-person-total').innerText = formatPrice(perPerson);
  document.getElementById('est-per-person-day').innerText = formatPrice(perPersonDay);

  document.getElementById('est-stay-breakdown').innerText = formatPrice(totalStay);
  document.getElementById('est-tr-breakdown').innerText = formatPrice(totalTransport);
  document.getElementById('est-meals-breakdown').innerText = formatPrice(totalMeals);
  document.getElementById('est-act-breakdown').innerText = formatPrice(totalAct);

  const pSmall = document.getElementById('tier-price-small');
  if (pSmall) pSmall.innerText = '~' + formatPrice(26) + '/night';
  const pMed = document.getElementById('tier-price-medium');
  if (pMed) pMed.innerText = '~' + formatPrice(75) + '/night';
  const pHigh = document.getElementById('tier-price-high');
  if (pHigh) pHigh.innerText = '~' + formatPrice(280) + '/night';
}

// 7. REVIEWS & FAQS
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-author">
        <div>
          <h4 style="font-size:14px; font-weight:700;">${r.name}</h4>
          <span style="font-size:12px; color:#78716c;">${r.country}</span>
        </div>
        <div class="review-stars">★★★★★</div>
      </div>
      <h5 style="font-size:14px; font-weight:700; margin-bottom:6px;">${r.title}</h5>
      <p style="font-size:13px; color:#57534e; line-height:1.55; margin-bottom:12px;">"${r.comment}"</p>
      <span style="font-size:11px; font-weight:600; color:#064e3b; background:#ecfdf5; padding:3px 8px; border-radius:4px;">📍 ${r.route}</span>
    </div>
  `).join('');
}

function renderFaqs() {
  const list = document.getElementById('faqs-list');
  if (!list) return;

  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item ${i === 1 ? 'active' : ''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${f.q}</span>
        <span>▼</span>
      </button>
      <div class="faq-answer">
        ${f.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle('active');
}

// 8. COORDINATION FORMS (Traveller, Call Taxi Owner, Hotel Manager)
let currentTab = 'traveler';

function switchContactTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-switch-btn').forEach(b => {
    b.classList.toggle('btn-primary', b.dataset.tab === tab);
    b.classList.toggle('btn-outline', b.dataset.tab !== tab);
  });

  const nameLabel = document.getElementById('form-name-label');
  const distLabel = document.getElementById('form-district-label');
  const notesLabel = document.getElementById('form-notes-label');
  const submitBtn = document.getElementById('form-submit-btn');

  if (tab === 'traveler') {
    nameLabel.innerText = 'Full Name *';
    distLabel.innerText = 'Primary District of Interest *';
    notesLabel.innerText = 'Trip Dates, Preferred Places & Special Requests';
    submitBtn.innerText = 'Submit Traveler Inquiry';
    submitBtn.className = 'btn btn-primary';
    document.getElementById('dynamic-field-1').innerHTML = `
      <label>Preferred Budget Tier</label>
      <select id="form-tier" class="form-control">
        <option value="Small / Budget">Small / Budget ($15–$35/night)</option>
        <option value="Medium / Comfort" selected>Medium / Comfort ($45–$95/night)</option>
        <option value="High / Luxury">High / Luxury ($130–$450+/night)</option>
      </select>`;
    document.getElementById('dynamic-field-2').innerHTML = `
      <label>Number of Travelers</label>
      <input type="number" min="1" max="20" value="2" id="form-guests" class="form-control">`;
  } else if (tab === 'taxi') {
    nameLabel.innerText = 'Owner / Chauffeur Name *';
    distLabel.innerText = 'Operating Base District *';
    notesLabel.innerText = 'Vehicle Condition, Years of Experience & Languages';
    submitBtn.innerText = 'Register Call Taxi / Chauffeur Fleet';
    submitBtn.className = 'btn btn-accent';
    document.getElementById('dynamic-field-1').innerHTML = `
      <label>Vehicle Model / Type</label>
      <select id="form-vehicle" class="form-control">
        <option>Toyota KDH High-Roof Van (AC)</option>
        <option>Toyota Prius / Axio Sedan (AC)</option>
        <option>Mini-Coach (20+ seats)</option>
        <option>Local Tuk-Tuk Fleet</option>
      </select>`;
    document.getElementById('dynamic-field-2').innerHTML = `
      <label>License Accreditation</label>
      <select id="form-license" class="form-control">
        <option>SLTDA Certified Chauffeur Guide</option>
        <option>Registered Commercial Tourist Vehicle</option>
        <option>Call Taxi Fleet (3+ vehicles)</option>
      </select>`;
  } else if (tab === 'hotel') {
    nameLabel.innerText = 'Manager / Host Name *';
    distLabel.innerText = 'Property District / City *';
    notesLabel.innerText = 'Property Name, Website / Photos Link & Amenities';
    submitBtn.innerText = 'Submit Hotel / Villa Partnership';
    submitBtn.className = 'btn btn-primary';
    document.getElementById('dynamic-field-1').innerHTML = `
      <label>Accommodation Category</label>
      <select id="form-hotel-tier" class="form-control">
        <option>Small / Budget (Homestay, Treehouse, Hostel)</option>
        <option>Medium / Comfort (Boutique Villa, River Lodge)</option>
        <option>High / Luxury (5-Star Resort, Heritage Estate)</option>
      </select>`;
    document.getElementById('dynamic-field-2').innerHTML = `
      <label>Total Room Capacity</label>
      <input type="number" min="1" max="300" value="10" id="form-rooms" class="form-control">`;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  document.getElementById('partner-form').style.display = 'none';
  document.getElementById('form-success-msg').style.display = 'block';
}

function resetContactForm() {
  document.getElementById('partner-form').reset();
  document.getElementById('partner-form').style.display = 'block';
  document.getElementById('form-success-msg').style.display = 'none';
}

// INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
  renderDistricts();
  renderTransports();
  renderStays();
  renderReviews();
  renderFaqs();
  updateEstimator();
});
