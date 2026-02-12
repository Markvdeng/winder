import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import CraneSpecCard from "@/components/CraneSpecCard";
import { services, craneSpecs } from "@/data/content";
import { CheckCircle } from "lucide-react";

export default function Telescoopkraan() {
  const service = services.find((s) => s.slug === "telescoopkraan")!;

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
              <h2 className="font-heading text-3xl mb-6">
                Krachtige telescoopkranen voor elk project
              </h2>
              <ul className="space-y-3">
                {service.features?.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-winder-red shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 bg-winder-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-400">
                Foto telescoopkraan placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Ons aanbod telescoopkranen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craneSpecs.telescoopkranen.map((crane) => (
              <CraneSpecCard
                key={crane.name}
                name={crane.name}
                description={crane.description}
                specs={[
                  { label: "Hefvermogen", value: crane.hefvermogen },
                  { label: "Max giekhoogte", value: crane.maxGiekhoogte },
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl mb-4">
            Werkvoorbereiding nodig?
          </h2>
          <p className="text-gray-600 mb-6">
            Voor complexe hijsprojecten verzorgt onze afdeling werkvoorbereiding
            het complete traject: van terreinonderzoek tot hijsplannen.
          </p>
          <Link
            to="/diensten/werkvoorbereiding"
            className="inline-block px-8 py-3 bg-winder-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            Meer over werkvoorbereiding
          </Link>
        </div>
      </section>
    </div>
  );
}
