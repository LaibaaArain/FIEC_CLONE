import React from 'react';

const TeamMemberCard = ({ image, name, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name || 'Team Member'} className="w-full h-full object-cover" />
        ) : (
          <svg
            className="w-24 h-24 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>

      {/* Name and Title Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0B4B88] text-white py-4 text-center">
        <h3 className="text-xl font-semibold mb-1 tracking-wide">
          {name || '--------'}
        </h3>
        <p className="text-sm uppercase opacity-90">{title || '--------'}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
 