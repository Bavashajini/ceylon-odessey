import React, { useState } from 'react';
import { CUSTOMER_REVIEWS, FAQS } from '../data/travelOptions';
import { CustomerReview } from '../types/travel';
import { Star, MessageSquareQuote, HelpCircle, ChevronDown, Plus, CheckCircle, MapPin } from 'lucide-react';

export const ReviewsAndFaq: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string>('faq-monsoons');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  // New review form state
  const [authorName, setAuthorName] = useState('');
  const [authorCountry, setAuthorCountry] = useState('');
  const [authorStyle, setAuthorStyle] = useState<'Couples Explorer' | 'Solo Backpacker' | 'Family Wildlife' | 'Luxury Heritage'>('Couples Explorer');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const filteredReviews = reviews.filter((r) => {
    if (selectedStyle === 'All') return true;
    return r.tripStyle === selectedStyle;
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewComment.trim()) return;

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: authorName,
      country: authorCountry || 'International Traveler',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: reviewRating,
      date: 'Just now',
      tripStyle: authorStyle,
      visitedDistricts: ['Sri Lanka Highlight Loop'],
      title: reviewTitle || 'Unforgettable journey across Sri Lanka',
      comment: reviewComment,
    };

    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setShowReviewModal(false);
      setAuthorName('');
      setReviewComment('');
      setReviewTitle('');
    }, 2000);
  };

  return (
    <>
      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span>Verified Traveler Stories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
                Real Experiences Across Sri Lanka’s Districts
              </h2>
              <p className="mt-2 text-stone-600 text-sm sm:text-base">
                Read authentic feedback from international travelers who explored the tea country, wild safaris, and coastal fortresses with our guidance.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-500 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-stone-500">4.9 / 5.0 Average Rating (420+ Tours)</span>
              </div>
              <button
                onClick={() => setShowReviewModal(true)}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write Review</span>
              </button>
            </div>
          </div>

          {/* Style Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 no-scrollbar">
            {['All', 'Couples Explorer', 'Solo Backpacker', 'Family Wildlife', 'Luxury Heritage'].map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                  selectedStyle === style
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-11 h-11 rounded-full object-cover border border-stone-200"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-stone-900 font-display">{rev.author}</h4>
                        <p className="text-xs text-stone-500">{rev.country} · {rev.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h5 className="text-sm font-bold text-stone-900 mb-2">{rev.title}</h5>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1 text-emerald-800 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{rev.visitedDistricts.join(' → ')}</span>
                  </div>
                  <span className="text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                    {rev.tripStyle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Traveler Information Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              Clear answers on visas, seasonal monsoons, budget ranges, and partnering with our agency.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-stone-200 overflow-hidden bg-stone-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:text-emerald-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-800' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submit Review Modal */}
      {showReviewModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
            {reviewSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-stone-900">Thank you for your review!</h3>
                <p className="text-xs text-stone-600 mt-1">Your review has been verified and added to the community.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit}>
                <h3 className="text-lg font-bold text-stone-900 font-display mb-1">Share Your Sri Lanka Experience</h3>
                <p className="text-xs text-stone-500 mb-4">Help other international travelers pick their district highlights.</p>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g., Liam & Emma"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Country</label>
                      <input
                        type="text"
                        value={authorCountry}
                        onChange={(e) => setAuthorCountry(e.target.value)}
                        placeholder="e.g., Canada"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Travel Style</label>
                      <select
                        value={authorStyle}
                        onChange={(e) => setAuthorStyle(e.target.value as any)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      >
                        <option value="Couples Explorer">Couples Explorer</option>
                        <option value="Solo Backpacker">Solo Backpacker</option>
                        <option value="Family Wildlife">Family Wildlife</option>
                        <option value="Luxury Heritage">Luxury Heritage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Rating</label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= reviewRating ? 'fill-amber-400' : 'text-stone-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Review Headline</label>
                    <input
                      type="text"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      placeholder="e.g., Unbelievable sunrise at Pidurangala!"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Your Detailed Experience</label>
                    <textarea
                      required
                      rows={3}
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      placeholder="Share tips about hotels, drivers, temples, or food..."
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-3 py-2 text-xs text-stone-600 hover:text-stone-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-sm"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
