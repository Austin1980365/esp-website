import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.jsx";
import Waiters from "./pages/Waiters.jsx";

function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">

          <img
            src="/esp-logo-full.png"
            alt="Exceptional Service Personnel Logo"
            className="w-full max-w-xl h-auto"
          />

          <p className="mt-2 text-sm tracking-wide text-gray-500">
            Established 2007
          </p>

          <nav className="mt-6 flex gap-10 text-sm font-medium">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <Link to="/waiters" className="hover:text-orange-600">Waiters</Link>
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
          Professional Hospitality & Event Staffing Company in Gauteng Since 2007
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Exceptional Service Personnel (ESP) is an established hospitality
          staffing and training company supplying professional waiters, ushers,
          setup crews, food service assistants, cashiers, bar staff and bar
          management teams to conferences, exhibitions and corporate events
          across Gauteng.
        </p>

        <div className="text-gray-700 mb-10">
          • 17+ Years Operational Experience <br />
          • 250+ Trained Hospitality & Event Staff <br />
          • Proven Reliability in High-Pressure Environments
        </div>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Contact ESP
        </Link>
      </section>

      {/* WHO WE ARE */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-lg mb-6">
            Exceptional Service Personnel is a long-standing hospitality
            staffing and event workforce company with deep roots in South
            Africa’s conferencing, exhibition and events industry.
          </p>

          <p className="text-lg mb-6">
            Since 2007, ESP has supplied professional hospitality and event
            staff to demanding environments including long-term service delivery
            at <strong>Gallagher Convention Centre</strong>.
          </p>

          <p className="text-lg">
            With a staff complement of over <strong>250 trained personnel</strong>,
            ESP supports both large-scale events and ongoing venue operations,
            maintaining strict service standards, discipline and on-site supervision.
          </p>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Hospitality & Event Staffing
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional Waiters</li>
                <li>Ushers & Front-of-House Support</li>
                <li>Setup & Breakdown Crews</li>
                <li>Food Service Assistants</li>
                <li>Cashiers & Registration Staff</li>
                <li>Bar Management & Beverage Teams</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Training & Upskilling
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Front-of-House Professionalism</li>
                <li>Service Standards & Discipline</li>
                <li>Guest Interaction & Service Awareness</li>
                <li>Operational Readiness Under Pressure</li>
                <li>Upskilling Existing Venue Staff</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CLIENTS TRUST US */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Why Clients Trust ESP
          </h2>

          <p className="text-lg">
            ESP has been supplying hospitality and event staff to
            <strong> Gallagher Convention Centre</strong> continuously since
            <strong> 2007</strong>. This long-standing relationship reflects our
            ability to manage large teams, maintain service standards and deliver
            consistent performance over many years in one of South Africa’s
            busiest and most demanding conference and exhibition environments.
          </p>

        </div>
      </section>

      {/* LOCAL SEO BLOCK */}
      <section className="px-6 py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto text-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            Exceptional Service Personnel – Hospitality Staffing in Gauteng
          </h3>

          <p>Midrand, Gauteng, South Africa</p>
          <p>Serving Johannesburg, Pretoria, Centurion & Surrounding Areas</p>
          <p>250+ Trained Hospitality & Event Staff</p>
          <p>Phone: 082 785 9743</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Speak to ESP Directly
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
      <Route path="/waiters" element={<Waiters />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
