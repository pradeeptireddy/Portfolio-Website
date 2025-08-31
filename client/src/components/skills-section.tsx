export default function SkillsSection() {
  const skillAreas = [
    {
      title: "Frontend Development",
      description: "React, JavaScript, TypeScript, HTML/CSS, responsive UI design, accessibility. Focused on creating intuitive interfaces that transform complex healthcare data into user-friendly experiences."
    },
    {
      title: "Backend & Data",
      description: "Python, REST APIs, ETL pipelines, command-line tools, Excel macros. Specialized in metadata tagging, data annotation schema, and structured data transformation."
    },
    {
      title: "Healthcare Platforms",
      description: "Veeva Vault, Salesforce Health Cloud, CTIS, ClinicalTrials.gov. Deep understanding of regulated environments and compliance requirements."
    },
    {
      title: "Development Practices",
      description: "Agile methodologies, CI/CD collaboration, comprehensive documentation, user-centered workflows. Experience with UAT, manual QA, and stakeholder sign-off processes."
    }
  ];

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 bg-secondary/50 text-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-wider uppercase text-accent mb-6" data-testid="skills-title">
          Technical Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillAreas.map((skill, index) => (
            <div key={index} data-testid={`skill-area-${index}`}>
              <h3 className="text-base font-serif mb-3" data-testid={`skill-title-${index}`}>
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" data-testid={`skill-description-${index}`}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
