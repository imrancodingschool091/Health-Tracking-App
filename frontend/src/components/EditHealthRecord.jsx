import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditHealthRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/health-records/${id}`).then((res) => setRecord(res.data));
  }, [id]);

  const updateRecord = async () => {
    await axios.put(`http://localhost:5000/health-records/${id}`, record);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Health Record</h1>
      <form onSubmit={(e) => { e.preventDefault(); updateRecord(); }}>
        <input type="date" value={record.date} onChange={(e) => setRecord({ ...record, date: e.target.value })} />
        <input type="number" placeholder="Body Temperature" value={record.bodyTemperature} onChange={(e) => setRecord({ ...record, bodyTemperature: e.target.value })} />
        <input type="text" placeholder="Blood Pressure" value={record.bloodPressure} onChange={(e) => setRecord({ ...record, bloodPressure: e.target.value })} />
        <input type="number" placeholder="Heart Rate" value={record.heartRate} onChange={(e) => setRecord({ ...record, heartRate: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditHealthRecord;
