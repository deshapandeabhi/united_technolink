import { motion } from "framer-motion";
import { Cpu, ArrowRight, Cloud } from "lucide-react";
import { Container, PrimaryButton, Eyebrow } from "../components/UI";
import { advancedTech } from "../data/content";

export default function AdvancedTechnologies() {
  return (
    <div>
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden section-glow">
        <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="flex justify-center">
            <Eyebrow>Advanced Technologies</Eyebrow>
          </div>
          <h1 className="mt-5 sm:mt-6 text-center font-display font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight max-w-4xl mx-auto">
            Powered by Lenovo ThinkAgile — hyperconverged infrastructure, simplified
          </h1>
          <p className="mt-5 sm:mt-6 text-center text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Modernize your infrastructure with pre-validated, factory-configured platforms
            engineered for rapid deployment, reduced management overhead, and future-ready
            scalability.
          </p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-28">
        <Container>
          <div className="grid gap-5 sm:gap-6">
            {advancedTech.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                className="rounded-3xl card-surface p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-start gap-4 sm:gap-5 flex-wrap">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-brand-400/15 flex items-center justify-center shrink-0">
                    <Cpu className="h-6 w-6 sm:h-7 sm:w-7 text-brand-300" />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                      {t.tagline}
                    </p>
                    <h2 className="mt-1.5 font-display font-bold text-white text-xl sm:text-2xl tracking-tight">
                      {t.title}
                    </h2>
                  </div>
                </div>

                {t.body && (
                  <p className="mt-5 sm:mt-6 text-slate-400 leading-relaxed max-w-3xl">{t.body}</p>
                )}

                {t.points.length > 0 && (
                  <div className="mt-5 sm:mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {t.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5">
                        <ArrowRight className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300 leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cloud section */}
      <section className="py-16 sm:py-24 lg:py-28 border-t border-white/5 bg-ink-900/40">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-brand-400/15 flex items-center justify-center">
                <Cloud className="h-6 w-6 sm:h-7 sm:w-7 text-brand-300" />
              </div>
              <h2 className="mt-5 sm:mt-6 font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                Cloud solutions tailored to your business
              </h2>
              <p className="mt-4 sm:mt-5 text-slate-400 leading-relaxed">
                We deliver comprehensive cloud solutions tailored to your unique business
                requirements. From private, hybrid, and multi-cloud environments to fully
                customized and turnkey deployments, our cloud expertise ensures seamless
                implementation, enhanced scalability, and secure, future-ready infrastructure.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                With industry-leading technologies and professional services, we empower your
                organization to accelerate digital transformation with confidence.
              </p>
              <div className="mt-7 sm:mt-8">
                <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Plan Your Cloud Journey</PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3.5 sm:gap-4"
            >
              {["Private Cloud", "Hybrid Cloud", "Multi-Cloud", "Turnkey Deployments"].map((c) => (
                <div key={c} className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-6 aspect-square flex flex-col justify-between hover:border-brand-400/40 transition-colors">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-brand-400/15 flex items-center justify-center">
                    <Cloud className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-brand-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white">{c}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600/25 via-ink-800 to-cyan-glow/10 border border-brand-400/20 px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 text-center">
            <h2 className="font-display font-bold text-white text-xl sm:text-3xl tracking-tight max-w-2xl mx-auto">
              Not sure which platform fits your workloads?
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto">
              Our engineers will map your requirements to the right ThinkAgile configuration.
            </p>
            <div className="mt-7 sm:mt-8 flex justify-center">
              <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Speak with an Engineer</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
