export const metadata = { title: "FAQ | WebsTalentz" };

export default function FaqPage() {
  return (
    <section className="py-[62px] md:py-[84px] bg-light min-h-[calc(100vh-200px)]">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
        <div className="text-center mb-[28px] md:mb-[46px]">
          <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Frequently Asked Questions</h2>
          <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">Helpful answers for potential clients visiting the website.</p>
        </div>
        <div className="grid gap-[16px] max-w-[950px] mx-auto">
          <details open className="border border-border rounded-[16px] p-[18px] px-[20px] bg-white shadow-custom group">
            <summary className="cursor-pointer font-bold list-none flex justify-between items-center text-[16px] md:text-[18px]">
              What services does WebsTalentz provide?
              <span className="text-secondary group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-[14px] text-muted m-0">WebsTalentz provides website development, ecommerce solutions, mobile app development, custom web applications, UI/UX design, and maintenance services.</p>
          </details>
          <details className="border border-border rounded-[16px] p-[18px] px-[20px] bg-white shadow-custom group">
            <summary className="cursor-pointer font-bold list-none flex justify-between items-center text-[16px] md:text-[18px]">
              Do you build both websites and mobile apps?
              <span className="text-secondary group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-[14px] text-muted m-0">Yes. We develop business websites, online stores, custom portals, Android apps, iOS apps, and cross-platform mobile applications.</p>
          </details>
          <details className="border border-border rounded-[16px] p-[18px] px-[20px] bg-white shadow-custom group">
            <summary className="cursor-pointer font-bold list-none flex justify-between items-center text-[16px] md:text-[18px]">
              Can you redesign an existing website?
              <span className="text-secondary group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-[14px] text-muted m-0">Yes. We can redesign outdated websites to give them a fresh look, better user experience, and improved performance.</p>
          </details>
          <details className="border border-border rounded-[16px] p-[18px] px-[20px] bg-white shadow-custom group">
            <summary className="cursor-pointer font-bold list-none flex justify-between items-center text-[16px] md:text-[18px]">
              Do you offer support after project completion?
              <span className="text-secondary group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-[14px] text-muted m-0">Yes. We offer maintenance, updates, bug fixing, and ongoing support after launch.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
