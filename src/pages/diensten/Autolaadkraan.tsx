import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import CraneSpecCard from "@/components/CraneSpecCard";
import { services, craneSpecs } from "@/data/content";
import { images } from "@/data/images";
import { CheckCircle } from "lucide-react";

const autolaadImages = [
  images.autolaadkranen["35tm-jib"],
  images.autolaadkranen["60tm-jib"],
  images.autolaadkranen["80tm"],
];

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
        backgroundImage={images.autolaadkraanHero}
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
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                src={images.autolaadkranen.main}
                alt="Autolaadkraan Winder"
                className="w-full h-full object-cover"
              />
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
            {craneSpecs.autolaadkranen.map((crane, i) => (
              <CraneSpecCard
                key={crane.name}
                name={crane.name}
                description={crane.description}
                image={autolaadImages[i]}
                specs={[
                  { label: "Bereik", value: crane.bereik },
                  { label: "Hefvermogen", value: crane.hefvermogen },
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extra photos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              images.autolaadkranen.main,
              images.autolaadkranen["60tm-jib"],
              images.autolaadkranen["60-100tm-semi"],
              images.autolaadkranen["80tm"],
            ].map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden aspect-[4/3]">
                <img
                  src={src}
                  alt={`Autolaadkraan ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
