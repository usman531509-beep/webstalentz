import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, CheckCircle2, Award, Users, Globe, Rocket, Zap, Shield, Heart } from "lucide-react";

export const metadata = { 
  title: "About Us",
  description: "Learn about WebsTalentz, a premier software house dedicated to building scalable web and mobile applications for modern businesses.",
};

export default function AboutPage() {
  const values = [
    { icon: <Zap className="w-6 h-6 transition-colors" />, title: "Innovation", desc: "We constantly explore emerging technologies to provide cutting-edge solutions." },
    { icon: <Shield className="w-6 h-6 transition-colors" />, title: "Reliability", desc: "Every line of code is tested for maximum security, performance, and stability." },
    { icon: <Users className="w-6 h-6 transition-colors" />, title: "Client-Centric", desc: "Your business goals are the foundation of every development decision we make." },
    { icon: <Heart className="w-6 h-6 transition-colors" />, title: "Excellence", desc: "We don't settle for 'good enough'—we strive for digital perfection." },
  ];

  const stats = [
    { label: "Successful Projects", value: "150+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Dedicated Experts", value: "20+" },
    { label: "Years Experience", value: "5+" },
  ];

  const journey = [
    { year: "2019", title: "Founding", desc: "WebsTalentz was born from a passion for delivering better digital experiences." },
    { year: "2021", title: "Expansion", desc: "We doubled our team and launched our first enterprise-scale mobile app." },
    { year: "2023", title: "Global Reach", desc: "Started serving clients internationally across three continents." },
    { year: "2026", title: "Today", desc: "Leading the march in AI-driven development and modern web architecture." },
  ];

  const team = [
    { name: "Marcus Thorne", role: "Founder & CEO", image: "/images/team_1.png" },
    { name: "Elena Volkov", role: "CTO & Solutions Architect", image: "/images/team_2.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[40px] md:pt-[60px] pb-[80px] md:pb-[140px] bg-background">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] -z-10"></div>
        
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-10">
          <SlideUp className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-[10px] bg-secondary/10 text-secondary border border-secondary/20 py-[8px] px-[16px] rounded-full font-semibold text-[13px] md:text-[14px] mb-[20px] w-auto">
              🏆 Our Story
            </span>
            <h1 className="text-[40px] md:text-[clamp(40px,5vw,68px)] leading-[1.1] m-0 mb-[24px] tracking-tight font-extrabold text-foreground">
              Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Digital Business</span>
            </h1>
            <p className="text-muted-foreground text-[16px] md:text-[18px] max-w-[540px] m-0 mb-[32px] leading-relaxed">
              At WebsTalentz, we bridge the gap between complex business challenges and elegant technical solutions. We are a software house of architects, developers, and visionaries.
            </p>
            <div className="flex flex-wrap gap-[16px] justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <CheckCircle2 className="w-5 h-5 text-secondary" /> Premium Design
              </div>
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <CheckCircle2 className="w-5 h-5 text-secondary" /> Scalable Code
              </div>
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <CheckCircle2 className="w-5 h-5 text-secondary" /> Global Support
              </div>
            </div>
          </SlideUp>

          <FadeIn delay={0.2} className="relative">
            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-border/50 group">
              <Image 
                src="/images/about_hero.png" 
                alt="WebsTalentz Philosophy" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary mix-blend-color opacity-60 transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-[24px] shadow-2xl border border-border hidden md:block max-w-[280px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Top Rated</div>
                  <div className="text-xs text-muted-foreground">Digital Agency 2026</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground m-0">Trusted by over 100+ global brands for excellence.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[60px] border-y border-border bg-secondary/5 overflow-hidden">
        <StaggerContainer className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StaggerItem key={i} className="text-center">
              <div className="text-[36px] md:text-[48px] font-black text-foreground mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-[14px] md:text-[16px] font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Core Values */}
      <section className="py-[80px] md:py-[120px] relative">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <SlideUp className="text-center mb-[60px] md:mb-[80px]">
            <h2 className="text-[32px] md:text-[clamp(32px,4vw,48px)] m-0 mb-4 tracking-tight font-extrabold text-foreground">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Value Pillars</span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground text-[16px] md:text-[18px]">These principles guide our work and ensure we deliver consistent value to every client we partner with.</p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-border rounded-[24px] p-[32px] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[80px] -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="m-0 mb-3 font-bold text-[20px] text-foreground">{v.title}</h3>
                  <p className="m-0 text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-[80px] md:py-[120px] bg-accent/5">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <SlideUp>
            <h2 className="text-[32px] md:text-[clamp(32px,4vw,48px)] m-0 mb-8 tracking-tight font-extrabold text-foreground">
              Tracing Our Evolution
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
              {journey.map((item, i) => (
                <div key={i} className="pl-12 relative group">
                  <div className="absolute left-0 top-[6px] w-[32px] h-[32px] bg-background border-2 border-secondary rounded-full flex items-center justify-center z-10 group-hover:bg-secondary transition-colors duration-300">
                    <div className="w-2 h-2 bg-secondary group-hover:bg-white rounded-full"></div>
                  </div>
                  <div className="text-secondary font-black text-[22px] mb-1">{item.year}</div>
                  <h4 className="text-[19px] font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground m-0 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </SlideUp>

          <FadeIn delay={0.3} className="hidden lg:flex relative text-center items-center justify-center">
            <div className="relative w-full max-w-[540px] aspect-[4/5] mx-auto rounded-[32px] overflow-hidden shadow-2xl group border border-border/50">
              <Image 
                src="/images/hero_tech_illustration.png"
                alt="Global Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-80"></div>
              
              <div className="absolute inset-0 p-8 md:p-12 z-10 flex flex-col items-center justify-end text-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)] animate-pulse">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-[36px] font-extrabold text-white mb-3 tracking-tight">Globally Ready</h3>
                <p className="text-white/80 text-[18px] max-w-[300px] leading-relaxed mx-auto">Operating without borders to deliver engineering excellence worldwide.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[60px] md:py-[100px] mb-10">
        <SlideUp className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto relative overflow-hidden rounded-[32px] shadow-2xl text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary -z-10"></div>
          <div className="p-[50px] md:p-[80px] lg:p-[100px] text-center max-w-[800px] mx-auto">
            <h2 className="m-0 mb-6 text-[32px] md:text-[46px] font-extrabold text-white leading-tight">Join Our Portfolio of Success</h2>
            <p className="m-0 mb-10 text-primary-foreground/80 text-[18px] md:text-[20px]">Every great project starts with a conversation. We can&apos;t wait to hear about yours.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center py-[16px] px-[36px] rounded-full font-bold text-[16px] transition-transform duration-300 shadow-xl bg-white text-primary hover:-translate-y-1 hover:shadow-2xl">
                Work With Us
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center py-[16px] px-[36px] rounded-full font-bold text-[16px] transition-all duration-300 border border-white/30 text-white hover:bg-white/10">
                View Projects
              </Link>
            </div>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
