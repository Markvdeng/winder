import { Link } from "react-router-dom";
import { ArrowRight, Users, Truck, Award, Construction, CheckCircle, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import LocationCard from "@/components/LocationCard";
import { services, locations, company } from "@/data/content";
import { images } from "@/data/images";

const stats = [
  { icon: Users, label: "Medewerkers", value: company.employees },
  { icon: Truck, label: "Trekkers", value: company.trucks },
  { icon: Construction, label: "Kranen", value: company.cranes },
  { icon: Award, label: "Sinds", value: String(company.founded) },
];

const topServices = services.filter((s) =>
  ["autolaadkraan", "mobiele-torenkranen", "telescoopkraan", "transport", "chalet-transport", "werkvoorbereiding"].includes(s.slug)
);

export default function Index() {
  return (
    <div>
      <Hero
        title="Transport en kraanverhuur in Noord-Holland"
        subtitle="Familiebedrijf sinds 1894. Autolaadkranen, torenkranen, telescoopkranen en transport vanuit Alkmaar, Hoorn en Den Helder."
        ctaText="Vraag een offerte aan"
        ctaLink="/contact"
        secondaryCta={{ text: "Bekijk onze diensten", link: "/diensten" }}
        backgroundImage={images.galleryHero}
        trustLine="VCA-Petrochemie gecertificeerd · 75-80 medewerkers · 50+ trekkers · 15+ kranen"
      />

      {/* Stats bar */}
      <section className="bg-winder-red text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="font-heading text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid - show top 6 */}
      <section className="py-20 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Onze diensten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Van kraanverhuur tot transport, van werkvoorbereiding tot opslag.
              Compleet ontzorgd door een team met meer dan 125 jaar ervaring.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 px-8 py-4 bg-winder-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Alle diensten bekijken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Winder - trust section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                Waarom kiezen voor Winder?
              </h2>
              <p className="text-gray-600 mb-6">
                Al vijf generaties lang staat Winder Limmen voor betrouwbaarheid,
                vakmanschap en veiligheid. Met drie vestigingen in Noord-Holland
                en operaties door heel Nederland, Belgie, Duitsland en Frankrijk.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "VCA-Petrochemie gecertificeerd voor de hoogste veiligheidseisen",
                  "Eigen werkvoorbereiding met 3D hijssimulaties",
                  "Modern wagenpark van 50+ trekkers en 15+ kranen",
                  "Familiebedrijf met persoonlijke aandacht sinds 1894",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-winder-red shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                {company.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-sm bg-winder-gray px-4 py-2 rounded-full font-semibold"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <Link
                to="/over-ons"
                className="inline-flex items-center gap-2 text-winder-red font-semibold hover:underline"
              >
                Meer over Winder
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                src={images.about.team1}
                alt="Winder team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Onze vestigingen</h2>
            <p className="text-gray-600">
              Drie locaties in Noord-Holland voor optimale bereikbaarheid.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.city} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-winder-black text-winder-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Hulp nodig bij uw project?
          </h2>
          <p className="text-gray-400 mb-8">
            Neem vrijblijvend contact op voor een offerte of advies. Onze
            specialisten denken graag met u mee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-winder-red text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
            >
              Vraag een offerte aan
            </Link>
            <a
              href="tel:0725052344"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-winder-black transition-colors"
            >
              <Phone className="w-5 h-5" />
              072-5052344
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
