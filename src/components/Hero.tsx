import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: { text: string; link: string };
  backgroundImage?: string;
  trustLine?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCta,
  backgroundImage,
  trustLine,
}: HeroProps) {
  return (
    <section className="relative bg-winder-dark min-h-[540px] flex items-center overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-winder-white leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {(ctaText || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {ctaText && ctaLink && (
              <div>
                <Link
                  to={ctaLink}
                  className="inline-block px-8 py-4 bg-winder-red text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
                >
                  {ctaText}
                </Link>
              </div>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.link}
                className="inline-block px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-winder-black transition-colors"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
        {trustLine && (
          <p className="mt-6 text-sm text-gray-400">{trustLine}</p>
        )}
      </div>
    </section>
  );
}
