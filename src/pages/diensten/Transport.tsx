import ServicePage from "./ServicePage";

export default function Transport() {
  return (
    <ServicePage
      slug="transport"
      headerBg="/images/transport/hero-bg.jpg"
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
                  image: "/images/gallery/07.jpg",
                },
                {
                  title: "Bakwagens",
                  description:
                    "Voor kleinere zendingen en stadsdistributie beschikken wij over bakwagens met laadklep.",
                  image: "/images/services/pakketdienst.jpg",
                },
                {
                  title: "Speciaal transport",
                  description:
                    "Voor buitenmaatse ladingen hebben wij speciaal materieel zoals uitschuifbare trailers en diepladers.",
                  image: "/images/services/chalet-transport.jpg",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
