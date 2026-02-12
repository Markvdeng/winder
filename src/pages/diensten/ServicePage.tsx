import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { services } from "@/data/content";
import { CheckCircle } from "lucide-react";

interface ServicePageProps {
  slug: string;
  extraContent?: React.ReactNode;
}

export default function ServicePage({ slug, extraContent }: ServicePageProps) {
  const service = services.find((s) => s.slug === slug)!;

  return (
    <div>
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Diensten", to: "/diensten" },
          { label: service.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl mb-6">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {service.features && (
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-winder-red shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-winder-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-400">
                Foto {service.title.toLowerCase()} placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {extraContent}

      {/* CTA */}
      <section className="py-16 bg-winder-black text-winder-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl mb-4">
            Meer weten over {service.title.toLowerCase()}?
          </h2>
          <p className="text-gray-400 mb-8">
            Neem vrijblijvend contact met ons op voor meer informatie of een
            offerte op maat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-winder-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Contact opnemen
            </Link>
            <a
              href="tel:0229213908"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-winder-black transition-colors"
            >
              Bel 0229-213908
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
