import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExperienceSection() {
  const currentRoles = [
    {
      title: "Software Engineer",
      company: "ClaritiDox, LLC",
      location: "Remote",
      period: "Sep 2022 – Present",
      description: [
        "Scripted ETL workflows to convert unstructured XML trial data into structured datasets. Configured sandbox environments and validated data exports for 20+ high-stakes submissions.",
        "Created CLI tools and macros to streamline manual checks and stakeholder reviews. Designed user-facing portals to support takedown review, document triage, and redaction logic in support of public-facing data compliance.",
        "Maintained secure deployment processes aligned with audit expectations, enabling automated compliance checks and cycle-time reduction. Collaborated across product, privacy, and legal functions to align AI-assisted workflows with global data policy expectations."
      ]
    },
    {
      title: "Senior Manager, Clinical Trial Disclosure",
      company: "Arcus Biosciences",
      location: "Remote",
      period: "Jan 2023 – June 2024",
      description: [
        "Spearheaded enterprise modernization of metadata pipelines by deploying GxP-compliant, cloud-native microservices for clinical data ingestion and validation, reducing audit-related delays by 40%.",
        "Designed RESTful APIs to synchronize regulatory platforms with operational performance trackers, enabling real-time visibility into submission and trial milestones. Led implementation of Veeva Vault dashboards and Standard Operating Procedures.",
        "Partnered with backend and product teams to improve data conventions, reducing manual interventions by 40%. Delivered documentation and training for internal users navigating new AI-aligned pipelines."
      ]
    }
  ];

  const previousRoles = [
    {
      title: "Clinical Data Systems & Regulatory Operations",
      company: "Various Biotech & Pharma Clients",
      location: "",
      period: "2013 – 2022",
      description: [
        "Delivered strategic consulting for clinical data platform modernization, driving SOP development, system migration, and metadata tagging best practices across Veeva Vault modules.",
        "Supported structured document processing across Veeva, CTIS, and ClinicalTrials.gov. Defined annotation schemas and led batch labeling across 100+ patient-facing documents.",
        "Built dashboards to flag errors, support submission tracking, and enable real-time QA for compliance and predictive analytics."
      ]
    }
  ];

  const renderExperienceCard = (experience: any, index: number, prefix: string) => (
    <div key={index} data-testid={`experience-${prefix}-${index}`}>
      <h3 className="text-lg font-serif mb-1" data-testid={`experience-title-${prefix}-${index}`}>
        {experience.title}
      </h3>
      <p className="text-base text-muted-foreground mb-1" data-testid={`experience-company-${prefix}-${index}`}>
        {experience.company} {experience.location && `| ${experience.location}`}
      </p>
      <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider" data-testid={`experience-period-${prefix}-${index}`}>
        {experience.period}
      </p>
      
      <div className="space-y-3 text-sm leading-relaxed max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        {experience.description.map((paragraph: string, pIndex: number) => (
          <p key={pIndex} data-testid={`experience-description-${prefix}-${index}-${pIndex}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section id="resume" className="py-6 sm:py-8 px-4 sm:px-6 section-transition bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium tracking-wider uppercase text-accent mb-8" data-testid="experience-title">
          Professional Experience
        </h2>
        
        <Tabs defaultValue="current" className="w-full" data-testid="experience-tabs">
          <TabsList className="mb-6" data-testid="experience-tabs-list">
            <TabsTrigger value="current" data-testid="tab-current">Recent Roles (2022-2024)</TabsTrigger>
            <TabsTrigger value="previous" data-testid="tab-previous">Consulting & Operations (2013-2022)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" data-testid="tab-content-current">
            <div className="grid md:grid-cols-2 gap-8 space-y-0">
              {currentRoles.map((experience, index) => renderExperienceCard(experience, index, 'current'))}
            </div>
          </TabsContent>
          
          <TabsContent value="previous" data-testid="tab-content-previous">
            <div className="grid md:grid-cols-1 gap-8">
              {previousRoles.map((experience, index) => renderExperienceCard(experience, index, 'previous'))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
