import ServicePage from "./ServicePage";
import { FileText, Map, Eye, Calculator } from "lucide-react";

export default function Werkvoorbereiding() {
  return (
    <ServicePage
      slug="werkvoorbereiding"
      extraContent={
        <section className="py-16 bg-winder-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl mb-8 text-center">
              Ons werkvoorbereidingsproces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Terreinonderzoek",
                  description:
                    "Inspectie van de locatie om de juiste kraan en opstelling te bepalen.",
                },
                {
                  icon: Calculator,
                  title: "Berekeningen",
                  description:
                    "Grondige berekeningen van lasten, contragewichten en uitleggers.",
                },
                {
                  icon: FileText,
                  title: "Hijsplan",
                  description:
                    "Uitgebreid hijsplan conform de laatste veiligheidsrichtlijnen.",
                },
                {
                  icon: Map,
                  title: "Vergunningen",
                  description:
                    "Aanvragen van benodigde vergunningen en ontheffingen.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center"
                >
                  <step.icon className="w-10 h-10 text-winder-red mx-auto mb-4" />
                  <h3 className="font-heading text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
