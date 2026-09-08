import React from 'react';

export default function OledPreview({ telemetry, targetTemp }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>OLED PREVIEW</span>
        <span>SSD1306</span>
      </div>
      <div className="bg-[#020406] border border-slate-800/90 rounded-2xl p-6 font-mono space-y-4 shadow-2xl">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
          <span className="text-cyan-400 text-xs">TEMP</span>
          <span className="text-white text-xl font-bold tracking-wider">{telemetry.temp}°C</span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
          <span className="text-cyan-400 text-xs">TARGET</span>
          <span className="text-white text-xl font-bold tracking-wider">{targetTemp}°C</span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
          <span className="text-cyan-400 text-xs">COOLING</span>
          <span className="text-white text-xl font-bold tracking-wider">{telemetry.cooling ? 'ON' : 'OFF'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-cyan-400 text-xs">RELAY</span>
          <span className="text-white text-xl font-bold tracking-wider">{telemetry.relay}</span>
        </div>
        <div className="text-center text-[9px] text-slate-600 tracking-widest pt-2 uppercase">
          SIMULATED RENDER · OLED 128×64
        </div>
      </div>
    </div>
  );
}