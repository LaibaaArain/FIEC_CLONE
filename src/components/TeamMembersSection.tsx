import React from 'react';
import TeamMemberCard from './TeamMemberCard';

// You would import actual images like this:
// import member1Image from '@/assets/member1.jpg';
// import member2Image from '@/assets/member2.jpg';
// import member3Image from '@/assets/member3.jpg';
// import member4Image from '@/assets/member4.jpg';


const TeamMembersSection = () => {
  // Example team data
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      title: 'CEO',
      image: null, // Replace with member1Image if imported
      linkedin: '#',
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Head Manager',
      image: null, // Replace with member2Image
      linkedin: '#',
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
    },
    {
      id: 3,
      name: 'Michael Brown',
      title: 'Supervisor',
      image: null, // Replace with member3Image
      linkedin: '#',
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
    },
    {
      id: 4,
      name: 'Emily White',
      title: 'Manager',
      image: null, // Replace with member4Image
      linkedin: '#',
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 text-center">
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
        Team Members
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12 leading-relaxed">
        Our team is a blend of passionate professionals committed to innovation,
        quality, and collaboration. Each member brings unique skills and dedication
        to help us grow and deliver exceptional results. Together, we turn ideas into impact.
      </p>

      {/* Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            image={member.image}
            name={member.name}
            title={member.title}
            linkedin={member.linkedin}
            facebook={member.facebook}
            twitter={member.twitter}
            whatsapp={member.whatsapp}
          />
        ))}
      </div>

      {/* Scroll to Top Button (example positioning) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          {/* <FaArrowUp /> */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </div>
    </section>
  );
};

export default TeamMembersSection;