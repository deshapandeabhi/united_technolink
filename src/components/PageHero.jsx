import { Container, Eyebrow } from "./UI";

export default function PageHero({ eyebrow, title, body }) {
  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-brand-100">
      <div className="absolute -top-16 right-[8%] h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-brand-500/25 blur-[100px]" />
      <Container className="relative">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="mt-5 sm:mt-6 text-center font-display font-semibold text-ink-900 text-3xl sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {body && (
          <p className="mt-5 sm:mt-6 text-center text-[#5b6b60] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {body}
          </p>
        )}
      </Container>
    </section>
  );
}
