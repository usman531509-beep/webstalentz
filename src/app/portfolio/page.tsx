import Link from "next/link";

export const metadata = { title: "Portfolio | WebsTalentz" };

export default function PortfolioPage() {
  return (
    <section className="py-[62px] md:py-[84px] bg-light min-h-[calc(100vh-200px)]">
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1200px] mx-auto">
        <div className="text-center mb-[28px] md:mb-[46px]">
          <h2 className="text-[29px] md:text-[clamp(28px,4vw,42px)] m-0 mb-3 tracking-tight font-bold">Featured Projects</h2>
          <p className="max-w-[760px] mx-auto text-muted text-[15px] md:text-[17px] m-0">Showcase your completed work here to help customers understand the type of websites and applications WebsTalentz can create.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[22px]">
          {[
            { thumb: "Fashion Ecommerce Store", desc: "Complete online clothing store with cart, checkout, inventory and customer account system.", tags: ["Ecommerce", "Responsive", "Payment Gateway"] },
            { thumb: "Food Ordering Mobile App", desc: "Restaurant ordering app with user panel, rider tracking, order history and admin control.", tags: ["Mobile App", "Android/iOS", "Dashboard"] },
            { thumb: "Real Estate Website", desc: "Property listing platform with search filters, inquiry forms, featured properties and gallery pages.", tags: ["Listings", "Business Website", "Lead Capture"] },
            { thumb: "School Management System", desc: "Student records, attendance, fee management, admin panel and reporting tools for institutions.", tags: ["Web App", "Dashboard", "Education"] },
            { thumb: "Auto Workshop Website", desc: "Garage business website with booking form, services pages, customer inquiries and quote requests.", tags: ["Service Website", "Bookings", "SEO Ready"] },
            { thumb: "Business CRM Dashboard", desc: "Custom system for managing leads, clients, workflows, employee tasks and business reports.", tags: ["CRM", "Admin Panel", "Automation"] }
          ].map((project, i) => (
            <div key={i} className="bg-white border border-border rounded-[18px] md:rounded-[20px] shadow-custom transition-transform duration-250 hover:-translate-y-1.5 overflow-hidden flex flex-col">
              <div className="h-[190px] md:h-[220px] bg-gradient-to-br from-slate-900 via-blue-600 to-cyan-500 relative p-[20px] text-white flex items-end font-bold text-[18px] md:text-[20px]">
                {project.thumb}
              </div>
              <div className="p-[22px] flex flex-col flex-1">
                <p className="m-0 text-muted">{project.desc}</p>
                <div className="flex flex-wrap gap-2 my-[14px] mb-[16px]">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block py-[7px] px-[12px] rounded-full bg-blue-50 text-secondary text-[13px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 py-[13px] px-[22px] rounded-full font-bold transition-colors duration-250 border-2 border-secondary text-secondary bg-white text-center w-full md:w-auto hover:bg-slate-50">
                    Request Similar Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
