import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import '../css/AlumniDatabase.css';

function AlumniDatabase() {
  const [alumni] = useState([
{ id: 1, name: 'Jane Doe', graduationYear: 2015, major: 'Computer Science', company: 'Tech Corp', image: 'profilePic1' },
  { id: 2, name: 'John Smitha', graduationYear: 2018, major: 'Business Administration', company: 'Global Inc.', image: 'profilePic2' },
  { id: 3, name: 'Alice Johnce', graduationYear: 2017, major: 'Mechanical Engineering', company: 'Innovate Solutions', image: 'profilePic3' },
  { id: 4, name: 'Michael Juliya', graduationYear: 2016, major: 'Electrical Engineering', company: 'PowerGrid Ltd.', image: 'profilePic4' },
  { id: 5, name: 'Sophia Williams', graduationYear: 2019, major: 'Civil Engineering', company: 'UrbanBuild', image: 'profilePic5' },
  { id: 6, name: 'Daniel Lee', graduationYear: 2014, major: 'Information Technology', company: 'CyberTech', image: 'profilePic6' },
  { id: 7, name: 'Olivia Davis', graduationYear: 2020, major: 'Biotechnology', company: 'BioGenix', image: 'profilePic7' },
  { id: 8, name: 'James Wilson', graduationYear: 2013, major: 'Chemical Engineering', company: 'ChemSolutions', image: 'profilePic8' }

  ])

  return (
    <div className="alumni-database">
      <h2>Alumni Directory</h2>
      <div className="alumni-list">
        {alumni.map(alumnus => (
          <ProfileCard key={alumnus.id} alumnus={alumnus} />
        ))}
      </div>
    </div>
  );
}

export default AlumniDatabase;