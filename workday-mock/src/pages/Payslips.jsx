import React from 'react';
import { Download, Eye } from 'lucide-react';

const Payslips = () => {
  const payslips = [
    { id: 1, date: '2025-01-31', period: 'January 2025', gross: '€5,250.00', net: '€3,875.00' },
    { id: 2, date: '2024-12-31', period: 'December 2024', gross: '€5,250.00', net: '€3,875.00' },
    { id: 3, date: '2024-11-30', period: 'November 2024', gross: '€5,250.00', net: '€3,875.00' },
    { id: 4, date: '2024-10-31', period: 'October 2024', gross: '€5,250.00', net: '€3,875.00' },
    { id: 5, date: '2024-09-30', period: 'September 2024', gross: '€5,250.00', net: '€3,875.00' },
    { id: 6, date: '2024-08-31', period: 'August 2024', gross: '€5,250.00', net: '€3,875.00' },
  ];

  return (
    <div className="page-container">
      <h1>My Payslips</h1>
      <p className="page-description">View and download your payslips from the past 12 months</p>
      
      <div className="payslips-grid">
        {payslips.map(payslip => (
          <div key={payslip.id} className="payslip-card">
            <div className="payslip-header">
              <h3>{payslip.period}</h3>
              <span className="payslip-date">Paid on {payslip.date}</span>
            </div>
            <div className="payslip-amounts">
              <div className="amount-item">
                <span className="amount-label">Gross Pay</span>
                <span className="amount-value">{payslip.gross}</span>
              </div>
              <div className="amount-item">
                <span className="amount-label">Net Pay</span>
                <span className="amount-value net">{payslip.net}</span>
              </div>
            </div>
            <div className="payslip-actions">
              <button className="action-button view">
                <Eye size={16} />
                View
              </button>
              <button className="action-button download">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payslips;