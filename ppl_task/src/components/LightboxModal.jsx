import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Share } from 'lucide-react';

export default function LightboxModal({ isOpen, photos, currentIndex, onClose, onIndexChange, addToast }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock & focus trap initialization
    document.body.classList.add('modal-open');
    setTimeout(() => closeButtonRef.current?.focus(), 50);

    // Keyboard controls (ArrowLeft, ArrowRight, Escape)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, photos]);

  if (!isOpen || !photos || photos.length === 0 || currentIndex === null) return null;

  const currentPhoto = photos[currentIndex] || photos[0];
  const totalPhotos = photos.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalPhotos - 1) {
      onIndexChange(currentIndex + 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    if (addToast) addToast("Link copied to clipboard", "success");
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label="Single photo lightbox viewer"
      className="fixed inset-0 z-50 bg-white text-primary flex flex-col justify-between overflow-hidden animate-fadeIn"
    >
      
      {/* Top Header */}
      <header className="p-6 flex items-center justify-between z-20 border-b border-gray-100">
        {/* Close Button */}
        <button 
          ref={closeButtonRef}
          onClick={onClose}
          className="p-2.5 rounded-full hover:bg-gray-100 text-primary transition-colors focus:ring-2 focus:ring-black focus:outline-none"
          aria-label="Close photo viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Center Room Name Badge */}
        <div className="text-base font-bold text-primary tracking-wide text-center" aria-live="polite">
          {currentPhoto.category || currentPhoto.title || "Room View"}
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            className="p-2.5 rounded-full hover:bg-gray-100 text-primary transition-colors focus:ring-2 focus:ring-black focus:outline-none"
            onClick={handleShare}
            aria-label="Share photo link"
          >
            <Share className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Single Photo Viewer Body */}
      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 py-4">
        
        {/* Left Arrow Button */}
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white border border-gray-300 text-primary shadow-md transition-all focus:ring-2 focus:ring-black focus:outline-none ${
            currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100 active:scale-95 cursor-pointer'
          }`}
          aria-label="Previous photo (Left arrow key)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Focused Single Image */}
        <div className="max-w-5xl max-h-[75vh] flex items-center justify-center p-2 select-none">
          <img 
            key={currentPhoto.url || currentIndex}
            src={currentPhoto.url} 
            alt={currentPhoto.title || currentPhoto.category || "Gallery Photo"} 
            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg transition-opacity duration-300 animate-fadeIn"
          />
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={handleNext}
          disabled={currentIndex === totalPhotos - 1}
          className={`absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white border border-gray-300 text-primary shadow-md transition-all focus:ring-2 focus:ring-black focus:outline-none ${
            currentIndex === totalPhotos - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100 active:scale-95 cursor-pointer'
          }`}
          aria-label="Next photo (Right arrow key)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Details Bar */}
      <footer className="p-6 text-center z-20 space-y-1 bg-white border-t border-gray-100">
        <h3 className="text-base font-semibold text-primary">
          {currentPhoto.title || currentPhoto.category || "Photo"}
        </h3>
        {currentPhoto.details && (
          <p className="text-xs text-secondary max-w-xl mx-auto">
            {currentPhoto.details}
          </p>
        )}
        {currentPhoto.caption && (
          <p className="text-xs text-secondary max-w-xl mx-auto">
            {currentPhoto.caption}
          </p>
        )}
      </footer>

    </div>
  );
}
