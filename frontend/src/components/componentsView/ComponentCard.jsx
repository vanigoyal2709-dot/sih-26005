import React from 'react';
import { Cpu, Thermometer, Monitor, Zap, Fan, Wrench } from 'lucide-react';

export default function ComponentCard() {
  const componentsList = [
    {
      title: 'ESP32',
      tag: 'ESP · PROCESSING',
      headline: 'Reads, compares, and acts.',
      description:
        'Runs the threshold logic, updates the display, and drives the relay control signal.',
      icon: Cpu,
    },
    {
      title: 'Temperature Sensor',
      tag: 'TMP · SENSING',
      headline: 'Measures ambient heat.',
      description:
        'Supplies a continuous temperature reading for the ESP32 to evaluate.',
      icon: Thermometer,
    },
    {
      title: 'OLED Display',
      tag: 'OLED · FEEDBACK',
      headline: 'Makes the state visible.',
      description:
        'Shows temperature, target, and cooling status over the I2C connection.',
      icon: Monitor,
    },
    {
      title: 'Relay Module',
      tag: 'RLY · SWITCHING',
      headline: 'Switches the load safely.',
      description:
        'Separates the low-power controller from the higher-current cooling circuit.',
      icon: Zap,
    },
    {
      title: 'Cooling Fan',
      tag: 'FAN · ACTUATOR',
      headline: 'Moves heat away.',
      description:
        'Turns on when the relay closes the external cooling circuit.',
      icon: Fan,
    },
    {
      title: 'Breadboard + Wires',
      tag: 'BRD · ASSEMBLY',
      headline: 'Connects the prototype.',
      description:
        'Provides a solderless test platform for quick wiring and iteration.',
      icon: Wrench,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
          BILL OF MATERIALS
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Components
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {componentsList.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#090d16] border border-slate-800/80 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-[#0e1726] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Title & Category Tag */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider block mt-1">
                    {item.tag}
                  </span>
                </div>

                {/* Headline & Description */}
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-medium text-slate-200">
                    {item.headline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}