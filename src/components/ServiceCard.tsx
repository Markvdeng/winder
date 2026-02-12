import { Link } from "react-router-dom";
import type { Service } from "@/data/content";
import { images } from "@/data/images";

export default function ServiceCard({ service }: { service: Service }) {
  const imageUrl = images.services[service.slug];

  return (
    <Link
      to={`/diensten/${service.slug}`}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-winder-red hover:shadow-lg transition-all"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {service.shortDescription}
        </p>
        <span className="inline-block mt-4 text-sm font-semibold text-winder-red group-hover:underline">
          Meer informatie &rarr;
        </span>
      </div>
    </Link>
  );
}
