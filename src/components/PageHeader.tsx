import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative bg-winder-black text-winder-white py-16 overflow-hidden">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex items-center gap-1 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-winder-red transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-winder-red transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
