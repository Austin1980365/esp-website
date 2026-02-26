import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import EventStaffing from "./pages/EventStaffing.jsx";
import FAQ from "./pages/FAQ.jsx";
import Waiters from "./pages/Waiters.jsx";
import Contact from "./pages/Contact.jsx";

function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">

          <img
            src="/esp-logo-full.png"
            alt="ESP - Exceptional Service Personnel"
            className="w-full max-w-2xl h-auto"
          />

          <p className="mt-2 text-sm tracking-wide text-gray-500">
            Established 2007
          </p>

          <nav className="mt-6 flex gap-8 text-sm font-medium flex-wrap justify-center">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <Link to="/event-staffing-gauteng" className="hover:text-orange-600">Event Staffing</Link>
            <Link to="/waiters" className="hover:text-orange-600">Waiters</Link>
            <Link to="/faq" className="hover:text-orange-600">FAQ</Link>
            <Link to="/contact" className="hover:text-orange-600">Contact</Link>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-gray-600 mb-4">
          Long-standing service delivery at Gallagher Convention Centre
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional hospitality staffing you can rely on
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          <strong>Exceptional Service Personnel (ESP)</strong> is an established
          hospitality staffing and training company supplying professional service
          staff to conference, exhibition, corporate, and event environments across Gauteng.
        </p>

        <div className="text-gray-700 mb-10">
          • Over 17 years of service <br />
          • 250+ trained staff <br />
          • Proven reliability in high-pressure environments
        </div>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Contact ESP
        </Link>
      </section>

      {/* WHO WE ARE */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Who we are
          </h2>

          <p className="text-lg mb-6">
            Exceptional Service Personnel is a long-standing hospitality staffing
            and training company with deep roots in South Africa’s conferencing,
            exhibition, and events industry.
          </p>

          <p className="text-lg mb-6">
            Since 2007, ESP has supplied professional hospitality and event staff
            to some of the country’s most demanding environments, including long-term
            service delivery at <strong>Gallagher Convention Centre</strong>.
          </p>

          <p className="text-lg">
            With a staff complement of <strong>250+ trained personnel</strong>,
            ESP is equipped to support both large-scale events and ongoing venue operations.
          </p>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Speak to ESP directly
        </h2>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Contact ESP
        </Link>
      </section>

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-staffing-gauteng" element={<EventStaffing />} />
      <Route path="/waiters" element={<Waiters />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
