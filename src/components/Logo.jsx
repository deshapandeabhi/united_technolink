import logoMark from "../assets/logo-mark.png";

export default function Logo({ className = "h-9 w-9" }) {
  return <img src={logoMark} alt="United Technolink" className={`${className} object-contain`} />;
}

export function Wordmark({ className = "" }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      UNITED <span className="text-brand-600">TECHNOLINK</span>
    </span>
  );
}
