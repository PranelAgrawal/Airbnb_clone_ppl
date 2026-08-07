import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu } from 'lucide-react';

export default function Navbar({ listing, addToast }) {
  const [isPastSubtitle, setIsPastSubtitle] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past subtitle section ("Entire serviced apartment in Candolim, India")
      const subtitleEl = document.getElementById('property-sub-title');
      if (subtitleEl) {
        const rect = subtitleEl.getBoundingClientRect();
        // Show sub-header when property title section scrolls above header level (<= 80px)
        setIsPastSubtitle(rect.top <= 80);
      } else {
        setIsPastSubtitle(window.scrollY > 350);
      }

      // ScrollSpy for navigation tabs
      const amenitiesEl = document.getElementById('amenities-section');
      const reviewsEl = document.getElementById('reviews');
      const locationEl = document.getElementById('location');

      const scrollPos = window.scrollY + 120;

      if (locationEl && scrollPos >= locationEl.offsetTop - 50) {
        setActiveTab('location');
      } else if (reviewsEl && scrollPos >= reviewsEl.offsetTop - 50) {
        setActiveTab('reviews');
      } else if (amenitiesEl && scrollPos >= amenitiesEl.offsetTop - 50) {
        setActiveTab('amenities');
      } else {
        setActiveTab('photos');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchClick = () => {
    if (addToast) addToast("Searching Candolim stays...", "info");
  };

  const handleBecomeHostClick = (e) => {
    e.preventDefault();
    if (addToast) addToast("Redirecting to host setup...", "info");
  };

  const handleGlobeClick = () => {
    if (addToast) addToast("Language set to English (IN), currency INR (₹)", "info");
  };

  const handleMenuClick = () => {
    if (addToast) addToast("Opening user account menu...", "info");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleReserveScroll = () => {
    if (addToast) addToast("You won't be charged yet", "success");
  };

  return (
    <>
      {/* PRIMARY HEADER
          This is a normal, non-sticky element. It only lives at the very top
          of the page's document flow, so it's visible when scrollY is ~0 and
          scrolls away naturally the moment the user scrolls down — it never
          stays pinned. It only comes back into view once the user scrolls
          all the way back up to the top. */}
      <header className="relative z-30 bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-12 xl:px-16 h-[80px] flex items-center justify-between relative">

          {/* Left: Official Airbnb Logo Image */}
          <a href="#" className="flex items-center gap-2 cursor-pointer focus:outline-none z-10" aria-label="Airbnb Homepage">
            <img
              src="./public/Airbnb-Logo.svg"
              alt="Airbnb"
              className="h-20 w-auto"
            />
          </a>

          {/* Center Search Pill - Exactly Centered in Header */}
          <div
            onClick={handleSearchClick}
            className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 rounded-full py-2 px-4 cursor-pointer gap-2 bg-white"
          >
            {/* Colored House Icon Graphic */}
            <div className="mr-1 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L2 11H5V20H19V11H22L12 3Z" fill="#717171" opacity="0.15" />
                <path d="M3 10.5L12 3.5L21 10.5V19.5C21 20.0523 20.5523 20.5 20 20.5H4C3.44772 20.5 3 20.0523 3 19.5V10.5Z" stroke="#484848" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 20.5V13.5H15V20.5" stroke="#FF385C" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M17 7.5V4.5H19V9" stroke="#484848" strokeWidth="1.2" />
              </svg>
            </div>

            <button className="px-2 font-semibold text-[15px] text-primary hover:text-black">Anywhere</button>
            <span className="h-4 w-[1px] bg-gray-300"></span>
            <button className="px-2 font-semibold text-[15px] text-primary hover:text-black">Anytime</button>
            <span className="h-4 w-[1px] bg-gray-300"></span>
            <button className="px-2 font-normal text-[15px] text-secondary hover:text-black">Add guests</button>

            {/* Circular Red Search Button */}
            <div className="bg-[#FF385C] text-white p-2 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors ml-1 shadow-sm">
              <Search className="w-4 h-4 stroke-[3]" />
            </div>
          </div>

          {/* Right Menu Controls */}
          <div className="flex items-center gap-3 z-10">
            <a
              href="#"
              onClick={handleBecomeHostClick}
              className="hidden lg:block text-[15px] font-semibold text-primary hover:bg-gray-100 py-2.5 px-4 rounded-full transition-colors"
            >
              Become a host
            </a>
            <button
              onClick={handleGlobeClick}
              className="w-9 h-9 bg-gray-100/80 hover:bg-gray-200 rounded-full flex items-center justify-center text-primary transition-colors"
              aria-label="Choose a language"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={handleMenuClick}
              className="w-9 h-9 bg-gray-100/80 hover:bg-gray-200 rounded-full flex items-center justify-center text-primary transition-colors cursor-pointer"
              aria-label="User Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* SECONDARY (TABS) HEADER
          Rendered ONLY while isPastSubtitle is true, and positioned with
          `fixed` (not `sticky`, and not part of normal flow) so mounting it
          never shifts page layout. The moment isPastSubtitle flips back to
          false — i.e. as soon as you scroll up past that point — this
          unmounts and NOTHING is shown at the top until the primary header
          scrolls back into natural view at scrollY === 0. */}
      {isPastSubtitle && (
        <header className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[1440px] mx-auto px-12 xl:px-16 h-[80px] flex items-center justify-between relative">

            {/* Left: Navigation Tabs */}
            <nav className="flex items-center gap-6 md:gap-8 h-full">
              <button
                onClick={scrollToTop}
                className={`h-full flex items-center text-sm md:text-[15px] cursor-pointer transition-colors focus:outline-none ${activeTab === 'photos'
                  ? 'font-semibold text-primary border-b-2 border-black'
                  : 'font-medium text-secondary hover:text-black border-b-2 border-transparent hover:border-gray-300'
                  }`}
              >
                Photos
              </button>
              <button
                onClick={() => scrollToSection('amenities-section')}
                className={`h-full flex items-center text-sm md:text-[15px] cursor-pointer transition-colors focus:outline-none ${activeTab === 'amenities'
                  ? 'font-semibold text-primary border-b-2 border-black'
                  : 'font-medium text-secondary hover:text-black border-b-2 border-transparent hover:border-gray-300'
                  }`}
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className={`h-full flex items-center text-sm md:text-[15px] cursor-pointer transition-colors focus:outline-none ${activeTab === 'reviews'
                  ? 'font-semibold text-primary border-b-2 border-black'
                  : 'font-medium text-secondary hover:text-black border-b-2 border-transparent hover:border-gray-300'
                  }`}
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className={`h-full flex items-center text-sm md:text-[15px] cursor-pointer transition-colors focus:outline-none ${activeTab === 'location'
                  ? 'font-semibold text-primary border-b-2 border-black'
                  : 'font-medium text-secondary hover:text-black border-b-2 border-transparent hover:border-gray-300'
                  }`}
              >
                Location
              </button>
            </nav>

            {/* Right: Price & Rating Summary + Reserve Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="hidden sm:flex flex-col items-end text-right">
                <div className="text-sm md:text-base font-bold text-primary">
                  ₹28,499 <span className="text-xs font-normal text-secondary">for 5 nights</span>
                </div>
                <div className="text-xs font-medium text-primary flex items-center gap-1">
                  <span>★ {listing?.rating ? listing.rating.toFixed(2) : "4.95"}</span>
                  <span className="text-secondary">·</span>
                  <button onClick={() => scrollToSection('reviews')} className="underline text-primary hover:text-black">
                    {listing?.reviewCount || 19} reviews
                  </button>
                </div>
              </div>

              <button
                onClick={handleReserveScroll}
                className="bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold text-sm md:text-base px-6 py-2.5 rounded-xl transition-all shadow-sm focus:outline-none active:scale-[0.98]"
              >
                Reserve
              </button>
            </div>

          </div>
        </header>
      )}
    </>
  );
}
