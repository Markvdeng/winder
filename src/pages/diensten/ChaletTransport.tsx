import ServicePage from "./ServicePage";

export default function ChaletTransport() {
  return (
    <ServicePage
      slug="chalet-transport"
      extraContent={
        <section className="py-16 bg-winder-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl mb-8 text-center">
              Wat transporteren wij?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Chalets",
                "Stacaravans",
                "Portacabins",
                "Woonunits",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center"
                >
                  <div className="bg-gray-100 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Foto placeholder
                    </span>
                  </div>
                  <h3 className="font-heading text-xl">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
