import PageHeader from "@/components/PageHeader";
import LocationCard from "@/components/LocationCard";
import ContactForm from "@/components/ContactForm";
import { locations } from "@/data/content";

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Neem contact met ons op voor een offerte, advies of meer informatie. Wij helpen u graag verder."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">
                Stuur ons een bericht
              </h2>
              <ContactForm />
            </div>

            {/* Quick contact */}
            <div>
              <h2 className="font-heading text-3xl mb-6">Direct contact</h2>
              <div className="bg-winder-gray rounded-lg p-6 mb-6">
                <h3 className="font-heading text-xl mb-3">Hoofdkantoor Hoorn</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Telefoon:</strong>{" "}
                    <a
                      href="tel:0229213908"
                      className="text-winder-red hover:underline"
                    >
                      0229-213908
                    </a>
                  </p>
                  <p>
                    <strong>E-mail:</strong>{" "}
                    <a
                      href="mailto:hoorn@winder.nl"
                      className="text-winder-red hover:underline"
                    >
                      hoorn@winder.nl
                    </a>
                  </p>
                  <p>
                    <strong>Adres:</strong>
                    <br />
                    Gelderseweg 2
                    <br />
                    1623 JV Hoorn
                  </p>
                </div>
              </div>
              <div className="bg-winder-gray rounded-lg p-6">
                <h3 className="font-heading text-xl mb-3">Openingstijden</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Maandag - Vrijdag</span>
                    <span className="font-semibold">07:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zaterdag</span>
                    <span className="font-semibold">Op afspraak</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zondag</span>
                    <span className="font-semibold">Gesloten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All locations */}
      <section className="py-16 bg-winder-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">
            Onze vestigingen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.city} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-200 h-96 flex items-center justify-center">
        <span className="text-gray-400">Google Maps integratie placeholder</span>
      </section>
    </div>
  );
}
