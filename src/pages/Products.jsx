import { motion } from "framer-motion";
import { Laptop, HardDrive, Radio, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { Container, PrimaryButton, Eyebrow } from "../components/UI";
import { products } from "../data/content";
import PartnerMarquee from "../components/PartnerMarquee";

const iconMap = { Laptop, HardDrive, Radio, ShieldCheck, Lock };

export default function Products() {
  return (
    <div>
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden section-glow">
        <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="flex justify-center">
            <Eyebrow>Products</Eyebrow>
          </div>
          <h1 className="mt-5 sm:mt-6 text-center font-display font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight max-w-4xl mx-auto">
            Industry-leading IT hardware &amp; infrastructure, under one roof
          </h1>
          <p className="mt-5 sm:mt-6 text-center text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            United Technolink brings together industry-leading IT hardware solutions and
            comprehensive infrastructure services to address the evolving technology needs of
            modern businesses — backed by over a decade of expertise in system integration and
            distribution of world-class IT products.
          </p>
        </Container>
      </section>

      <section className="pb-8 sm:pb-10">
        <Container>
          <PartnerMarquee />
        </Container>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-5 sm:gap-8">
            {products.map((p, i) => {
              const Icon = iconMap[p.icon] || Laptop;
              const reverse = i % 2 === 1;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl card-surface p-6 sm:p-8 lg:p-12"
                >
                  <div className="grid md:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-center">
                    <div className={`md:col-span-3 ${reverse ? "md:order-2" : "md:order-1"}`}>
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-brand-400/15 flex items-center justify-center">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-300" />
                      </div>
                      <p className="mt-5 sm:mt-6 text-xs font-semibold uppercase tracking-widest text-brand-300">
                        {p.tagline}
                      </p>
                      <h2 className="mt-2.5 sm:mt-3 font-display font-bold text-white text-xl sm:text-2xl lg:text-3xl tracking-tight">
                        {p.title}
                      </h2>
                      <p className="mt-3.5 sm:mt-4 text-slate-400 leading-relaxed max-w-xl">{p.body}</p>
                    </div>
                    <div className={`md:col-span-2 ${reverse ? "md:order-1" : "md:order-2"}`}>
                      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3.5 sm:mb-4">
                          Capabilities
                        </p>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {p.tags.map((t) => (
                            <li key={t} className="flex items-center gap-2.5 text-sm text-slate-300">
                              <CheckCircle2 className="h-4.5 w-4.5 text-brand-400 shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 border-t border-white/5">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600/25 via-ink-800 to-cyan-glow/10 border border-brand-400/20 px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 text-center">
            <h2 className="font-display font-bold text-white text-xl sm:text-3xl tracking-tight max-w-2xl mx-auto">
              Need help choosing the right hardware for your business?
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto">
              Our certified experts will assess your requirements and recommend a tailored solution.
            </p>
            <div className="mt-7 sm:mt-8 flex justify-center">
              <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Request a Product Consultation</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
