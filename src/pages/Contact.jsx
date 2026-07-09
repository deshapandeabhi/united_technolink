import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Container, Eyebrow } from "../components/UI";
import { contact } from "../data/content";

const inputClasses =
  "w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20 transition-all";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden section-glow">
        <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="flex justify-center">
            <Eyebrow>Contact Us</Eyebrow>
          </div>
          <h1 className="mt-5 sm:mt-6 text-center font-display font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight max-w-4xl mx-auto">
            Let's build your future-ready IT environment
          </h1>
          <p className="mt-5 sm:mt-6 text-center text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering exceptional service, lasting partnerships, and IT solutions
            tailored to your business. Reach out and our certified experts will get back
            to you.
          </p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <Container>
          <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
            {/* Info column */}
            <div className="md:col-span-2 flex flex-col gap-5 sm:gap-6">
              <div className="rounded-3xl card-surface p-6 sm:p-8">
                <h3 className="font-display font-semibold text-white text-lg">Drop by!</h3>
                <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-400/15 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-brand-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Office Address</p>
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">{contact.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-400/15 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-brand-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Call Us</p>
                      <p className="mt-1 text-sm text-slate-400">+91 80 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-400/15 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-brand-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Email Us</p>
                      <p className="mt-1 text-sm text-slate-400">info@unitedtechnolink.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-400/15 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-brand-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Working Hours</p>
                      <p className="mt-1 text-sm text-slate-400">Mon – Sat: 9:30 AM – 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden card-surface h-52 sm:h-64">
                <iframe
                  title="United Technolink location"
                  className="w-full h-full grayscale-[40%] contrast-125 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=16th+Main+Road,+36th+Cross+Road,+4th+T+Block,+Jayanagar,+Bangalore+560041&output=embed"
                />
              </div>
            </div>

            {/* Form column */}
            <div className="md:col-span-3">
              <div className="rounded-3xl card-surface p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 sm:py-16"
                  >
                    <div className="h-16 w-16 rounded-full bg-brand-400/15 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-brand-400" />
                    </div>
                    <h3 className="mt-6 font-display font-semibold text-white text-xl">
                      Thank you, {form.name.split(" ")[0] || "there"}!
                    </h3>
                    <p className="mt-2 text-slate-400 max-w-sm">
                      Your message has been received. One of our certified specialists will
                      reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-7 text-sm font-semibold text-brand-300 hover:text-brand-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    <h3 className="font-display font-semibold text-white text-lg">
                      Tell us about your project
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">Full Name *</label>
                        <input
                          required name="name" value={form.name} onChange={handleChange}
                          className={inputClasses} placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">Company</label>
                        <input
                          name="company" value={form.company} onChange={handleChange}
                          className={inputClasses} placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">Email *</label>
                        <input
                          required type="email" name="email" value={form.email} onChange={handleChange}
                          className={inputClasses} placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">Phone</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          className={inputClasses} placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">How can we help? *</label>
                      <textarea
                        required rows={5} name="message" value={form.message} onChange={handleChange}
                        className={inputClasses} placeholder="Tell us about your infrastructure, networking, security, or cloud requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-400 text-ink-950 px-6 py-3.5 text-sm font-semibold hover:bg-brand-300 transition-colors shadow-glow"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to be contacted by United Technolink regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
