import React from 'react';

export default function ManualOverride({ overrideMode, setOverrideMode }) {
  const modes = ['Auto', 'Force ON', 'Force OFF'];

  return (
    <div className="md:col-span-2 bg-[#0e1420] border border-slate-800/60 rounded-xl p-5 space-y-3">
      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block">MANUAL OVERRIDE — RELAY</span>
      <div className="grid grid-cols-3 gap-2 bg-[#080c14] p-1 rounded-lg border border-slate-800">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => setOverrideMode(mode)}
            className={`py-2 text-xs font-mono rounded-md transition-all ${
              overrideMode === mode 
                ? 'bg-cyan-400 text-slate-950 font-bold shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
}