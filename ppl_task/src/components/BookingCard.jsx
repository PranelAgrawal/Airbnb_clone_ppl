import React, { useState } from 'react';
import { Tag, ChevronDown, Flag } from 'lucide-react';

export default function BookingCard({ listing, addToast }) {
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const handleReserveClick = () => {
    if (addToast) addToast("You won't be charged yet", "success");
  };

  const handleClaimClick = () => {
    if (addToast) addToast("10% discount applied to your order!", "success");
  };

  const handleReportClick = (e) => {
    e.preventDefault();
    if (addToast) addToast("Listing reported for review", "info");
  };

  return (
    <div id="booking-card" className="space-y-4 font-sans text-primary sticky top-24 z-10">
      
      {/* 1. Top 10% Off Discount Promo Banner Box matching screenshot */}
      <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <Tag className="w-4 h-4 fill-emerald-600" />
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-medium text-primary">Get 10% off your next stay.</p>
            <button 
              onClick={handleClaimClick}
              className="font-semibold underline text-primary hover:text-black"
            >
              Terms apply
            </button>
          </div>
        </div>
        <button 
          onClick={handleClaimClick}
          className="bg-gray-100 hover:bg-gray-200 text-primary font-semibold text-xs sm:text-sm py-1.5 px-4 rounded-lg transition-colors flex-shrink-0 focus:outline-none"
        >
          Claim
        </button>
      </div>

      {/* 2. Main Sticky Booking Card Box matching screenshot */}
      <div className="border border-gray-200 rounded-2xl p-6 shadow-card bg-white space-y-6">
        
        {/* Price Per Nights */}
        <div>
          <span className="text-2xl font-bold text-primary underline decoration-primary underline-offset-4">
            ₹28,499
          </span>
          <span className="text-base text-primary font-normal ml-1.5">
            for 5 nights
          </span>
        </div>

        {/* Date & Guests Input Widget Grid */}
        <div className="border border-gray-400 rounded-xl overflow-hidden shadow-sm">
          {/* Top Dates Row */}
          <div className="grid grid-cols-2 border-b border-gray-400">
            <div className="p-3 border-r border-gray-400">
              <label className="block text-[10px] font-bold tracking-wider text-primary uppercase">
                CHECK-IN
              </label>
              <input 
                type="text"
                readOnly
                value="10/18/2026"
                className="w-full text-sm font-normal text-primary focus:outline-none bg-transparent cursor-pointer"
              />
            </div>
            <div className="p-3">
              <label className="block text-[10px] font-bold tracking-wider text-primary uppercase">
                CHECKOUT
              </label>
              <input 
                type="text"
                readOnly
                value="10/23/2026"
                className="w-full text-sm font-normal text-primary focus:outline-none bg-transparent cursor-pointer"
              />
            </div>
          </div>

          {/* Bottom Guest Selector Row */}
          <div className="relative">
            <button 
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              className="w-full p-3 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50/50 transition-colors"
            >
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-primary uppercase cursor-pointer">
                  GUESTS
                </label>
                <div className="text-sm font-normal text-primary">
                  {guestsCount} guest{guestsCount > 1 ? 's' : ''}
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-primary transition-transform ${isGuestDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isGuestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-30 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-4 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">Adults</div>
                    <div className="text-xs text-secondary">Age 13+</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      disabled={guestsCount <= 1}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm disabled:opacity-30 hover:border-black transition-colors"
                    >
                      -
                    </button>
                    <span className="font-medium text-sm w-4 text-center">{guestsCount}</span>
                    <button 
                      onClick={() => setGuestsCount(Math.min(3, guestsCount + 1))}
                      disabled={guestsCount >= 3}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm disabled:opacity-30 hover:border-black transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Free Cancellation Banner matching screenshot */}
        <div className="bg-gray-100/90 rounded-xl py-2.5 px-4 text-center text-xs font-medium text-primary">
          Free cancellation before <span className="font-bold">17 October</span>
        </div>

        {/* Reserve Action Button matching screenshot */}
        <button 
          onClick={handleReserveClick}
          className="w-full bg-[#E51D55] hover:bg-[#D41B4E] text-white font-semibold py-3.5 rounded-xl transition-all shadow-sm active:scale-[0.99] focus:ring-2 focus:ring-black focus:outline-none text-base"
        >
          Reserve
        </button>

        {/* Subtext Notice */}
        <p className="text-center text-xs text-secondary font-medium">
          You won't be charged yet
        </p>

      </div>

      {/* Report listing footer link matching screenshot */}
      <div className="text-center pt-2">
        <a 
          href="#" 
          onClick={handleReportClick}
          className="inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:text-primary underline transition-colors"
        >
          <Flag className="w-3.5 h-3.5" />
          <span>Report this listing</span>
        </a>
      </div>

    </div>
  );
}
