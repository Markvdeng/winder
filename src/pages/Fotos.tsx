import PageHeader from "@/components/PageHeader";

const categories = [
  {
    name: "Mobiele Torenkranen",
    photos: 6,
  },
  {
    name: "Telescoopkranen",
    photos: 4,
  },
  {
    name: "Transport",
    photos: 6,
  },
  {
    name: "Bedrijf & Team",
    photos: 4,
  },
];

export default function Fotos() {
  return (
    <div>
      <PageHeader
        title="Foto's"
        subtitle="Een beeld zegt meer dan duizend woorden. Bekijk hier onze kranen, vrachtwagens en projecten in actie."
        breadcrumbs={[{ label: "Foto's" }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h2 className="font-heading text-3xl mb-6">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: category.photos }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <div className="text-center text-gray-400">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xl">&#128247;</span>
                      </div>
                      <span className="text-xs">
                        {category.name} foto {i + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
