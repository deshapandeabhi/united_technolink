export default function Logo({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M32 6 L48 22 L38.5 22 L32 15.5 L25.5 22 L16 22 Z" fill="#9dd177" />
      <path d="M12 26 L28 26 L20 34 L28 42 L20 50 L4 34 Z" fill="#7fbf50" />
      <path d="M52 26 L36 26 L44 34 L36 42 L44 50 L60 34 Z" fill="#4f8628" />
      <path d="M32 58 L16 42 L25.5 42 L32 48.5 L38.5 42 L48 42 Z" fill="#64a534" />
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      UNITED <span className="text-gradient">TECHNOLINK</span>
    </span>
  );
}
