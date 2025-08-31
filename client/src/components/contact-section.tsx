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
        
        <div className="max-w-md mx-auto mb-8">
          <form 
            action="https://formspree.io/f/mdklzlzn" 
            method="POST" 
            className="space-y-4"
            data-testid="contact-form"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                data-testid="contact-name-input"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                data-testid="contact-subject-input"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                data-testid="contact-message-input"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors rounded-md"
              data-testid="contact-submit-button"
            >
              Send Message
            </button>
          </form>
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
