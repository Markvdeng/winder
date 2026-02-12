import { Link } from "react-router-dom";
import { ArrowRight, Users, Truck, Award, Construction } from "lucide-react";
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

export default function Index() {
  return (
    <div>
      <Hero
        title="Transport & Kraanverhuur sinds 1894"
        subtitle="Al meer dan 125 jaar uw betrouwbare partner in transport en kraanverhuur in Noord-Holland. Winder staat voor kwaliteit, vakmanschap en veiligheid."
        ctaText="Bekijk onze diensten"
        ctaLink="/diensten"
        secondaryCta={{ text: "Neem contact op", link: "/contact" }}
        backgroundImage={images.heroHomepage}
      />

      {/* Stats bar */}
      <section className="bg-winder-red text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="font-heading text-3xl">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl mb-4">Onze Diensten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Van kraanverhuur tot transport, van werkvoorbereiding tot opslag.
              Winder biedt een compleet pakket aan diensten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 px-8 py-3 bg-winder-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
            >
              Alle diensten bekijken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl mb-6">
                Een familiebedrijf met meer dan 125 jaar ervaring
              </h2>
              <p className="text-gray-600 mb-4">
                {company.description}
              </p>
              <p className="text-gray-600 mb-6">
                Met drie vestigingen in Noord-Holland (Hoorn, Middenmeer en
                Amsterdam) staan wij altijd dichtbij onze klanten.
              </p>
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
            <div className="rounded-lg h-80 overflow-hidden">
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
            <h2 className="font-heading text-4xl mb-4">Onze Vestigingen</h2>
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
          <h2 className="font-heading text-4xl mb-4">
            Hulp nodig bij uw project?
          </h2>
          <p className="text-gray-400 mb-8">
            Neem vrijblijvend contact met ons op voor een offerte of advies. Onze
            specialisten denken graag met u mee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-winder-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Contact opnemen
            </Link>
            <a
              href="tel:0229213908"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-winder-black transition-colors"
            >
              Bel 0229-213908
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
