import React, { useState } from 'react';
import { Search, MapPin, Clock, Briefcase, Filter } from 'lucide-react';

const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'London, UK',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'We are looking for an experienced software engineer to join our team and help build cutting-edge scientific software.',
      requirements: ['5+ years experience', 'React/Node.js', 'Cloud technologies']
    },
    {
      id: 2,
      title: 'Data Scientist',
      department: 'Research',
      location: 'Heidelberg, Germany',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Join our research team to analyze complex biological data and develop machine learning models.',
      requirements: ['PhD in relevant field', 'Python/R', 'ML experience']
    },
    {
      id: 3,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Cambridge, UK',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Lead cross-functional teams in delivering complex scientific projects on time and within budget.',
      requirements: ['PMP certification', '5+ years PM experience', 'Scientific background']
    },
    {
      id: 4,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      posted: '1 week ago',
      description: 'Design intuitive interfaces for scientific applications used by researchers worldwide.',
      requirements: ['3+ years UX experience', 'Figma/Sketch', 'Portfolio required']
    },
    {
      id: 5,
      title: 'Research Technician',
      department: 'Laboratory',
      location: 'Hinxton, UK',
      type: 'Full-time',
      posted: '2 weeks ago',
      description: 'Support cutting-edge research projects with laboratory experiments and data collection.',
      requirements: ['BSc in Biology/Chemistry', 'Lab experience', 'Attention to detail']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="page-container">
      <h1>Find Jobs</h1>
      <p className="page-description">Discover exciting career opportunities within our organization</p>
      
      <div className="job-search-section">
        <div className="search-bar">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search by job title or department..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <label>Location</label>
            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="all">All Locations</option>
              <option value="UK">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Job Type</label>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
        </div>
      </div>

      <div className="job-results">
        <p className="results-count">{filteredJobs.length} jobs found</p>
        
        <div className="jobs-list">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              
              <div className="job-meta">
                <span className="meta-item">
                  <Briefcase size={16} />
                  {job.department}
                </span>
                <span className="meta-item">
                  <MapPin size={16} />
                  {job.location}
                </span>
                <span className="meta-item">
                  <Clock size={16} />
                  {job.posted}
                </span>
              </div>
              
              <p className="job-description">{job.description}</p>
              
              <div className="job-requirements">
                <h4>Key Requirements:</h4>
                <ul>
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div className="job-actions">
                <button className="primary-button">Apply Now</button>
                <button className="secondary-button">Save Job</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;