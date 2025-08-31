export default function ProjectsSection() {
  const projects = [
    {
      title: "CliniFind – Trial Finder App",
      technologies: "React Native, REST API, JSON, Search UI",
      description: "Built a mobile trial finder with dynamic filters and annotation-aware search features; simulated UX for patient-facing clinical search tools."
    },
    {
      title: "Veeva Vault Center of Excellence",
      technologies: "Strategy & Implementation",
      description: "Designed internal CoE frameworks for Vault governance, release management, and integration with clinical and document management systems. Led training rollout and onboarding strategy for end users across regions and functions."
    },
    {
      title: "ClaritiDox – Document Labeling Framework",
      technologies: "Python, CLI, Excel, XML",
      description: "Built an automation pipeline to annotate trial documents with regulatory and clinical tags. Reduced labeling cycle time by 30% through iterative UAT and structured stakeholder feedback."
    },
    {
      title: "ClaritiDox – Document Tracker Dashboard",
      technologies: "Integration & Compliance",
      description: "Built platform-agnostic disclosure tracker integrating Veeva Vault and Clinical Trial Information System (CTIS) milestones. Supported transparency compliance for >100 studies."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 section-transition">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-medium tracking-wider uppercase text-accent mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-muted pl-8" data-testid={`project-${index}`}>
                <h3 className="text-2xl font-serif mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider" data-testid={`project-tech-${index}`}>
                  {project.technologies}
                </p>
                <p className="text-lg leading-relaxed mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="inline-block">
                  <span className="text-sm text-accent hover:underline cursor-pointer" data-testid={`project-link-${index}`}>
                    VIEW RELATED PROJECT →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
