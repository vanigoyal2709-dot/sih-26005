import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SignalFlow() {
  const steps = [
    {
      num: '01',
      title: 'Temperature Sensor',
      desc: 'Reads ambient temperature continuously',
      active: false,
    },
    {
      num: '02',
      title: 'ESP32',
      desc: 'Captures and digitizes the reading',
      active: false,
    },
    {
      num: '03',
      title: 'Temperature Analysis',
      desc: 'Compares value with the target',
      active: true,
    },
    {
      num: '04',
      title: 'Relay Control',
      desc: 'Switches the external circuit',
      active: false,
    },
    {
      num: '05',
      title: 'Cooling Fan',
      desc: 'Activates to lower temperature',
      active: false,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white tracking-tight">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center">
            <div
              className={`w-full h-full p-4 rounded-xl border transition-all ${
                step.active
                  ? 'bg-[#0b1b24] border-cyan-500/80 shadow-lg shadow-cyan-950/40'
                  : 'bg-[#0a0e17] border-slate-800/80'
              }`}
            >
              <span className="text-[10px] font-mono text-cyan-400 block mb-2 font-bold">
                {step.num}
              </span>
              <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute -right-2.5 z-10 w-4 h-4 text-slate-600 bg-[#06090e] rounded-full p-0.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}