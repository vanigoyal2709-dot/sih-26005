const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const mqtt = require('mqtt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Connect to HiveMQ Public MQTT Broker
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com:1883');

mqttClient.on('connect', () => {
  console.log('✅ Connected to HiveMQ MQTT Broker');
  mqttClient.subscribe('thermacore/telemetry');
});

// Broadcast telemetry data to all connected WebSocket clients (React UI)
mqttClient.on('message', (topic, message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message.toString());
    }
  });
});

// API endpoint to send control commands back to ESP32
app.post('/api/control', (req, res) => {
  const { targetTemp, overrideState } = req.body;
  const payload = JSON.stringify({ targetTemp, overrideState });
  
  mqttClient.publish('thermacore/commands', payload);
  console.log('📡 Published Command to ESP32:', payload);
  res.status(200).json({ status: 'Success', payload });
});

server.listen(5000, () => {
  console.log('🚀 Backend Server running on http://localhost:5000');
});