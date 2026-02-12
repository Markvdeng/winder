import { Link } from "react-router-dom";
import {
  Truck,
  Construction,
  Home,
  Shield,
  Package,
  ClipboardList,
  Warehouse,
  Flame,
  Boxes,
} from "lucide-react";
import type { Service } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  crane: Construction,
  truck: Truck,
  home: Home,
  shield: Shield,
  package: Package,
  clipboard: ClipboardList,
  warehouse: Warehouse,
  flame: Flame,
  boxes: Boxes,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Truck;

  return (
    <Link
      to={`/diensten/${service.slug}`}
      className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-winder-red hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 bg-winder-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-winder-red/20 transition-colors">
        <Icon className="w-6 h-6 text-winder-red" />
      </div>
      <h3 className="font-heading text-xl mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {service.shortDescription}
      </p>
      <span className="inline-block mt-4 text-sm font-semibold text-winder-red group-hover:underline">
        Meer informatie &rarr;
      </span>
    </Link>
  );
}
