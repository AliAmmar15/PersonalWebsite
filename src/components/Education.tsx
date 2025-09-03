
import React from 'react';
import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'Oakland University',
      degree: 'Bachelor of Computer Science',
      minor: 'Minor in Artificial Intelligence',
      period: 'Expected December 2026',
      gpa: '3.5/4.0',
      current: true,
      coursework: [
        'Discrete Mathematics',
        'Data Structures', 
        'Security & Privacy in Computing',
        'Object-Oriented Computing (Java)',
        'Computer Networking',
        'C/C++ Programming & Unix'
      ],
      description: 'Pursuing a comprehensive Computer Science education with specialized focus on Artificial Intelligence applications and modern software development practices.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">Academic foundation in Computer Science and Artificial Intelligence</p>
          </div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="professional-card p-8 hover-lift">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Education Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{item.school}</h3>
                        <p className="text-lg text-primary font-semibold mb-1">{item.degree}</p>
                        {item.minor && (
                          <p className="text-muted-foreground mb-2">{item.minor}</p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                          {item.gpa && (
                            <div className="flex items-center gap-1">
                              <Award size={16} />
                              <span>GPA: {item.gpa}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {item.current && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen size={20} className="text-primary" />
                      <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                    </div>
                    <div className="space-y-2">
                      {item.coursework?.map((course, courseIndex) => (
                        <div key={courseIndex} className="text-sm text-muted-foreground p-2 bg-muted/50 rounded">
                          {course}
                        </div>
                      ))}
                    </div>
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
