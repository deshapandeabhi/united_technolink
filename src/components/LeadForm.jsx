import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const inputClasses =
  "w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15 transition-all";

const inquiryOptions = [
  "IT Infrastructure & Datacenter",
  "Networking & Security",
  "Cloud Solutions",
  "Products & Hardware",
  "General Inquiry",
];

export default function LeadForm({ className = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", inquiry: "", phone: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-start gap-3 rounded-xl bg-white border border-black/10 p-6 ${className}`}>
        <CheckCircle2 className="h-8 w-8 text-brand-500" />
        <p className="font-display font-semibold text-ink-900 text-lg">
          Thanks, {form.name.split(" ")[0] || "there"} — request received.
        </p>
        <p className="text-sm text-[#5b6b60]">We'll get back to you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3.5 ${className}`}>
      <div className="grid sm:grid-cols-2 gap-3.5">
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" className={inputClasses} />
        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className={inputClasses} />
      </div>
      <select name="inquiry" value={form.inquiry} onChange={handleChange} className={`${inputClasses} text-ink-900/80`}>
        <option value="">What is your inquiry about?</option>
        {inquiryOptions.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className={inputClasses} />
      <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Message Details!" className={inputClasses} />
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 text-white px-6 py-3.5 text-sm font-semibold hover:bg-brand-600 transition-colors w-full sm:w-auto"
      >
        Submit Request
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
