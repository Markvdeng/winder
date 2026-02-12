import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "@/pages/Index";
import Diensten from "@/pages/Diensten";
import MobieleTorenkranen from "@/pages/diensten/MobieleTorenkranen";
import Telescoopkraan from "@/pages/diensten/Telescoopkraan";
import Autolaadkraan from "@/pages/diensten/Autolaadkraan";
import Transport from "@/pages/diensten/Transport";
import ChaletTransport from "@/pages/diensten/ChaletTransport";
import AdrTransport from "@/pages/diensten/AdrTransport";
import Pakketdienst from "@/pages/diensten/Pakketdienst";
import Werkvoorbereiding from "@/pages/diensten/Werkvoorbereiding";
import OpEnOverslag from "@/pages/diensten/OpEnOverslag";
import PropangasDepot from "@/pages/diensten/PropangasDepot";
import ExceptioneelTransport from "@/pages/diensten/ExceptioneelTransport";
import Groupage from "@/pages/diensten/Groupage";
import OverOns from "@/pages/OverOns";
import Organisatie from "@/pages/Organisatie";
import Historie from "@/pages/Historie";
import Vacatures from "@/pages/Vacatures";
import Fotos from "@/pages/Fotos";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/diensten/mobiele-torenkranen" element={<MobieleTorenkranen />} />
            <Route path="/diensten/telescoopkraan" element={<Telescoopkraan />} />
            <Route path="/diensten/autolaadkraan" element={<Autolaadkraan />} />
            <Route path="/diensten/transport" element={<Transport />} />
            <Route path="/diensten/chalet-transport" element={<ChaletTransport />} />
            <Route path="/diensten/adr-transport" element={<AdrTransport />} />
            <Route path="/diensten/pakketdienst" element={<Pakketdienst />} />
            <Route path="/diensten/werkvoorbereiding" element={<Werkvoorbereiding />} />
            <Route path="/diensten/op-en-overslag" element={<OpEnOverslag />} />
            <Route path="/diensten/propaangas-depot" element={<PropangasDepot />} />
            <Route path="/diensten/exceptioneel-transport" element={<ExceptioneelTransport />} />
            <Route path="/diensten/groupage" element={<Groupage />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/over-ons/organisatie" element={<Organisatie />} />
            <Route path="/over-ons/historie" element={<Historie />} />
            <Route path="/vacatures" element={<Vacatures />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
