import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/expertise", label: "Our Expertise" },
  { to: "/advanced-technologies", label: "Advanced Technologies" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(15,23,18,0.06),0_8px_24px_-12px_rgba(15,23,18,0.15)]" : "border-b border-black/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10" />
          <span className="font-display font-semibold tracking-tight text-ink-900 text-[15px] leading-tight sm:text-base">
            UNITED <span className="text-brand-600">TECHNOLINK</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-600"
                    : "text-ink-800/80 hover:text-brand-600"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+919902390015" className="flex items-center gap-2.5 text-ink-900">
            <span className="h-9 w-9 rounded-full bg-brand-50 flex items-center justify-center">
              <Phone className="h-4 w-4 text-brand-600" />
            </span>
            <span className="text-sm font-semibold">+91 99023 90015</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-600 transition-colors"
          >
            Get a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="lg:hidden text-ink-900 p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-5 pb-6 pt-2 sm:mx-auto sm:mt-2 sm:max-w-sm sm:rounded-2xl sm:border sm:px-4 sm:pb-4 sm:pt-3 sm:shadow-2xl">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive ? "bg-brand-50 text-brand-600" : "text-ink-800/80 hover:bg-brand-50 hover:text-brand-600"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href="tel:+919902390015" className="mt-2 flex items-center gap-2.5 px-4 py-2 text-ink-900">
              <Phone className="h-4 w-4 text-brand-600" />
              <span className="text-sm font-semibold">+91 99023 90015</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-500 text-white px-5 py-3 text-sm font-semibold"
            >
              Get a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
