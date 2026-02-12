import { Phone, Mail, MapPin } from "lucide-react";

interface LocationCardProps {
  city: string;
  type: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  description: string;
}

export default function LocationCard({
  city,
  type,
  address,
  postalCode,
  phone,
  email,
  description,
}: LocationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-semibold text-winder-red uppercase tracking-wide">
          {type}
        </span>
      </div>
      <h3 className="font-heading text-2xl mb-3">{city}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-0.5 text-winder-red shrink-0" />
          <span>
            {address}, {postalCode} {city}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-winder-red shrink-0" />
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            className="hover:text-winder-red transition-colors"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-winder-red shrink-0" />
          <a
            href={`mailto:${email}`}
            className="hover:text-winder-red transition-colors"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
