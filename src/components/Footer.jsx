import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "./SocialIcons";
import { contact } from "../data/content";

const explore = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/expertise", label: "Our Expertise" },
  { to: "/advanced-technologies", label: "Advanced Technologies" },
  { to: "/contact", label: "Contact" },
];

const solutions = [
  "Datacenter Solutions",
  "Storage & Backup",
  "Enterprise Security",
  "Structured Cabling",
  "Intelligent Networking",
  "Virtualization",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display font-bold tracking-tight text-white text-base">
                UNITED <span className="text-gradient">TECHNOLINK</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              End-to-end IT infrastructure, networking, cybersecurity, cloud and digital
              workplace solutions — secure, scalable, and future-ready.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[LinkedinIcon, TwitterIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-300 hover:border-brand-400/40 transition-colors"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Explore</h4>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-brand-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s}>
                  <Link to="/expertise" className="text-sm text-slate-400 hover:text-brand-300 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-400">
                <MapPin className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Mail className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span>info@unitedtechnolink.com</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Phone className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span>+91 80 0000 0000</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              Talk to an expert <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} United Technolink. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Trusted by enterprises, SMEs, education, healthcare & government.
          </p>
        </div>
      </div>
    </footer>
  );
}
