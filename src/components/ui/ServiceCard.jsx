import { Link } from "react-router-dom";
import Icon from "./Icon";

// Links to the relevant service sub-page (ai-data or software-development).
const groupPath = {
  "ai-data": "/services/ai-data",
  "software-development": "/services/software-development",
};

export default function ServiceCard({ service }) {
  return (
    <Link
      to={groupPath[service.group] || "/services"}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_26px_50px_-24px_rgba(37,99,235,0.45)]"
    >
      {/* hover wash */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-50/80 group-hover:to-white group-hover:opacity-100" />

      <div className="relative">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_12px_24px_-10px_rgba(37,99,235,0.7)] transition-transform duration-300 group-hover:scale-105">
          <Icon name={service.icon} size={26} />
        </span>

        <h3 className="mt-6 text-xl font-bold text-ink">{service.title}</h3>
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">
          {service.short}
        </p>

        <ul className="mt-5 flex flex-col gap-2">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-slate">
              <Icon name="check" size={16} className="text-brand-500" />
              {p}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
          Learn more
          <Icon
            name="arrow"
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
