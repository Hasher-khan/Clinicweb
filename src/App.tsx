import { useState } from "react";
import AppointmentSelector from "./components/AppointmentSelector";
import BookingModal from "./components/BookingModal";
import ClinicTour from "./components/ClinicTour";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Marquee from "./components/Marquee";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import CarePlatform from "./components/CarePlatform";
import Services from "./components/Services";
import Specialists from "./components/Specialists";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import MobileBottomDock from "./components/MobileBottomDock";

export default function App() {
  const [book, setBook] = useState(false);

  return (
    <div className="relative overflow-x-hidden pb-16 lg:pb-0">
      <div className="aura-orb aura-orb-sky top-[-80px] left-[-40px] h-64 w-64 opacity-50 sm:opacity-100" aria-hidden />
      <div className="aura-orb aura-orb-teal top-[420px] right-[-60px] h-72 w-72 opacity-50 sm:opacity-100" aria-hidden />
      <Navbar onBook={() => setBook(true)} />
      <main>
        <Hero onBook={() => setBook(true)} />
        <Marquee />
        <Metrics />
        <AppointmentSelector />
        <Services />
        <Specialists onBookDoc={() => setBook(true)} />
        <CarePlatform />
        <Timeline />
        <ClinicTour />
        <FAQ />
        <Location />
        <Testimonials />
      </main>
      <Footer />
      <MobileBottomDock onBook={() => setBook(true)} />
      <BookingModal open={book} onClose={() => setBook(false)} />
    </div>
  );
}

