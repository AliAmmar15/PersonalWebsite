
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cabinetry Installer',
      company: 'EuroAmerica Design',
      location: 'Troy, MI',
      period: 'Jul 2022 – current',
      description: 'Improved installation accuracy and client satisfaction through blueprint reading and hands-on adjustments.',
      current: true,
    },
    {
      title: 'Pharmacy Technician',
      company: 'Pharmacy Shop',
      location: 'Madison Heights, MI',
      period: 'Jul 2021 – Jul 2022',
      description: 'Streamlined inventory and improved customer service while maintaining HIPAA compliance.',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.location}</p>
                      </div>
                      
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <span className="text-muted-foreground">{exp.period}</span>
                        {exp.current && (
                          <span className="mt-2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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

export default Experience;
