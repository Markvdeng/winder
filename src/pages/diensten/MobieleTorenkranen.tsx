import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import CraneSpecCard from "@/components/CraneSpecCard";
import { services, craneSpecs } from "@/data/content";
import { CheckCircle } from "lucide-react";

export default function MobieleTorenkranen() {
  const service = services.find((s) => s.slug === "mobiele-torenkranen")!;

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

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl mb-6">
                Waarom kiezen voor onze mobiele torenkranen?
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
                Foto mobiele torenkraan placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Crane specs */}
      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Ons aanbod mobiele torenkranen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {craneSpecs.mobieleTorenkranen.map((crane) => (
              <CraneSpecCard
                key={crane.name}
                name={crane.name}
                description={crane.description}
                specs={[
                  { label: "Giekhoogte", value: crane.giekHoogte },
                  { label: "Max hefvermogen", value: crane.maxHefvermogen },
                  { label: "Max gieklengte", value: crane.maxGieklengte },
                  {
                    label: "Hefvermogen bij max giek",
                    value: crane.hefvermogenBijMaxGiek,
                  },
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Werkvoorbereiding CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl mb-4">
            Werkvoorbereiding nodig?
          </h2>
          <p className="text-gray-600 mb-6">
            Onze afdeling werkvoorbereiding helpt u bij het plannen van uw
            hijsproject. Van terreinonderzoek tot hijsplannen en
            vergunningsaanvragen.
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
