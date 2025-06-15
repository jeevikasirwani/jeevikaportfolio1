import React from 'react';
import userData from '../utils/user';

function Experience() {

 return (
    <div className="p-4 sm:p-6 md:p-8 font-mono min-h-screen border-b border-dashed border-gray-700">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-300 tracking-wider">EXPERIENCE</h1>
      
      <div className="relative">
        {userData.experience.map((exp, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row items-start mb-8 sm:mb-12 last:mb-0">
            
            {/* Mobile: Timeline on left with content below */}
            <div className="flex sm:flex-col items-center sm:items-center mr-4 sm:mr-8 mb-4 sm:mb-0">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-violet-500 rounded-full border-2 border-gray-600"></div>
              
              {userData.experience[index + 1] && (
                <div className="hidden sm:block w-0.5 h-32 sm:h-48 bg-white mt-2"></div>
              )}
            </div>
            
            {/* Content section - full width on mobile */}
            <div className="flex-1 w-full">
              {/* Mobile: Stack vertically, Desktop: Side by side */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="flex-1 mb-4 sm:mb-0 sm:max-w-2xl">
                  <h2 className="text-white text-base sm:text-lg font-bold tracking-wide uppercase mb-1">
                    {exp.title}
                  </h2>
                  <p className="text-gray-400 text-sm tracking-wide uppercase mb-2">
                    {exp.companyname}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    {exp.description}
                  </p>
                  <p className="text-gray-500 text-xs mb-2 sm:mb-0">
                    {exp.location}
                  </p>
                </div>
                
                {/* Timeline - below content on mobile, right side on desktop */}
                <div className="text-gray-400 text-sm tracking-wide sm:ml-8 flex-shrink-0 uppercase">
                  {exp.timeline}
                </div>
              </div>
              
              {/* Mobile: Show connecting line after content */}
              {userData.experience[index + 1] && (
                <div className="sm:hidden w-0.5 h-8 bg-gray-600 mt-4 ml-1"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Experience;