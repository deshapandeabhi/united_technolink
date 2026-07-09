import { motion } from "framer-motion";
import {
  ArrowUpRight, ShieldCheck, Server, Cloud, Network, Sparkles, Handshake,
  BadgeCheck, TrendingUp, Layers, CheckCircle2, Laptop, HardDrive, Radio, Lock,
} from "lucide-react";
import { Container, SectionHeading, PrimaryButton, SecondaryButton, Eyebrow } from "../components/UI";
import PartnerMarquee from "../components/PartnerMarquee";
import { stats, whyChooseUs, products } from "../data/content";

const iconMap = { Sparkles, Handshake, BadgeCheck, TrendingUp, Layers, Network, ShieldCheck, Server, Cloud, Laptop, HardDrive, Radio, Lock };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden section-glow">
        <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-20 right-[10%] h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-brand-500/20 blur-[90px] sm:blur-[110px] animate-float-slow" />
        <div className="absolute top-40 left-[5%] h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-cyan-glow/10 blur-[90px] sm:blur-[110px]" />

        <Container className="relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0} className="flex justify-center">
            <Eyebrow>End-to-End IT Infrastructure &amp; Cybersecurity</Eyebrow>
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} custom={1}
            className="mt-5 sm:mt-7 text-center font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] tracking-tight max-w-5xl mx-auto"
          >
            Secure, Scalable &amp;{" "}
            <span className="text-gradient">Future-Ready</span> Technology Environments
          </motion.h1>

          <motion.p
            initial="hidden" animate="show" variants={fadeUp} custom={2}
            className="mt-5 sm:mt-7 text-center text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            United Technolink is a leading provider of IT infrastructure, networking,
            cybersecurity, cloud, and digital workplace solutions — helping organizations
            design, deploy, and manage technology that accelerates digital transformation.
          </motion.p>

          <motion.div
            initial="hidden" animate="show" variants={fadeUp} custom={3}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Get a Free Consultation</PrimaryButton>
            <SecondaryButton to="/expertise" className="w-full sm:w-auto justify-center">Explore Our Expertise</SecondaryButton>
          </motion.div>

          <motion.div
            initial="hidden" animate="show" variants={fadeUp} custom={4}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">{s.value}</div>
                <div className="mt-1.5 text-xs sm:text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>

        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/5 pt-8 sm:pt-10">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-5 sm:mb-6 px-5">
            Strategic partnerships with global technology leaders
          </p>
          <PartnerMarquee />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-white/5 relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>About United Technolink</Eyebrow>
              <h2 className="mt-5 font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.15] sm:leading-[1.1] tracking-tight">
                Over a decade of expertise in system integration &amp; IT modernization
              </h2>
              <p className="mt-5 sm:mt-6 text-slate-400 leading-relaxed">
                We help organizations design, deploy, and manage customized technology
                solutions that enhance operational efficiency, strengthen security, and
                accelerate digital transformation. Our expertise spans enterprise computing,
                networking, datacenters, cloud, collaboration, storage, backup, and cybersecurity.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                From consulting and solution design to implementation and ongoing support,
                we provide end-to-end services tailored to each customer's business objectives —
                backed by strategic partnerships with Lenovo, HPE, HP, Aruba, Cisco, VMware,
                Veeam, Belden, and CommScope.
              </p>
              <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-3.5 sm:gap-4">
                {["Enterprise Computing", "Networking & Datacenters", "Cloud & Collaboration", "Storage, Backup & Security"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-brand-400 shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 sm:mt-9">
                <PrimaryButton to="/expertise" className="w-full sm:w-auto justify-center">Discover Our Expertise</PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl card-surface p-5 sm:p-8 shadow-glow">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: Server, label: "Datacenter Solutions" },
                    { icon: ShieldCheck, label: "Cybersecurity" },
                    { icon: Cloud, label: "Cloud Infrastructure" },
                    { icon: Network, label: "Networking" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:border-brand-400/40 transition-colors">
                      <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-brand-400/15 flex items-center justify-center">
                        <item.icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-brand-300" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 sm:mt-4 rounded-2xl bg-gradient-to-br from-brand-500/20 to-cyan-glow/10 border border-brand-400/20 p-5 sm:p-6">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "Trusted by enterprises, SMEs, educational institutions, healthcare
                    organizations, and government customers for over a decade."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-white/5 bg-ink-900/40">
        <Container>
          <SectionHeading
            eyebrow="What We Deliver"
            title="Products &amp; solutions built for how business runs today"
            body="From business computing to enterprise-grade security, we deliver reliable, scalable technology across the full IT stack."
          />
          <div className="mt-10 sm:mt-14 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {products.map((p, i) => {
              const Icon = iconMap[p.icon] || Server;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="group rounded-2xl card-surface p-6 sm:p-7 hover:shadow-glow transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-brand-400/15 flex items-center justify-center group-hover:bg-brand-400/25 transition-colors">
                    <Icon className="h-6 w-6 text-brand-300" />
                  </div>
                  <h3 className="mt-4 sm:mt-5 font-display font-semibold text-white text-lg">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-9 sm:mt-12 flex justify-center">
            <SecondaryButton to="/products" className="w-full sm:w-auto justify-center">View All Products</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-white/5">
        <Container>
          <SectionHeading
            eyebrow="Why United Technolink"
            title="Built on trust, expertise, and long-term partnerships"
            body="A customer-centric approach that enables organizations to build secure, scalable, and future-ready IT environments."
          />
          <div className="mt-10 sm:mt-14 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyChooseUs.map((w, i) => {
              const Icon = iconMap[w.icon] || Sparkles;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="rounded-2xl border border-white/8 p-6 sm:p-7 hover:border-brand-400/30 hover:bg-white/[0.02] transition-all"
                >
                  <Icon className="h-7 w-7 text-brand-400" />
                  <h3 className="mt-4 sm:mt-5 font-display font-semibold text-white text-lg">{w.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{w.body}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28 border-t border-white/5">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600/25 via-ink-800 to-cyan-glow/10 border border-brand-400/20 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
            <div className="absolute inset-0 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            <div className="relative">
              <h2 className="font-display font-bold text-white text-2xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-3xl mx-auto">
                Ready to build a secure, future-ready IT environment?
              </h2>
              <p className="mt-4 sm:mt-5 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
                Talk to our certified experts and get a tailored technology roadmap for your business.
              </p>
              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Contact Our Experts</PrimaryButton>
                <SecondaryButton to="/advanced-technologies" className="w-full sm:w-auto justify-center">See Advanced Technologies</SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
