import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutSection/>
      </main>
      <Footer />
    </div>
  );
};

export default About
