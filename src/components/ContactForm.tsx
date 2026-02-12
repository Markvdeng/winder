import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="font-heading text-2xl text-green-800 mb-2">
          Bedankt voor uw bericht!
        </h3>
        <p className="text-green-700">
          Wij nemen zo spoedig mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Naam *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-winder-red focus:ring-1 focus:ring-winder-red"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Bedrijf</label>
          <input
            type="text"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-winder-red focus:ring-1 focus:ring-winder-red"
            placeholder="Bedrijfsnaam"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">E-mail *</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-winder-red focus:ring-1 focus:ring-winder-red"
            placeholder="uw@email.nl"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Telefoon</label>
          <input
            type="tel"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-winder-red focus:ring-1 focus:ring-winder-red"
            placeholder="06-12345678"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Onderwerp *</label>
        <select
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-winder-red focus:ring-1 focus:ring-winder-red bg-white"
        >
          <option value="">Selecteer een onderwerp</option>
          <option>Kraanverhuur</option>
          <option>Transport</option>
          <option>Offerte aanvraag</option>
          <option>Vacature</option>
          <option>Overig</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Bericht *</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-winder-red focus:ring-1 focus:ring-winder-red resize-y"
          placeholder="Uw bericht..."
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-winder-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
      >
        Verstuur bericht
      </button>
    </form>
  );
}
