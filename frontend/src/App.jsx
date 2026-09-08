import React, { useState } from 'react';
import AlertBanner from './components/layout/AlertBanner';
import Header from './components/layout/Header';

import Hero from './components/dashboard/Hero';
import TempGauge from './components/dashboard/TempGauge';
import TargetControl from './components/dashboard/TargetControl';
import StatusCard from './components/dashboard/StatusCard';
import ManualOverride from './components/dashboard/ManualOverride';
import TempGraph from './components/dashboard/TempGraph';

import OledPreview from './components/preview/OledPreview';

import CircuitOverview from './components/circuit/CircuitOverview';
import Architecture from './components/circuit/Architecture';

import ControlLogic from './components/howItWorks/ControlLogic';
import SignalFlow from './components/howItWorks/SignalFlow';

import ComponentCard from './components/componentsView/ComponentCard';

export default function App() {
  const [activeTab, setActiveTab] = useState('DASHBOARD');
  const [targetTemp, setTargetTemp] = useState(30);
  const [overrideMode, setOverrideMode] = useState('Auto');

  const [telemetry] = useState({
    temp: 33.9,
    cooling: true,
    relay: 'ACTIVE',
    system: 'ACTIVE',
    lastHeartbeat: '1s ago',
    lastUpdated: '20:42:22',
  });

  const isHighTemp = telemetry.temp > targetTemp + 3;

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-200 font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      ></div>

      <AlertBanner isHighTemp={isHighTemp} />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8 space-y-12">
        {activeTab === 'DASHBOARD' && (
          <section className="space-y-10">
            {/* FRONT PAGE HERO SECTION */}
            <Hero setActiveTab={setActiveTab} />

            <div className="space-y-4">
              <div className="flex justify-between items-end font-mono">
                <span className="text-[10px] text-cyan-400 tracking-widest uppercase">
                  LIVE MONITORING
                </span>
                <div className="text-[11px] text-slate-500 flex items-center gap-3">
                  <span>
                    LAST UPDATED{' '}
                    <strong className="text-slate-300">
                      {telemetry.lastUpdated}
                    </strong>
                  </span>
                  <span className="flex items-center gap-1 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Last Heartbeat: {telemetry.lastHeartbeat}
                  </span>
                </div>
              </div>

              <div className="bg-[#0a0e17] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  System Dashboard
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  <TempGauge temp={telemetry.temp} />

                  <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TargetControl
                      targetTemp={targetTemp}
                      setTargetTemp={setTargetTemp}
                    />
                    <StatusCard
                      label="COOLING"
                      value={telemetry.cooling ? 'ON' : 'OFF'}
                      active={telemetry.cooling}
                    />
                    <StatusCard
                      label="SYSTEM"
                      value={telemetry.system}
                      active={true}
                    />
                    <ManualOverride
                      overrideMode={overrideMode}
                      setOverrideMode={setOverrideMode}
                    />
                  </div>
                </div>
              </div>
            </div>

            <OledPreview telemetry={telemetry} targetTemp={targetTemp} />
            <TempGraph targetTemp={targetTemp} />
          </section>
        )}

        {activeTab === 'HOW IT WORKS' && (
          <section className="space-y-10">
            <ControlLogic />
            <SignalFlow />
          </section>
        )}

        {activeTab === 'COMPONENTS' && (
          <section className="space-y-10">
            <ComponentCard />
          </section>
        )}

        {activeTab === 'CIRCUIT' && (
          <section className="space-y-10">
            <CircuitOverview />
            <Architecture />
          </section>
        )}
      </main>
    </div>
  );
}