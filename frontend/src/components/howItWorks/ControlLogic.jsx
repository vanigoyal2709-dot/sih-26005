import React from 'react';

export default function ControlLogic() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column: Control Logic */}
      <div className="lg:col-span-5 bg-[#0a0e17] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
            CONTROL LOGIC
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Automatic Decision
          </h2>

          <div className="space-y-3 font-mono text-xs">
            <div className="bg-[#0e1724] border border-cyan-500/30 p-4 rounded-xl space-y-1">
              <span className="text-emerald-400 font-bold block">
                IF Temperature &gt; Threshold
              </span>
              <span className="text-slate-300 text-[11px]">
                &rarr; Relay <strong className="text-emerald-400">ON</strong> &rarr; Cooling <strong className="text-emerald-400">ON</strong>
              </span>
            </div>

            <div className="bg-[#080c14] border border-slate-800 p-4 rounded-xl space-y-1">
              <span className="text-slate-400 font-bold block">
                IF Temperature &lt; Threshold
              </span>
              <span className="text-slate-500 text-[11px]">
                &rarr; Relay <strong className="text-slate-400">OFF</strong> &rarr; Cooling <strong className="text-slate-400">OFF</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-6 border-t border-slate-800/60">
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
            WHY A RELAY?
          </span>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            The ESP32 GPIO is a low-power control signal, not a fan power source. A
            relay safely isolates the controller and switches the higher-current cooling
            circuit.
          </p>
        </div>
      </div>

      {/* Right Column: Temperature Graph */}
      <div className="lg:col-span-7 bg-[#0a0e17] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
              TEMPERATURE GRAPH
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Last 7 Intervals
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500">°C over time</span>
        </div>

        <div className="h-48 w-full pt-4 relative">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 700 160"
            preserveAspectRatio="none"
          >
            <path
              d="M 10 130 C 120 110, 230 100, 340 75 C 450 45, 560 30, 690 70"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
            />
            
            <circle cx="10" cy="130" r="4" fill="#22d3ee" />
            <circle cx="120" cy="110" r="4" fill="#22d3ee" />
            <circle cx="230" cy="100" r="4" fill="#22d3ee" />
            <circle cx="340" cy="75" r="4" fill="#22d3ee" />
            <circle cx="450" cy="45" r="4" fill="#22d3ee" />
            <circle cx="560" cy="30" r="4" fill="#22d3ee" />
            <circle cx="690" cy="70" r="4" fill="#22d3ee" />
          </svg>

          <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-2">
            <span>09:10</span>
            <span>09:20</span>
            <span>09:30</span>
            <span>09:40</span>
            <span>09:50</span>
            <span>10:00</span>
            <span>10:10</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-6 border-t border-slate-800/60 font-mono text-center">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">CURRENT</span>
            <span className="text-xl font-bold text-white">28.8°</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">MINIMUM</span>
            <span className="text-xl font-bold text-white">25°</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">MAXIMUM</span>
            <span className="text-xl font-bold text-white">31°</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">AVERAGE</span>
            <span className="text-xl font-bold text-cyan-400">28.11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}