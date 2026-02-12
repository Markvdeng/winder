import PageHeader from "@/components/PageHeader";
import { company } from "@/data/content";

const departments = [
  {
    name: "Directie",
    description: "De directie geeft leiding aan het familiebedrijf en bepaalt de strategische koers.",
    members: 2,
  },
  {
    name: "Planning & Administratie",
    description: "Het kantoorteam verzorgt de planning, administratie en klantenservice.",
    members: 8,
  },
  {
    name: "Kraanmachinisten",
    description: "Onze ervaren en gecertificeerde machinisten bedienen de mobiele torenkranen en telescoopkranen.",
    members: 15,
  },
  {
    name: "Chauffeurs",
    description: "Betrouwbare chauffeurs voor nationaal en internationaal transport.",
    members: 40,
  },
  {
    name: "Werkplaats",
    description: "Het werkplaatsteam onderhoudt ons complete wagenpark en kranenpark.",
    members: 6,
  },
  {
    name: "Werkvoorbereiding",
    description: "Specialisten die hijsprojecten voorbereiden met hijsplannen en vergunningsaanvragen.",
    members: 4,
  },
];

export default function Organisatie() {
  return (
    <div>
      <PageHeader
        title="Organisatie"
        subtitle={`Met circa ${company.employees} medewerkers verdeeld over drie vestigingen vormen wij een hecht en professioneel team.`}
        breadcrumbs={[
          { label: "Over Ons", to: "/over-ons" },
          { label: "Organisatie" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8">Onze afdelingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl">{dept.name}</h3>
                  <span className="text-sm text-winder-red font-semibold">
                    ~{dept.members} pers.
                  </span>
                </div>
                <p className="text-sm text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo placeholder */}
      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl mb-8">Ons team</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-400">Teamfoto placeholder</span>
          </div>
          <p className="mt-4 text-gray-600">
            Het team van Winder: {company.employees} professionals die dagelijks
            het beste van zichzelf geven.
          </p>
        </div>
      </section>
    </div>
  );
}
