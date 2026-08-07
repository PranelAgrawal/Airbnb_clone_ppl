import React, { useEffect, useRef } from 'react';
import {
  X, Tv, Wifi, Laptop, Car, Waves, Bath, Dog, Camera, Shield, BellRing, Utensils,
  Wind, DoorOpen, Shirt, Flame, Coffee, Microwave, Wine, Dumbbell, Sparkles,
  Clock, Sun, Info, Droplets
} from 'lucide-react';

export default function AmenitiesModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('modal-open');
    setTimeout(() => closeButtonRef.current?.focus(), 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categorizedAmenities = [
    {
      category: "Bathroom",
      items: [
        { name: "Hairdryer", icon: Wind },
        { name: "Cleaning products", icon: Sparkles },
        { name: "Shampoo", icon: Droplets },
        { name: "Hot water", icon: Flame },
        { name: "Shower gel", icon: Bath }
      ]
    },
    {
      category: "Bedroom and laundry",
      items: [
        { name: "Washing machine", icon: Shirt },
        { name: "Hangers", icon: Shirt },
        { name: "Bed linen", icon: Shirt },
        { name: "Room-darkening blinds", icon: Sun },
        { name: "Iron", icon: Shirt },
        { name: "Clothes storage", icon: Shirt },
        { name: "Cot", icon: Shirt }
      ]
    },
    {
      category: "Entertainment",
      items: [
        { name: "TV", icon: Tv }
      ]
    },
    {
      category: "Family",
      items: [
        { name: "Cot", icon: Shirt }
      ]
    },
    {
      category: "Heating and cooling",
      items: [
        { name: "Air conditioning", icon: Wind },
        { name: "Ceiling fan", icon: Wind }
      ]
    },
    {
      category: "Home safety",
      items: [
        { name: "Exterior security cameras on property", icon: Camera },
        { name: "Carbon monoxide alarm", icon: Shield, disabled: true },
        { name: "Smoke alarm", icon: BellRing, disabled: true }
      ]
    },
    {
      category: "Internet and office",
      items: [
        { name: "Wifi", icon: Wifi },
        { name: "Dedicated workspace", icon: Laptop }
      ]
    },
    {
      category: "Kitchen and dining",
      items: [
        { name: "Kitchen", icon: Utensils },
        { name: "Fridge", icon: Utensils },
        { name: "Freezer", icon: Utensils },
        { name: "Microwave", icon: Microwave },
        { name: "Cooking basics", icon: Utensils },
        { name: "Crockery and cutlery", icon: Utensils },
        { name: "Kettle", icon: Utensils },
        { name: "Coffee", icon: Coffee },
        { name: "Wine glasses", icon: Wine },
        { name: "Toaster", icon: Utensils },
        { name: "Blender", icon: Utensils },
        { name: "Cooker", icon: Flame }
      ]
    },
    {
      category: "Location features",
      items: [
        { name: "Private entrance", icon: DoorOpen }
      ]
    },
    {
      category: "Outdoor",
      items: [
        { name: "Patio or balcony", icon: Sun },
        { name: "Outdoor dining area", icon: Utensils }
      ]
    },
    {
      category: "Parking and facilities",
      items: [
        { name: "Free parking on premises", icon: Car },
        { name: "Pool", icon: Waves },
        { name: "Hot tub", icon: Bath },
        { name: "Gym", icon: Dumbbell }
      ]
    },
    {
      category: "Services",
      items: [
        { name: "Pets allowed", icon: Dog },
        { name: "Cleaning available during stay", icon: Sparkles },
        { name: "Long-term stays allowed", icon: Clock },
        { name: "Self check-in", icon: DoorOpen }
      ]
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="What this place offers amenities modal"
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden text-primary font-sans border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Sticky Header */}
        <header className="p-6 border-b border-gray-100 sticky top-0 bg-white z-10 flex items-center justify-between">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-black focus:outline-none text-primary"
            aria-label="Close amenities modal"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
        </header>

        {/* Modal Scrollable Body */}
        <div className="p-8 space-y-10 overflow-y-auto">
          <h2 className="text-2xl font-bold text-primary tracking-tight">
            What this place offers
          </h2>

          <div className="space-y-10">
            {categorizedAmenities.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  {group.category}
                </h3>

                <div className="divide-y divide-gray-200">
                  {group.items.map((item, itemIdx) => {
                    const IconComp = item.icon || Info;
                    return (
                      <div key={itemIdx} className="py-4 flex items-center gap-5 text-base font-normal text-primary">
                        <IconComp className="w-6 h-6 text-primary flex-shrink-0 stroke-[1.5]" />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
