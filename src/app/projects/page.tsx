import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Portfolio & Case Studies",
  description: "View our recent success stories. See how WebsTalentz transforms ideas into powerful digital products for startups and enterprises.",
};

export default function ProjectsPage() {
  const projects = [
    { 
      title: "Fashion Ecommerce Store", 
      desc: "Complete online clothing store with cart, checkout, inventory and customer account system.", 
      tags: ["Ecommerce", "Next.js", "Payment Gateway"],
      image: "/images/project_web_app.png"
    },
    { 
      title: "Fitness & Health App", 
      desc: "Modern fitness tracking mobile application with vibrant charts, dark mode UI, and user dashboard.", 
      tags: ["Mobile App", "React Native", "UI/UX"],
      image: "/images/project_mobile_app.png"
    },
    { 
      title: "B2B Analytics Dashboard", 
      desc: "Sleek data visualization dashboard with complex charts, glowing accents, and clean navigation.", 
      tags: ["Dashboard", "React", "Analytics"],
      image: "/images/project_dashboard.png"
    },
    { 
      title: "School Management System", 
      desc: "Student records, attendance, fee management, admin panel and reporting tools for institutions.", 
      tags: ["Web App", "Dashboard", "Education"],
      image: "/images/project_school.png"
    },
    { 
      title: "Auto Workshop Website", 
      desc: "Garage business website with booking form, services pages, customer inquiries and quote requests.", 
      tags: ["Service Website", "Bookings", "SEO Ready"],
      image: "/images/project_auto.png"
    },
    { 
      title: "Business CRM System", 
      desc: "Custom system for managing leads, clients, workflows, employee tasks and business reports.", 
      tags: ["CRM", "Admin Panel", "Automation"],
      image: "/images/project_crm.png"
    }
  ];

  return (
    <section className="pt-[40px] md:pt-[60px] pb-[80px] md:pb-[120px] bg-background min-h-[calc(100vh-200px)] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-10 -z-10"></div>

      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto z-10 relative">
        <SlideUp className="text-center mb-[60px] md:mb-[80px]">
          <span className="inline-flex items-center gap-[10px] bg-secondary/10 text-secondary border border-secondary/20 py-[8px] px-[16px] rounded-full font-semibold text-[13px] md:text-[14px] mb-[20px] w-auto">
            🚀 Our Proudest Work
          </span>
          <h1 className="text-[36px] md:text-[clamp(36px,5vw,56px)] m-0 mb-4 tracking-tight font-extrabold text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Projects</span>
          </h1>
          <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0 leading-relaxed">
            Explore our portfolio of cutting-edge websites, mobile applications, and custom software solutions designed to solve real business challenges.
          </p>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, i) => (
            <StaggerItem key={i}>
              <div className="group bg-card border border-border rounded-[24px] shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-secondary/30 overflow-hidden flex flex-col h-full active:scale-[0.98]">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/10 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 bg-white text-secondary rounded-full flex items-center justify-center transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-[28px] flex flex-col flex-1 relative z-20 bg-card">
                  <h3 className="m-0 text-[20px] font-bold text-card-foreground mb-3 transition-colors group-hover:text-secondary">{project.title}</h3>
                  <p className="m-0 text-muted-foreground leading-relaxed text-[15px] mb-6 flex-1">{project.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-block py-[6px] px-[12px] rounded-md bg-secondary/10 text-secondary text-[12px] font-bold tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-5 border-t border-border/50">
                    <Link href="/contact" className="inline-flex items-center font-bold transition-all text-sm text-foreground hover:text-secondary group/link">
                      Discuss Similar Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="mt-[80px] text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-secondary-foreground to-primary rounded-[24px] p-[32px] md:p-[40px] shadow-2xl w-full max-w-[900px] mx-auto text-center md:text-left">
            <div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-white m-0 mb-2">Have a project in mind?</h3>
              <p className="text-secondary-foreground/80 m-0 text-[16px]">Let&apos;s build something extraordinary together.</p>
            </div>
            <Link href="/contact" className="w-full md:w-auto inline-flex items-center justify-center py-[14px] px-[32px] rounded-full font-bold text-[15px] transition-transform shadow-xl bg-white text-primary hover:-translate-y-1 hover:shadow-2xl flex-shrink-0">
              Get an Estimate
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
