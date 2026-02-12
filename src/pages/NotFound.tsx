import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl text-winder-red mb-4">404</h1>
        <h2 className="font-heading text-3xl mb-4">Pagina niet gevonden</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de
          homepage of neem contact met ons op.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3 bg-winder-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
          >
            Naar homepage
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-winder-black text-winder-black font-semibold rounded hover:bg-winder-black hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
