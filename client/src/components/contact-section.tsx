export default function ContactSection() {
  const socialLinks = [
    { name: "GITHUB", url: "https://github.com/pradeeptireddy" },
    { name: "LINKEDIN", url: "https://linkedin.com/in/pradeeptireddy" },
    { name: "PORTFOLIO", url: "#" }
  ];

  return (
    <section id="contact" className="py-16 bg-black text-white flex items-center justify-center px-6 section-transition">
      <div className="text-center">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-none mb-6 tracking-tight" data-testid="contact-name">
          PRADEEPTI REDDY
        </h1>
        
        <div className="space-y-2 mb-6">
          <p className="text-sm text-gray-300" data-testid="contact-title">
            Full Stack Engineer
          </p>
          <p className="text-xs text-gray-400" data-testid="contact-location">
            from Boston, currently based in Boston
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-base text-gray-400" data-testid="contact-prompt">
            Get in touch at
          </p>
          
          <div>
            <p className="text-base">
              <a 
                href="mailto:pradeeptireddy@gmail.com" 
                className="hover:text-gray-300 transition-colors"
                data-testid="contact-email"
              >
                pradeeptireddy@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 text-sm font-medium tracking-wider uppercase">
          {socialLinks.map((link, index) => (
            <span key={index} className="flex items-center">
              {index > 0 && <span className="text-gray-600 mr-8">/</span>}
              <a 
                href={link.url}
                className="hover:text-gray-300 transition-colors"
                data-testid={`social-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
