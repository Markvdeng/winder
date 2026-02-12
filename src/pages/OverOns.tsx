import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Users, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { about, company } from "@/data/content";

const valueIcons = [Shield, Wrench, Award, Users];

export default function OverOns() {
  return (
    <div>
      <PageHeader
        title="Over Winder"
        subtitle={about.intro}
        breadcrumbs={[{ label: "Over Ons" }]}
      />

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Onze kernwaarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={value.title}
                  className="bg-winder-gray rounded-lg p-6 text-center"
                >
                  <Icon className="w-10 h-10 text-winder-red mx-auto mb-4" />
                  <h3 className="font-heading text-xl mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company image + text */}
      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-400">Bedrijfsfoto placeholder</span>
            </div>
            <div>
              <h2 className="font-heading text-3xl mb-6">
                Al {new Date().getFullYear() - company.founded} jaar een begrip
                in Noord-Holland
              </h2>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <p className="text-gray-600 mb-6">
                Met vestigingen in Hoorn, Middenmeer en Amsterdam zijn wij
                altijd dichtbij. Ons team van {company.employees} medewerkers
                staat dagelijks klaar voor onze klanten.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/over-ons/historie"
                  className="inline-flex items-center gap-2 text-winder-red font-semibold hover:underline"
                >
                  Onze historie
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/over-ons/organisatie"
                  className="inline-flex items-center gap-2 text-winder-red font-semibold hover:underline"
                >
                  Organisatie
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Certificeringen & Lidmaatschappen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-gray-200 rounded-lg p-6 text-center hover:border-winder-red transition-colors"
              >
                <div className="bg-winder-gray w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-winder-red" />
                </div>
                <h3 className="font-heading text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
