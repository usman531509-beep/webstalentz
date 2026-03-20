import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-slate-300 pt-[60px] pb-6 mt-20">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] gap-[16px] md:gap-[30px] mb-[30px]">
            <div>
              <div className="text-[24px] md:text-[28px] font-extrabold tracking-wide text-white mb-3">
                Webs<span className="text-secondary">Talentz</span>
              </div>
              <p className="m-0 text-slate-300">
                WebsTalentz is a software house offering websites, ecommerce stores, mobile apps, dashboards, and custom software solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white text-[18px] m-0 mb-3.5 font-bold">Quick Links</h4>
              <div className="grid gap-[10px]">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white text-[18px] m-0 mb-3.5 font-bold">Services</h4>
              <div className="grid gap-[10px]">
                <Link href="/services" className="hover:text-white transition-colors">Website Development</Link>
                <Link href="/services" className="hover:text-white transition-colors">Mobile Apps</Link>
                <Link href="/services" className="hover:text-white transition-colors">Ecommerce</Link>
                <Link href="/services" className="hover:text-white transition-colors">Custom Software</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white text-[18px] m-0 mb-3.5 font-bold">Contact</h4>
              <div className="grid gap-[10px]">
                <span>Sample Road, Punjab, Pakistan</span>
                <span>03006363727</span>
                <span>info@webstalentz.com</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 text-[14px] text-center text-slate-400">
            © 2026 WebsTalentz. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Contact Bar */}
      <div className="md:hidden fixed left-[14px] right-[14px] bottom-[14px] z-[1200] bg-white/95 backdrop-blur-[10px] border border-slate-200/90 shadow-soft rounded-[18px] p-[10px] grid grid-cols-2 gap-[10px]">
        <a href="tel:03006363727" className="flex items-center justify-center p-[13px] px-[14px] rounded-[14px] font-extrabold text-[14px] bg-gradient-to-br from-secondary to-accent text-white hover:opacity-90 transition-opacity">
          Call Now
        </a>
        <Link href="/contact" className="flex items-center justify-center p-[13px] px-[14px] rounded-[14px] font-extrabold text-[14px] border border-border text-secondary bg-white hover:bg-slate-50 transition-colors">
          Get Quote
        </Link>
      </div>
    </>
  );
}
