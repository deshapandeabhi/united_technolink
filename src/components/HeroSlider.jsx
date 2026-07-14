import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "./UI";
import digitalTransformationImg from "../assets/hero_images/What-Is-Digital-Transformation.webp";
import cloudSecurityImg from "../assets/hero_images/What-is-cloud-security-scaled.jpg";
import globalCloudImg from "../assets/hero_images/gettyimages-1399936043.webp";

const slides = [
  {
    image: digitalTransformationImg,
    eyebrow: "Digital Transformation",
    title: "Accelerate Your Digital Transformation Journey",
    body: "We help enterprises modernize operations with AI-driven automation, smart integration, and future-ready technology — turning transformation into measurable business advantage.",
  },
  {
    image: cloudSecurityImg,
    eyebrow: "Enterprise Security",
    title: "Secure, Scalable & Future-Ready IT Infrastructure",
    body: "At United Technolink, we strive to build world-class strategy and deploy the best technology for your digital transformation — strengthening security across your enterprise.",
  },
  {
    image: globalCloudImg,
    eyebrow: "Cloud & Connectivity",
    title: "Powering Global Connectivity With Cloud-Ready Networks",
    body: "From private, hybrid, and multi-cloud environments to global network infrastructure, our expertise ensures secure, scalable connectivity everywhere you operate.",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlider({ children }) {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [index, next]);

  const goTo = (i) => {
    setIndex(i);
    setCycle((c) => c + 1);
  };

  const current = slides[index];

  return (
    <>
      {/* Background layer — purely decorative, never affects section height */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-ink-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
      </div>

      {/* Foreground text — normal flow, so the section grows to fit it, never clipped */}
      <div className="relative z-10">
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

      {/* Progress-bar slide indicators */}
      <Container className="relative z-10 pb-10 sm:pb-12">
        <div className="mt-10 sm:mt-12 flex items-center gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.image}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              className="relative h-1 w-9 sm:w-11 rounded-full bg-white/25 overflow-hidden"
            >
              {i < index && <span className="absolute inset-0 bg-brand-400" />}
              {i === index && (
                <motion.span
                  key={cycle}
                  className="absolute inset-y-0 left-0 bg-brand-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </Container>
    </>
  );
}
