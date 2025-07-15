import React from 'react';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header-content">
        <div className="company-info">
          <span className="company-name">EMBL Workday</span>
          <span className="environment-badge">Production</span>
        </div>
        <div className="top-header-right">
          <span className="system-status">System Status: All Systems Operational</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;