import React from 'react';
import { Minus, Plus } from 'lucide-react';

export default function TargetControl({ targetTemp, setTargetTemp }) {
  return (
    <div className="md:col-span-2 bg-[#0e1420] border border-slate-800/60 rounded-xl p-5 space-y-3">
      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">TARGET TEMPERATURE</span>
      
      <div className="flex items-center justify-between gap-4">
        <button 
          onClick={() => setTargetTemp(prev => Math.max(15, prev - 1))}
          className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-lg transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="text-3xl font-extrabold font-mono text-cyan-400">{targetTemp}°C</span>

        <button 
          onClick={() => setTargetTemp(prev => Math.min(45, prev + 1))}
          className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-1 pt-1">
        <input 
          type="range" 
          min="15" 
          max="45" 
          value={targetTemp} 
          onChange={(e) => setTargetTemp(Number(e.target.value))}
          className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-500">
          <span>15°C</span>
          <span>30°C</span>
          <span>45°C</span>
        </div>
      </div>
    </div>
  );
}