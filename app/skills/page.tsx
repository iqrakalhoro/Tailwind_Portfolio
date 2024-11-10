import React from 'react';

const skills = [
  { name: 'HTML', percentage: 55, barClass: 'bg-blue-500' },
  { name: 'Graphic Design', percentage: 80, barClass: 'bg-green-500' },
  { name: 'CSS', percentage: 60, barClass: 'bg-blue-500' },
  { name: 'Typescript', percentage: 80, barClass: 'bg-purple-500' },
  { name: 'Javascript', percentage: 65, barClass: 'bg-yellow-500' },
  { name: 'WordPress', percentage: 70, barClass: 'bg-indigo-500' },
];

const SkillsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
       
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg font-semibold text-blue-400">Why Choose Me</h3>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500">My Skills</h1>
          </div>
          
          <div className="w-full max-w-lg md:max-w-2xl">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4 md:mb-6">
               
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <small>{skill.name}</small>
                  <small>{skill.percentage}%</small>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                  <div
                    className={`${skill.barClass} h-3 md:h-4 rounded-full`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <SkillsSection />
    </div>
  );
};

export default App;
