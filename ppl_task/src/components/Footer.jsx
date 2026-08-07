import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer({ addToast }) {
  const handleFooterLinkClick = (e, label) => {
    e.preventDefault();
    if (addToast) addToast(`Navigating to ${label}...`, "info");
  };

  const handleGlobeClick = () => {
    if (addToast) addToast("Language set to English (IN), currency INR (₹)", "info");
  };

  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 mt-16 text-sm text-primary">
      <div className="max-w-[1440px] mx-auto px-12 xl:px-16 py-12">
        
        {/* Footer Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300">
          
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Support</h4>
            <ul className="space-y-2.5 text-secondary text-sm">
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Help Center")} className="hover:underline">Help Center</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "AirCover")} className="hover:underline">AirCover</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Anti-discrimination")} className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Disability support")} className="hover:underline">Disability support</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Cancellation options")} className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Hosting</h4>
            <ul className="space-y-2.5 text-secondary text-sm">
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Airbnb your home")} className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "AirCover for Hosts")} className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Hosting resources")} className="hover:underline">Hosting resources</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Community forum")} className="hover:underline">Community forum</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Hosting responsibly")} className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Airbnb</h4>
            <ul className="space-y-2.5 text-secondary text-sm">
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Newsroom")} className="hover:underline">Newsroom</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "New features")} className="hover:underline">New features</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Careers")} className="hover:underline">Careers</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Investors")} className="hover:underline">Investors</a></li>
              <li><a href="#" onClick={(e) => handleFooterLinkClick(e, "Emergency stays")} className="hover:underline">Emergency stays</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Candolim Vacation Rentals</h4>
            <p className="text-secondary text-xs leading-relaxed">
              Explore romantic apartments, villas, and beach stays in Goa, India.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" onClick={(e) => handleFooterLinkClick(e, "Privacy")} className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" onClick={(e) => handleFooterLinkClick(e, "Terms")} className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" onClick={(e) => handleFooterLinkClick(e, "Sitemap")} className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" onClick={(e) => handleFooterLinkClick(e, "Company details")} className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-primary">
            <button onClick={handleGlobeClick} className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>
            <button onClick={handleGlobeClick} className="hover:underline">
              <span>₹ INR</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
