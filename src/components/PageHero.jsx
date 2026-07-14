import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Eyebrow } from "./UI";

const SLIDE_DURATION = 4000;

export default function PageHero({ eyebrow, title, body, images }) {
  const hasPhotos = Array.isArray(images) && images.length > 0;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hasPhotos || images.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [hasPhotos, images]);

  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-ink-950 isolate">
      {hasPhotos ? (
        <div className="absolute inset-0 z-0">
          {images.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-ink-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 line-pattern opacity-60 z-0" />
          <div className="absolute -top-16 right-[8%] h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-brand-500/8 blur-[100px] z-0" />
        </>
      )}
      <Container className="relative z-10">
        <div className="flex justify-center">
          <Eyebrow light>{eyebrow}</Eyebrow>
        </div>
        <h1 className="mt-5 sm:mt-6 text-center font-display font-semibold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {body && (
          <p className="mt-5 sm:mt-6 text-center text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {body}
          </p>
        )}
      </Container>
    </section>
  );
}
