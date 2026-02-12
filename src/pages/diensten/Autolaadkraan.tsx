import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import CraneSpecCard from "@/components/CraneSpecCard";
import { services, craneSpecs } from "@/data/content";
import { CheckCircle } from "lucide-react";

export default function Autolaadkraan() {
  const service = services.find((s) => s.slug === "autolaadkraan")!;

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
                Flexibel hijswerk met autolaadkranen
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
                Foto autolaadkraan placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Ons aanbod autolaadkranen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {craneSpecs.autolaadkranen.map((crane) => (
              <CraneSpecCard
                key={crane.name}
                name={crane.name}
                description={crane.description}
                specs={[
                  { label: "Bereik", value: crane.bereik },
                  { label: "Hefvermogen", value: crane.hefvermogen },
                ]}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
