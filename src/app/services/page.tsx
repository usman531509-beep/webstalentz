export const metadata = { title: "Services | WebsTalentz" };

export default function ServicesPage() {
  return (
    <section className="py-[62px] md:py-[84px] min-h-[calc(100vh-200px)]">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
        <div className="text-center mb-[28px] md:mb-[46px]">
          <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Detailed Solutions We Offer</h2>
          <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">Whether you need a sleek business website or a complete app ecosystem, WebsTalentz can design and develop a solution tailored to your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[22px]">
          {[
            { title: "Corporate Websites", desc: "Professional business presence with service pages, inquiry forms, and strong branding." },
            { title: "Landing Pages", desc: "Conversion-focused pages for ads, products, campaigns, events, and lead generation." },
            { title: "Online Stores", desc: "Full ecommerce websites with product catalogs, carts, checkout, and payment systems." },
            { title: "Booking Platforms", desc: "Appointment systems, reservations, calendars, and scheduling tools for service businesses." },
            { title: "Restaurant & Delivery Apps", desc: "Customer apps, vendor panels, rider apps, order tracking, and admin dashboards." },
            { title: "Education Portals", desc: "School management systems, student portals, learning dashboards, and attendance tools." },
            { title: "Healthcare Systems", desc: "Clinic websites, appointment apps, patient forms, records portals, and service booking." },
            { title: "Custom Business Software", desc: "Tailor-made systems for inventory, CRM, HR, accounts, workflows, and internal operations." }
          ].map((service, i) => (
            <div key={i} className="bg-white border border-border rounded-[18px] md:rounded-[20px] p-[20px] md:p-[24px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5">
              <h4 className="m-0 mb-2.5 font-bold text-lg">{service.title}</h4>
              <p className="m-0 text-muted">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
