"use client";

import { useState } from "react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const contactMethods = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", val: "webtalentz@outlook.com", desc: "For general inquiries and projects." },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", val: "+92 339 6222327", desc: "Mon-Sat from 9am to 6pm." },
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", val: "Punjab, Pakistan", desc: "Our main development studio." },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", service: "Web Development", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-[40px] md:pt-[60px] pb-[80px] md:pb-[100px] relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto text-center z-10 relative">
          <SlideUp>
            <span className="inline-flex items-center gap-[10px] bg-secondary/10 text-secondary border border-secondary/20 py-[8px] px-[16px] rounded-full font-semibold text-[13px] md:text-[14px] mb-[20px] w-auto">
              👋 Let&apos;s Build Success
            </span>
            <h1 className="text-[36px] md:text-[clamp(36px,5vw,60px)] m-0 mb-6 tracking-tight font-extrabold text-foreground">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Touch</span> Today
            </h1>
            <p className="max-w-[760px] mx-auto text-muted-foreground text-[16px] md:text-[18px] m-0 leading-relaxed">
              Have a revolutionary idea for a web app or need to modernize your business operations? Our experts are ready to transform your vision into reality.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20 text-left">
            {contactMethods.map((method, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-border rounded-[28px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{method.title}</h3>
                  <div className="text-secondary font-bold text-lg mb-2">{method.val}</div>
                  <p className="text-muted-foreground text-sm m-0">{method.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start text-left">
            <FadeIn className="space-y-8">
              <div className="bg-gradient-to-br from-slate-900 via-primary to-slate-800 p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="text-secondary" /> Global Partnerships
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  We partner with clients across Europe, America, and Asia, delivering high-performance software that transcends time zones.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                    <MessageSquare className="text-secondary" />
                    <div>
                      <div className="font-bold">Real-time Support</div>
                      <div className="text-sm text-slate-400">Available via Slack & WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-l-4 border-secondary bg-secondary/5 rounded-r-2xl">
                <p className="m-0 italic text-muted-foreground text-lg">&quot;The speed of communication and attention to detail from the WebsTalentz team was nothing short of professional.&quot;</p>
                <div className="mt-4 font-bold text-foreground">Senior IT Director</div>
              </div>
            </FadeIn>

            <SlideUp delay={0.2} className="bg-card border border-border rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-8 right-8 text-secondary/5 -z-0">
                <Send className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-foreground z-10 relative">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {status === "success" && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-4 rounded-2xl flex items-center gap-3 mb-6 animate-in fade-in zoom-in duration-300">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium m-0">Thank you! Your message has been sent successfully. We will get back to you shortly.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-4 rounded-2xl flex items-center gap-3 mb-6 animate-in fade-in zoom-in duration-300">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium m-0">{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-secondary transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address" 
                      className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-secondary transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Ecommerce Store</option>
                    <option>Custom Software</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      Sending... <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Your Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </SlideUp>
          </div>
        </div>
      </section>
    </div>
  );
}
