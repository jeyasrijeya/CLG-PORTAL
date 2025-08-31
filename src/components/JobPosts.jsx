import React, { useState } from "react";
import "../css/JobPosts.css";

function JobPosts() {
  const [jobs] = useState([
    { id: 1, title: "Software Engineer", company: "Innovate Solutions", description: "Seeking a skilled software engineer to join our team." },
    { id: 2, title: "Product Manager", company: "Global Inc.", description: "Looking for an experienced product manager to lead our new project." },
    { id: 3, title: "Data Analyst", company: "Tech Corp", description: "Hiring a data analyst to interpret data and provide insights for business decisions." },
    { id: 4, title: "UX Designer", company: "Creative Minds", description: "Seeking a UX designer to create user-friendly digital experiences." },
    { id: 5, title: "Marketing Specialist", company: "BrandWorks", description: "Looking for a marketing specialist to develop and execute campaigns." }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", year: "" });
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
      `Application submitted for ${selectedJob.title}!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nYear of Passed Out: ${formData.year}`
    );
    handleClose();
  };

  return (
    <div className="job-posts">
      <h2>Job Board</h2>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <h4>{job.company}</h4>
          <p>{job.description}</p>
          <button onClick={() => handleApplyClick(job)}>Apply Now</button>
        </div>
      ))}

      {/* Popup Modal */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Apply for {selectedJob?.title}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="year"
                placeholder="Year of Passed Out"
                value={formData.year}
                onChange={handleChange}
                required
              />
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

export default JobPosts;
