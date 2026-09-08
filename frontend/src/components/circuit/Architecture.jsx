import React from 'react';
import { Activity } from 'lucide-react';

export default function Architecture() {
  const steps = [
    {
      id: '01',
      text: 'Current demo values are local and simulated.',
    },
    {
      id: '02',
      text: 'Replace the data adapter with an ESP32 API, MQTT topic, Firebase listener, or WebSocket stream.',
    },
    {
      id: '03',
      text: 'Keep the same dashboard contract: current, target, relay, cooling, and timestamps.',
    },
  ];

  return (
    <div className="bg-[#090d16] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
          PROTOTYPE ARCHITECTURE
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Ready for a real data source
        </h2>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        {steps.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 pb-3 border-b border-slate-800/60 last:border-0"
          >
            <span className="text-xs font-mono font-bold text-cyan-400 pt-0.5">
              {item.id}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Data Adapter Box */}
      <div className="bg-[#0b1720] border border-cyan-500/30 rounded-xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-cyan-400">
          <Activity className="w-4 h-4" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
            DATA ADAPTER SLOT
          </span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          The visual layer is intentionally separated from the source of the readings so hardware integration can be added later without redesigning the presentation.
        </p>
      </div>
    </div>
  );
}