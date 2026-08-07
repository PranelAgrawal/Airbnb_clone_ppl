import React, { useState } from 'react';
import {
  Sparkles, CheckCircle2, Key, MessageSquare, Map, Tag, Star, ChevronRight
} from 'lucide-react';

export default function ReviewsSection({ listing, addToast }) {
  const [expandedReviews, setExpandedReviews] = useState({ 2: false, 4: false });

  const handlePillClick = (label) => {
    if (addToast) addToast(`Filtering reviews by ${label}...`, "info");
  };

  const handleShowAllReviews = () => {
    if (addToast) addToast("Opening all 19 reviews...", "info");
  };

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const reviewFilterPills = [
    { label: "Comfort", count: 6, icon: "🛋️", bg: "bg-[#EFE7DA]" },
    { label: "Accuracy", count: 5, icon: "✅", bg: "bg-[#E4F0E9]" },
    { label: "Hot tub", count: 5, icon: "🛁", bg: "bg-[#EFE3D0]" },
    { label: "Condition", count: 4, icon: "🎂", bg: "bg-[#F7E3E8]" },
    { label: "Hospitality", count: 8, icon: "🎁", bg: "bg-[#FBE4E7]" },
    { label: "Cleanliness", count: 4, icon: "🧴", bg: "bg-[#DCEBF0]" },
    { label: "Amenities", count: 2, icon: "🌺", bg: "bg-[#EFE3CE]" },
    { label: "Decor", count: 2, icon: "🖼️", bg: "bg-[#F0E6EE]" },
    { label: "Indoor spaces", count: 2, icon: "🏡", bg: "bg-[#E7EDE1]" },
    { label: "Location", count: 2, icon: "📍", bg: "bg-[#E9E4F0]" }
  ];

  const userReviews = [
    {
      id: 1,
      name: "Amit",
      tenure: "2 months on Airbnb",
      avatarType: "initial",
      initial: "A",
      initialBg: "bg-[#FDF0D5] text-[#7E5200]",
      stars: 5,
      date: "1 week ago",
      comment: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
    },
    {
      id: 2,
      name: "Aheesh",
      tenure: "3 years on Airbnb",
      avatarType: "image",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      stars: 5,
      date: "2 weeks ago",
      comment: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
      expandable: true
    },
    {
      id: 3,
      name: "Samiksha",
      tenure: "8 months on Airbnb",
      avatarType: "image",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      stars: 5,
      date: "May 2026",
      comment: "the host nitish was really great help"
    },
    {
      id: 4,
      name: "Vedant",
      tenure: "4 years on Airbnb",
      avatarType: "initial",
      initial: "V",
      initialBg: "bg-[#E8DEF8] text-[#4A2574]",
      stars: 5,
      date: "May 2026",
      comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\n\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\n\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!",
      expandable: true
    },
    {
      id: 5,
      name: "Vaibhav S",
      tenure: "3 years on Airbnb",
      avatarType: "image",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
      stars: 5,
      date: "May 2026",
      comment: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."
    },
    {
      id: 6,
      name: "Mohd",
      tenure: "5 years on Airbnb",
      avatarType: "image",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
      stars: 5,
      date: "May 2026",
      comment: "Great place. Exactly as described in the listing."
    }
  ];

  return (
    <section id="reviews" className="w-full border-t border-gray-200 pt-16 pb-12 mt-12 text-primary font-sans">

      {/* 1. Laurel Wreath Giant Rating Header */}
      <div className="text-center space-y-2 pb-10">
        <div className="flex items-center justify-center gap-1 sm:gap-2">

          {/* Left Laurel Wreath Image */}
          <img
            src="/left_image.jpeg"
            alt="Guest favourite laurel left"
            className="w-14 h-24 sm:w-16 sm:h-28 md:w-20 md:h-32 object-contain"
          />

          {/* Rating Number */}
          <span className="text-7xl sm:text-8xl md:text-[105px] font-bold tracking-tighter text-[#222222] font-sans leading-none px-2 select-none">
            4.95
          </span>

          {/* Right Laurel Wreath Leaf Branch */}
          <img
            src="/right_image.jpeg"
            alt="Guest favourite laurel right"
            className="w-14 h-24 sm:w-16 sm:h-28 md:w-20 md:h-32 object-contain"
          />

        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-[#222222] tracking-tight pt-1">
          Guest favourite
        </h3>

        <p className="text-sm sm:text-base text-[#222222] max-w-sm sm:max-w-md mx-auto leading-relaxed pt-1">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>

        <a href="#reviews" className="inline-block text-sm font-semibold underline text-[#222222] hover:text-black pt-1">
          How reviews work
        </a>
      </div>

      {/* 2. Sub-Ratings Grid WITH thin vertical divider lines */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 pt-10 pb-8 text-sm border-t border-gray-200 w-full">

        {/* Overall rating column */}
        <div className="space-y-2 pr-4 md:border-r border-gray-200">
          <div className="font-semibold text-sm text-[#222222]">Overall rating</div>
          <div className="space-y-1.5 text-xs font-medium text-gray-500">
            {[5, 4, 3, 2, 1].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <span className="w-2">{n}</span>
                <div className="w-28 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#222222] rounded-full"
                    style={{ width: n === 5 ? '96%' : n === 4 ? '4%' : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanliness */}
        <div className="space-y-3 px-4 md:border-r border-gray-200">
          <div className="font-semibold text-sm text-[#222222]">Cleanliness</div>
          <div className="font-bold text-xl text-[#222222]">5.0</div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.3">
            <path d="M6 21l6-6M9 12l6-6c1-1 3-1 4 0s1 3 0 4l-6 6M4 20l1.5-1.5M15.5 6.5l1-1M17 8l1-1M13.5 4.5l1-1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Accuracy */}
        <div className="space-y-3 px-4 md:border-r border-gray-200">
          <div className="font-semibold text-sm text-[#222222]">Accuracy</div>
          <div className="font-bold text-xl text-[#222222]">5.0</div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.3">
            <circle cx="12" cy="12" r="9" strokeLinecap="round" />
            <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Check-in */}
        <div className="space-y-3 px-4 md:border-r border-gray-200">
          <div className="font-semibold text-sm text-[#222222]">Check-in</div>
          <div className="font-bold text-xl text-[#222222]">5.0</div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.3">
            <circle cx="10" cy="10" r="6" strokeLinecap="round" />
            <path d="M14.5 14.5L21 21M17 18l2-2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Communication */}
        <div className="space-y-3 px-4 md:border-r border-gray-200">
          <div className="font-semibold text-sm text-[#222222]">Communication</div>
          <div className="font-bold text-xl text-[#222222]">5.0</div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.3">
            <path d="M4 5h16v10H8l-4 4V5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Location */}
        <div className="space-y-3 px-4 md:border-r border-gray-200">
          <div className="font-semibold text-sm text-[#222222]">Location</div>
          <div className="font-bold text-xl text-[#222222]">4.8</div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.3">
            <path d="M4 5l6-2 6 2 4-1v14l-4 1-6-2-6 2V5z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 3v14M16 5v14" strokeLinecap="round" />
          </svg>
        </div>

        {/* Value */}
        <div className="space-y-3 pl-4">
          <div className="font-semibold text-sm text-[#222222]">Value</div>
          <div className="font-bold text-xl text-[#222222]">4.8</div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.3">
            <path d="M12 3l8 8-9 9-8-8V4h8z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="8" r="1.3" fill="#222222" />
          </svg>
        </div>

      </div>

      {/* 3. Filter Pills — emoji inside colored circle badges */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 pt-4 scrollbar-none w-full border-b border-gray-100">
        {reviewFilterPills.map((pill, idx) => (
          <button
            key={idx}
            onClick={() => handlePillClick(pill.label)}
            className="flex-shrink-0 pl-2 pr-4 py-2 bg-white hover:bg-lightbg border border-gray-300 rounded-full text-sm font-semibold text-primary flex items-center gap-2.5 transition-all shadow-sm focus:outline-none"
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${pill.bg}`}>
              {pill.icon}
            </span>
            <span>{pill.label}</span>
            <span className="text-secondary font-normal">{pill.count}</span>
          </button>
        ))}
      </div>

      {/* 4. User Reviews 2-Column Grid matching reference screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-10">
        {userReviews.map((rev) => {
          const isExpanded = expandedReviews[rev.id];
          return (
            <div key={rev.id} className="space-y-3 text-[#222222] font-sans">

              {/* User Avatar & Info Row */}
              <div className="flex items-center gap-3">
                {rev.avatarType === 'image' ? (
                  <img
                    src={rev.avatarUrl}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm flex-shrink-0"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0 ${rev.initialBg}`}>
                    {rev.initial}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-base text-[#222222] leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-sm text-[#717171] mt-0.5 font-normal">
                    {rev.tenure}
                  </p>
                </div>
              </div>

              {/* Stars & Date Sub-header */}
              <div className="flex items-center gap-2 text-sm text-[#222222] font-semibold">
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#222222] text-[#222222]" />
                  ))}
                </div>
                <span>·</span>
                <span>{rev.date}</span>
              </div>

              {/* Comment Content */}
              <div className="text-base text-[#222222] leading-[24px] font-normal">
                <p className={`whitespace-pre-line ${rev.expandable && !isExpanded ? 'line-clamp-3' : ''}`}>
                  {rev.comment}
                </p>

                {rev.expandable && (
                  <button
                    onClick={() => toggleExpand(rev.id)}
                    className="mt-1.5 font-semibold underline text-base text-[#222222] hover:text-black focus:outline-none block"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* 5. "Show all 19 reviews" Action Button */}
      <div className="pt-8">
        <button
          onClick={handleShowAllReviews}
          className="border border-primary text-primary hover:bg-lightbg font-semibold py-3 px-6 rounded-xl transition-colors focus:outline-none text-base"
        >
          Show all 19 reviews
        </button>
      </div>

    </section>
  );
}