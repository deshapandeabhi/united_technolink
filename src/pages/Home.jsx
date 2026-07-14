import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Phone, Server, ShieldCheck, Cloud, Network,
  SearchCheck, ClipboardList, LifeBuoy, Award, Handshake, Layers, Sparkles,
  BadgeCheck, TrendingUp,
} from "lucide-react";
import { Container, PrimaryButton, SecondaryButton } from "../components/UI";
import PartnerMarquee from "../components/PartnerMarquee";
import LeadForm from "../components/LeadForm";
import HeroSlider from "../components/HeroSlider";
import {
  stats, whyChooseUs, valueProps, processSteps, homeFeatureCards,
} from "../data/content";
import itConsultingImg from "../assets/home_images/it-consulting.jpg";
import processPlanningImg from "../assets/home_images/process-planning.jpg";
import cloudFeatureImg from "../assets/home_images/cloud-feature.webp";
import datacenterFeatureImg from "../assets/home_images/datacenter-feature.jpg";
import networkSecurityFeatureImg from "../assets/home_images/network-security-feature.jpg";
import tileCablingImg from "../assets/home_images/tile-cabling.jpg";
import tileSecurityImg from "../assets/home_images/tile-security.jpg";
import tileHardwareImg from "../assets/home_images/tile-hardware.jpg";
import tileCloudImg from "../assets/home_images/tile-cloud.jpg";

const iconMap = {
  Sparkles, Handshake, BadgeCheck, TrendingUp, Layers, Network, ShieldCheck,
  Server, Cloud, SearchCheck, ClipboardList, LifeBuoy, Award,
};

const homeFeatureCardImages = [datacenterFeatureImg, networkSecurityFeatureImg, cloudFeatureImg];
const montageTileImages = {
  "Enterprise Hardware": tileHardwareImg,
  "Structured Cabling": tileCablingImg,
  "Network Security": tileSecurityImg,
  "Cloud Integration": tileCloudImg,
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-center">
        <HeroSlider>
          {(slide) => (
            <Container className="pt-24 sm:pt-28 lg:pt-32">
              <span className="inline-block text-brand-300 text-sm font-semibold uppercase tracking-widest">
                {slide.eyebrow}
              </span>
              <h1 className="mt-4 font-display font-semibold text-white text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.15] sm:leading-[1.08] tracking-tight max-w-3xl">
                {slide.title}
              </h1>
              <p className="mt-5 sm:mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed">
                {slide.body}
              </p>
              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Get a Consultation</PrimaryButton>
                <SecondaryButton to="/expertise" light className="w-full sm:w-auto justify-center">Explore Our Expertise</SecondaryButton>
              </div>
            </Container>
          )}
        </HeroSlider>
      </section>

      {/* VALUE PROPS ROW */}
      <section className="bg-white border-b border-black/5">
        <Container className="py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valueProps.map((v, i) => {
              const Icon = iconMap[v.icon] || Server;
              return (
                <div key={v.label} className="flex items-center gap-3">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-brand-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-ink-900 leading-snug">{v.label}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ABOUT / CONSULTING SPLIT */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative rounded-2xl overflow-hidden bg-ink-950 aspect-[4/3] p-7 sm:p-9 flex flex-col justify-center"
            >
              <img src={itConsultingImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/40" />
              <div className="relative">
                <p className="text-white font-display font-semibold text-xl sm:text-2xl leading-snug">
                  Driving Innovation in<br />IT &amp; Integration
                </p>
                <p className="mt-2 text-white/50 text-sm">Delivering intelligent solutions for a connected future</p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    { icon: Server, label: "Datacenter" },
                    { icon: ShieldCheck, label: "Cybersecurity" },
                    { icon: Cloud, label: "Cloud" },
                    { icon: Network, label: "Networking" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/[0.06] border border-white/10 p-4 flex flex-col gap-2.5">
                      <item.icon className="h-5 w-5 text-brand-400" />
                      <span className="text-xs font-medium text-white/90">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest">
                Assess, Plan, Deploy, Manage Complete IT Solutions
              </p>
              <h2 className="mt-3 font-display font-semibold text-ink-900 text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
                IT Infrastructure Consulting &amp; Services
              </h2>
              <p className="mt-5 text-[#5b6b60] leading-relaxed">
                United Technolink Pvt. Ltd, with over a decade of expertise, delivers comprehensive
                infrastructure, networking, and cybersecurity solutions. We empower enterprises and
                government organizations with digital transformation, cloud integration, advanced
                security, and future-ready technologies.
              </p>
              <ul className="mt-6 space-y-3">
                {["Lenovo Certified Regional Distributor", "Smart Integration across enterprise systems", "Deep domain expertise across IT infrastructure"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryButton to="/expertise">More About Us</PrimaryButton>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* BIG GREEN SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
          >
            <div>
              <div className="h-6 w-14 border-t-2 border-white/70 mb-4" />
              <h2 className="font-display font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
                United Technolink Connects Businesses With Innovative Solutions, Ensuring Secure,
                Scalable, And Future-Ready Digital Growth
              </h2>
            </div>
            <p className="text-white/85 leading-relaxed lg:pt-16">
              United Technolink delivers next-generation infrastructure solutions designed to power
              agile, secure, and intelligent enterprises. Our expertise spans datacenter design,
              enterprise networking, cybersecurity, structured cabling, and cloud-ready IT
              environments — backed by strategic partnerships with Lenovo, HPE, HP, Aruba, Cisco,
              VMware, Veeam, Belden, and CommScope. We architect scalable, future-proof technology
              that adapts to evolving business demands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {[
              { icon: Server, label: "Enterprise Hardware" },
              { icon: Network, label: "Structured Cabling" },
              { icon: ShieldCheck, label: "Network Security" },
              { icon: Cloud, label: "Cloud Integration" },
            ].map((item) => {
              const photo = montageTileImages[item.label];
              return (
                <div key={item.label} className="relative rounded-xl overflow-hidden aspect-square border border-white/15">
                  {photo ? (
                    <>
                      <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                      <span className="absolute bottom-2.5 inset-x-2.5 text-xs sm:text-sm font-medium text-white text-center">{item.label}</span>
                    </>
                  ) : (
                    <div className="h-full w-full bg-white/10 flex flex-col items-center justify-center gap-2.5 text-center p-3">
                      <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      <span className="text-xs sm:text-sm font-medium text-white/90">{item.label}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* FEATURE CARDS ON BRAND GREEN */}
      <section className="py-16 sm:py-24 lg:py-28 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern opacity-20" />
        <Container className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {homeFeatureCards.map((c, i) => {
              const Icon = iconMap[c.icon] || Server;
              const photo = homeFeatureCardImages[i];
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 bg-ink-950 flex items-center justify-center relative">
                    {photo ? (
                      <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <>
                        <div className="absolute inset-0 line-pattern opacity-40" />
                        <Icon className="h-14 w-14 text-brand-400 relative" />
                      </>
                    )}
                  </div>
                  <Icon className="h-7 w-7 text-white" />
                  <h3 className="mt-4 font-display font-semibold text-white text-lg sm:text-xl leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-white/80 leading-relaxed">{c.body}</p>
                  <ul className="mt-4 space-y-2 border-t border-white/20 pt-4">
                    {c.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/expertise" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-ink-950 transition-colors">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PROCESS FLOW */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-full min-h-[22rem]"
            >
              <img src={processPlanningImg} alt="Team collaborating on IT strategy and planning" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Our Process Flow</p>
              <h2 className="mt-3 font-display font-semibold text-ink-900 text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
                Our Workflow: Delivering Excellence, Step By Step
              </h2>
              <p className="mt-5 text-[#5b6b60] leading-relaxed">
                At United Technolink, we take pride in delivering solutions with precision, passion,
                and absolute reliability — combining technical expertise and a customer-first
                approach to put our clients at the center of every solution we build.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-7">
                {processSteps.map((s) => {
                  const Icon = iconMap[s.icon] || Server;
                  return (
                    <div key={s.title}>
                      <Icon className="h-6 w-6 text-brand-500" />
                      <h3 className="mt-3 font-display font-semibold text-ink-900 text-base">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-[#5b6b60] leading-relaxed">{s.body}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#f6faf1] border-y border-black/5">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-10 sm:mb-14">
            <div>
              <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Our Partners</p>
              <h2 className="mt-3 font-display font-semibold text-ink-900 text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
                Backed By Leading Global Technology Brands
              </h2>
            </div>
            <p className="text-[#5b6b60] leading-relaxed">
              Our strong alliances with Lenovo, Hewlett Packard Enterprise, HP, Aruba Networking,
              Cisco, VMware, Veeam, Belden, and CommScope ensure our customers receive world-class
              products, expert support, and future-ready technologies.
            </p>
          </div>
          <PartnerMarquee fadeColor="from-[#f6faf1]" />
        </Container>
      </section>

      {/* CALL BANNER */}
      <section className="bg-ink-950 relative overflow-hidden">
        <Container className="relative py-14 sm:py-20">
          <div className="grid sm:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest">Call Us</p>
              <a href="tel:+918000000000" className="mt-2 block font-display font-semibold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight hover:text-brand-400 transition-colors">
                +91 80 0000 0000
              </a>
              <p className="mt-4 text-white/60 max-w-lg leading-relaxed">
                Our proficient team of IT and infrastructure engineers are ready to assist you
                around the clock. We are just one call away from you.
              </p>
              <div className="mt-7">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-ink-950 px-7 py-3.5 text-sm font-semibold hover:bg-brand-50 transition-colors">
                  Let's Talk
                </Link>
              </div>
            </div>
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 mx-auto shrink-0">
              <span className="absolute inset-0 rounded-full bg-brand-500/25 animate-ping-slow" />
              <span className="absolute inset-4 rounded-full bg-brand-500/25" />
              <span className="absolute inset-9 rounded-full bg-white flex items-center justify-center">
                <Phone className="h-7 w-7 text-brand-600" />
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US + LEAD FORM */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden">
            <div className="bg-brand-500 px-6 py-12 sm:px-10 sm:py-16 lg:p-16">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">Why Choose Us</p>
              <h2 className="mt-3 font-display font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
                We Are a Trusted IT &amp; Infrastructure Solution Provider With Over a Decade of Experience
              </h2>
              <p className="mt-5 text-white/85 leading-relaxed">
                United Technolink Pvt. Ltd has served enterprises, SMEs, educational institutions,
                healthcare organizations, and government customers for over a decade — backed by
                certified engineers and strategic technology partnerships.
              </p>
              <div className="mt-8 space-y-6">
                {whyChooseUs.slice(0, 3).map((w) => {
                  const Icon = iconMap[w.icon] || Sparkles;
                  return (
                    <div key={w.title} className="flex gap-4">
                      <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-base">{w.title}</h3>
                        <p className="mt-1 text-sm text-white/75 leading-relaxed">{w.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#f6faf1] px-6 py-12 sm:px-10 sm:py-16 lg:p-16">
              <h2 className="font-display font-semibold text-ink-900 text-2xl sm:text-3xl tracking-tight">
                Get Every Update!
              </h2>
              <p className="mt-3 text-[#5b6b60] leading-relaxed">
                For all the recent updates, queries, and information, fill the form below. We will
                get in touch with you within 24 hours.
              </p>
              <LeadForm className="mt-7" />
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="py-14 sm:py-16 bg-white border-t border-black/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {stats.map((s) => {
              const Icon = iconMap[s.icon] || Award;
              return (
                <div key={s.label} className="text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-3">
                  <Icon className="h-8 w-8 text-brand-500 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-3xl sm:text-4xl text-ink-900">{s.value}</div>
                    <div className="mt-0.5 text-xs sm:text-sm text-[#5b6b60]">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
