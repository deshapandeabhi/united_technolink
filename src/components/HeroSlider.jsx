import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import digitalTransformationImg from "../assets/hero_images/What-Is-Digital-Transformation.webp";
import cloudSecurityImg from "../assets/hero_images/What-is-cloud-security-scaled.jpg";
import globalCloudImg from "../assets/hero_images/gettyimages-1399936043.webp";

const slides = [
  {
    image: digitalTransformationImg,
    eyebrow: "Digital Transformation",
    title: "Accelerate Your Digital Transformation Journey",
    body: "We help enterprises modernize operations with AI-driven automation, smart integration, and future-ready technology — turning digital transformation into measurable business advantage.",
  },
  {
    image: cloudSecurityImg,
    eyebrow: "Enterprise Security",
    title: "Secure, Scalable & Future-Ready IT Infrastructure",
    body: "At United Technolink, we strive to build world-class strategy and deploy the best technology for your digital transformation — strengthening security and operational efficiency across your enterprise.",
  },
  {
    image: globalCloudImg,
    eyebrow: "Cloud & Connectivity",
    title: "Powering Global Connectivity With Cloud-Ready Networks",
    body: "From private, hybrid, and multi-cloud environments to global network infrastructure, our cloud expertise ensures seamless implementation, enhanced scalability, and secure connectivity everywhere you operate.",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlider({ children }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [index, next]);

  const current = slides[index];

  return (
    <div className="absolute inset-0">
      {slides.map((s, i) => (
        <motion.img
          key={s.image}
          src={s.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1.08 : 1,
          }}
          transition={{
            opacity: { duration: 1.1, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000, ease: "linear" },
          }}
        />
      ))}
      <div className="absolute inset-0 bg-ink-950/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/70" />

      {/* Text content, keyed for crossfade on slide change */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children(current)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center gap-2 z-10">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-brand-400" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
