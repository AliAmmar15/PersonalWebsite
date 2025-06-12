
import React from 'react';

const Education = () => {
  const education = [
    {
      school: 'Oakland University',
      degree: 'B.S. in Computer Science',
      minor: 'Minor in Artificial Intelligence',
      period: 'Aug 2024 – May 2027',
      gpa: '3.4',
      current: true,
    },
    {
      school: 'Macomb Community College',
      degree: 'General Studies',
      period: 'Fall 2022 – Summer 2024',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Education</h2>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.school}</h3>
                    <p className="text-lg text-primary font-semibold">{item.degree}</p>
                    {item.minor && (
                      <p className="text-muted-foreground">{item.minor}</p>
                    )}
                    {item.gpa && (
                      <p className="text-muted-foreground mt-2">GPA: {item.gpa}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <span className="text-muted-foreground">{item.period}</span>
                    {item.current && (
                      <span className="mt-2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
