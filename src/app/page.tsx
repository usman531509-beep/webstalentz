import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-[36px] md:py-[90px] pb-[26px] md:pb-[70px]" style={{
        background: `
          radial-gradient(circle at top right, rgba(6,182,212,0.16), transparent 30%),
          radial-gradient(circle at left center, rgba(37,99,235,0.14), transparent 26%),
          linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)
        `
      }}>
        <div className="absolute w-[280px] h-[280px] -top-20 -right-[60px] bg-[rgba(6,182,212,0.12)] rounded-full blur-[10px] z-0"></div>
        <div className="absolute w-[220px] h-[220px] -bottom-[70px] -left-[60px] bg-[rgba(37,99,235,0.12)] rounded-full blur-[10px] z-0"></div>

        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-[20px] lg:gap-[38px] items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-[10px] bg-[#2563eb14] text-secondary py-[9px] px-[15px] rounded-full font-bold text-[13px] md:text-[14px] mb-[14px] md:mb-[18px] w-full md:w-auto justify-center md:justify-start">
              🚀 Creative Software House in Pakistan
            </span>
            <h1 className="text-[34px] md:text-[clamp(34px,5vw,62px)] leading-[1.05] md:leading-[1.06] m-0 mb-[14px] md:mb-[18px] tracking-[-0.03em] text-center md:text-left font-bold">
              We Design & Build Powerful Websites, Mobile Apps & Digital Products
            </h1>
            <p className="text-muted text-[16px] md:text-[18px] max-w-[700px] m-0 mb-[20px] md:mb-[28px] text-center md:text-left">
              WebsTalentz helps startups, brands, shops, service businesses, and growing companies launch modern websites, ecommerce stores, mobile applications, dashboards, and custom software solutions that deliver real business value.
            </p>

            <div className="flex flex-wrap gap-[10px] md:gap-[12px] mb-[18px] md:mb-[22px] justify-center md:justify-start">
              <span className="py-[9px] md:py-[10px] px-[12px] md:px-[14px] rounded-full bg-white/85 border border-border text-[12px] md:text-[14px] font-bold text-primary shadow-custom">Responsive Websites</span>
              <span className="py-[9px] md:py-[10px] px-[12px] md:px-[14px] rounded-full bg-white/85 border border-border text-[12px] md:text-[14px] font-bold text-primary shadow-custom">Mobile Apps</span>
              <span className="py-[9px] md:py-[10px] px-[12px] md:px-[14px] rounded-full bg-white/85 border border-border text-[12px] md:text-[14px] font-bold text-primary shadow-custom">Custom Dashboards</span>
            </div>

            <div className="grid grid-cols-1 md:flex md:flex-wrap gap-[10px] md:gap-[14px] mb-[18px] md:mb-[28px]">
              <Link href="/contact" className="min-h-[52px] md:min-h-0 inline-flex items-center justify-center gap-2 py-[13px] px-[22px] rounded-full font-bold transition-transform duration-250 border-2 border-transparent text-center text-white shadow-soft bg-gradient-to-br from-secondary to-accent hover:-translate-y-0.5 w-full md:w-auto">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="min-h-[52px] md:min-h-0 inline-flex items-center justify-center gap-2 py-[13px] px-[22px] rounded-full font-bold transition-colors duration-250 border-2 border-secondary text-secondary bg-white text-center w-full md:w-auto">
                View Projects
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[14px]">
              <div className="bg-white border border-border rounded-[20px] p-[16px] md:p-[18px] shadow-custom text-left md:text-center flex md:block items-center justify-between">
                <div><strong className="block text-[26px] md:text-[28px] text-secondary mb-0 md:mb-1">100+</strong></div>
                <span className="text-muted">Projects Delivered</span>
              </div>
              <div className="bg-white border border-border rounded-[20px] p-[16px] md:p-[18px] shadow-custom text-left md:text-center flex md:block items-center justify-between">
                <div><strong className="block text-[26px] md:text-[28px] text-secondary mb-0 md:mb-1">25+</strong></div>
                <span className="text-muted">Industries Served</span>
              </div>
              <div className="bg-white border border-border rounded-[20px] p-[16px] md:p-[18px] shadow-custom text-left md:text-center flex md:block items-center justify-between">
                <div><strong className="block text-[26px] md:text-[28px] text-secondary mb-0 md:mb-1">24/7</strong></div>
                <span className="text-muted">Technical Support</span>
              </div>
            </div>
          </div>

          <div className="grid gap-[16px]">
            <div className="bg-white/92 border border-border p-[18px] md:p-[26px] rounded-[22px] md:rounded-[28px] shadow-soft backdrop-blur-md">
              <div className="grid gap-[14px]">
                <div className="bg-light border border-border rounded-[16px] md:rounded-[18px] p-[16px] md:p-[18px]">
                  <h4 className="m-0 mb-2.5 font-bold">What We Build</h4>
                  <p className="text-muted m-0">Business websites, ecommerce platforms, mobile applications, admin dashboards, booking systems, ERP/CRM solutions, landing pages and custom portals.</p>
                </div>
                <div className="bg-light border border-border rounded-[16px] md:rounded-[18px] p-[16px] md:p-[18px]">
                  <h4 className="m-0 mb-2.5 font-bold">Technology Strength</h4>
                  <div className="grid gap-2.5">
                    <div className="h-2.5 rounded-full bg-blue-100 overflow-hidden"><span className="block h-full bg-gradient-to-r from-secondary to-accent w-[92%] rounded-full"></span></div>
                    <div className="h-2.5 rounded-full bg-blue-100 overflow-hidden"><span className="block h-full bg-gradient-to-r from-secondary to-accent w-[84%] rounded-full"></span></div>
                    <div className="h-2.5 rounded-full bg-blue-100 overflow-hidden"><span className="block h-full bg-gradient-to-r from-secondary to-accent w-[88%] rounded-full"></span></div>
                  </div>
                </div>
                <div className="bg-light border border-border rounded-[16px] md:rounded-[18px] p-[16px] md:p-[18px]">
                  <h4 className="m-0 mb-2.5 font-bold">Client Focus</h4>
                  <p className="text-muted m-0">Responsive design, clean UI/UX, secure code, speed optimization, SEO-friendly structure, scalable architecture, and post-launch support.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[10px] md:gap-[14px]">
              <div className="rounded-[16px] md:rounded-[18px] p-[14px] md:p-[16px] text-white shadow-soft bg-gradient-to-br from-slate-900 to-slate-800">
                <strong className="block text-[19px] md:text-[22px] mb-1">UI/UX</strong>
                Clean modern design
              </div>
              <div className="rounded-[16px] md:rounded-[18px] p-[14px] md:p-[16px] text-white shadow-soft bg-gradient-to-br from-blue-600 to-cyan-500">
                <strong className="block text-[19px] md:text-[22px] mb-1">Apps</strong>
                Android & iOS ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-[62px] md:py-[84px]">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="text-center mb-[28px] md:mb-[46px]">
            <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Our Core Services</h2>
            <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">We create complete digital solutions for businesses that want to grow online, automate operations, and serve customers better.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[22px]">
            {[
              { icon: '🌐', title: 'Website Development', desc: 'Professional company websites, portfolio websites, service business websites, blogs, booking sites, and custom web portals.' },
              { icon: '🛒', title: 'Ecommerce Solutions', desc: 'Online stores with product pages, shopping carts, payment integrations, stock management, and order tracking systems.' },
              { icon: '📱', title: 'Mobile App Development', desc: 'Android, iOS, and cross-platform apps for booking, delivery, ecommerce, business operations, healthcare, and education.' },
              { icon: '⚙️', title: 'Custom Web Applications', desc: 'CRMs, ERPs, dashboards, booking engines, school portals, admin panels, HR systems, and workflow automation tools.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'User-focused wireframes, interfaces, app screens, dashboards, landing pages, and high-converting digital experiences.' },
              { icon: '🔒', title: 'Support & Maintenance', desc: 'Bug fixing, performance optimization, content updates, hosting guidance, security improvements, and long-term technical support.' },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3.5 bg-gradient-to-br from-secondary/10 to-accent/10">{service.icon}</div>
                <h3 className="m-0 mb-2.5 font-bold text-lg">{service.title}</h3>
                <p className="m-0 text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-[62px] md:py-[84px]">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="text-center mb-[28px] md:mb-[46px]">
            <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Technologies We Work With</h2>
            <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">WebsTalentz can present itself as a modern technical team capable of building projects with current and reliable technologies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[22px]">
            {[
              { title: 'Frontend', desc: 'HTML, CSS, JavaScript, Bootstrap, React, Next.js, Tailwind CSS' },
              { title: 'Backend', desc: 'PHP, Laravel, Node.js, APIs, custom admin panels' },
              { title: 'Mobile', desc: 'Android apps, iOS apps, Flutter, React Native' },
              { title: 'Database', desc: 'MySQL, Firebase, PostgreSQL and scalable data-driven systems' },
            ].map((tech, i) => (
              <div key={i} className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5">
                <h4 className="m-0 mb-2.5 font-bold text-lg">{tech.title}</h4>
                <p className="m-0 text-muted">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-[62px] md:py-[84px] bg-light">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="text-center mb-[28px] md:mb-[46px]">
            <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Our Development Process</h2>
            <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">We follow a clear workflow so every project moves professionally from idea to launch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[18px]">
            {[
              { num: "1", title: "Discovery", desc: "We understand the client’s business, goals, audience, features, and project scope." },
              { num: "2", title: "Planning & Design", desc: "We prepare structure, wireframes, layout concepts, and a user-friendly design direction." },
              { num: "3", title: "Development", desc: "We build the website or app with responsive design, functionality, and optimized performance." },
              { num: "4", title: "Testing & Launch", desc: "We test, refine, deploy, and support the product after launch for a smooth experience." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom">
                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center font-extrabold text-xl mb-[14px]">
                  {step.num}
                </div>
                <h3 className="m-0 mb-2.5 font-bold text-lg">{step.title}</h3>
                <p className="m-0 text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[62px] md:py-[84px] bg-gradient-to-b from-white to-[#f8fbff]">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="text-center mb-[28px] md:mb-[46px]">
            <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">What Clients Say</h2>
            <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">Trusted by businesses to deliver outstanding digital products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[22px]">
            {[
              { quote: "“WebsTalentz built our website exactly the way we wanted. Professional design, smooth communication, and great support.”", author: "Ahmed Raza", role: "Retail Business Owner" },
              { quote: "“Their team delivered a modern mobile app and admin dashboard that made our operations much easier to manage.”", author: "Sarah Khan", role: "Startup Founder" },
              { quote: "“Excellent software house for custom web development. Clean work, responsive design and timely delivery.”", author: "Bilal Hussain", role: "Service Company Director" },
            ].map((test, i) => (
              <div key={i} className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5 flex flex-col justify-between">
                <p className="text-[18px] text-slate-700 mb-4 font-serif italic">{test.quote}</p>
                <div>
                  <strong className="block text-primary">{test.author}</strong>
                  <span className="text-muted text-sm">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[62px] md:py-[84px]">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-blue-600 text-white rounded-[22px] md:rounded-[30px] p-[22px] md:p-[42px] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-[20px] flex-wrap shadow-soft text-center md:text-left">
            <div>
              <h2 className="m-0 mb-2 text-[clamp(28px,4vw,42px)] font-bold">Ready to Build Your Next Digital Project?</h2>
              <p className="m-0 text-blue-100 max-w-[700px]">Let WebsTalentz turn your website or mobile app idea into a polished, modern, and business-ready digital product.</p>
            </div>
            <Link href="/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-[13px] px-[22px] rounded-full font-bold transition-transform duration-250 border-2 border-transparent text-center bg-white text-secondary hover:-translate-y-0.5">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
