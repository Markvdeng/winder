import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { locations, company } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-winder-black text-winder-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <h3 className="font-heading text-2xl mb-4">WINDER</h3>
            <p className="text-gray-400 text-sm mb-4">
              {company.tagline}
            </p>
            <div className="flex gap-3 flex-wrap">
              {company.certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Locations */}
          {locations.map((loc) => (
            <div key={loc.city}>
              <h4 className="font-heading text-lg mb-4">{loc.city}</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-winder-red shrink-0" />
                  <span>
                    {loc.address}
                    <br />
                    {loc.postalCode} {loc.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-winder-red shrink-0" />
                  <a
                    href={`tel:${loc.phone.replace(/-/g, "")}`}
                    className="hover:text-winder-red transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-winder-red shrink-0" />
                  <a
                    href={`mailto:${loc.email}`}
                    className="hover:text-winder-red transition-colors"
                  >
                    {loc.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {company.fullName}. Alle rechten
            voorbehouden.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/contact" className="hover:text-winder-red transition-colors">
              Contact
            </Link>
            <Link to="/vacatures" className="hover:text-winder-red transition-colors">
              Vacatures
            </Link>
            <Link to="/diensten" className="hover:text-winder-red transition-colors">
              Diensten
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
