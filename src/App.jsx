import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import EventStaffing from "./pages/EventStaffing.jsx";
import FAQ from "./pages/FAQ.jsx";
import Waiters from "./pages/Waiters.jsx";
import Contact from "./Contact.jsx";

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
          Professional Hospitality & Event Staffing in Gauteng Since 2007
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Exceptional Service Personnel (ESP) supplies professional waiters,
          ushers, setup crews, food service assistants, cashiers and bar
          management teams to conferences, exhibitions and corporate events
          across Gauteng.
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
