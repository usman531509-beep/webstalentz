export const metadata = { title: "Contact Us | WebsTalentz" };

export default function ContactPage() {
  return (
    <section className="py-[62px] md:py-[84px] min-h-[calc(100vh-200px)] flex items-center">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
        <div className="text-center mb-[28px] md:mb-[46px]">
          <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Contact WebsTalentz</h2>
          <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">Make it easy for visitors to get in touch for websites, apps, redesigns, ecommerce stores, and custom software work.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[16px] lg:gap-[24px]">
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white rounded-[22px] md:rounded-[24px] p-[22px] md:p-[30px] shadow-soft">
            <h3 className="mt-0 text-[26px] md:text-[30px] font-bold mb-3">Let’s Discuss Your Project</h3>
            <p className="text-slate-300 m-0 text-lg">If you need a website, an ecommerce store, a custom portal, or a mobile app, contact our team today.</p>
            <div className="grid gap-[16px] mt-[22px]">
              <div className="bg-white/10 p-[14px] px-[16px] rounded-[14px]">
                <strong className="block mb-1 text-slate-200">Address:</strong>
                Sample Road, Punjab, Pakistan
              </div>
              <div className="bg-white/10 p-[14px] px-[16px] rounded-[14px]">
                <strong className="block mb-1 text-slate-200">Phone:</strong>
                03006363727
              </div>
              <div className="bg-white/10 p-[14px] px-[16px] rounded-[14px]">
                <strong className="block mb-1 text-slate-200">Email:</strong>
                info@webstalentz.con
              </div>
              <div className="bg-white/10 p-[14px] px-[16px] rounded-[14px]">
                <strong className="block mb-1 text-slate-200">Working Scope:</strong>
                Web Development, Ecommerce, Mobile Apps, Custom Software
              </div>
            </div>
          </div>
          <form className="bg-white border border-border rounded-[22px] md:rounded-[24px] p-[22px] md:p-[28px] shadow-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="name" className="font-bold text-[14px]">Full Name</label>
                <input id="name" type="text" placeholder="Enter your full name" className="w-full p-[14px] px-[15px] border border-border rounded-[12px] text-primary bg-white text-[16px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="email" className="font-bold text-[14px]">Email Address</label>
                <input id="email" type="email" placeholder="Enter your email" className="w-full p-[14px] px-[15px] border border-border rounded-[12px] text-primary bg-white text-[16px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="phone" className="font-bold text-[14px]">Phone Number</label>
                <input id="phone" type="text" placeholder="Enter your phone number" className="w-full p-[14px] px-[15px] border border-border rounded-[12px] text-primary bg-white text-[16px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="service" className="font-bold text-[14px]">Service Needed</label>
                <select id="service" className="w-full p-[14px] px-[15px] border border-border rounded-[12px] text-primary bg-white text-[16px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary appearance-none">
                  <option>Website Development</option>
                  <option>Ecommerce Website</option>
                  <option>Mobile App Development</option>
                  <option>Custom Web Application</option>
                  <option>UI/UX Design</option>
                  <option>Maintenance & Support</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px] md:col-span-2">
                <label htmlFor="message" className="font-bold text-[14px]">Project Details</label>
                <textarea id="message" placeholder="Tell us about your website or mobile app project" className="w-full p-[14px] px-[15px] border border-border rounded-[12px] text-primary bg-white text-[16px] min-h-[140px] resize-y focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"></textarea>
              </div>
              <div className="flex flex-col gap-[8px] md:col-span-2 mt-2">
                <button type="button" className="inline-flex items-center justify-center gap-2 py-[13px] px-[22px] rounded-full font-bold transition-transform duration-250 border-2 border-transparent text-center text-white shadow-soft bg-gradient-to-br from-secondary to-accent hover:-translate-y-0.5 w-full text-[16px]">
                  Send Inquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
