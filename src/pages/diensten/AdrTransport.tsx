import ServicePage from "./ServicePage";
import { Shield } from "lucide-react";

export default function AdrTransport() {
  return (
    <ServicePage
      slug="adr-transport"
      extraContent={
        <section className="py-16 bg-winder-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl mb-8 text-center">
              Veiligheid & Certificeringen
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-12 h-12 text-winder-red" />
                  <div>
                    <h3 className="font-heading text-xl">
                      VCA-Petrochemie gecertificeerd
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hoogste veiligheidsniveau voor werken in de
                      petrochemische industrie
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Al onze ADR-chauffeurs zijn volledig gecertificeerd en worden
                  regelmatig bijgeschoold. Wij voldoen aan alle wettelijke
                  eisen voor het transport van gevaarlijke stoffen en
                  beschikken over de juiste vergunningen en materieel.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "ADR basis",
                    "ADR tank",
                    "VCA-Petrochemie",
                    "F-Pal",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="text-sm bg-winder-gray px-4 py-2 rounded-full font-semibold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
}
