import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SkillsSection() {
  const technicalSkills = [
    {
      title: "Frontend Development",
      description: "React, JavaScript, TypeScript, HTML/CSS, responsive UI design, accessibility. Focused on creating intuitive interfaces that transform complex healthcare data into user-friendly experiences."
    },
    {
      title: "Backend & Data",
      description: "Python, REST APIs, ETL pipelines, command-line tools, Excel macros. Specialized in metadata tagging, data annotation schema, and structured data transformation."
    },
    {
      title: "ML & AI",
      description: "PyTorch, TensorFlow, NumPy, Pandas, scikit-learn, Prometheus, Jupyter (ML-adjacent infra)"
    }
  ];

  const industrySkills = [
    {
      title: "Healthcare Platforms",
      description: "Veeva Vault, Salesforce Health Cloud, CTIS, ClinicalTrials.gov. Deep understanding of regulated environments and compliance requirements."
    },
    {
      title: "Development Practices",
      description: "Agile methodologies, CI/CD collaboration, comprehensive documentation, user-centered workflows. Experience with UAT, manual QA, and stakeholder sign-off processes."
    }
  ];

  const renderSkillCard = (skill: any, index: number, prefix: string) => (
    <div key={index} data-testid={`skill-area-${prefix}-${index}`}>
      <h3 className="text-base font-serif mb-3" data-testid={`skill-title-${prefix}-${index}`}>
        {skill.title}
      </h3>
      <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar">
        <p className="text-sm leading-relaxed mb-3" data-testid={`skill-description-${prefix}-${index}`}>
          {skill.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 bg-secondary/50 text-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-wider uppercase text-accent mb-6" data-testid="skills-title">
          Technical Expertise
        </h2>
        
        <Tabs defaultValue="technical" className="w-full" data-testid="skills-tabs">
          <TabsList className="mb-6" data-testid="skills-tabs-list">
            <TabsTrigger value="technical" data-testid="tab-technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="industry" data-testid="tab-industry">Industry & Process</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" data-testid="tab-content-technical">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => renderSkillCard(skill, index, 'technical'))}
            </div>
          </TabsContent>
          
          <TabsContent value="industry" data-testid="tab-content-industry">
            <div className="grid md:grid-cols-2 gap-6">
              {industrySkills.map((skill, index) => renderSkillCard(skill, index, 'industry'))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
