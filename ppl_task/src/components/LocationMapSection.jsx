import React, { useState } from 'react';
import { Search, Home, Plus, Minus, ChevronRight } from 'lucide-react';

export default function LocationMapSection({ listing, addToast }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.15, 1.4));
    if (addToast) addToast("Zoomed in on map", "info");
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.15, 0.7));
    if (addToast) addToast("Zoomed out on map", "info");
  };

  const handleSearchClick = () => {
    if (addToast) addToast("Searching surrounding Candolim area...", "info");
  };

  return (
    <section id="location" className="w-full border-t border-gray-200 pt-12 pb-16 mt-12 text-primary font-sans">

      {/* Title & Location Header */}
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl md:text-[26px] font-bold text-[#222222] tracking-tight">
          Where you’ll be
        </h3>
        <p className="text-base text-[#222222] font-medium">
          {listing?.location || "Candolim, Goa, India"}
        </p>
      </div>

      {/* Map Canvas Box matching user screenshot exactly */}
      <div className="w-full h-[480px] rounded-2xl overflow-hidden relative shadow-sm border border-gray-200 select-none bg-[#EBF0E4]">

        {/* SVG Custom Canvas rendering Coastline, Sea, Land Grid & Neighborhood Circles */}
        <div
          className="w-full h-full relative transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
        >
          {/* SVG Map Background */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* 1. Sea Water Polygon (Left Region) */}
            <polygon points="0,0 420,0 250,600 0,600" fill="#A6D5E8" />

            {/* 2. Land Region (Right Region) */}
            <polygon points="420,0 1000,0 1000,600 250,600" fill="#EBF0E4" />

            {/* 3. Subtle Land Grid Lines */}
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D3DEC9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="250" y="0" width="750" height="600" fill="url(#grid)" opacity="0.6" />

            {/* 4. Translucent Soft Green Area Highlight Circles matching screenshot */}
            {/* Coastal area circle */}
            <circle cx="325" cy="350" r="42" fill="#D2E3C8" opacity="0.9" />
            {/* Inland area circle */}
            <circle cx="678" cy="440" r="54" fill="#D2E3C8" opacity="0.9" />
          </svg>

          {/* Center Black Property Pin matching screenshot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => addToast && addToast("Candolim Jacuzzi 1BHK Listing Location", "info")}
              className="w-12 h-12 rounded-full bg-[#222222] text-white flex items-center justify-center shadow-xl border-2 border-white transform hover:scale-110 transition-transform cursor-pointer focus:outline-none"
              title="Listing Location"
            >
              <Home className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>

        </div>

        {/* Top-Left Search Magnifying Glass Button */}
        <button
          onClick={handleSearchClick}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#222222] hover:bg-gray-100 absolute top-4 left-4 z-20 transition-transform active:scale-95 focus:outline-none"
          title="Search area"
        >
          <Search className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Top-Right Zoom Control Stack Buttons (+ / -) */}
        <div className="absolute top-4 right-4 z-20 bg-white rounded-xl shadow-md border border-gray-200/80 flex flex-col overflow-hidden">
          <button
            onClick={handleZoomIn}
            className="w-10 h-10 flex items-center justify-center text-xl font-medium text-[#222222] hover:bg-gray-100 border-b border-gray-200 transition-colors focus:outline-none"
            title="Zoom in"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 flex items-center justify-center text-xl font-medium text-[#222222] hover:bg-gray-100 transition-colors focus:outline-none"
            title="Zoom out"
          >
            −
          </button>
        </div>
      </div>
      <p className="mt-6 text-base text-[#222222] leading-6">
        Exact location will be provided after booking.
      </p>
      <h3 className="mt-20 text-[22px] font-semibold text-[#222222]">
        Neighbourhood highlights
      </h3>

      <p className="mt-4 text-[16px] leading-7 text-[#222222] max-w-4xl">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with
        easy access to beaches, cafés, and popular attractions.
      </p>

      <button className="mt-6 inline-flex items-center gap-1 text-[16px] font-semibold hover:underline">
        Show more
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
