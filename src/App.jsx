import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AlumniDatabase from './components/AlumniDatabase';
import JobPosts from './components/JobPosts';
import MentoringPosts from './components/MentoringPosts';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/alumni" element={<AlumniDatabase />} />
            <Route path="/jobs" element={<JobPosts />} />
            <Route path="/mentoring" element={<MentoringPosts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;