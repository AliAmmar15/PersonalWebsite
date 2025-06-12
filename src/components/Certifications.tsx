
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python for Data Science',
      issuer: 'Cognitive Class',
      year: '2025',
      current: true,
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      year: '2024',
      current: false,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{cert.year}</span>
                  {cert.current && (
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      Latest
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
