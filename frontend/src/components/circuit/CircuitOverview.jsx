import React from 'react';
import { Thermometer, Cpu, Zap, Fan, ArrowRight, Check } from 'lucide-react';

export default function CircuitOverview() {
  return (
    <div className="bg-[#090d16] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
          CIRCUIT OVERVIEW
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Connections stay configurable
        </h2>
      </div>

      {/* Grid Flow Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Top Row: Sensor -> ESP32 */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#0d131f] border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Thermometer className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Sensor</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                DATA &rarr; CONFIGURABLE GPIO
              </p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0" />

          <div className="flex-1 bg-[#0d1a24] border border-cyan-500/40 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">ESP32</h3>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                3V3 · GND · PROCESSING
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Relay -> Cooling */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#0d131f] border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Relay</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                IN &rarr; CONFIGURABLE GPIO
              </p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0" />

          <div className="flex-1 bg-[#0d1a24] border border-cyan-500/40 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <Fan className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Cooling</h3>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                EXTERNAL LOAD
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bullet Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 font-sans pt-2">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>ESP32 power: 3V3 + common GND</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Sensor: VCC, GND, DATA</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>OLED: I2C SDA + SCL</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Cooling device: relay-switched circuit</span>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-4 border-t border-slate-800/60">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
          GPIO NUMBERS INTENTIONALLY LEFT CONFIGURABLE FOR THE PHYSICAL BUILD.
        </span>
      </div>
    </div>
  );
}