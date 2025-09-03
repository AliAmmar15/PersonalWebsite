import React from 'react';
import { Calendar, MapPin, Award, Code, Brain, Users, Target, Hammer, Heart, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cabinetry Installation Specialist',
      organization: 'EuroAmerica Design',
      location: 'Troy, MI',
      period: 'June 2022 - Present',
      type: 'Design & Construction',
      description: 'Specialized in precision cabinetry installation with focus on client satisfaction and quality craftsmanship using advanced tools and techniques.',
      achievements: [
        'Enhanced precision and safety in installations by utilizing advanced tools and techniques to accurately measure spaces and interpret blueprints',
        'Increased efficiency and accuracy by operating tools to cut and shape materials with precision during cabinetry installation projects',
        'Improved client satisfaction by working closely with clients and designers, addressing installation challenges, and making necessary on-site adjustments',
        'Maintained high standards of workmanship while meeting project deadlines and client expectations'
      ],
      skills: ['Blueprint Reading', 'Precision Measurement', 'Advanced Tools Operation', 'Client Relations', 'Problem Solving', 'Quality Control'],
      icon: Hammer,
      current: true
    },
    {
      title: 'Pharmacy Technician',
      organization: 'Pharmacy Shop',
      location: 'Madison Heights, MI',
      period: 'June 2021 - June 2022',
      type: 'Healthcare',
      description: 'Provided comprehensive pharmaceutical support services with emphasis on accuracy, customer service, and regulatory compliance.',
      achievements: [
        'Assisted in prescription filling, inventory organization, and data entry with high accuracy and attention to detail',
        'Resolved customer inquiries and processed insurance claims efficiently while maintaining excellent customer service',
        'Ensured HIPAA compliance in handling patient records and maintained confidentiality standards',
        'Verified dosages and supported pharmacists in medication dispensing to ensure patient safety'
      ],
      skills: ['Prescription Processing', 'HIPAA Compliance', 'Customer Service', 'Insurance Claims', 'Data Entry', 'Inventory Management'],
      icon: Heart,
      current: false
    }
  ];

  const organizations = [
    {
      name: 'Electric Racing Association - Software and Data Team',
      organization: 'Oakland University',
      role: 'Team Member',
      period: 'May 2025 - Present',
      description: 'Contributing to the software and data analysis aspects of the electric racing team, applying computer science skills to automotive engineering challenges.',
      activities: [
        'Develop and maintain software systems for electric vehicle performance monitoring',
        'Analyze data from racing events to optimize vehicle performance',
        'Collaborate with engineering team on technical solutions and system integration',
        'Apply programming skills to real-world automotive applications'
      ]
    },
    {
      name: 'AICC Youth Group',
      organization: 'American Islamic Community Center',
      role: 'Program Director',
      period: 'February 2023 - Present',
      description: 'Lead youth programs and community initiatives, organizing educational and cultural events while mentoring younger community members.',
      activities: [
        'Direct and coordinate youth programs and educational workshops',
        'Organize community service projects and cultural events',
        'Mentor younger members and facilitate leadership development',
        'Collaborate with community leaders on program planning and implementation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground">Work experience, academic journey, and community involvement</p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="professional-card p-8 hover-lift">
                  <div className="grid lg:grid-cols-4 gap-8">
                    {/* Experience Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                            {exp.current && (
                              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full w-fit mt-2 lg:mt-0">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg text-primary font-semibold mb-1">{exp.organization}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full w-fit">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
                        </div>
                      </div>
                      
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Award size={20} className="text-primary" />
                          <h4 className="font-semibold text-foreground">Key Achievements</h4>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills & Technologies */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-4">
                        <Users size={20} className="text-primary" />
                        <h4 className="font-semibold text-foreground">Skills Applied</h4>
                      </div>
                      <div className="space-y-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="text-sm text-muted-foreground p-2 bg-muted/50 rounded">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Organizations & Community Involvement */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Organizations & Community Involvement</h3>
              <p className="text-lg text-muted-foreground">Active participation in cultural and community organizations</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {organizations.map((org, index) => (
                <div key={index} className="professional-card p-8 hover-lift">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1">{org.name}</h4>
                      <p className="text-lg text-primary font-semibold mb-1">{org.organization}</p>
                      <p className="text-primary font-medium mb-2">{org.role}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                        <Calendar size={16} />
                        <span>{org.period}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{org.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-3">Key Activities:</h5>
                    <ul className="space-y-2">
                      {org.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="professional-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready for New Opportunities</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm actively seeking internships and entry-level positions where I can apply my technical skills, 
                work experience, and community involvement to contribute meaningfully to your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:aammar0712@gmail.com"
                  className="professional-button"
                >
                  Get In Touch
                </a>
                <a
                  href="https://github.com/AliAmmar15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;