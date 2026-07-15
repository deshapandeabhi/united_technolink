import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Container({ className = "", children }) {
  return <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm sm:text-base font-semibold uppercase tracking-widest ${
        light
          ? "border-brand-400/30 bg-brand-400/10 text-brand-400"
          : "border-brand-500/25 bg-brand-50 text-brand-700"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${light ? "bg-brand-400" : "bg-brand-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "center", light = false, className = "" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignment} gap-4 ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight ${light ? "text-white" : "text-ink-900"} ${align === "left" ? "" : "max-w-3xl"}`}>
        {title}
      </h2>
      {body && (
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${light ? "text-white/75" : "text-[#5b6b60]"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({ children, to, href, className = "", icon = true, ...props }) {
  const classes = `inline-flex items-center gap-1.5 rounded-full bg-brand-500 text-white px-6 py-3 text-sm font-semibold hover:bg-brand-600 transition-colors ${className}`;
  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" />}
    </>
  );
  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  return <a href={href} className={classes} {...props}>{content}</a>;
}

export function SecondaryButton({ children, to, href, light = false, className = "", ...props }) {
  const classes = `inline-flex items-center gap-1.5 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
    light
      ? "border-white/40 text-white hover:bg-white/10"
      : "border-ink-900/15 text-ink-900 hover:bg-ink-900/5"
  } ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  return <a href={href} className={classes} {...props}>{children}</a>;
}
