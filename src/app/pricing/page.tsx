export const metadata = { title: "Pricing | WebsTalentz" };

export default function PricingPage() {
  return (
    <section className="py-[62px] md:py-[84px] min-h-[calc(100vh-200px)]">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
        <div className="text-center mb-[28px] md:mb-[46px]">
          <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Flexible Pricing Plans</h2>
          <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">These sample packages help customers understand the range of services. You can edit prices later to match your actual rates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[22px]">
          <div className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5 flex flex-col">
            <h3 className="m-0 mb-2.5 font-bold text-xl">Starter Website</h3>
            <div className="text-[34px] font-extrabold text-secondary my-[8px] md:mb-[14px]">PKR 60,000+</div>
            <p className="m-0 text-muted mb-4">Ideal for small businesses needing a clean and professional online presence.</p>
            <div className="grid gap-[12px] mt-auto">
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Up to 5 pages</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Responsive design</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Contact form</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Basic SEO setup</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-2 border-secondary rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5 flex flex-col relative">
            <h3 className="m-0 mb-2.5 font-bold text-xl">Business Website</h3>
            <div className="text-[34px] font-extrabold text-secondary my-[8px] md:mb-[14px]">PKR 120,000+</div>
            <p className="m-0 text-muted mb-4">Best for growing brands that need custom pages, advanced design, and more functionality.</p>
            <div className="grid gap-[12px] mt-auto">
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Up to 15 pages</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Custom UI/UX</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Speed optimization</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Lead capture forms</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5 flex flex-col">
            <h3 className="m-0 mb-2.5 font-bold text-xl">App / Custom Software</h3>
            <div className="text-[34px] font-extrabold text-secondary my-[8px] md:mb-[14px]">Custom Quote</div>
            <p className="m-0 text-muted mb-4">For ecommerce systems, mobile apps, dashboards, CRM, ERP, and custom software solutions.</p>
            <div className="grid gap-[12px] mt-auto">
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Tailored feature set</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Admin dashboard</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>API integration</div>
              </div>
              <div className="flex items-start gap-[12px] bg-white border border-border p-[14px] px-[16px] rounded-[16px]">
                <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-success/10 text-success flex items-center justify-center font-extrabold mt-0.5 text-sm">✓</span>
                <div>Launch support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
