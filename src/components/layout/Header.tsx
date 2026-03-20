"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-slate-200/85">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between py-3 md:py-[14px] gap-5">
        <Link href="/" className="text-[24px] md:text-[28px] font-extrabold tracking-wide">
          Webs<span className="text-secondary">Talentz</span>
        </Link>
        
        <button 
          className="md:hidden w-[46px] h-[46px] rounded-xl flex items-center justify-center text-primary text-2xl border border-blue-600/15"
          style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(6,182,212,0.12))" }}
          aria-label="Toggle navigation" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        <nav className={`${isOpen ? "block" : "hidden"} md:block w-full md:w-auto bg-white md:bg-transparent border-t border-border md:border-none mt-2 md:mt-0 pt-2 md:pt-0`}>
          <ul className="list-none flex flex-col md:flex-row gap-2 md:gap-[22px] m-0 p-1 md:p-0 items-stretch md:items-center flex-wrap">
            <li><Link href="/" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/services" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/portfolio" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link href="/#process" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Process</Link></li>
            <li><Link href="/pricing" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li><Link href="/faq" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li><Link href="/contact" className="block md:inline text-[15px] text-primary font-semibold py-3 px-3 md:p-0 rounded-xl md:rounded-none bg-slate-50 md:bg-transparent hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
