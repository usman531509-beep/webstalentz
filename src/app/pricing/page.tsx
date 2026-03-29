import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Pricing Plans",
  description: "Transparent and flexible pricing plans for your custom software, website, and mobile app development needs.",
};

export default function PricingPage() {
  const plans = [
    { 
      title: "Starter Website", 
      price: "PKR 60k", 
      desc: "Ideal for small businesses needing a clean and professional online presence.",
      features: ["Up to 5 pages", "Responsive Design", "Basic SEO Setup", "Contact Form", "SSL Integration"],
      popular: false
    },
    { 
      title: "Business Pro", 
      price: "PKR 120k", 
      desc: "Best for growing brands that need custom pages, advanced design, and more functionality.",
      features: ["Up to 15 pages", "Custom UI/UX", "Speed Optimization", "Lead Capture", "Google Analytics", "2-Month Support"],
      popular: true
    },
    { 
      title: "Custom Solution", 
      price: "Custom", 
      desc: "For ecommerce, mobile apps, dashboards, CRM, and complex software projects.",
      features: ["Advanced Logic", "Custom Backend", "Full Testing", "Native Mobile Apps", "Dedicated Server", "Priority Support"],
      popular: false
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-[40px] md:pt-[60px] pb-[80px] md:pb-[100px] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-10 -z-10"></div>

        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto text-center z-10 relative">
          <SlideUp>
            <span className="inline-flex items-center gap-[10px] bg-secondary/10 text-secondary border border-secondary/20 py-[8px] px-[16px] rounded-full font-semibold text-[13px] md:text-[14px] mb-[20px] w-auto">
              💎 Transparent & Scalable
            </span>
            <h1 className="text-[36px] md:text-[clamp(36px,5vw,60px)] m-0 mb-6 tracking-tight font-extrabold text-foreground">
              Investment for <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Your Success</span>
            </h1>
            <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0 mb-12 leading-relaxed">
              We offer flexible pricing models designed to grow with your business. No hidden fees—just premium code and stunning design delivered with precision.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] items-stretch">
            {plans.map((plan, i) => (
              <StaggerItem key={i}>
                <div className={`relative h-full bg-card/50 backdrop-blur-xl border-2 rounded-[32px] p-8 md:p-10 transition-all duration-300 hover:shadow-2xl flex flex-col group ${plan.popular ? "border-secondary shadow-xl scale-105 z-20" : "border-border hover:border-secondary/20 h-full"}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-accent text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" /> MOST POPULAR
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[42px] font-black text-foreground">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground text-sm font-semibold">starting at</span>}
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="flex-1">
                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-secondary text-white" : "bg-secondary/10 text-secondary"}`}>
                            <Check className="w-3 h-3 font-bold" />
                          </div>
                          <span className="text-foreground/90 text-[15px] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className={`w-full py-4 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn ${plan.popular ? "bg-secondary text-white shadow-lg hover:shadow-2xl hover:-translate-y-1" : "bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary hover:text-white"}`}>
                    Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Support / Help Section */}
      <section className="py-[60px] md:py-[100px] bg-accent/5 border-t border-border/50">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground leading-tight">Need a custom technical <span className="text-secondary">consultation?</span></h2>
              <p className="text-muted-foreground text-[16px] md:text-[18px] mb-8 leading-relaxed">
                Every enterprise project is unique. Our architects can deep-dive into your requirements to provide a fixed-price estimate or a dedicated team for ongoing product development.
              </p>
              <div className="space-y-4">
                {[
                  "No commitment discovery call",
                  "Detailed technical breakdown",
                  "Fixed price or agile models",
                  "Post-launch scale plan"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-secondary w-5 h-5 w-5 h-5" />
                    <span className="font-semibold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="bg-card glass-morphism border border-border p-8 rounded-[32px] shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full -z-10 transition-transform group-hover:scale-150"></div>
              <HelpCircle className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-4 text-foreground text-foreground">Frequently Asked about Pricing</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                All projects include basic deployment and support. For recurring maintenance, we offer specialized monthly packages. Payment is typically milestone-based (Deposit, MVP, Delivery).
              </p>
              <Link href="/contact" className="inline-flex items-center text-secondary font-bold hover:gap-3 transition-all">
                Ask a specific question <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

