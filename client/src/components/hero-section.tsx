export default function HeroSection() {
  return (
    <section id="about" className="py-8 sm:py-10 flex items-center justify-center px-4 sm:px-6 pt-20 section-transition">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-none mb-6 tracking-tight" data-testid="hero-title">
          ABOUT ME
        </h1>
        
        <div className="space-y-2 text-sm sm:text-base leading-normal text-muted-foreground">
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
