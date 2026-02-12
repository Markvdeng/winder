import PageHeader from "@/components/PageHeader";
import { history } from "@/data/content";
import { images } from "@/data/images";

export default function Historie() {
  return (
    <div>
      <PageHeader
        title="Historie"
        subtitle={history.intro}
        breadcrumbs={[
          { label: "Over Ons", to: "/over-ons" },
          { label: "Historie" },
        ]}
        backgroundImage={images.historie.heroBg}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {history.milestones.map((milestone, i) => (
                <div key={milestone.year} className="relative flex gap-8">
                  {/* Year marker */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 bg-winder-red text-white rounded-full flex items-center justify-center font-heading text-lg z-10">
                      {milestone.year.length <= 5
                        ? milestone.year
                        : milestone.year.substring(0, 3)}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 bg-white border border-gray-200 rounded-lg p-6 ${
                      i % 2 === 0 ? "" : "md:ml-4"
                    }`}
                  >
                    <span className="md:hidden text-winder-red font-heading text-lg block mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-2xl mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historic photo section */}
      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Door de jaren heen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              images.historie.vintage,
              images.historie.photo1,
              images.about.team1,
              images.aerialDrone,
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-lg aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Historische foto ${i + 1}`}
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
