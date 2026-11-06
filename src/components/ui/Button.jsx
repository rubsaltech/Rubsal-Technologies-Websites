import { Link } from "react-router-dom";
import Icon from "./Icon";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  primary:
    "text-white bg-gradient-to-r from-brand-600 to-brand-500 shadow-[0_14px_30px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_18px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-0.5",
  secondary:
    "text-ink glass-strong border border-white/80 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "text-brand-700 bg-brand-50 hover:bg-brand-100",
  outline:
    "text-ink border border-slate-200 bg-white/60 hover:border-brand-300 hover:text-brand-700",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconLeft,
  className = "",
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={18} />}
      {children}
      {icon && (
        <Icon
          name={icon}
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
