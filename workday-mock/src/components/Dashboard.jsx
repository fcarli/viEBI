import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Users, Calendar, DollarSign, FileText, Briefcase } from 'lucide-react';
import MotivationalQuote from './MotivationalQuote';

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
      <div className="dashboard-single">
        <MotivationalQuote />
      </div>
    </div>
  );
};

export default Dashboard;