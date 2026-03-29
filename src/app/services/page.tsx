import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, Code2, Smartphone, LayoutDashboard, Palette, MonitorSmartphone, ShieldCheck } from "lucide-react";

export const metadata = { 
  title: "Our Services",
  description: "Explore our professional digital services, including custom software development, mobile apps, e-commerce, and generative AI solutions.",
};

export default function ServicesPage() {
  const services = [
    { icon: <MonitorSmartphone className="w-8 h-8 text-secondary" />, title: 'Website Development', desc: 'Professional company websites, portfolio websites, service business websites, and engaging web portals.' },
    { icon: <LayoutDashboard className="w-8 h-8 text-secondary" />, title: 'Ecommerce Solutions', desc: 'Powerful online stores with shopping carts, secure payments, and intuitive stock management.' },
    { icon: <Smartphone className="w-8 h-8 text-secondary" />, title: 'Mobile App Development', desc: 'High-performance Android, iOS, and cross-platform apps for booking, delivery, and enterprise operations.' },
    { icon: <Code2 className="w-8 h-8 text-secondary" />, title: 'Custom Web Applications', desc: 'Scalable CRMs, ERPs, dashboards, and automated workflow tools tailored to your needs.' },
    { icon: <Palette className="w-8 h-8 text-secondary" />, title: 'UI/UX Design', desc: 'User-focused wireframes, high-fidelity interfaces, and digital experiences that convert.' },
    { icon: <ShieldCheck className="w-8 h-8 text-secondary" />, title: 'Maintenance & Security', desc: 'Continuous performance optimization, updates, security audits, and dedicated technical support.' },
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
            ⚙️ Transformative Solutions
          </span>
          <h1 className="text-[36px] md:text-[clamp(36px,5vw,56px)] m-0 mb-4 tracking-tight font-extrabold text-foreground">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Services</span>
          </h1>
          <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0 leading-relaxed">
            We deliver complete digital solutions designed to help your business innovate, scale, and dominate the digital landscape.
          </p>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="group bg-card border border-border rounded-[24px] p-[32px] md:p-[40px] shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-secondary/30 relative overflow-hidden h-full flex flex-col active:scale-[0.98]">
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/5 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-125"></div>
                
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-secondary/10 mb-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="m-0 mb-4 font-bold text-[22px] md:text-[24px] text-card-foreground transition-colors group-hover:text-secondary">{service.title}</h3>
                <p className="m-0 text-muted-foreground text-[15px] md:text-[16px] leading-relaxed flex-1">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="mt-[80px] md:mt-[100px] text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-secondary-foreground to-primary rounded-[24px] p-[32px] md:p-[40px] shadow-2xl w-full max-w-[900px] mx-auto text-center md:text-left">
            <div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-white m-0 mb-2">Need a custom solution?</h3>
              <p className="text-secondary-foreground/80 m-0 text-[16px]">Get a tailored proposal that aligns perfectly with your goals.</p>
            </div>
            <Link href="/contact" className="w-full md:w-auto inline-flex items-center justify-center py-[14px] px-[32px] rounded-full font-bold text-[15px] transition-transform shadow-xl bg-white text-primary hover:-translate-y-1 hover:shadow-2xl flex-shrink-0 group/btn">
              Let&apos;s Talk <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
