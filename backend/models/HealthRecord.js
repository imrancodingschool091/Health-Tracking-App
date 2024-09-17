import mongoose from 'mongoose';

const healthRecordSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  bodyTemperature: { type: Number, required: true },
  bloodPressure: { type: String, required: true },
  heartRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);

export default HealthRecord;
