import Icon from "./Icon";

export default function Badge({ children, icon = "spark", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-[0_6px_18px_-10px_rgba(37,99,235,0.5)] backdrop-blur ${className}`}
    >
      <Icon name={icon} size={16} className="text-brand-500" />
      {children}
    </span>
  );
}
