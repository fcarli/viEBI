import React from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

const TimeOff = () => {
  const balances = [
    { type: 'Annual Leave', available: 22, used: 3, total: 25, unit: 'days' },
    { type: 'Sick Leave', available: 12, used: 0, total: 12, unit: 'days' },
    { type: 'Personal Time', available: 3, used: 1, total: 4, unit: 'days' },
    { type: 'Compensation Time', available: 16, used: 8, total: 24, unit: 'hours' },
  ];

  const upcomingTimeOff = [
    { id: 1, type: 'Annual Leave', startDate: '2025-07-28', endDate: '2025-08-08', days: 10, status: 'Approved' },
    { id: 2, type: 'Personal Time', startDate: '2025-09-15', endDate: '2025-09-15', days: 1, status: 'Pending' },
  ];

  return (
    <div className="page-container">
      <h1>Time Off Balance</h1>
      <p className="page-description">View your time off balances and upcoming absences</p>
      
      <div className="time-off-section">
        <h2>Current Balances</h2>
        <div className="balance-grid">
          {balances.map((balance, index) => (
            <div key={index} className="balance-card">
              <div className="balance-header">
                <Calendar size={24} />
                <h3>{balance.type}</h3>
              </div>
              <div className="balance-details">
                <div className="balance-main">
                  <span className="balance-available">{balance.available}</span>
                  <span className="balance-unit">{balance.unit} available</span>
                </div>
                <div className="balance-breakdown">
                  <div className="breakdown-item">
                    <span>Used</span>
                    <span>{balance.used} {balance.unit}</span>
                  </div>
                  <div className="breakdown-item">
                    <span>Total</span>
                    <span>{balance.total} {balance.unit}</span>
                  </div>
                </div>
                <div className="balance-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(balance.used / balance.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="time-off-section">
        <h2>Upcoming Time Off</h2>
        <div className="upcoming-list">
          {upcomingTimeOff.map(timeOff => (
            <div key={timeOff.id} className="upcoming-item">
              <div className="upcoming-icon">
                <Clock size={20} />
              </div>
              <div className="upcoming-details">
                <h4>{timeOff.type}</h4>
                <p>{timeOff.startDate} - {timeOff.endDate} ({timeOff.days} days)</p>
              </div>
              <div className={`status-badge ${timeOff.status.toLowerCase()}`}>
                {timeOff.status}
              </div>
            </div>
          ))}
        </div>
        <button className="primary-button">Request Time Off</button>
      </div>
    </div>
  );
};

export default TimeOff;