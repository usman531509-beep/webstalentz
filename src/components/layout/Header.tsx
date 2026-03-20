"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border" : "bg-background border-b border-border/50"}`}>
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between py-3 md:py-[18px] gap-5">
        <Link href="/" className="text-[24px] md:text-[28px] font-extrabold tracking-tight flex items-center gap-1 transform transition-transform hover:scale-[1.02]">
          Webs<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Talentz</span>
        </Link>
        
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button 
            className="w-[42px] h-[42px] rounded-xl flex items-center justify-center text-foreground bg-secondary/10 hover:bg-secondary/20 transition-colors"
            aria-label="Toggle navigation" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        <nav className={`${isOpen ? "block absolute top-[100%] left-0 w-full bg-background border-b border-border shadow-lg px-4 pb-4" : "hidden"} lg:static lg:block lg:w-auto lg:bg-transparent lg:border-none lg:shadow-none lg:px-0 lg:pb-0 transition-all`}>
          <ul className="list-none flex flex-col lg:flex-row gap-2 lg:gap-[8px] m-0 p-2 lg:p-0 items-stretch lg:items-center">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`block lg:inline-flex items-center text-[15px] font-semibold py-3 px-4 rounded-full transition-all duration-300
                      ${isActive 
                        ? "bg-secondary/10 text-secondary" 
                        : "text-foreground/80 hover:text-foreground hover:bg-secondary/5"
                      }`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="hidden lg:block ml-2"><ThemeToggle /></li>
            <li className="lg:hidden mt-2 pt-2 border-t border-border">
              <Link href="/contact" className="block text-center py-3 rounded-full bg-secondary text-primary-foreground font-bold">
                Get an Estimate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
