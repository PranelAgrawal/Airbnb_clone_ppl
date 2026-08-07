import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, Share, Heart } from 'lucide-react';

export default function PhotoTourModal({ isOpen, initialCategory, onClose, gallery, onSelectPhoto, addToast, isLightboxOpen }) {
  const [isSaved, setIsSaved] = useState(false);
  const backButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      setTimeout(() => backButtonRef.current?.focus(), 50);

      // Scroll directly to clicked photo category section if initialCategory is provided
      if (initialCategory && gallery) {
        const targetLower = String(initialCategory).toLowerCase().trim();
        const catIdx = gallery.findIndex((catGroup) => {
          const catNameLower = catGroup.category.toLowerCase().trim();
          return (
            catNameLower === targetLower ||
            catNameLower.includes(targetLower) ||
            targetLower.includes(catNameLower)
          );
        });

        if (catIdx !== -1) {
          setTimeout(() => {
            const targetEl = document.getElementById(`category-${catIdx}`);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 120);
        }
      }
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isLightboxOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, initialCategory, gallery, onClose, isLightboxOpen]);

  if (!isOpen) return null;

  const handleToggleSave = () => {
    if (!isSaved) {
      setIsSaved(true);
      if (addToast) addToast("Saved to wishlist", "success");
    } else {
      setIsSaved(false);
      if (addToast) addToast("Removed from wishlist", "info");
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    if (addToast) addToast("Link copied to clipboard", "success");
  };

  // Build a Map of photo IDs to global gallery indices for seamless Lightbox launch
  const photoGlobalIndexMap = new Map();
  let globalCounter = 0;
  if (gallery) {
    gallery.forEach((catGroup) => {
      catGroup.photos.forEach((photo) => {
        photoGlobalIndexMap.set(photo.id, globalCounter++);
      });
    });
  }

  const renderCategoryPhotos = (photos, catName) => {
    const rows = [];
    let i = 0;
    let isSingleRow = true;

    while (i < photos.length) {
      if (isSingleRow) {
        // Row with 1 full-width photo
        const photo = photos[i];
        const globalIdx = photoGlobalIndexMap.get(photo.id) ?? 0;
        rows.push(
          <div
            key={photo.id || `single-${i}`}
            tabIndex={0}
            role="button"
            aria-label={`View photo ${photo.title || catName}`}
            className="group cursor-pointer focus:ring-2 focus:ring-black focus:outline-none rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-all"
            onClick={() => onSelectPhoto(globalIdx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectPhoto(globalIdx);
              }
            }}
          >
            <img
              src={photo.url}
              alt={photo.title || catName}
              className="w-full h-auto max-h-[380px] object-cover group-hover:scale-[1.01] transition-transform duration-300 brightness-95 group-hover:brightness-100 rounded-2xl"
            />
          </div>
        );
        i += 1;
        isSingleRow = false;
      } else {
        // Row with 2 side-by-side photos
        const pair = photos.slice(i, i + 2);
        rows.push(
          <div
            key={`pair-${i}`}
            className={`grid ${pair.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}
          >
            {pair.map((photo) => {
              const globalIdx = photoGlobalIndexMap.get(photo.id) ?? 0;
              return (
                <div
                  key={photo.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo ${photo.title || catName}`}
                  className="group cursor-pointer focus:ring-2 focus:ring-black focus:outline-none rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-all aspect-[4/3] max-h-[220px]"
                  onClick={() => onSelectPhoto(globalIdx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectPhoto(globalIdx);
                    }
                  }}
                >
                  <img
                    src={photo.url}
                    alt={photo.title || catName}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300 brightness-95 group-hover:brightness-100 rounded-2xl"
                  />
                </div>
              );
            })}
          </div>
        );
        i += pair.length;
        isSingleRow = true;
      }
    }

    return <div className="space-y-3">{rows}</div>;
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo tour"
      className="fixed inset-0 z-50 bg-white overflow-y-auto font-sans text-primary animate-fadeIn"
    >
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-4 flex items-center justify-between">
        <button 
          ref={backButtonRef}
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-black focus:outline-none flex items-center justify-center text-primary"
          aria-label="Close photo tour and return to listing page"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>

        {/* Center Title */}
        <h1 className="text-base font-semibold text-primary">
          Photo tour
        </h1>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 text-primary transition-colors focus:ring-2 focus:ring-black focus:outline-none"
            onClick={handleShare}
            aria-label="Share this listing"
          >
            <Share className="w-4 h-4" />
          </button>

          <button 
            className="p-2 rounded-full hover:bg-gray-100 text-primary transition-colors focus:ring-2 focus:ring-black focus:outline-none"
            onClick={handleToggleSave}
            aria-label={isSaved ? "Remove from saved list" : "Save this listing"}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-brand text-brand' : 'text-primary'}`} />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1120px] mx-auto px-8 sm:px-12 lg:px-16 py-8">
        
        {/* Compact Room Navigation Grid matching user screenshot */}
        <div className="flex flex-wrap gap-4 pb-10 border-b border-gray-200 mb-12">
          {gallery.map((cat, idx) => (
            <a
              key={idx}
              href={`#category-${idx}`}
              className="group cursor-pointer space-y-1.5 w-24 sm:w-28 flex-shrink-0 focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100 h-20 border border-gray-200 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={cat.photos[0]?.url} 
                  alt={cat.category} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-semibold text-secondary leading-tight group-hover:text-primary group-hover:underline">
                {cat.category}
              </p>
            </a>
          ))}
        </div>

        {/* Categorized Photo Feed: 50-50 Split with Alternating 1-photo / 2-photo Rows */}
        <div className="space-y-20">
          {gallery.map((categoryGroup, catIdx) => {
            return (
              <div 
                key={catIdx} 
                id={`category-${catIdx}`} 
                className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-12 border-b border-gray-200"
              >
                {/* Left Column (50% Width): Room Name Title & Specs Description */}
                <div className="md:col-span-1 md:sticky md:top-28 space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                    {categoryGroup.category}
                  </h2>
                  {categoryGroup.details && (
                    <p className="text-sm text-secondary leading-relaxed">
                      {categoryGroup.details}
                    </p>
                  )}
                </div>

                {/* Right Column (50% Width): Alternating 1-photo and 2-photo Rows */}
                <div className="md:col-span-1">
                  {renderCategoryPhotos(categoryGroup.photos, categoryGroup.category)}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
