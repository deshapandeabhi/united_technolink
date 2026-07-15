import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, Building2 } from "lucide-react";
import { Container } from "../components/UI";
import PageHero from "../components/PageHero";
import { contact } from "../data/content";
import contactCloudOfficeImg from "../assets/page_hero_images/contact-cloud-office.webp";
import contactSecurityShieldImg from "../assets/page_hero_images/contact-security-shield.webp";
import contactCloudNetworkImg from "../assets/page_hero_images/contact-cloud-network.webp";
import contactCybersecurityImg from "../assets/page_hero_images/contact-cybersecurity-collage.webp";

const inputClasses =
  "w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15 transition-all";

const heroImages = [contactCloudOfficeImg, contactSecurityShieldImg, contactCloudNetworkImg, contactCybersecurityImg];

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
      <PageHero
        eyebrow="Contact Us"
        title="Let's build your future-ready IT environment"
        body="Delivering exceptional service, lasting partnerships, and IT solutions tailored to your business. Reach out and our certified experts will get back to you."
        images={heroImages}
      />

      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
            {/* Info column */}
            <div className="md:col-span-2 flex flex-col gap-5 sm:gap-6">
              <div className="rounded-2xl bg-[#eef4e0] border border-black/5 p-6 sm:p-8">
                <h3 className="font-display font-semibold text-ink-900 text-lg">Drop by!</h3>
                <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-500 shadow-card flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">Office Address</p>
                      <p className="mt-1 text-sm text-[#5b6b60] leading-relaxed">{contact.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-500 shadow-card flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">Call Us</p>
                      <p className="mt-1 text-sm text-[#5b6b60]">+91 99023 90015</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-500 shadow-card flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">Email Us</p>
                      <p className="mt-1 text-sm text-[#5b6b60]">info@unitedtechnolink.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-500 shadow-card flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">Working Hours</p>
                      <p className="mt-1 text-sm text-[#5b6b60]">Mon – Sat: 9:30 AM – 6:30 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-brand-500 shadow-card flex items-center justify-center shrink-0">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">{contact.legalName}</p>
                      <p className="mt-1 text-sm text-[#5b6b60]">GSTIN: {contact.gst}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/5 h-52 sm:h-64">
                <iframe
                  title="United Technolink location"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=16th+Main+Road,+36th+Cross+Road,+4th+T+Block,+Jayanagar,+Bangalore+560041&output=embed"
                />
              </div>
            </div>

            {/* Form column */}
            <div className="md:col-span-3">
              <div className="rounded-2xl bg-[#eef4e0] border border-black/5 p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 sm:py-16"
                  >
                    <div className="h-16 w-16 rounded-full bg-brand-50 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-brand-500" />
                    </div>
                    <h3 className="mt-6 font-display font-semibold text-ink-900 text-xl">
                      Thank you, {form.name.split(" ")[0] || "there"}!
                    </h3>
                    <p className="mt-2 text-[#5b6b60] max-w-sm">
                      Your message has been received. One of our certified specialists will
                      reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-7 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    <h3 className="font-display font-semibold text-ink-900 text-lg">
                      Tell us about your project
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-medium text-ink-500 mb-2">Full Name *</label>
                        <input
                          required name="name" value={form.name} onChange={handleChange}
                          className={inputClasses} placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-500 mb-2">Company</label>
                        <input
                          name="company" value={form.company} onChange={handleChange}
                          className={inputClasses} placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-500 mb-2">Email *</label>
                        <input
                          required type="email" name="email" value={form.email} onChange={handleChange}
                          className={inputClasses} placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-500 mb-2">Phone</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          className={inputClasses} placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink-500 mb-2">How can we help? *</label>
                      <textarea
                        required rows={5} name="message" value={form.message} onChange={handleChange}
                        className={inputClasses} placeholder="Tell us about your infrastructure, networking, security, or cloud requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 text-white px-6 py-3.5 text-sm font-semibold hover:bg-brand-600 transition-colors"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-ink-500 text-center">
                      By submitting, you agree to be contacted by United Technolink Pvt. Ltd regarding your inquiry.
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
