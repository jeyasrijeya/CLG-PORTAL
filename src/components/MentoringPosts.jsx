import React, { useState } from "react";
import "../css/MentoringPosts.css";

function MentoringPosts() {
  const [posts] = useState([
    { id: 1, mentor: "Dr. Smith", expertise: "Career Guidance", description: "Helping students with career planning and interview preparation." },
    { id: 2, mentor: "Ms. Johnson", expertise: "UI/UX Design", description: "Guidance on improving design skills and portfolio building." },
    { id: 3, mentor: "Mr. Kumar", expertise: "Software Development", description: "Offering mentorship in coding best practices and full-stack projects." },
    { id: 4, mentor: "Mrs. Lee", expertise: "Entrepreneurship", description: "Helping aspiring entrepreneurs with startup ideas and funding advice." }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    message: ""
  });

  const handleApplyClick = (post) => {
    setSelectedPost(post);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", interest: "", availability: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Mentorship request submitted to ${selectedPost.mentor}!\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Interest Area: ${formData.interest}\n` +
      `Availability: ${formData.availability}\n` +
      `Message: ${formData.message}`
    );
    handleClose();
  };

  return (
    <div className="mentoring-posts">
      <h2>Mentoring Opportunities</h2>
      {posts.map((post) => (
        <div key={post.id} className="mentoring-card">
          <h3>{post.mentor}</h3>
          <h4>Expertise: {post.expertise}</h4>
          <p>{post.description}</p>
          <button onClick={() => handleApplyClick(post)}>Request Mentorship</button>
        </div>
      ))}

      {/* Popup Modal */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Request Mentorship from {selectedPost?.mentor}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="interest"
                placeholder="Area of Interest"
                value={formData.interest}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="availability"
                placeholder="Your Availability (e.g., Weekends, Evenings)"
                value={formData.availability}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write a short message to your mentor..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="modal-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MentoringPosts;
