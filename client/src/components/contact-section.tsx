export default function ContactSection() {
  const socialLinks = [
    { name: "GITHUB", url: "https://github.com/pradeeptireddy" },
    { name: "LINKEDIN", url: "https://linkedin.com/in/pradeeptireddy" },
    { name: "TWITTER", url: "https://twitter.com/pradeeptireddy" },
    { name: "PORTFOLIO", url: "#" }
  ];

  return (
    <section id="contact" className="py-16 bg-black text-white flex items-center justify-center px-6 section-transition">
      <div className="text-center">
        <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-normal leading-none mb-4 tracking-widest uppercase" data-testid="contact-name">
          PRADEEPTI REDDY
        </h1>
        
        <div className="space-y-1 mb-4">
          <p className="text-xs font-normal text-gray-300" data-testid="contact-title">
            Full Stack Engineer
          </p>
          <p className="text-xs font-normal text-gray-400" data-testid="contact-location">
            from Boston, currently based in Boston
          </p>
        </div>
        
        <div className="space-y-2 mb-6">
          <p className="text-xs font-normal text-gray-400" data-testid="contact-prompt">
            Get in touch at
          </p>
          
          <div className="space-y-0.5">
            <p className="text-xs font-normal">
              <a 
                href="mailto:pradeeptireddy@gmail.com" 
                className="hover:text-gray-300 transition-colors"
                data-testid="contact-email"
              >
                pradeeptireddy@gmail.com
              </a>
            </p>
            <p className="text-xs font-normal">
              <a 
                href="tel:+16178990925" 
                className="hover:text-gray-300 transition-colors"
                data-testid="contact-phone"
              >
                (617) 899-0925
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
