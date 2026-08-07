import React, { useState, useRef } from 'react';
import { CalendarX, Key, Shield, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function ThingsToKnowAndNearbyStays({ addToast }) {
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef(null);

  const handleLearnMore = (topic) => {
    if (addToast) addToast(`Opening ${topic} details...`, "info");
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0 && scrollLeft >= maxScroll / 2) {
        setCurrentPage(2);
      } else {
        setCurrentPage(1);
      }
    }
  };

  const scrollToPage = (page) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const targetScroll = page === 1 ? 0 : scrollContainerRef.current.scrollWidth - containerWidth;
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setCurrentPage(page);
    }
  };

  const allStays = [
    {
      id: 1,
      title: "Beautiful Studio with a view to die for",
      price: "₹23,600",
      rating: 4.91,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "NAQAB - 1bhk with private pool",
      price: "₹42,218",
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      price: "₹44,506",
      rating: 4.94,
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "The Tropical Studio | 5 mins to Beach",
      price: "₹22,824",
      rating: 4.96,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      price: "₹39,942",
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
      price: "₹45,648",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Luxury Apt | Private Pool | 6 Mins from Beach",
      price: "₹48,786",
      rating: 4.93,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
      price: "₹22,824",
      rating: 4.92,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="w-full border-t border-gray-200 pt-12 pb-16 mt-12 text-[#222222] font-sans">

      {/* 1. Things to know Section */}
      <div>
        <h3 className="text-2xl font-bold text-[#222222] tracking-tight mb-8">
          Things to know
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Cancellation Policy Column */}
          <div className="space-y-3">
            <CalendarX className="w-6 h-6 text-[#222222] stroke-[1.8]" />
            <h4 className="font-semibold text-base text-[#222222]">
              Cancellation policy
            </h4>
            <p className="text-sm text-[#222222] leading-relaxed">
              Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Review this host's full policy for details.
            </p>
            <button
              onClick={() => handleLearnMore("Cancellation policy")}
              className="font-semibold underline text-sm text-[#222222] hover:text-black focus:outline-none block pt-1"
            >
              Learn more
            </button>
          </div>

          {/* House Rules Column */}
          <div className="space-y-3">
            <Key className="w-6 h-6 text-[#222222] stroke-[1.8]" />
            <h4 className="font-semibold text-base text-[#222222]">
              House rules
            </h4>
            <div className="text-sm text-[#222222] space-y-1 leading-relaxed">
              <p>Check-in after 2:00 pm</p>
              <p>Checkout before 11:00 am</p>
              <p>3 guests maximum</p>
            </div>
            <button
              onClick={() => handleLearnMore("House rules")}
              className="font-semibold underline text-sm text-[#222222] hover:text-black focus:outline-none block pt-1"
            >
              Learn more
            </button>
          </div>

          {/* Safety & Property Column */}
          <div className="space-y-3">
            <Shield className="w-6 h-6 text-[#222222] stroke-[1.8]" />
            <h4 className="font-semibold text-base text-[#222222]">
              Safety & property
            </h4>
            <div className="text-sm text-[#222222] space-y-1 leading-relaxed">
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
            </div>
            <button
              onClick={() => handleLearnMore("Safety & property")}
              className="font-semibold underline text-sm text-[#222222] hover:text-black focus:outline-none block pt-1"
            >
              Learn more
            </button>
          </div>

        </div>
      </div>

      {/* 2. More stays nearby Section with Scrollable 5-Image Track */}
      <div className="border-t border-gray-200 pt-12 mt-16">

        {/* Header Row with Scroll Controls & 1/2 Indicator */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-[#222222] tracking-tight">
            More stays nearby
          </h3>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#222222] mr-1 select-none">
              {currentPage} / 2
            </span>

            <button
              onClick={() => scrollToPage(1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors focus:outline-none ${
                currentPage === 1
                  ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                  : 'text-[#222222] border-gray-300 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToPage(2)}
              disabled={currentPage === 2}
              aria-label="Next page"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors focus:outline-none ${
                currentPage === 2
                  ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                  : 'text-[#222222] border-gray-300 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Row maintaining 5 items per slide width */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth py-1 w-full"
        >
          {allStays.map((stay) => (
            <div
              key={stay.id}
              className="w-[calc((100%-64px)/5)] flex-shrink-0 group cursor-pointer space-y-2"
              onClick={() => addToast && addToast(`Navigating to ${stay.title}...`, "info")}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-100 shadow-sm">
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold text-sm text-[#222222] leading-tight line-clamp-2 group-hover:underline">
                  {stay.title}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-[#222222] font-semibold pt-0.5">
                  <span>{stay.price}</span>
                  <div className="flex items-center gap-0.5 ml-auto text-xs font-medium">
                    <Star className="w-3 h-3 fill-current text-primary" />
                    <span>{stay.rating.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
