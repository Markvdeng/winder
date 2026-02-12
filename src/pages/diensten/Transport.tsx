import ServicePage from "./ServicePage";

export default function Transport() {
  return (
    <ServicePage
      slug="transport"
      extraContent={
        <section className="py-16 bg-winder-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl mb-8 text-center">
              Ons wagenpark
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Trekker-oplegger",
                  description:
                    "Meer dan 50 trekkers met diverse opleggers: schuifzeilen, vlakke trailers, diepladers en meer.",
                },
                {
                  title: "Bakwagens",
                  description:
                    "Voor kleinere zendingen en stadsdistributie beschikken wij over bakwagens met laadklep.",
                },
                {
                  title: "Speciaal transport",
                  description:
                    "Voor buitenmaatse ladingen hebben wij speciaal materieel zoals uitschuifbare trailers en diepladers.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="bg-gray-100 h-40 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Foto placeholder
                    </span>
                  </div>
                  <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
