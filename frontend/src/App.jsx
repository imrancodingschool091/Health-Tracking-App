import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthDashboard from './components/HealthDashboard';
import AddHealthRecord from './components/AddHealthRecord';
import EditHealthRecord from './components/EditHealthRecord';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthDashboard />} />
        <Route path="/add" element={<AddHealthRecord />} />
        <Route path="/edit/:id" element={<EditHealthRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
