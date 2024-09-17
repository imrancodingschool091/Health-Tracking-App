import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HealthDashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/health-records').then((res) => setRecords(res.data));
  }, []);

  return (
    <div>
      <h1>Health Records</h1>
      <Link to="/add">Add New Record</Link>
      <ul>
        {records.map((record) => (
          <li key={record._id}>
            Date: {new Date(record.date).toLocaleDateString()}, Temp: {record.bodyTemperature}, BP: {record.bloodPressure}, Heart Rate: {record.heartRate}
            <Link to={`/edit/${record._id}`}>Edit</Link>
            <button onClick={() => deleteRecord(record._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const deleteRecord = async (id) => {
  await axios.delete(`http://localhost:5000/health-records/${id}`);
  window.location.reload();
};

export default HealthDashboard;
