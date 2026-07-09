import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Container({ className = "", children }) {
  return <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "center", className = "" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignment} gap-4 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`font-display font-bold text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight ${align === "left" ? "" : "max-w-3xl"}`}>
        {title}
      </h2>
      {body && (
        <p className={`text-slate-400 text-base sm:text-lg leading-relaxed ${align === "left" ? "max-w-2xl" : "max-w-2xl"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({ children, to, href, className = "", icon = true, ...props }) {
  const classes = `inline-flex items-center gap-1.5 rounded-full bg-brand-400 text-ink-950 px-6 py-3 text-sm font-semibold hover:bg-brand-300 transition-colors shadow-glow ${className}`;
  const content = (
    <>
      {children}
      {icon && <ArrowUpRight className="h-4 w-4" />}
    </>
  );
  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  return <a href={href} className={classes} {...props}>{content}</a>;
}

export function SecondaryButton({ children, to, href, className = "", ...props }) {
  const classes = `inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white px-6 py-3 text-sm font-semibold hover:bg-white/5 hover:border-white/30 transition-colors ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  return <a href={href} className={classes} {...props}>{children}</a>;
}
