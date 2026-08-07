import React from 'react';
import { Grid } from 'lucide-react';

export default function HeroGallery({ heroPhotos, onOpenPhotoTour }) {
  if (!heroPhotos || heroPhotos.length === 0) return null;

  return (
    <div className="relative my-4 rounded-xl overflow-hidden shadow-sm">
      {/* 5-Photo Desktop Grid matching reference layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[380px] md:h-[440px] lg:h-[480px]">
        
        {/* Left Primary Large Photo (spans left half) */}
        <div 
          tabIndex={0}
          role="button"
          aria-label="Main listing terrace photo, click to open photo tour gallery"
          className="relative cursor-pointer overflow-hidden group focus:ring-2 focus:ring-black focus:outline-none rounded-l-xl"
          onClick={() => onOpenPhotoTour(heroPhotos[0]?.category || "Living room 1")}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenPhotoTour(heroPhotos[0]?.category || "Living room 1");
            }
          }}
        >
          <img 
            src={heroPhotos[0]?.url} 
            alt={heroPhotos[0]?.caption || "Terrace seating lounge"} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-95 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Right 2x2 Grid of Sub Photos */}
        <div className="grid grid-cols-2 gap-2 h-full">
          {heroPhotos.slice(1, 5).map((photo, idx) => {
            // Apply specific corner radiuses for top-right (idx 1) and bottom-right (idx 3)
            let roundedClass = "";
            if (idx === 1) roundedClass = "rounded-tr-xl";
            if (idx === 3) roundedClass = "rounded-br-xl";

            return (
              <div 
                key={photo.id || idx}
                tabIndex={0}
                role="button"
                aria-label={`Gallery photo ${idx + 2}, click to open photo tour gallery`}
                className={`relative cursor-pointer overflow-hidden group focus:ring-2 focus:ring-black focus:outline-none ${roundedClass}`}
                onClick={() => onOpenPhotoTour(photo.category)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenPhotoTour(photo.category);
                  }
                }}
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption || `Sub photo ${idx + 2}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Floating "Show all photos" Overlay Button matching reference screenshot */}
      <button 
        onClick={() => onOpenPhotoTour(null)}
        className="absolute bottom-5 right-5 bg-white text-primary hover:bg-lightbg text-xs font-semibold py-1.5 px-3 rounded-md border border-black/80 shadow-md flex items-center gap-2 transition-all active:scale-95 z-10 focus:ring-2 focus:ring-black focus:outline-none"
        aria-label="Show all photos"
      >
        <Grid className="w-3.5 h-3.5" />
        <span>Show all photos</span>
      </button>
    </div>
  );
}
