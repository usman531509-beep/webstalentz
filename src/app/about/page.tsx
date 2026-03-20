export const metadata = { title: "About | WebsTalentz" };

export default function AboutPage() {
  return (
    <section className="py-[62px] md:py-[84px] bg-light min-h-[calc(100vh-200px)] flex items-center">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center">
          <div>
            <div className="text-left mb-[20px]">
              <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">About WebsTalentz</h2>
              <p className="max-w-[760px] text-muted text-[15px] md:text-[17px] m-0">WebsTalentz is a software house dedicated to building high-quality websites, mobile applications, and custom digital systems for businesses of all sizes.</p>
            </div>
            <p className="text-muted text-[17px] m-0 mb-[18px]">
              From business profile websites to full ecommerce stores and custom mobile apps, our goal is to deliver practical technology solutions that help our clients grow faster, work smarter, and present a stronger digital image.
            </p>
            <div className="grid gap-[12px] mt-[18px]">
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div><strong>Mission:</strong> Deliver reliable, modern, and business-focused digital products.</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div><strong>Vision:</strong> Become a trusted software company for innovation, design, and technical excellence.</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div><strong>Approach:</strong> Strategy, design, development, testing, launch, and support under one roof.</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3.5 bg-gradient-to-br from-secondary/10 to-accent/10">🚀</div>
              <h3 className="m-0 mb-2.5 font-bold text-lg">Why Clients Choose Us</h3>
              <p className="m-0 text-muted">We focus on clean design, responsive development, secure code, business understanding, and dependable communication throughout the project lifecycle.</p>
            </div>
            <div className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5 mt-[20px]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3.5 bg-gradient-to-br from-secondary/10 to-accent/10">💡</div>
              <h3 className="m-0 mb-2.5 font-bold text-lg">What Makes Us Different</h3>
              <p className="m-0 text-muted">Custom solutions, scalable architecture, modern layouts, performance-first thinking, and practical systems tailored to real business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
