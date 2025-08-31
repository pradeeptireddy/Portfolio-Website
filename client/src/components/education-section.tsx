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
    <section id="education" className="py-6 sm:py-8 px-4 sm:px-6 section-transition bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-wider uppercase text-accent mb-8" data-testid="education-title">
          Education
        </h2>
        
        <div className="space-y-2">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-muted pl-4 sm:pl-8" data-testid={`education-${index}`}>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="text-lg font-serif" data-testid={`education-degree-${index}`}>
                  {edu.degree}
                </h3>
                <span className="text-base text-muted-foreground">|</span>
                <p className="text-base text-muted-foreground" data-testid={`education-institution-${index}`}>
                  {edu.institution}
                </p>
                <span className="text-base text-muted-foreground">|</span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider" data-testid={`education-period-${index}`}>
                  {edu.period}
                </p>
              </div>
              {edu.specialization && (
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`education-specialization-${index}`}>
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
