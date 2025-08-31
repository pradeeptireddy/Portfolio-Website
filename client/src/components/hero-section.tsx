export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 section-transition">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-normal leading-none mb-8 tracking-tight" data-testid="hero-title">
          WHO I AM
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p data-testid="hero-description-1">
            Full-stack software engineer with a background in healthcare technology, focused on building accessible, data-rich applications for patients and researchers. Proficient in React, Python, and REST APIs, with experience turning complex datasets into intuitive interfaces.
          </p>
          
          <p data-testid="hero-description-2">
            Skilled in delivering automation, annotation, and data transformation pipelines in regulated environments. Passionate about applying AI to amplify patient voices and improve the user experience at every level.
          </p>
          
          <p className="text-sm text-muted-foreground pt-4" data-testid="hero-description-3">
            Bits and pieces from my engineering process, project experiments and professional work — all raw and unfiltered. Watch this space as I continue building ↓
          </p>
        </div>
      </div>
    </section>
  );
}
