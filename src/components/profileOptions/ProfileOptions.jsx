import React from 'react';

const ProfileOptions = () => {
  const stats = [
    { label: 'Profile Visitors', value: 140 },
    { label: 'Resume Viewers', value: 20 },
    { label: 'My Jobs', value: 88 },
  ];

  return (
    <div className="w-full max-w-xs bg-white rounded-xl overflow-hidden mt-3">
      <div className="px-4 py-2 text-sm">
        {stats.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between py-2 ${
              index !== stats.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            <span className="text-black text-[14px] font-[500]">{item.label}</span>
            <span className="text-blue font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOptions;
