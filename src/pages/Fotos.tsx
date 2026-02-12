import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { images } from "@/data/images";

export default function Fotos() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>
      <PageHeader
        title="Foto's"
        subtitle="Een beeld zegt meer dan duizend woorden. Bekijk hier onze kranen, vrachtwagens en projecten in actie."
        breadcrumbs={[{ label: "Foto's" }]}
        backgroundImage="/images/backgrounds/gallery-hero.jpg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.gallery.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden aspect-[4/3] cursor-pointer group"
                onClick={() => setLightbox(src)}
              >
                <img
                  src={src}
                  alt={`Winder foto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-winder-red"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="Vergroot"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
