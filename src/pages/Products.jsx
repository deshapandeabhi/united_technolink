import { motion } from "framer-motion";
import { Laptop, HardDrive, Radio, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { Container, PrimaryButton } from "../components/UI";
import PageHero from "../components/PageHero";
import { products } from "../data/content";
import PartnerMarquee from "../components/PartnerMarquee";
import productsServersImg from "../assets/page_hero_images/products-servers.webp";
import productsNetworkImg from "../assets/page_hero_images/products-network-switches.webp";
import productsFiberImg from "../assets/page_hero_images/products-fiber-optic.webp";
import productsCloudCityImg from "../assets/page_hero_images/products-cloud-cityscape.webp";

const iconMap = { Laptop, HardDrive, Radio, ShieldCheck, Lock };
const heroImages = [productsServersImg, productsNetworkImg, productsFiberImg, productsCloudCityImg];

export default function Products() {
  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Industry-leading IT hardware & infrastructure, under one roof"
        body="United Technolink Pvt. Ltd brings together industry-leading IT hardware solutions and comprehensive infrastructure services to address the evolving technology needs of modern businesses — backed by over a decade of expertise in system integration and distribution of world-class IT products."
        images={heroImages}
      />

      <section className="py-8 sm:py-10 bg-white border-b border-black/5">
        <Container>
          <PartnerMarquee />
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
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
                  className="rounded-2xl bg-[#eef4e0] border border-black/5 p-6 sm:p-8 lg:p-12"
                >
                  <div className="grid md:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-center">
                    <div className={`md:col-span-3 ${reverse ? "md:order-2" : "md:order-1"}`}>
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white flex items-center justify-center shadow-card">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />
                      </div>
                      <p className="mt-5 sm:mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600">
                        {p.tagline}
                      </p>
                      <h2 className="mt-2.5 sm:mt-3 font-display font-semibold text-ink-900 text-xl sm:text-2xl lg:text-3xl tracking-tight">
                        {p.title}
                      </h2>
                      <p className="mt-3.5 sm:mt-4 text-[#5b6b60] leading-relaxed max-w-xl">{p.body}</p>
                    </div>
                    <div className={`md:col-span-2 ${reverse ? "md:order-1" : "md:order-2"}`}>
                      <div className="rounded-2xl bg-brand-500 border border-black/5 p-5 sm:p-6 shadow-card">
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink-900 mb-3.5 sm:mb-4">
                          Capabilities
                        </p>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {p.tags.map((t) => (
                            <li key={t} className="flex items-center gap-2.5 text-sm text-white">
                              <CheckCircle2 className="h-4.5 w-4.5 text-ink-900 shrink-0" />
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

      <section className="py-16 sm:py-20 lg:py-28 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern opacity-40" />
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-semibold text-white text-xl sm:text-3xl tracking-tight">
              Need help choosing the right hardware for your business?
            </h2>
            <p className="mt-4 text-white/70">
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
