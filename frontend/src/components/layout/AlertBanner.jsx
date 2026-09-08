import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function AlertBanner({ isHighTemp }) {
  if (!isHighTemp) return null;

  return (
    <div className="relative z-20 bg-rose-600/90 text-white px-6 py-2.5 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wide shadow-lg border-b border-rose-500">
      <AlertTriangle className="w-5 h-5 text-white shrink-0 animate-pulse" />
      <div>
        <strong>WARNING: High Temperature Detected!</strong> — current reading is more than 3°C above target threshold.
      </div>
    </div>
  );
}