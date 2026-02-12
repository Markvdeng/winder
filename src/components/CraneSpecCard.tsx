interface CraneSpecCardProps {
  name: string;
  description: string;
  specs: { label: string; value: string }[];
  image?: string;
}

export default function CraneSpecCard({
  name,
  description,
  specs,
  image,
}: CraneSpecCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Foto beschikbaar</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-3">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-winder-gray rounded-lg p-3">
              <span className="block text-xs text-gray-500 uppercase tracking-wide">
                {spec.label}
              </span>
              <span className="block text-sm font-semibold mt-0.5">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
