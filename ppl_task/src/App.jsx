import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import ListingHeader from './components/ListingHeader';
import HeroGallery from './components/HeroGallery';
import ListingDetails from './components/ListingDetails';
import BookingCard from './components/BookingCard';
import ReviewsSection from './components/ReviewsSection';
import LocationMapSection from './components/LocationMapSection';
import HostSection from './components/HostSection';
import ThingsToKnowAndNearbyStays from './components/ThingsToKnowAndNearbyStays';
import PhotoTourModal from './components/PhotoTourModal';
import LightboxModal from './components/LightboxModal';
import AmenitiesModal from './components/AmenitiesModal';
import Toast from './components/Toast';
import { listingData } from './data/listingData';

export default function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [photoTourCategory, setPhotoTourCategory] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast notification helper
  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Flatten gallery photos for seamless Lightbox navigation
  const allPhotos = useMemo(() => {
    const list = [];
    listingData.gallery.forEach((group) => {
      group.photos.forEach((photo) => {
        list.push({ ...photo, category: group.category });
      });
    });
    return list;
  }, []);

  // URL Hash / Query Parameter sync for refresh persistence
  useEffect(() => {
    const parseUrlState = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);

      if (params.get('view') === 'lightbox' || hash.includes('photo=')) {
        const photoIdx = parseInt(params.get('index') || hash.split('photo=')[1] || '0', 10);
        setIsPhotoTourOpen(true);
        setLightboxIndex(isNaN(photoIdx) ? 0 : photoIdx);
      } else if (params.get('view') === 'photo-tour' || hash.includes('photo-tour')) {
        setIsPhotoTourOpen(true);
        setLightboxIndex(null);
      } else if (params.get('view') === 'amenities' || hash.includes('amenities')) {
        setIsAmenitiesModalOpen(true);
      }
    };

    parseUrlState();

    const handlePopState = () => {
      parseUrlState();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL parameters without reloading page
  const updateUrlState = (tourOpen, photoIndex, amenitiesOpen = false) => {
    if (photoIndex !== null) {
      const newUrl = `?view=lightbox&index=${photoIndex}#photo=${photoIndex}`;
      window.history.pushState({ tourOpen: true, photoIndex }, '', newUrl);
    } else if (tourOpen) {
      const newUrl = '?view=photo-tour#photo-tour';
      window.history.pushState({ tourOpen: true, photoIndex: null }, '', newUrl);
    } else if (amenitiesOpen) {
      const newUrl = '?view=amenities#amenities';
      window.history.pushState({ tourOpen: false, photoIndex: null, amenitiesOpen: true }, '', newUrl);
    } else {
      const newUrl = window.location.pathname;
      window.history.pushState({ tourOpen: false, photoIndex: null }, '', newUrl);
    }
  };

  const handleOpenPhotoTour = (category = null) => {
    addToast('Opening photo gallery...', 'info');
    setPhotoTourCategory(category);
    setIsPhotoTourOpen(true);
    setLightboxIndex(null);
    updateUrlState(true, null);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
    setPhotoTourCategory(null);
    setLightboxIndex(null);
    updateUrlState(false, null);
  };

  const handleOpenLightbox = (index) => {
    setIsPhotoTourOpen(true);
    setLightboxIndex(index);
    updateUrlState(true, index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setIsPhotoTourOpen(true);
    updateUrlState(true, null);
  };

  const handleOpenAmenities = () => {
    addToast('Opening full amenities list...', 'info');
    setIsAmenitiesModalOpen(true);
    updateUrlState(false, null, true);
  };

  const handleCloseAmenities = () => {
    setIsAmenitiesModalOpen(false);
    updateUrlState(false, null, false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-primary antialiased">
      {/* Global Desktop Navbar */}
      <Navbar listing={listingData} addToast={addToast} />

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto px-12 xl:px-16">

        {/* Listing Title & Action Header */}
        <ListingHeader listing={listingData} addToast={addToast} />

        {/* 5-Photo Hero Gallery Grid */}
        <HeroGallery
          heroPhotos={listingData.heroPhotos}
          onOpenPhotoTour={handleOpenPhotoTour}
          onOpenLightbox={handleOpenLightbox}
          addToast={addToast}
        />

        {/* 2-Column Main Content Grid for Upper Listing Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 relative">

          {/* Left Column (~58% width) */}
          <div className="lg:col-span-7">
            <ListingDetails
              listing={listingData}
              onShowAllAmenities={handleOpenAmenities}
              addToast={addToast}
            />
          </div>

          {/* Right Sticky Booking Card (~41% width) */}
          <div className="lg:col-span-5">
            <BookingCard listing={listingData} addToast={addToast} />
          </div>

        </div>

        {/* Full-Width Reviews & Rating Breakdown Section */}
        <ReviewsSection listing={listingData} addToast={addToast} />

        {/* Full-Width Location Map Section */}
        <LocationMapSection listing={listingData} addToast={addToast} />

        {/* Full-Width Meet Your Host Section */}
        <HostSection listing={listingData} addToast={addToast} />

        {/* Full-Width Things to Know & More Stays Nearby Section */}
        <ThingsToKnowAndNearbyStays addToast={addToast} />

      </main>

      {/* Full-Screen Photo Tour Overlay Modal */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        initialCategory={photoTourCategory}
        onClose={handleClosePhotoTour}
        gallery={listingData.gallery}
        onSelectPhoto={handleOpenLightbox}
        addToast={addToast}
        isLightboxOpen={lightboxIndex !== null}
      />

      {/* Single-Photo Lightbox Viewer Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        photos={allPhotos}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onIndexChange={(newIdx) => {
          setLightboxIndex(newIdx);
          updateUrlState(true, newIdx);
        }}
        addToast={addToast}
      />

      {/* Categorized 50 Amenities Overlay Modal */}
      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={handleCloseAmenities}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} />
    </div>
  );
}
