import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const dienstenLinks = [
  { to: "/diensten/mobiele-torenkranen", label: "Mobiele Torenkranen" },
  { to: "/diensten/telescoopkraan", label: "Telescoopkranen" },
  { to: "/diensten/autolaadkraan", label: "Autolaadkranen" },
  { to: "/diensten/transport", label: "Transport" },
  { to: "/diensten/chalet-transport", label: "Chalet Transport" },
  { to: "/diensten/adr-transport", label: "ADR Transport" },
  { to: "/diensten/exceptioneel-transport", label: "Exceptioneel Transport" },
  { to: "/diensten/pakketdienst", label: "Pakketdienst" },
  { to: "/diensten/werkvoorbereiding", label: "Werkvoorbereiding" },
  { to: "/diensten/op-en-overslag", label: "Op- en Overslag" },
  { to: "/diensten/propaangas-depot", label: "Propaangas Depot" },
  { to: "/diensten/groupage", label: "Groupage & Distributie" },
];

const overOnsLinks = [
  { to: "/over-ons", label: "Over Winder" },
  { to: "/over-ons/organisatie", label: "Organisatie" },
  { to: "/over-ons/historie", label: "Historie" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [overOnsOpen, setOverOnsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActivePrefix = (prefix: string) =>
    location.pathname.startsWith(prefix);

  return (
    <nav className="bg-winder-black text-winder-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/hero/logo.bmp"
              alt="Winder Transport & Kraanverhuur"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-semibold transition-colors hover:text-winder-red ${
                isActive("/") ? "text-winder-red" : ""
              }`}
            >
              Home
            </Link>

            {/* Diensten dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDienstenOpen(true)}
              onMouseLeave={() => setDienstenOpen(false)}
            >
              <Link
                to="/diensten"
                className={`px-4 py-2 text-sm font-semibold transition-colors hover:text-winder-red flex items-center gap-1 ${
                  isActivePrefix("/diensten") ? "text-winder-red" : ""
                }`}
              >
                Diensten
                <ChevronDown className="w-3 h-3" />
              </Link>
              {dienstenOpen && (
                <div className="absolute top-full left-0 bg-winder-black border border-gray-800 rounded-md py-2 min-w-[250px] shadow-xl">
                  {dienstenLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2 text-sm hover:bg-gray-900 hover:text-winder-red transition-colors ${
                        isActive(link.to) ? "text-winder-red" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Over ons dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOverOnsOpen(true)}
              onMouseLeave={() => setOverOnsOpen(false)}
            >
              <Link
                to="/over-ons"
                className={`px-4 py-2 text-sm font-semibold transition-colors hover:text-winder-red flex items-center gap-1 ${
                  isActivePrefix("/over-ons") ? "text-winder-red" : ""
                }`}
              >
                Over Ons
                <ChevronDown className="w-3 h-3" />
              </Link>
              {overOnsOpen && (
                <div className="absolute top-full left-0 bg-winder-black border border-gray-800 rounded-md py-2 min-w-[200px] shadow-xl">
                  {overOnsLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2 text-sm hover:bg-gray-900 hover:text-winder-red transition-colors ${
                        isActive(link.to) ? "text-winder-red" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/vacatures"
              className={`px-4 py-2 text-sm font-semibold transition-colors hover:text-winder-red ${
                isActive("/vacatures") ? "text-winder-red" : ""
              }`}
            >
              Vacatures
            </Link>
            <Link
              to="/fotos"
              className={`px-4 py-2 text-sm font-semibold transition-colors hover:text-winder-red ${
                isActive("/fotos") ? "text-winder-red" : ""
              }`}
            >
              Foto&apos;s
            </Link>
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-winder-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-winder-black border-t border-gray-800 pb-4">
          <Link
            to="/"
            className="block px-6 py-3 text-sm font-semibold hover:text-winder-red"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <div className="px-6 py-3">
            <Link
              to="/diensten"
              className="text-sm font-semibold hover:text-winder-red"
              onClick={() => setMobileOpen(false)}
            >
              Diensten
            </Link>
            <div className="mt-2 ml-4 space-y-1">
              {dienstenLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-1 text-sm text-gray-400 hover:text-winder-red"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="px-6 py-3">
            <span className="text-sm font-semibold">Over Ons</span>
            <div className="mt-2 ml-4 space-y-1">
              {overOnsLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-1 text-sm text-gray-400 hover:text-winder-red"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/vacatures"
            className="block px-6 py-3 text-sm font-semibold hover:text-winder-red"
            onClick={() => setMobileOpen(false)}
          >
            Vacatures
          </Link>
          <Link
            to="/fotos"
            className="block px-6 py-3 text-sm font-semibold hover:text-winder-red"
            onClick={() => setMobileOpen(false)}
          >
            Foto's
          </Link>
          <Link
            to="/contact"
            className="block mx-6 mt-3 px-6 py-3 bg-winder-red text-center text-sm font-semibold rounded hover:bg-red-700"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
