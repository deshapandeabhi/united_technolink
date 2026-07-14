import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight, Send } from "lucide-react";
import Logo from "./Logo";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "./SocialIcons";
import { contact } from "../data/content";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/expertise", label: "Our Expertise" },
  { to: "/advanced-technologies", label: "Advanced Technologies" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Datacenter Solutions",
  "Enterprise Security",
  "Structured Cabling",
  "Intelligent Networking",
  "Virtualization",
];

const products = [
  "Business Computing",
  "Storage & Backup",
  "Network Intelligence",
  "Endpoint Security",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-ink-950">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="font-display font-semibold text-white text-xl sm:text-2xl">
              Stay Ahead with United Technolink Pvt. Ltd
            </h3>
            <p className="mt-1.5 text-sm text-white/50 max-w-md">
              Get insights on IT infrastructure trends, security best practices, and exclusive updates delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch gap-3"
          >
            {subscribed ? (
              <p className="text-brand-400 text-sm font-medium py-3">Thanks — you're subscribed!</p>
            ) : (
              <>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full sm:w-72 rounded-full bg-white/5 border border-white/15 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-400/60"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors text-white px-6 py-3 text-sm font-semibold"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display font-semibold tracking-tight text-white text-base">
                UNITED <span className="text-brand-400">TECHNOLINK</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
              End-to-end IT infrastructure, networking, cybersecurity, cloud and digital
              workplace solutions — secure, scalable, and future-ready.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[LinkedinIcon, TwitterIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-brand-400 hover:border-brand-400/50 transition-colors"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-medium text-sm tracking-wide uppercase mb-4 border-b-2 border-brand-500 inline-block pb-2">Quick Links</h4>
            <ul className="space-y-3 mt-1">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/55 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-medium text-sm tracking-wide uppercase mb-4 border-b-2 border-brand-500 inline-block pb-2">Services</h4>
            <ul className="space-y-3 mt-1">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/expertise" className="text-sm text-white/55 hover:text-brand-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-medium text-sm tracking-wide uppercase mb-4 border-b-2 border-brand-500 inline-block pb-2">Products</h4>
            <ul className="space-y-3 mt-1">
              {products.map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-sm text-white/55 hover:text-brand-400 transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-medium text-sm tracking-wide uppercase mb-4 border-b-2 border-brand-500 inline-block pb-2">Contact</h4>
            <ul className="space-y-4 mt-1">
              <li className="flex gap-3 text-sm text-white/55 min-w-0">
                <Phone className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span className="break-words min-w-0">+91 99023 90015</span>
              </li>
              <li className="flex gap-3 text-sm text-white/55 min-w-0">
                <Mail className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span className="break-words min-w-0">info@unitedtechnolink.com</span>
              </li>
              <li className="flex gap-3 text-sm text-white/55 min-w-0">
                <MapPin className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span className="break-words min-w-0">{contact.address}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300"
            >
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {contact.legalName}. All rights reserved. GSTIN: {contact.gst}
          </p>
          <p className="text-xs text-white/40">
            Trusted by enterprises, SMEs, education, healthcare & government.
          </p>
        </div>
      </div>
    </footer>
  );
}
