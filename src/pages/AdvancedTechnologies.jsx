import { motion } from "framer-motion";
import { Cpu, ArrowRight, Cloud } from "lucide-react";
import { Container, PrimaryButton } from "../components/UI";
import PageHero from "../components/PageHero";
import { advancedTech } from "../data/content";
import privateCloudImg from "../assets/advanced_tech_images/private-cloud.webp";
import multiCloudImg from "../assets/advanced_tech_images/multi-cloud.webp";
import hybridCloudImg from "../assets/advanced_tech_images/hybrid-cloud.webp";
import turnkeyDeploymentImg from "../assets/advanced_tech_images/turnkey-deployment.webp";
import neuralNetworkImg from "../assets/page_hero_images/advtech-neural-network.webp";
import smartCityImg from "../assets/page_hero_images/advtech-smart-city.webp";
import aiInterfaceImg from "../assets/page_hero_images/advtech-ai-interface.webp";
import quantumCrystalImg from "../assets/page_hero_images/advtech-quantum-crystal.webp";

const cloudTileImages = {
  "Private Cloud": privateCloudImg,
  "Multi-Cloud": multiCloudImg,
  "Hybrid Cloud": hybridCloudImg,
  "Turnkey Deployments": turnkeyDeploymentImg,
};
const heroImages = [neuralNetworkImg, smartCityImg, aiInterfaceImg, quantumCrystalImg];

export default function AdvancedTechnologies() {
  return (
    <div>
      <PageHero
        eyebrow="Advanced Technologies"
        title="Powered by Lenovo ThinkAgile — hyperconverged infrastructure, simplified"
        body="Modernize your infrastructure with pre-validated, factory-configured platforms engineered for rapid deployment, reduced management overhead, and future-ready scalability."
        images={heroImages}
      />

      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid gap-5 sm:gap-6">
            {advancedTech.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                className="rounded-2xl bg-[#f6faf1] border border-black/5 p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-start gap-4 sm:gap-5 flex-wrap">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white shadow-card flex items-center justify-center shrink-0">
                    <Cpu className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                      {t.tagline}
                    </p>
                    <h2 className="mt-1.5 font-display font-semibold text-ink-900 text-xl sm:text-2xl tracking-tight">
                      {t.title}
                    </h2>
                  </div>
                </div>

                {t.body && (
                  <p className="mt-5 sm:mt-6 text-[#5b6b60] leading-relaxed max-w-3xl">{t.body}</p>
                )}

                {t.points.length > 0 && (
                  <div className="mt-5 sm:mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {t.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5">
                        <ArrowRight className="h-4.5 w-4.5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-ink-800 leading-relaxed">{pt}</span>
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
      <section className="py-16 sm:py-24 lg:py-28 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern opacity-25" />
        <Container className="relative">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/15 flex items-center justify-center">
                <Cloud className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h2 className="mt-5 sm:mt-6 font-display font-semibold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                Cloud solutions tailored to your business
              </h2>
              <p className="mt-4 sm:mt-5 text-white/85 leading-relaxed">
                We deliver comprehensive cloud solutions tailored to your unique business
                requirements. From private, hybrid, and multi-cloud environments to fully
                customized and turnkey deployments, our cloud expertise ensures seamless
                implementation, enhanced scalability, and secure, future-ready infrastructure.
              </p>
              <p className="mt-4 text-white/85 leading-relaxed">
                With industry-leading technologies and professional services, we empower your
                organization to accelerate digital transformation with confidence.
              </p>
              <div className="mt-7 sm:mt-8">
                <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center !bg-white !text-brand-700 hover:!bg-brand-50">
                  Plan Your Cloud Journey
                </PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3.5 sm:gap-4"
            >
              {["Private Cloud", "Hybrid Cloud", "Multi-Cloud", "Turnkey Deployments"].map((c) => (
                <div key={c} className="relative rounded-2xl overflow-hidden aspect-square border border-white/20">
                  <img src={cloudTileImages[c]} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                  <span className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 text-xs sm:text-sm font-medium text-white">{c}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <Container>
          <div className="relative rounded-2xl overflow-hidden bg-ink-950 px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 text-center">
            <div className="absolute inset-0 line-pattern opacity-40" />
            <div className="relative">
              <h2 className="font-display font-semibold text-white text-xl sm:text-3xl tracking-tight max-w-2xl mx-auto">
                Not sure which platform fits your workloads?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">
                Our engineers will map your requirements to the right ThinkAgile configuration.
              </p>
              <div className="mt-7 sm:mt-8 flex justify-center">
                <PrimaryButton to="/contact" className="w-full sm:w-auto justify-center">Speak with an Engineer</PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
