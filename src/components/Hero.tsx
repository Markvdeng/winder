import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: { text: string; link: string };
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCta,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative bg-winder-dark min-h-[500px] flex items-center">
      {/* Placeholder for background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      {overlay && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-winder-white leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
            {subtitle}
          </p>
        )}
        {(ctaText || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="inline-block px-8 py-3 bg-winder-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.link}
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-winder-black transition-colors"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
