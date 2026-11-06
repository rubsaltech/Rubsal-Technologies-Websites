import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-nav.png";

// Logo-only lockup (transparent PNG already includes the wordmark).
export default function Logo({ onClick, className = "h-10 sm:h-12" }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center"
      aria-label="Rubsal Technologies — home"
    >
      <img
        src={logo}
        alt="Rubsal Technologies"
        className={`${className} w-auto object-contain`}
      />
    </Link>
  );
}
