import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import logo from "../../assets/logo/logo-nav.png";
import { company, contact, socials } from "../../data/contact";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI & Data", to: "/services/ai-data" },
      { label: "Software Development", to: "/services/software-development" },
      { label: "All Services", to: "/services" },
      { label: "Products", to: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Work", to: "/products" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-white to-brand-50/60">
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Rubsal Technologies — home" className="inline-flex">
              <img
                src={logo}
                alt="Rubsal Technologies"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-slate">
              We turn ideas into smart digital products — from custom software to
              AI that helps your business grow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-slate transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[0.95rem] text-slate transition-colors hover:text-brand-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
              Get in touch
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-[0.95rem] text-slate">
              <li className="flex items-center gap-3">
                <Icon name="mail" size={18} className="text-brand-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-brand-700">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" size={18} className="text-brand-500" />
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand-700">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" size={18} className="mt-0.5 text-brand-500" />
                <a
                  href={contact.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-700"
                >
                  {contact.location.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-700">Privacy</a>
            <a href="#" className="hover:text-brand-700">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
