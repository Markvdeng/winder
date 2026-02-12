import ServicePage from "./ServicePage";
import { images } from "@/data/images";
import { Flame, Clock, MapPin } from "lucide-react";

export default function PropangasDepot() {
  return (
    <ServicePage
      slug="propaangas-depot"
      headerBg={images.propaangas.heroBg}
      extraContent={
        <>
          {/* Products */}
          <section className="py-16 bg-winder-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl mb-8 text-center">
                Ons assortiment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <img
                    src={images.services["propaangas-depot"]}
                    alt="Gasflessen overzicht"
                    className="h-48 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-heading text-lg">Compleet overzicht</h3>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <img
                    src={images.propaangas.benegas}
                    alt="Benegas Comfort Steel"
                    className="h-48 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-heading text-lg">Benegas</h3>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <img
                    src={images.propaangas.campingaz}
                    alt="Campingaz"
                    className="h-48 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-heading text-lg">Campingaz</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Practical info */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl mb-8 text-center">
                Praktische informatie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: MapPin,
                    title: "Locatie",
                    description:
                      "Gelderseweg 2, 1623 JV Hoorn. Op ons hoofdkantoor terrein.",
                  },
                  {
                    icon: Clock,
                    title: "Openingstijden",
                    description:
                      "Maandag t/m vrijdag van 07:00 tot 17:00 uur. Zaterdag op afspraak.",
                  },
                  {
                    icon: Flame,
                    title: "Aanbod",
                    description:
                      "Gasflessen in diverse formaten. Vullen en wisselen mogelijk. Particulier en zakelijk.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-winder-gray border border-gray-200 rounded-lg p-6 text-center"
                  >
                    <item.icon className="w-10 h-10 text-winder-red mx-auto mb-4" />
                    <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
