import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Database, ShieldCheck, Cable, Wifi, Boxes, LifeBuoy, Cpu,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { Container, PrimaryButton } from "../components/UI";
import PageHero from "../components/PageHero";
import { expertise } from "../data/content";
import expertiseGlobeImg from "../assets/page_hero_images/expertise-global-network.webp";
import expertiseShieldImg from "../assets/page_hero_images/expertise-cybersecurity-shield.webp";
import expertiseAiCloudImg from "../assets/page_hero_images/expertise-ai-cloud.webp";
import expertiseHexNetworkImg from "../assets/page_hero_images/expertise-hex-network.webp";

const iconMap = { Server, Database, ShieldCheck, Cable, Wifi, Boxes, LifeBuoy, Cpu };
const heroImages = [expertiseGlobeImg, expertiseShieldImg, expertiseAiCloudImg, expertiseHexNetworkImg];

export default function Expertise() {
  const [active, setActive] = useState(expertise[0].id);
  const current = expertise.find((e) => e.id === active);
  const Icon = iconMap[current.icon] || Server;

  return (
    <div>
      <PageHero
        eyebrow="Our Expertise"
        title="Deep domain expertise across the full IT infrastructure stack"
        body="From datacenter and storage to networking, virtualization, and enterprise security — our certified professionals deliver industry best practices to solve complex business challenges."
        images={heroImages}
      />

      <section className="py-12 sm:py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Sidebar nav */}
            <div className="min-w-0 lg:col-span-4 xl:col-span-3">
              <div className="relative lg:static">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 lg:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 lg:hidden" />
                <div className="lg:sticky lg:top-24 flex lg:flex-col gap-2.5 lg:gap-2 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-proximity pb-1 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0">
                  {expertise.map((e) => {
                    const ItemIcon = iconMap[e.icon] || Server;
                    const isActive = e.id === active;
                    return (
                      <button
                        key={e.id}
                        onClick={() => setActive(e.id)}
                        className={`shrink-0 snap-start lg:w-full flex items-center gap-2.5 lg:gap-3 rounded-full lg:rounded-xl px-4 py-2.5 lg:px-4 lg:py-3.5 text-left transition-all border whitespace-nowrap lg:whitespace-normal ${
                          isActive
                            ? "bg-brand-50 border-brand-500/30 text-brand-700"
                            : "border-black/8 text-ink-800/70 hover:text-brand-700 hover:border-brand-500/20 hover:bg-brand-50/50"
                        }`}
                      >
                        <span className={`h-7 w-7 lg:h-9 lg:w-9 rounded-full lg:rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-brand-500 text-white" : "bg-black/5 text-ink-500"}`}>
                          <ItemIcon className="h-3.5 w-3.5 lg:h-4.5 lg:w-4.5" />
                        </span>
                        <span className="text-xs lg:text-sm font-medium">
                          <span className="lg:hidden">{e.shortTitle}</span>
                          <span className="hidden lg:inline">{e.title}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 xl:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl bg-[#eef4e0] border border-black/5 p-6 sm:p-8 lg:p-12"
                >
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div>
                      <span className="font-display text-sm font-semibold text-brand-500/70">{current.number}</span>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
                        {current.tagline}
                      </p>
                      <h2 className="mt-2 font-display font-semibold text-ink-900 text-xl sm:text-2xl lg:text-3xl tracking-tight">
                        {current.title}
                      </h2>
                    </div>
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white shadow-card flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />
                    </div>
                  </div>

                  <p className="mt-5 sm:mt-6 text-[#5b6b60] leading-relaxed max-w-3xl">{current.body}</p>

                  {current.points.length > 0 && (
                    <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {current.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2.5">
                          <ArrowRight className="h-4.5 w-4.5 text-brand-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-ink-800 leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {current.services.length > 0 && (
                    <div className="mt-9 pt-8 border-t border-black/8">
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-5">
                        {current.id === "enterprise-security" ? "What We Offer" : "Services"}
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {current.services.map((s) => (
                          <div
                            key={s}
                            className="flex items-center gap-2.5 rounded-xl bg-white border border-black/5 px-4 py-3 hover:border-brand-500/30 transition-colors"
                          >
                            <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                            <span className="text-sm text-ink-800">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <PrimaryButton to="/contact">Talk to an Expert</PrimaryButton>
                    <span className="text-sm text-ink-500">
                      {expertise.findIndex((e) => e.id === active) + 1} of {expertise.length} capability areas
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
