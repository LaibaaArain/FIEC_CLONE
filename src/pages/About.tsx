import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import TeamMembersSection from '../components/TeamMembersSection'
const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutSection/>
         <TeamMembersSection />
      </main>
      <Footer />
    </div>
  );
};

export default About
