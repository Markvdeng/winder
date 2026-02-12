import { Link } from "react-router-dom";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { vacatures } from "@/data/content";
import { images } from "@/data/images";

export default function Vacatures() {
  return (
    <div>
      <PageHeader
        title="Vacatures"
        subtitle="Wil jij werken bij een dynamisch familiebedrijf met meer dan 125 jaar ervaring? Bekijk onze openstaande vacatures en solliciteer direct."
        breadcrumbs={[{ label: "Vacatures" }]}
        backgroundImage={images.vacatures.heroBg}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {vacatures.map((vacature) => (
              <div
                key={vacature.title}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-2xl">{vacature.title}</h2>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vacature.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {vacature.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{vacature.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-3">
                    Wat vragen wij
                  </h3>
                  <ul className="space-y-2">
                    {vacature.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-winder-red shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-block px-6 py-2.5 bg-winder-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
                >
                  Solliciteer direct
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open sollicitatie */}
      <section className="py-16 bg-winder-gray">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl mb-4">
            Staat jouw vacature er niet bij?
          </h2>
          <p className="text-gray-600 mb-6">
            Wij zijn altijd op zoek naar gemotiveerde mensen. Stuur een open
            sollicitatie en wie weet is er een plek voor jou bij Winder.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-winder-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            Stuur een open sollicitatie
          </Link>
        </div>
      </section>
    </div>
  );
}
