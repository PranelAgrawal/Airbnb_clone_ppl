import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none items-center">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className="bg-[#222222] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-fadeIn pointer-events-auto border border-white/10"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <Info className="w-4 h-4 text-brand" />
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
