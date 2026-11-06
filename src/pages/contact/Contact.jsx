import { useState } from "react";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import usePageTitle from "../../hooks/usePageTitle";
import { company } from "../../data/site";

const contactInfo = [
  { icon: "mail", label: "Email us", value: company.email, href: `mailto:${company.email}` },
  { icon: "phone", label: "Call us", value: company.phone, href: `tel:${company.phone}` },
  { icon: "pin", label: "Visit us", value: company.address },
];

const services = [
  "Website & App Development",
  "Custom Software",
  "AI & Smart Automation",
  "Data Analytics",
  "Database Solutions",
  "AI Chatbots",
  "Not sure yet — let's talk",
];

export default function Contact() {
  usePageTitle("Contact — Rubsal Technologies");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0],
    message: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Demo only — no backend wired up. Shows a success state locally.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building"
        subtitle="Tell us a little about your project and we'll get back to you within one business day — no sales pressure, just a helpful conversation."
        icon="chat"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
            {/* Info column */}
            <Reveal className="flex flex-col gap-5">
              {contactInfo.map((c) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3)] transition-all hover:-translate-y-0.5 hover:border-brand-200">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon name={c.icon} size={22} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate">{c.label}</p>
                      <p className="mt-0.5 font-bold text-ink">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}

              <div className="relative mt-1 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-indigo-700 p-7 text-white">
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <Icon name="clock" size={26} />
                <h3 className="mt-4 text-lg font-bold">Fast, friendly replies</h3>
                <p className="mt-2 text-sm text-white/80">
                  Every message reaches a real person on our team. We typically
                  respond within a few hours during the working week.
                </p>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)] sm:p-9">
                {sent ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                      <Icon name="check" size={32} />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold text-ink">
                      Message sent — thank you!
                    </h3>
                    <p className="mt-3 max-w-sm text-slate">
                      We've received your details and will be in touch very soon.
                      Keep an eye on your inbox.
                    </p>
                    <Button
                      className="mt-7"
                      variant="ghost"
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          email: "",
                          company: "",
                          service: services[0],
                          message: "",
                        });
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-ink">
                          Full name
                        </span>
                        <input
                          required
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Jane Doe"
                          className={field}
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-ink">
                          Email address
                        </span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="jane@company.com"
                          className={field}
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-ink">
                        Company <span className="font-normal text-slate">(optional)</span>
                      </span>
                      <input
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Acme Inc."
                        className={field}
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-ink">
                        What can we help with?
                      </span>
                      <select
                        value={form.service}
                        onChange={update("service")}
                        className={field}
                      >
                        {services.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-ink">
                        Tell us about your project
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="A few sentences about what you're hoping to build..."
                        className={`${field} resize-none`}
                      />
                    </label>

                    <Button type="submit" size="lg" icon="arrow" className="mt-1 w-full sm:w-auto">
                      Send message
                    </Button>
                    <p className="text-xs text-slate">
                      By sending this, you agree to be contacted about your
                      enquiry. We never share your details.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
