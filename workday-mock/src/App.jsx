import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Payslips from './pages/Payslips';
import TimeOff from './pages/TimeOff';
import FindJobs from './pages/FindJobs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <TopHeader />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/timeoff" element={<TimeOff />} />
            <Route path="/jobs" element={<FindJobs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App