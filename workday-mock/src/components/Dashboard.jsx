import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Users, Calendar, DollarSign, FileText, Briefcase } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="dashboard">
      <div className="hero-section">
        <h1>Hello There</h1>
        <p className="date">{currentDate}</p>
      </div>

      <div className="dashboard-grid">
        <div className="card awaiting-action">
          <h2>Awaiting Your Action</h2>
          <div className="empty-state">
            <p>You're all caught up on your tasks.</p>
          </div>
        </div>

        <div className="card announcements">
          <div className="card-header">
            <h2>Announcements</h2>
            <div className="pagination">
              <span>1 of 2</span>
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
          <div className="announcement-item">
            <div className="announcement-icon">
              <Users size={40} />
            </div>
            <div className="announcement-content">
              <h3>How to Stay Informed About Workday Cha...</h3>
              <p>Curious About What's Coming Next in Wor...</p>
            </div>
          </div>
        </div>

        <div className="card timely-suggestions">
          <h2>Timely Suggestions</h2>
          <p>Here's where you'll get updates on your active items.</p>
        </div>

        <div className="card quick-tasks">
          <h2>Quick Tasks</h2>
          <div className="quick-task-buttons">
            <button className="task-button" onClick={() => navigate('/payslips')}>My Payslips</button>
            <button className="task-button" onClick={() => navigate('/timeoff')}>Time Off Balance</button>
            <button className="task-button" onClick={() => navigate('/jobs')}>Find Jobs</button>
          </div>
        </div>

        <div className="card recommended">
          <h2>Recommended for You</h2>
          <div className="recommended-grid">
            <div className="recommended-item">
              <h3>Understand Your People Network</h3>
              <p>Based on your role</p>
              <a href="#">View Org Chart</a>
            </div>
            <div className="recommended-item">
              <h3>Showcase Your Best Self with Your Profile</h3>
              <p>Based on your most popular actions</p>
              <a href="#">Manage Profile</a>
            </div>
          </div>
        </div>

        <div className="card top-apps">
          <h2>Your Top Apps</h2>
          <div className="app-list">
            <div className="app-item">
              <div className="app-icon">
                <Briefcase size={24} />
              </div>
              <span>Jobs Hub</span>
            </div>
            <div className="app-item">
              <div className="app-icon">
                <FileText size={24} />
              </div>
              <span>Directory</span>
            </div>
            <div className="app-item">
              <div className="app-icon">
                <Calendar size={24} />
              </div>
              <span>Absence</span>
            </div>
            <div className="app-item">
              <div className="app-icon">
                <DollarSign size={24} />
              </div>
              <span>Request Absence</span>
            </div>
          </div>
          <a href="#" className="view-all-apps">View All Apps</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;