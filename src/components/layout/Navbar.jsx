import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Logo from "./Logo";
import { navLinks } from "../../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Lock scroll when the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-[0.95rem] font-semibold transition-colors ${
      isActive ? "text-brand-700" : "text-slate hover:text-ink"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <nav
          className={`flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "glass-strong shadow-[0_12px_40px_-16px_rgba(15,23,42,0.3)]"
              : "bg-white/55 border border-white/60 backdrop-blur-md"
          }`}
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink to={item.to} className={linkClass}>
                    <span className="inline-flex items-center gap-1">
                      {item.label}
                      <Icon
                        name="chevron"
                        size={15}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4"
                      >
                        <div className="glass-strong overflow-hidden rounded-2xl p-2 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.4)]">
                          {item.children.map((c) => (
                            <NavLink
                              key={c.to}
                              to={c.to}
                              className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
                            >
                              <span className="text-sm font-bold text-ink">
                                {c.label}
                              </span>
                              <span className="text-xs text-slate">{c.desc}</span>
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button to="/contact" icon="arrow" className="whitespace-nowrap">
                Let's Talk
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/70 text-ink lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-strong absolute inset-x-3 top-24 rounded-3xl p-5 shadow-2xl"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-brand-50 text-brand-700"
                            : "text-ink hover:bg-slate-50"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <ul className="mb-1 ml-3 border-l border-slate-200 pl-3">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <NavLink
                              to={c.to}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate hover:text-brand-700"
                            >
                              {c.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Button to="/contact" icon="arrow" className="mt-3 w-full">
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
