export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science - Computer Science",
      institution: "Northeastern University",
      period: "Jan 2020 - Dec 2023",
      specialization: ""
    },
    {
      degree: "Master of Science - Regulatory Affairs",
      institution: "Northeastern University",
      period: "Apr 2011 - Apr 2013",
      specialization: "Specialization: Drugs, Biologics and Medical Devices"
    },
    {
      degree: "Bachelor of Science - Pharmacy",
      institution: "Osmania University",
      period: "Sep 2006 - Sep 2010",
      specialization: ""
    }
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-wider uppercase text-accent mb-6" data-testid="education-title">
          Education
        </h2>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-muted pl-8" data-testid={`education-${index}`}>
              <h3 className="text-base font-serif mb-1" data-testid={`education-degree-${index}`}>
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground mb-1" data-testid={`education-institution-${index}`}>
                {edu.institution}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider" data-testid={`education-period-${index}`}>
                {edu.period}
              </p>
              {edu.specialization && (
                <p className="text-sm text-muted-foreground mt-1" data-testid={`education-specialization-${index}`}>
                  {edu.specialization}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
