import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import HeroNetwork from "@/components/visuals/HeroNetwork";
import Counter from "@/components/ui/counter";
import {
  ArrowRight,
  ArrowDown,
  Plane,
  Landmark,
  Phone,
  Store,
  Factory,
  Rocket,
  ShoppingCart,
  CreditCard,
  HeartPulse,
  Gamepad2,
  Code2,
  Smartphone,
  LayoutDashboard,
  Palette,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Database,
  Hexagon,
  Triangle,
  Circle,
  Command,
  Box,
  Layers,
  CheckCircle2,
  Laptop,
  Cpu,
  Globe,
  Zap,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[30px] md:pt-[50px] lg:pt-[70px] pb-[40px] md:pb-[80px]">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-background -z-20"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-10 -z-10"></div>

        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-center relative z-10">
          <SlideUp delay={0.1} className="flex flex-col items-center lg:items-start text-center lg:text-left">

            <h1 className="text-[36px] md:text-[clamp(40px,5vw,68px)] leading-[1.1] m-0 mb-[30px] tracking-[-0.03em] font-extrabold text-foreground max-w-[800px] lg:max-w-none">
              Design & Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Powerful</span> Digital Products
            </h1>
            <p className="text-muted-foreground text-[16px] md:text-[18px] max-w-[540px] m-0 mb-[40px] leading-relaxed">
              We create scalable websites, mobile apps, and custom software and custom software that drive actual business value.


            </p>

            <div className="hidden md:flex flex-wrap gap-[14px] mb-[32px] !hidden md:!flex">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 py-[14px] px-[28px] rounded-full font-bold transition-all duration-300 text-white shadow-[0_8px_30px_rgb(37,99,235,0.3)] bg-gradient-to-r from-secondary to-accent hover:shadow-[0_8px_30px_rgb(37,99,235,0.5)] hover:-translate-y-1">
                Get Free Consultation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center gap-2 py-[14px] px-[28px] rounded-full font-bold transition-all duration-300 border-2 border-border bg-background text-foreground hover:bg-accent/5 hover:border-secondary/50">
                View Projects
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-[16px] md:gap-[32px] pt-6 border-t border-border w-full lg:w-auto">
              <div className="flex flex-col items-center lg:items-start">
                <strong className="text-[24px] md:text-[32px] font-bold text-foreground leading-none mb-1">
                  <Counter value={100} />+
                </strong>
                <span className="text-muted-foreground text-[11px] md:text-sm font-medium whitespace-nowrap">Projects Done</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col items-center lg:items-start">
                <strong className="text-[24px] md:text-[32px] font-bold text-foreground leading-none mb-1">
                  <Counter value={25} />+
                </strong>
                <span className="text-muted-foreground text-[11px] md:text-sm font-medium whitespace-nowrap">Industries</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col items-center lg:items-start">
                <strong className="text-[24px] md:text-[32px] font-bold text-foreground leading-none mb-1">
                  24/7
                </strong>
                <span className="text-muted-foreground text-[11px] md:text-sm font-medium whitespace-nowrap">Support</span>
              </div>
            </div>
          </SlideUp>

          <FadeIn delay={0.3} className="relative h-full min-h-[400px] lg:min-h-[600px] w-full flex items-center justify-center">
            <HeroNetwork />
          </FadeIn>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <section className="py-[30px] md:py-[50px] bg-background border-y border-border overflow-hidden">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto mb-6 text-center">
          <p className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">Trusted companies</p>
        </div>
        
        <div className="relative flex overflow-x-hidden group py-4">
          <div className="animate-marquee flex flex-shrink-0 whitespace-nowrap items-center min-w-full justify-around">
            {[
              { icon: <Hexagon className="w-6 h-6 mr-2 text-secondary" />, name: "HexaCorp" },
              { icon: <Triangle className="w-6 h-6 mr-2 text-accent" />, name: "VertexTech" },
              { icon: <Circle className="w-6 h-6 mr-2 text-blue-500" />, name: "SphereGlobal" },
              { icon: <Command className="w-6 h-6 mr-2 text-purple-500" />, name: "CmdSystems" },
              { icon: <Box className="w-6 h-6 mr-2 text-emerald-500" />, name: "BoxedLogistics" },
              { icon: <Layers className="w-6 h-6 mr-2 text-amber-500" />, name: "LayerDigital" },
            ].map((brand, i) => (
              <span key={`brand1-${i}`} className="px-8 md:px-12 flex items-center text-[18px] md:text-[22px] font-bold text-foreground/80 transition-colors hover:text-foreground grayscale hover:grayscale-0">
                {brand.icon} {brand.name}
              </span>
            ))}
          </div>

          <div className="animate-marquee flex flex-shrink-0 whitespace-nowrap items-center min-w-full justify-around" aria-hidden="true">
            {[
              { icon: <Hexagon className="w-6 h-6 mr-2 text-secondary" />, name: "HexaCorp" },
              { icon: <Triangle className="w-6 h-6 mr-2 text-accent" />, name: "VertexTech" },
              { icon: <Circle className="w-6 h-6 mr-2 text-blue-500" />, name: "SphereGlobal" },
              { icon: <Command className="w-6 h-6 mr-2 text-purple-500" />, name: "CmdSystems" },
              { icon: <Box className="w-6 h-6 mr-2 text-emerald-500" />, name: "BoxedLogistics" },
              { icon: <Layers className="w-6 h-6 mr-2 text-amber-500" />, name: "LayerDigital" },
            ].map((brand, i) => (
              <span key={`brand2-${i}`} className="px-8 md:px-12 flex items-center text-[18px] md:text-[22px] font-bold text-foreground/80 transition-colors hover:text-foreground grayscale hover:grayscale-0">
                {brand.icon} {brand.name}
              </span>
            ))}
          </div>

          {/* Fade effects on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="py-[80px] md:py-[130px] bg-background relative overflow-hidden">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[45%] z-10 flex-shrink-0 text-center lg:text-left">
            <h4 className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 text-[12px] md:text-[14px]">Featured Insights</h4>
            <h2 className="text-[34px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-800 leading-[1.1] mb-6 tracking-tight">
              Stories of our transformations across <span className="text-secondary">Services</span> and <span className="text-secondary">Industries</span>
            </h2>
            <p className="text-[20px] md:text-[24px] text-slate-600 mb-10 font-medium">
              From Concept to Completion
            </p>
            <Link href="/projects" className="inline-flex items-center justify-center py-[16px] px-[36px] rounded-full font-bold text-[16px] transition-transform shadow-lg bg-secondary text-white hover:-translate-y-1 hover:shadow-xl hover:bg-secondary/90">
              Explore More
            </Link>
          </div>

          {/* Right Scrolling Columns */}
          <div className="w-full lg:w-[55%] h-[600px] md:h-[750px] relative overflow-hidden rounded-[32px] flex gap-4 md:gap-6 justify-center custom-mask-vertical">
            
            {/* Col 1 */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 md:gap-6 animate-marquee-vertical">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-6">
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden group shadow-lg">
                     <Image src="/images/globe_network.png" alt="Real Estate CRM" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                     <div className="absolute bottom-0 left-0 p-6 z-10">
                       <span className="text-white font-bold text-[18px] mb-2 block uppercase tracking-tighter text-secondary">Client Success</span>
                       <p className="text-white/90 text-[14px] leading-snug font-medium">Real Estate CRM: Automated lead tracking for 50+ regional agents</p>
                     </div>
                  </div>
                  <div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-lg">
                     <Image 
                      src="/images/cloud_nodes.png" 
                      alt="SaaS Scaling Blog" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    /> <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                     <div className="absolute bottom-0 left-0 p-6 z-10">
                       <span className="text-white font-bold text-[18px] mb-2 block uppercase tracking-tighter text-accent">Tech Insights</span>
                       <p className="text-white/90 text-[14px] leading-snug font-medium">Scaling SaaS: Why microservices are the key to growth in 2026</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Col 2 (Reverse) */}
            <div className="hidden md:flex w-1/2 lg:w-1/3 flex-col gap-4 md:gap-6 animate-marquee-vertical-reverse" style={{ marginTop: "-200px" }}>
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-6">
                  <div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-lg">
                     <Image 
                      src="/images/financial_chart.png" 
                      alt="ERP Strategy Blog" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    /> <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                     <div className="absolute bottom-0 left-0 p-6 z-10">
                       <span className="text-white font-bold text-[18px] mb-2 block uppercase tracking-tighter text-secondary">Expert Advice</span>
                       <p className="text-white/90 text-[14px] leading-snug font-medium">Dynamics 365 vs SAP: Choosing the right ERP for your enterprise</p>
                     </div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden group shadow-lg">
                     <Image 
                      src="/images/globe_network.png" 
                      alt="Logistics AI Case Study" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    /> <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                     <div className="absolute bottom-0 left-0 p-6 z-10">
                       <span className="text-white font-bold text-[18px] mb-2 block uppercase tracking-tighter text-accent">Automation</span>
                       <p className="text-white/90 text-[14px] leading-snug font-medium">Logistics Hub: AI-powered route optimization for 1k+ fleets</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Col 3 */}
            <div className="hidden lg:flex w-1/3 flex-col gap-4 md:gap-6 animate-marquee-vertical">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-6">
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden group shadow-lg">
                     <Image 
                      src="/images/cloud_nodes.png" 
                      alt="Headless E-commerce Case Study" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    /> <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                     <div className="absolute bottom-0 left-0 p-6 z-10">
                       <span className="text-white font-bold text-[18px] mb-2 block uppercase tracking-tighter text-secondary">Scale-up</span>
                       <p className="text-white/90 text-[14px] leading-snug font-medium">E-commerce Giant: $2M+ monthly sales via headless Shopify solution</p>
                     </div>
                  </div>
                  <div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-lg">
                     <Image 
                      src="/images/financial_chart.png" 
                      alt="HealthTech Portal Case Study" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    /> <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                     <div className="absolute bottom-0 left-0 p-6 z-10">
                       <span className="text-white font-bold text-[18px] mb-2 block uppercase tracking-tighter text-accent">HealthTech</span>
                       <p className="text-white/90 text-[14px] leading-snug font-medium">HealthTech: HIPAA-compliant patient portal for 10+ clinics</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Transform Your Business Section */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-background to-secondary/5 relative">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1300px] mx-auto z-10 relative">
          <SlideUp className="text-center md:text-left mb-[40px] md:mb-[60px]">
            <h4 className="text-secondary font-semibold tracking-widest uppercase mb-4 text-[13px] md:text-[15px]">Our Services</h4>
            <h2 className="text-[36px] md:text-[clamp(40px,5vw,56px)] m-0 mb-4 tracking-tight font-extrabold text-foreground leading-[1.1]">Transform Your Business</h2>
          </SlideUp>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[60px]">
            {[
              { title: 'Generative AI', image: '/images/service_gen_ai.png' },
              { title: 'Dynamics 365 ERP', image: '/images/service_erp.png' },
              { title: 'Mobile App Development', image: '/images/service_mobile.png' },
              { title: 'Staff Augmentation', image: '/images/service_staff.png' },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="group relative rounded-[24px] overflow-hidden aspect-square flex items-center justify-center cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />  <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20"></div>
                  <h3 className="relative z-10 text-white font-bold text-[22px] md:text-[24px] lg:text-[26px] text-center px-4 leading-snug drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <SlideUp delay={0.3} className="text-center">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 py-[14px] px-[36px] rounded-full text-[16px] transition-transform shadow-sm border border-secondary text-foreground hover:-translate-y-1 hover:shadow-md bg-transparent">
              View More Services <ArrowDown className="w-5 h-5 ml-1" />
            </Link>
          </SlideUp>
        </div>
      </section>

      {/* Discover our Impact Across Industries */}
      <section className="py-[80px] md:py-[120px] bg-background relative border-t border-border">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1000px] mx-auto z-10 relative">
          <SlideUp className="text-center mb-[60px] md:mb-[80px]">
            <h2 className="text-[32px] md:text-[clamp(36px,5vw,48px)] m-0 mb-4 tracking-tight font-extrabold text-foreground">
              Industries We Provide Services To
            </h2>
          </SlideUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] lg:gap-x-[100px]">
            {[
              { icon: <Plane className="w-7 h-7 text-secondary" />, title: 'Travel & Hospitality' },
              { icon: <Landmark className="w-7 h-7 text-secondary" />, title: 'Public Sector' },
              { icon: <Phone className="w-7 h-7 text-secondary" />, title: 'Telecommunication' },
              { icon: <Store className="w-7 h-7 text-secondary" />, title: 'Retail & CPG' },
              { icon: <Factory className="w-7 h-7 text-secondary" />, title: 'Oil, Gas, and Energy' },
              { icon: <Rocket className="w-7 h-7 text-secondary" />, title: 'Startups' },
              { icon: <ShoppingCart className="w-7 h-7 text-secondary" />, title: 'E-commerce' },
              { icon: <CreditCard className="w-7 h-7 text-secondary" />, title: 'Banking & Fintech' },
              { icon: <HeartPulse className="w-7 h-7 text-secondary" />, title: 'Healthcare & Pharmaceuticals' },
              { icon: <Gamepad2 className="w-7 h-7 text-secondary" />, title: 'Gaming' },
            ].map((industry, i) => (
              <StaggerItem key={i} className="flex items-center gap-5 py-[24px] border-b border-border/80 group cursor-default transition-colors hover:border-secondary/50">
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h4 className="text-[18px] md:text-[20px] font-bold text-slate-800 m-0 transition-colors group-hover:text-secondary">
                  {industry.title}
                </h4>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-[80px] md:py-[120px]">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <SlideUp className="text-center mb-[50px] md:mb-[70px]">
            <h2 className="text-[32px] md:text-[clamp(32px,4vw,48px)] m-0 mb-4 tracking-tight font-extrabold">Technologies We Master</h2>
            <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0">We leverage the latest and most reliable technology stacks to guarantee scalable, fast, and secure products.</p>
          </SlideUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { icon: <Code2 className="w-6 h-6 text-blue-500" />, title: 'Frontend', desc: 'React, Next.js, Tailwind CSS, TypeScript' },
              { icon: <Server className="w-6 h-6 text-emerald-500" />, title: 'Backend', desc: 'Node.js, Express, PHP, Laravel, Python' },
              { icon: <Smartphone className="w-6 h-6 text-purple-500" />, title: 'Mobile', desc: 'React Native, Flutter, Swift, Kotlin' },
              { icon: <Database className="w-6 h-6 text-amber-500" />, title: 'Database', desc: 'PostgreSQL, MySQL, MongoDB, Firebase' },
            ].map((tech, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-border rounded-[20px] p-[24px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-border/80 flex items-start gap-4 h-full">
                  <div className="mt-1 bg-background border border-border rounded-xl p-3 shadow-sm shrink-0 transition-transform group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="m-0 mb-2 font-bold text-[18px] text-card-foreground">{tech.title}</h4>
                    <p className="m-0 text-muted-foreground text-[14px] leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-[80px] md:py-[120px] bg-accent/5">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <SlideUp className="text-center mb-[50px] md:mb-[70px]">
            <h2 className="text-[32px] md:text-[clamp(32px,4vw,48px)] m-0 mb-4 tracking-tight font-extrabold">Our Development Process</h2>
            <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0">We follow a refined, agile workflow ensuring that every project transitions flawlessly from concept to scalable launch.</p>
          </SlideUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { num: "01", title: "Discovery & Strategy", desc: "Understanding your business goals, target audience, and project scope in detail." },
              { num: "02", title: "UX/UI Design", desc: "Crafting wireframes and high-fidelity prototypes for a stunning user experience." },
              { num: "03", title: "Development", desc: "Building your solution with modern, scalable, and responsive technologies." },
              { num: "04", title: "Testing & Launch", desc: "Rigorous quality assurance followed by a smooth deployment and support phase." }
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="relative bg-card border border-border rounded-[24px] p-[32px] shadow-sm hover:shadow-xl transition-all duration-300 group h-full overflow-hidden z-10">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-secondary to-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-20"></div>
                  <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-muted/5 leading-none transition-transform duration-500 group-hover:-translate-y-4 group-hover:-translate-x-4 -z-10 select-none">
                    {step.num}
                  </div>
                  <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center font-extrabold text-[24px] mb-[24px] shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="m-0 mb-3 font-bold text-[20px] text-card-foreground">{step.title}</h3>
                  <p className="m-0 text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[80px] md:py-[120px] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto z-10">
          <SlideUp className="text-center mb-[50px] md:mb-[70px]">
            <h2 className="text-[32px] md:text-[clamp(32px,4vw,48px)] m-0 mb-4 tracking-tight font-extrabold">What Our Clients Say</h2>
            <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0">Trusted by startups and enterprises to deliver outstanding digital products.</p>
          </SlideUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[
              { quote: "“WebsTalentz built our platform exactly the way we envisioned. Superior design, smooth communication, and outstanding post-launch support.”", author: "Ahmed Raza", role: "Product Owner" },
              { quote: "“Their engineering team delivered a modern mobile app and responsive admin dashboard that completely transformed how we manage operations.”", author: "Sarah Khan", role: "Startup Founder" },
              { quote: "“A premier software house for custom development. Clean architecture, stunning UI design, and timely milestone deliveries.”", author: "Bilal Hussain", role: "Enterprise Director" },
            ].map((test, i) => (
              <StaggerItem key={i}>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-[24px] p-[32px] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between h-full relative group">
                  <div className="absolute top-8 right-8 text-6xl text-muted/20 leading-none font-serif group-hover:text-secondary/10 transition-colors duration-300">&quot;</div>
                  <p className="text-[17px] text-card-foreground/90 mb-8 font-serif italic leading-relaxed relative z-10">{test.quote}</p>
                  <div className="flex items-center gap-4 border-t border-border pt-6 m-0">
                    <div className="w-[46px] h-[46px] rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-lg">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <strong className="block text-foreground text-[16px]">{test.author}</strong>
                      <span className="text-muted-foreground text-[14px]">{test.role}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-[80px] md:py-[120px] bg-accent/5">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1000px] mx-auto">
          <SlideUp className="text-center mb-[40px] md:mb-[60px]">
            <h2 className="text-[32px] md:text-[clamp(32px,4vw,48px)] m-0 mb-4 tracking-tight font-extrabold text-foreground">Frequently Asked Questions</h2>
            <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0">Everything you need to know about our services, pricing, and process.</p>
          </SlideUp>
          
          <StaggerContainer className="grid gap-[16px]">
            {[
              {
                q: "What services does WebsTalentz provide?",
                a: "WebsTalentz provides custom website development, enterprise ecommerce solutions, robust mobile app development, custom web applications, UI/UX design, and ongoing maintenance."
              },
              {
                q: "Do you build both websites and mobile apps?",
                a: "Yes. We develop corporate business websites, online stores, custom digital portals, natively performing Android & iOS apps, and cross-platform mobile applications based on React Native and Flutter."
              },
              {
                q: "Can you redesign an existing website or platform?",
                a: "Absolutely. We can completely audit and redesign outdated digital products to provide them with a modern aesthetic, better user experience (UX), and vastly improved performance."
              },
              {
                q: "Do you offer technical support after project completion?",
                a: "Yes. We offer reliable maintenance, server updates, bug fixing, and continuous technical support packages to ensure your digital product operates flawlessly post-launch."
              }
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <details className="group border border-border/60 rounded-[20px] bg-card p-[24px] shadow-sm hover:shadow-md hover:border-border transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-[18px] md:text-[20px] text-card-foreground select-none outline-none">
                    {faq.q}
                    <span className="transition-transform duration-300 group-open:rotate-180 text-secondary w-6 h-6 flex items-center justify-center rounded-full bg-secondary/10">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <p className="mt-[16px] mb-0 text-muted-foreground text-[15px] md:text-[16px] leading-relaxed transition-all duration-300 opacity-0 group-open:opacity-100 group-open:animate-in group-open:fade-in-0 group-open:zoom-in-95 group-open:slide-in-from-top-2">
                    {faq.a}
                  </p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[60px] md:py-[100px] mb-10">
        <SlideUp className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(37,99,235,0.2)] dark:shadow-[0_20px_60px_rgba(37,99,235,0.05)] text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary -z-10"></div>
          
          {/* Decorative rings for CTA */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-50">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border border-white/10 rounded-full"></div>
            <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] border border-white/10 rounded-full"></div>
            <div className="absolute top-[30%] -left-[10%] w-[300px] h-[300px] bg-secondary/40 blur-[100px] rounded-full"></div>
          </div>

          <div className="p-[50px] md:p-[80px] lg:p-[100px] text-center max-w-[800px] mx-auto">
            <h2 className="m-0 mb-6 text-[32px] md:text-[46px] font-extrabold text-white leading-tight">Ready to Transform Your Digital Presence?</h2>
            <p className="m-0 mb-10 text-primary-foreground/80 text-[18px] md:text-[20px]">Partner with WebsTalentz today to build tailored scalable solutions that power up your business growth.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center py-[16px] px-[36px] rounded-full font-bold text-[16px] transition-transform duration-300 shadow-xl bg-white text-primary hover:-translate-y-1 hover:shadow-2xl">
                Start Your Project
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center py-[16px] px-[36px] rounded-full font-bold text-[16px] transition-all duration-300 border border-white/30 text-white hover:bg-white/10">
                View Our Work
              </Link>
            </div>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
