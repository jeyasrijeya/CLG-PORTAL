
import React from 'react';
import '../css/ProfileCard.css';

import profilePic1 from '../assets/123.jpeg';
import profilePic2 from '../assets/235.jpeg';
import profilePic3 from '../assets/566.jpeg';
import profilePic4 from '../assets/346.jpeg';
import profilePic5 from '../assets/456.jpeg';
import profilePic6 from '../assets/678.jpg';
import profilePic7 from '../assets/789.jpeg';
import profilePic8 from '../assets/910.jpeg';

const profilePics = [profilePic1, profilePic2,profilePic3,profilePic4,profilePic5,profilePic6,profilePic7,profilePic8];

function ProfileCard({ alumnus }) {
  const currentPic = profilePics[alumnus.id - 1]; 

  return (
    <div className="profile-card">
      <img src={currentPic} alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h3>{alumnus.name}</h3>
        <p><strong>Graduation Year:</strong> {alumnus.graduationYear}</p>
        <p><strong>Major:</strong> {alumnus.major}</p>
        <p><strong>Company:</strong> {alumnus.company}</p>
      </div>
    </div>
  );
}

export default ProfileCard;