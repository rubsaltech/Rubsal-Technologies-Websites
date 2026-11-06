import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo.png";

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="Rubsal Technologies — home"
    >
      <img
        src={logo}
        alt="Rubsal Technologies"
        className="h-9 w-9 object-contain sm:h-10 sm:w-10"
      />
      <span className="hidden h-8 w-px bg-slate-200 sm:block" />
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-lg font-bold text-ink">Rubsal</span>
        <span className="text-[0.72rem] font-medium tracking-wide text-slate">
          Technologies
        </span>
      </span>
    </Link>
  );
}
