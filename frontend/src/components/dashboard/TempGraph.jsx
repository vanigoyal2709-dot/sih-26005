import React from 'react';

export default function TempGraph({ targetTemp }) {
  return (
    <div className="bg-[#0a0e17] border border-slate-800/80 rounded-2xl p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase block">TEMPERATURE GRAPH</span>
          <h3 className="text-2xl font-bold text-white">Last 7 Intervals</h3>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2"><span className="w-3 h-0.5 bg-cyan-400"></span> Sensor reading</span>
          <span className="flex items-center gap-2"><span className="w-3 h-0.5 bg-rose-400 border-dashed"></span> Target threshold</span>
        </div>
      </div>

      <div className="h-56 w-full pt-4 relative">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 700 160" preserveAspectRatio="none">
          <line x1="0" y1="110" x2="700" y2="110" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="620" y="102" fill="#f43f5e" fontSize="10" fontFamily="monospace">TARGET {targetTemp}°C</text>

          <path
            d="M 10 30 C 120 35, 230 45, 340 50 C 450 45, 560 55, 690 48"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
          />
          
          <circle cx="10" cy="30" r="4" fill="#22d3ee" />
          <circle cx="120" cy="35" r="4" fill="#22d3ee" />
          <circle cx="230" cy="45" r="4" fill="#22d3ee" />
          <circle cx="340" cy="50" r="4" fill="#22d3ee" />
          <circle cx="450" cy="45" r="4" fill="#22d3ee" />
          <circle cx="560" cy="55" r="4" fill="#22d3ee" />
          <circle cx="690" cy="48" r="4" fill="#22d3ee" />
        </svg>
        <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-2">
          <span>20:41</span><span>20:41</span><span>20:41</span><span>20:41</span><span>20:41</span><span>20:42</span><span>20:42</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-800/60 font-mono">
        <div><span className="text-[10px] text-slate-500 block">CURRENT</span><span className="text-2xl font-bold text-white">33.8°</span></div>
        <div><span className="text-[10px] text-slate-500 block">MINIMUM</span><span className="text-2xl font-bold text-white">33.4°</span></div>
        <div><span className="text-[10px] text-slate-500 block">MAXIMUM</span><span className="text-2xl font-bold text-white">34.6°</span></div>
        <div><span className="text-[10px] text-slate-500 block">AVERAGE</span><span className="text-2xl font-bold text-cyan-400">33.9°</span></div>
      </div>
    </div>
  );
}