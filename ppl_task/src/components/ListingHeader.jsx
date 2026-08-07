import React, { useState } from 'react';
import { Upload, Heart } from 'lucide-react';

export default function ListingHeader({ listing, addToast }) {
  const [isSaved, setIsSaved] = useState(false);

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

  return (
    <div className="pt-7 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Title */}
      <h1 className="text-2xl md:text-[26px] font-bold text-primary tracking-tight">
        {listing.title}
      </h1>

      {/* Action Buttons: Share & Save aligned right */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button 
          className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-lightbg text-primary text-sm font-semibold transition-colors focus:outline-none"
          onClick={handleShare}
          aria-label="Share listing"
        >
          <Upload className="w-4 h-4 text-primary" />
          <span className="underline">Share</span>
        </button>

        <button 
          className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-lightbg text-primary text-sm font-semibold transition-colors focus:outline-none"
          onClick={handleToggleSave}
          aria-label={isSaved ? "Saved" : "Save"}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-brand text-brand' : 'text-primary'}`} />
          <span className="underline">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
