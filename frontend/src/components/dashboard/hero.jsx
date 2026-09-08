import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ setActiveTab }) {
  return (
    <div className="relative overflow-hidden bg-[#0a0e17] border border-slate-800/80 rounded-2xl p-8 md:p-12 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-3 py-1 bg-slate-800/60 border border-slate-700/50 rounded-full text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            HARDWARE PROTOTYPE · LIVE BUILD
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Smart Temperature <br />
            Monitoring & <br />
            <span className="text-cyan-400">Automatic Cooling</span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl font-sans">
            An ESP32-based IoT system that continuously reads ambient temperature, compares
            it against a threshold, and automatically drives a relay-controlled cooling fan — with
            live status on an OLED display.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('HOW IT WORKS')}
              className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-full text-xs font-mono transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              View How It Works <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('COMPONENTS')}
              className="px-6 py-3 bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 font-bold rounded-full text-xs font-mono transition-colors"
            >
              Explore Components
            </button>
          </div>

          {/* Hardware Tags Footer */}
          <div className="flex gap-8 pt-6 border-t border-slate-800/60 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            <span>ESP32</span>
            <span>TEMP SENSOR</span>
            <span>OLED</span>
            <span>RELAY</span>
          </div>
        </div>

        {/* Right Image/Hardware Reference Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-[#080c14] border border-slate-800 rounded-2xl p-4 relative overflow-hidden group">
            <div className="absolute top-6 left-6 z-10 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-slate-700/50 text-[9px] font-mono text-cyan-400 tracking-wider">
              SYSTEM ACTIVE
            </div>

            {/* Hardware Breadboard Setup Image */}
            <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="ESP32 Prototype Setup"
                className="w-full h-72 md:h-80 object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 pt-3 px-1">
              <span>PROTOTYPE REFERENCE · BENCH 01</span>
              <span className="text-cyan-400">REAL HARDWARE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}