import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = ['DASHBOARD', 'HOW IT WORKS', 'COMPONENTS', 'CIRCUIT'];

  return (
    <header className="relative z-10 border-b border-slate-800/80 bg-[#06090e]/80 backdrop-blur-md px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
            ThermaCore
          </h1>
          <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">ESP32 · IOT COOLING</p>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-[10px] font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            ESP32: Online (MQTT)
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700/60 text-slate-400 text-[10px] font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            SIMULATED
          </span>
        </div>
      </div>

      <nav className="flex items-center gap-6 text-xs font-mono tracking-wider">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-all py-1 ${
              activeTab === tab
                ? 'text-cyan-400 border-b-2 border-cyan-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}