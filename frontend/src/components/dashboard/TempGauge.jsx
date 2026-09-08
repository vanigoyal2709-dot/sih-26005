import React from 'react';

export default function TempGauge({ temp }) {
  return (
    <div className="md:col-span-5 bg-[#0e1420] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center relative">
      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase absolute top-4">CURRENT TEMP</span>
      
      <div className="relative w-48 h-48 flex items-center justify-center mt-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#172030" strokeWidth="8" fill="none" />
          <circle 
            cx="50" cy="50" r="40" 
            stroke="#22d3ee" 
            strokeWidth="8" 
            strokeDasharray="251.2" 
            strokeDashoffset="60" 
            strokeLinecap="round" 
            fill="none" 
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-5xl font-extrabold text-white tracking-tight">{temp}</span>
          <span className="text-sm text-slate-400 block mt-0.5">°C</span>
        </div>
      </div>
    </div>
  );
}