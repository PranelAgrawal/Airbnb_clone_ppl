import React from 'react';
import { Check, GraduationCap, ShieldAlert } from 'lucide-react';

export default function HostSection({ listing, addToast }) {
  const handleMessageHost = () => {
    if (addToast) addToast("Opening message window with Mirashya Homes...", "info");
  };

  const coHosts = [
    {
      name: "Sharath",
      avatarType: "image",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Aman Dev Pahwa",
      avatarType: "image",
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Maria Karen Priyanka",
      avatarType: "image",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Simran",
      avatarType: "image",
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Pallavi",
      avatarType: "image",
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Sanyukta",
      avatarType: "image",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Shruti",
      avatarType: "initial",
      initial: "S",
      bg: "bg-[#FCE4EC] text-[#C2185B]"
    },
    {
      name: "Amisha",
      avatarType: "initial",
      initial: "A",
      bg: "bg-[#E3F2FD] text-[#1976D2]"
    }
  ];

  return (
    <section id="host" className="w-full border-t border-gray-200 pt-12 pb-16 mt-12 text-[#222222] font-sans">

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-normal text-[#222222] tracking-tight mb-8">
        Meet your host
      </h3>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Host Card Column */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6 max-w-[390px]">

          {/* Compact Host Card Badge matching reference */}
          <div className="bg-white rounded-[24px] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-200/90 grid grid-cols-2 items-center w-full">

            {/* Left Box: Avatar & Name */}
            <div className="flex flex-col items-center text-center justify-center pr-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#1B4332] text-white font-bold text-[11px] flex flex-col items-center justify-center p-2 leading-tight tracking-tight shadow-sm">
                  MIRASHYA<br />HOMES
                </div>
                {/* Verified Pink Checkmark Badge */}
                <div className="w-7 h-7 rounded-full bg-[#FF385C] text-white flex items-center justify-center border-2 border-white absolute bottom-0 right-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              </div>

              <h4 className="font-bold text-2xl text-[#222222] mt-3 leading-snug">
                Mirashya<br />Homes
              </h4>
              <p className="text-xs font-medium text-gray-500 mt-1">
                Host
              </p>
            </div>

            {/* Right Box: Stats */}
            <div className="space-y-3 text-left border-l border-gray-200/90 pl-5 flex flex-col justify-center h-full">
              <div className="pb-2.5 border-b border-gray-200/90 w-full">
                <div className="font-bold text-xl text-[#222222]">1,463</div>
                <div className="text-xs text-gray-500 font-normal mt-0.5">Reviews</div>
              </div>

              <div className="pb-2.5 border-b border-gray-200/90 w-full">
                <div className="font-bold text-xl text-[#222222]">4.68★</div>
                <div className="text-xs text-gray-500 font-normal mt-0.5">Rating</div>
              </div>

              <div className="w-full">
                <div className="font-bold text-xl text-[#222222]">2</div>
                <div className="text-xs text-gray-500 font-normal mt-0.5">Years hosting</div>
              </div>
            </div>

          </div>

          {/* Host Bullet Details */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3.5 text-base font-normal text-[#222222]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" className="w-6 h-6 flex-shrink-0">
                <ellipse cx="12" cy="9" rx="5" ry="7" />
                <path d="M12 16L10.5 18H13.5L12 16Z" fill="#222222" />
                <path d="M12 18C12 19.5 10.5 20.5 12 22" strokeLinecap="round" />
              </svg>
              <span>Born in the 80s</span>
            </div>
            <div className="flex items-center gap-3.5 text-base font-normal text-[#222222]">
              <GraduationCap className="w-6 h-6 text-[#222222] stroke-[1.5] flex-shrink-0" />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>

        </div>

        {/* Right Co-Hosts & Host Details Column */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8 pl-0 lg:pl-4">

          {/* Co-Hosts Subsection */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-[#222222]">
              Co-Hosts
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
              {coHosts.map((coHost, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {coHost.avatarType === 'image' ? (
                    <img
                      src={coHost.url}
                      alt={coHost.name}
                      className="w-10 h-10 rounded-full object-cover shadow-sm flex-shrink-0"
                    />
                  ) : (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${coHost.bg}`}>
                      {coHost.initial}
                    </div>
                  )}
                  <span className="text-sm font-medium text-[#222222]">
                    {coHost.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Host Details Subsection */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-lg text-[#222222]">
              Host details
            </h4>
            <p className="text-sm text-[#222222]">
              Response rate: 100%
            </p>
            <p className="text-sm text-[#222222]">
              Responds within an hour
            </p>

            <button
              onClick={handleMessageHost}
              className="bg-gray-100 hover:bg-gray-200 text-[#222222] font-semibold py-3 px-6 rounded-xl transition-colors mt-4 text-sm focus:outline-none"
            >
              Message host
            </button>
          </div>

          {/* Protection Footnote */}
          <div className="flex items-start gap-3 text-xs text-gray-500 pt-6 border-t border-gray-100 max-w-lg leading-relaxed">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-gray-500 mt-0.5">
              <path d="M12 2L4 5V11C4 16.55 7.4 21.74 12 23C16.6 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
