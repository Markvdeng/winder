import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/content";

export default function Diensten() {
  const kraanDiensten = services.filter((s) =>
    ["mobiele-torenkranen", "telescoopkraan", "autolaadkraan"].includes(s.slug)
  );
  const transportDiensten = services.filter((s) =>
    [
      "transport",
      "chalet-transport",
      "adr-transport",
      "exceptioneel-transport",
      "pakketdienst",
      "groupage",
    ].includes(s.slug)
  );
  const overigeDiensten = services.filter((s) =>
    ["werkvoorbereiding", "op-en-overslag", "propaangas-depot"].includes(s.slug)
  );

  return (
    <div>
      <PageHeader
        title="Onze Diensten"
        subtitle="Van kraanverhuur tot transport, van werkvoorbereiding tot opslag. Winder biedt een compleet pakket aan diensten voor uw project."
        breadcrumbs={[{ label: "Diensten" }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kraanverhuur */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl mb-2">Kraanverhuur</h2>
            <p className="text-gray-600 mb-6">
              Mobiele torenkranen, telescoopkranen en autolaadkranen voor elk
              hijsproject.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {kraanDiensten.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>

          {/* Transport */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl mb-2">Transport</h2>
            <p className="text-gray-600 mb-6">
              Nationaal en internationaal transport, van standaard tot
              exceptioneel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportDiensten.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>

          {/* Overige diensten */}
          <div>
            <h2 className="font-heading text-3xl mb-2">Overige Diensten</h2>
            <p className="text-gray-600 mb-6">
              Werkvoorbereiding, op- en overslag en propaangas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {overigeDiensten.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
