import { MapPin, Phone, Mail, Sparkles } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-[11px] md:text-[13px] py-1.5 md:py-2.5 border-b border-white/5">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto flex justify-between items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 font-medium opacity-80 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-secondary" /> Premium Software House & Digital Agency
        </div>
        <div className="flex flex-1 lg:flex-none flex-nowrap items-center justify-center lg:justify-end gap-3 md:gap-6 overflow-hidden">
          <span className="hidden sm:flex items-center gap-1.5 tracking-tight opacity-80 whitespace-nowrap"><MapPin className="w-3 h-3 text-secondary"/> Punjab, PK</span>
          <span className="hidden sm:inline-block w-px h-3 bg-white/10"></span>
          <a href="tel:03006363727" className="flex items-center gap-1.5 tracking-tight hover:text-white transition-colors whitespace-nowrap"><Phone className="w-3 h-3 text-secondary"/> 03006363727</a>
          <span className="w-px h-3 bg-white/10"></span>
          <a href="mailto:info@webstalentz.com" className="flex items-center gap-1.5 tracking-tight hover:text-white transition-colors whitespace-nowrap truncate"><Mail className="w-3 h-3 text-secondary"/> info@webstalentz.com</a>
        </div>
      </div>
    </div>
  );
}
