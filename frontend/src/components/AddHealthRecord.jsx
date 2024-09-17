import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddHealthRecord() {
  const [date, setDate] = useState('');
  const [bodyTemperature, setBodyTemperature] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const navigate = useNavigate();

  const submitRecord = async () => {
    await axios.post('http://localhost:5000/health-records', {
      date, bodyTemperature, bloodPressure, heartRate
    });
    navigate('/');
  };

  return (
    <div>
      <h1>Add New Health Record</h1>
      <form onSubmit={(e) => { e.preventDefault(); submitRecord(); }}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="number" placeholder="Body Temperature" value={bodyTemperature} onChange={(e) => setBodyTemperature(e.target.value)} required />
        <input type="text" placeholder="Blood Pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
        <input type="number" placeholder="Heart Rate" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddHealthRecord;
