import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* LOGO HEADER */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">

          <img
            src="/esp-logo-full.png"
            alt="ESP - Exceptional Service Personnel"
            className="w-full max-w-3xl h-auto"
          />

          <p className="mt-3 text-sm tracking-wide text-gray-500">
            Established 2007
          </p>

          <nav className="mt-6 flex gap-10 text-sm font-medium">
            <Link to="/" className="hover:text-orange-600">Home</Link>
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
          staff to conference, exhibition, corporate, and event environments across
          Gauteng.
        </p>

        <div className="text-gray-700 mb-10">
          • Over 17 years of service <br />
          • 250+ trained staff <br />
          • Proven reliability in high-pressure environments
        </div>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-12 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
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
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
