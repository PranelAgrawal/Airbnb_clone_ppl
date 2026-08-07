import React, { useState } from 'react';
import { Star, ChevronRight, ChevronLeft, Flame, Wind, DoorOpen, Keyboard } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ListingDetails({ listing, onShowAllAmenities, addToast }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.HelpCircle;
    return <IconComponent className="w-6 h-6 text-primary" />;
  };

  const handleClearDates = () => {
    if (addToast) addToast("Dates cleared", "info");
  };

  return (
    <div className="space-y-8 text-primary font-sans">
      
      {/* Property Header & Guests Specs */}
      <div id="property-sub-title" className="pb-6 border-b border-gray-200">
        <h2 className="text-2xl md:text-[26px] font-semibold tracking-tight text-primary">
          {listing.subTitle}
        </h2>
        <p className="mt-1 text-sm text-secondary">
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom
        </p>
      </div>

      {/* 1. Guest Favorite Banner matching screenshot */}
      <div className="border border-gray-300 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6">
        
        {/* Left Badge & Subtext */}
        <div className="flex items-center gap-4">
          {/* Laurel Wreath Badge */}
          <div className="flex items-center gap-1 text-primary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16C25 20.9706 20.9706 25 16 25" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 11C10 13 9 15 9 17.5" stroke="#222222" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M20 11C22 13 23 15 23 17.5" stroke="#222222" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-bold text-base leading-tight">Guest</span>
              <span className="font-bold text-base leading-tight">favourite</span>
            </div>
          </div>
          <p className="text-sm text-secondary max-w-xs leading-tight pl-2">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>

        {/* Right Ratings & Reviews Count */}
        <div className="flex items-center gap-6 self-end sm:self-auto">
          <div className="text-center">
            <div className="font-bold text-lg text-primary">{listing.rating.toFixed(2)}</div>
            <div className="flex items-center gap-0.5 justify-center mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current text-primary" />
              ))}
            </div>
          </div>

          <div className="h-10 w-[1px] bg-gray-300" />

          <div className="text-center">
            <div className="font-bold text-lg text-primary">{listing.reviewCount}</div>
            <div className="text-xs font-medium underline text-primary">Reviews</div>
          </div>
        </div>

      </div>

      {/* 2. Hosted by Mirashya Homes Section matching screenshot */}
      <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
        <div className="w-14 h-14 rounded-full bg-[#1B4332] text-white font-bold text-[10px] flex items-center justify-center text-center p-1 leading-tight tracking-tighter shadow-sm flex-shrink-0">
          MIRASHYA HOMES
        </div>
        <div>
          <h3 className="font-semibold text-base text-primary">
            Hosted by {listing.host.name}
          </h3>
          <p className="text-sm text-secondary">
            {listing.host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      {/* Highlights List matching screenshot */}
      <div className="space-y-6 pb-6 border-b border-gray-200">
        <div className="flex gap-4 items-start">
          <div className="mt-1">
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-base text-primary">Outdoor entertainment</h3>
            <p className="text-sm text-secondary mt-0.5">The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="mt-1">
            <Wind className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-base text-primary">Designed for staying cool</h3>
            <p className="text-sm text-secondary mt-0.5">Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="mt-1">
            <DoorOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-base text-primary">Self check-in</h3>
            <p className="text-sm text-secondary mt-0.5">You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      {/* Description Section matching screenshot */}
      <div className="pb-8 border-b border-gray-200 space-y-4">
        <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-5 text-sm text-primary">
          Some info has been automatically translated.{' '}
          <button 
            onClick={() => {
              if (addToast) addToast("Showing original language text", "info");
            }}
            className="underline font-semibold text-primary hover:text-black focus:outline-none"
          >
            Show original
          </button>
        </div>
        <p className={`text-base text-primary leading-relaxed ${showFullDescription ? '' : 'line-clamp-3'}`}>
          🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴
        </p>
        <button 
          onClick={() => {
            setShowFullDescription(!showFullDescription);
            if (addToast) addToast(showFullDescription ? "Showing less description" : "Showing full description", "info");
          }}
          className="flex items-center gap-1 font-semibold underline text-base hover:text-black focus:outline-none"
        >
          <span>{showFullDescription ? 'Show less' : 'Show more'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${showFullDescription ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Where you'll sleep Section matching screenshot */}
      <div className="pb-8 border-b border-gray-200 space-y-6">
        <h3 className="text-2xl font-bold text-primary tracking-tight">
          Where you'll sleep
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bedroom Card */}
          <div className="space-y-2">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/11]">
              <img 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" 
                alt="Bedroom double bed" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-base text-primary">Bedroom</h4>
              <p className="text-sm text-secondary">1 double bed</p>
            </div>
          </div>

          {/* Living room Card */}
          <div className="space-y-2">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/11]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Living room sofa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-base text-primary">Living room</h4>
              <p className="text-sm text-secondary">1 sofa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Grid */}
      <div id="amenities-section" className="pb-8 border-b border-gray-200 space-y-6">
        <h3 className="text-2xl font-bold text-primary tracking-tight">
          What this place offers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listing.amenities.slice(0, 10).map((amenity, idx) => (
            <div key={idx} className="flex items-center gap-4 text-primary">
              {renderIcon(amenity.icon)}
              <span className="text-base">{amenity.name}</span>
            </div>
          ))}
        </div>
        <button 
          onClick={onShowAllAmenities}
          className="mt-4 border border-primary text-primary hover:bg-lightbg font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none"
        >
          Show all 50 amenities
        </button>
      </div>

      {/* Calendar Section matching user screenshot */}
      <div className="pb-4 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-primary tracking-tight">
            5 nights in Candolim
          </h3>
          <p className="text-sm text-secondary mt-1">
            18 Oct 2026 - 23 Oct 2026
          </p>
        </div>

        {/* Dual Month Calendar Grid */}
        <div className="pt-2 space-y-6">
          
          {/* Month Headers */}
          <div className="flex items-center justify-between">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1 max-w-2xl px-4">
              <div className="text-center md:text-left font-bold text-base text-primary pl-4">
                October 2026
              </div>
              <div className="text-center md:text-left font-bold text-base text-primary pl-4">
                November 2026
              </div>
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Months Grids Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            
            {/* October 2026 */}
            <div className="space-y-4">
              <div className="grid grid-cols-7 text-center text-xs font-semibold text-secondary">
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 text-center gap-y-2 text-sm font-medium items-center">
                {/* Oct 1 is Thursday -> 4 empty slots */}
                <span></span><span></span><span></span><span></span>
                <span className="py-2">1</span>
                <span className="py-2">2</span>
                <span className="py-2">3</span>

                <span className="py-2">4</span>
                <span className="py-2">5</span>
                <span className="py-2">6</span>
                <span className="py-2">7</span>
                <span className="py-2">8</span>
                <span className="py-2">9</span>
                <span className="py-2">10</span>

                <span className="py-2">11</span>
                <span className="py-2">12</span>
                <span className="py-2">13</span>
                <span className="py-2">14</span>
                <span className="py-2">15</span>
                <span className="py-2">16</span>
                <span className="py-2">17</span>

                {/* Selected Date Range 18 to 23 */}
                <div className="bg-gray-100 rounded-l-full py-1 flex items-center justify-center">
                  <span className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold">18</span>
                </div>
                <div className="bg-gray-100 py-2.5 text-primary font-medium">19</div>
                <div className="bg-gray-100 py-2.5 text-primary font-medium">20</div>
                <div className="bg-gray-100 py-2.5 text-primary font-medium">21</div>
                <div className="bg-gray-100 py-2.5 text-primary font-medium">22</div>
                <div className="bg-gray-100 rounded-r-full py-1 flex items-center justify-center">
                  <span className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold">23</span>
                </div>
                <span className="py-2">24</span>

                <span className="py-2">25</span>
                <span className="py-2">26</span>
                <span className="py-2">27</span>
                <span className="py-2">28</span>
                <span className="py-2">29</span>
                <span className="py-2">30</span>
                <span className="py-2">31</span>
              </div>
            </div>

            {/* November 2026 */}
            <div className="space-y-4">
              <div className="grid grid-cols-7 text-center text-xs font-semibold text-secondary">
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 text-center gap-y-2 text-sm font-medium items-center">
                {/* Nov 1 is Sunday */}
                <span className="py-2">1</span>
                <span className="py-2">2</span>
                <span className="py-2">3</span>
                <span className="py-2">4</span>
                <span className="py-2">5</span>
                <span className="py-2">6</span>
                <span className="py-2">7</span>

                <span className="py-2">8</span>
                <span className="py-2">9</span>
                <span className="py-2">10</span>
                <span className="py-2">11</span>
                <span className="py-2">12</span>
                <span className="py-2">13</span>
                <span className="py-2">14</span>

                <span className="py-2">15</span>
                <span className="py-2">16</span>
                <span className="py-2">17</span>
                <span className="py-2 text-gray-300 line-through font-normal">18</span>
                <span className="py-2 text-gray-300 line-through font-normal">19</span>
                <span className="py-2 text-gray-300 line-through font-normal">20</span>
                <span className="py-2 text-gray-300 line-through font-normal">21</span>

                <span className="py-2 text-gray-300 line-through font-normal">22</span>
                <span className="py-2 text-gray-300 line-through font-normal">23</span>
                <span className="py-2 text-gray-300 line-through font-normal">24</span>
                <span className="py-2">25</span>
                <span className="py-2">26</span>
                <span className="py-2">27</span>
                <span className="py-2">28</span>

                <span className="py-2 text-gray-300 line-through font-normal">29</span>
                <span className="py-2 text-gray-300 line-through font-normal">30</span>
              </div>
            </div>

          </div>

        </div>

        {/* Calendar Footer Row matching screenshot */}
        <div className="flex items-center justify-between pt-4">
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-primary focus:outline-none">
            <Keyboard className="w-5 h-5" />
          </button>

          <button 
            onClick={handleClearDates}
            className="font-semibold text-sm underline text-primary hover:text-black focus:outline-none"
          >
            Clear dates
          </button>
        </div>

      </div>

    </div>
  );
}
