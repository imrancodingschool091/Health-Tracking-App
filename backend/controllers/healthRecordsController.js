import HealthRecord from '../models/HealthRecord.js';

export const createHealthRecord = async (req, res) => {
  try {
    const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
    const newRecord = new HealthRecord({ date, bodyTemperature, bloodPressure, heartRate });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHealthRecords = async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHealthRecordById = async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    res.status(200).json(record);
  } catch (error) {
    res.status(404).json({ message: 'Record not found' });
  }
};

export const updateHealthRecord = async (req, res) => {
  try {
    const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
    const updatedRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { date, bodyTemperature, bloodPressure, heartRate },
      { new: true }
    );
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteHealthRecord = async (req, res) => {
  try {
    await HealthRecord.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Record deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
