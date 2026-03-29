import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Send
} from "lucide-react";
import Image from "next/image";


export default function Footer() {

  const phoneNumber = "+92 339 6222327";
  const email = "support@webstalentz.com";

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 pt-[80px] pb-8 mt-20 relative overflow-hidden border-t border-white/5">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] gap-[40px] md:gap-[30px] mb-[60px]">
            {/* Brand Column */}
            <div>
              <Link href="/" className="mb-6 block h-10 w-[180px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/logo.png" 
                  alt="WebsTalentz Logo" 
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  className="brightness-0 invert"
                />
              </Link>
              <p className="m-0 text-slate-400 leading-relaxed mb-8 max-w-[320px]">
                Empowering businesses with cutting-edge digital solutions. From custom software to global e-commerce platforms.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-secondary/50 hover:bg-secondary/10 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-white text-[13px] uppercase tracking-[0.2em] font-black mb-7">Company</h4>
              <div className="flex flex-col gap-[14px]">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Pricing', href: '/pricing' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-secondary transition-colors inline-flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-secondary mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white text-[13px] uppercase tracking-[0.2em] font-black mb-7">Services</h4>
              <div className="flex flex-col gap-[14px]">
                {['Web Development', 'Mobile Apps', 'Ecommerce', 'Custom Software', 'UI/UX Design'].map((service) => (
                  <Link key={service} href="/services" className="hover:text-secondary transition-colors">
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter/Contact Column */}
            <div>
              <h4 className="text-white text-[13px] uppercase tracking-[0.2em] font-black mb-7">Stay Updated</h4>
              <p className="text-[14px] mb-6 text-slate-500">Subscribe for the latest tech insights.</p>
              <div className="relative mb-8">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-5 text-[14px] focus:outline-none focus:border-secondary/50 transition-colors pr-[50px]"
                />
                <button className="absolute right-2 top-1.5 bottom-1.5 w-10 bg-secondary rounded-xl flex items-center justify-center text-white hover:bg-secondary/90 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${email}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Mail className="w-4 h-4 text-secondary" /></div>
                 {email}
                </a>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Phone className="w-4 h-4 text-secondary" /></div>
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
            <p>© 2026 WebsTalentz Software House. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Contact Bar */}
      <div className="md:hidden fixed left-[14px] right-[14px] bottom-[20px] z-[1200] bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[24px] p-2 flex items-center gap-2">
        <a href={`tel:${phoneNumber}`} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[18px] font-bold text-[14px] bg-secondary text-white active:scale-[0.98] transition-all">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[18px] font-bold text-[14px] bg-white/5 border border-white/10 text-white active:scale-[0.98] transition-all">
          <Mail className="w-4 h-4" /> Get Quote
        </Link>
      </div>
    </>
  );
}
