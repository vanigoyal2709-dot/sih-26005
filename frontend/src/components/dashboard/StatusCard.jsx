import React from 'react';

export default function StatusCard({ label, value, active }) {
  return (
    <div className="bg-[#0e1420] border border-slate-800/60 rounded-xl p-5 flex flex-col justify-between">
      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block mb-2">{label}</span>
      <span className="text-2xl font-bold text-emerald-400 font-mono flex items-center gap-2">
        {active && <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>}
        {value}
      </span>
    </div>
  );
}