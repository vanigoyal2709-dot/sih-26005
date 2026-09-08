import React, { useState, useEffect } from 'react';

export default function ThermaCoreDashboard() {
  const [telemetry, setTelemetry] = useState({
    temp: 28.8,
    target: 30.0,
    cooling: false,
    override: 0
  });

  const [targetInput, setTargetInput] = useState(30.0);
  const [overrideInput, setOverrideInput] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTelemetry(data);
    };
    return () => ws.close();
  }, []);

  const sendControlCommand = async (newTarget, newOverride) => {
    await fetch('http://localhost:5000/api/control', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetTemp: newTarget, overrideState: newOverride })
    });
  };

  const handleTargetChange = (val) => {
    setTargetInput(val);
    sendControlCommand(val, overrideInput);
  };

  const handleOverrideChange = (val) => {
    setOverrideInput(val);
    sendControlCommand(targetInput, val);
  };

  const isHighTempWarning = telemetry.temp >= telemetry.target + 3.0;

  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 font-mono">
      {isHighTempWarning && (
        <div className="bg-red-600/90 border border-red-500 text-white p-3 rounded-md mb-6 animate-pulse flex items-center gap-2">
          <span>⚠️ WARNING: High Temperature Detected! Current reading is >= 3°C above target.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
          <span className="text-slate-400 text-xs mb-2">CURRENT TEMP</span>
          <div className="text-5xl font-bold text-cyan-400">{telemetry.temp}°C</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <span className="text-slate-400 text-xs block mb-2">TARGET TEMPERATURE</span>
          <div className="flex items-center gap-4 my-2">
            <button 
              onClick={() => handleTargetChange(targetInput - 0.5)}
              className="bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded"
            >-</button>
            <span className="text-2xl font-bold">{targetInput}°C</span>
            <button 
              onClick={() => handleTargetChange(targetInput + 0.5)}
              className="bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded"
            >+</button>
          </div>
          <input 
            type="range" 
            min="15" 
            max="45" 
            value={targetInput} 
            onChange={(e) => handleTargetChange(parseFloat(e.target.value))}
            className="w-full mt-2 accent-cyan-400"
          />
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <span className="text-slate-400 text-xs block mb-2">MANUAL OVERRIDE – RELAY</span>
          <div className="flex gap-2 mt-4">
            {['Auto', 'Force ON', 'Force OFF'].map((label, idx) => (
              <button
                key={label}
                onClick={() => handleOverrideChange(idx)}
                className={`flex-1 py-2 text-xs rounded transition-all ${
                  overrideInput === idx 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}