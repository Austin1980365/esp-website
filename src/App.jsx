import Waiters from "./pages/Waiters.jsx";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HEADER WITH LOGO */}
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
            Since 2007, ESP has supplied professional hospitality and event staff to
            some of the country’s most demanding environments, including long-term
            service delivery at <strong>Gallagher Convention Centre</strong>.
          </p>

          <p className="text-lg">
            Our teams are selected, trained, and supervised to operate in high-pressure
            settings where organisation, professionalism, and consistency are essential.
            With a staff complement of <strong>250+ trained personnel</strong>, ESP is
            equipped to support both large-scale events and ongoing venue operations.
          </p>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-12 text-center">
            What we do
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Hospitality & Event Staffing
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Ushers & front-of-house support</li>
                <li>Setup & breakdown crews</li>
                <li>Food service assistants</li>
                <li>Cashiers & registration staff</li>
                <li>Professional waiters & bar staff</li>
                <li>Bar management & beverage service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Training & Upskilling
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Front-of-house professionalism</li>
                <li>Service standards & discipline</li>
                <li>Guest interaction & service awareness</li>
                <li>Operational readiness under pressure</li>
                <li>Upskilling existing venue staff</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CLIENTS TRUST US */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Why clients trust us
          </h2>

          <p className="text-lg">
            ESP has been supplying hospitality and event staff to
            <strong> Gallagher Convention Centre</strong> continuously since
            <strong> 2007</strong>. This long-standing relationship reflects our
            ability to manage large teams, maintain service standards, and deliver
            consistent performance over many years in one of South Africa’s busiest
            and most demanding conference and exhibition environments.
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
