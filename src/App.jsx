import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section id="home" className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Hospitality Staffing in Gauteng
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          ESP (Exceptional Service Personnel) supplies professional waiters, bar staff,
          and hospitality service personnel to events and venues across Gauteng.
          Established in 2007, ESP is trusted for reliable service delivery in
          high-pressure hospitality environments.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Request Hospitality Staff
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Hospitality Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Professional Waiters</h3>
              <p>
                Experienced waiters for corporate events, conferences, exhibitions,
                banquets, and private functions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Skilled Bar Staff</h3>
              <p>
                Professional bar staff for high-volume events and hospitality venues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Hospitality Service Training</h3>
              <p>
                Practical service training for front-of-house hospitality teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITERS */}
      <section id="waiters" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Professional Event Waiters in Gauteng
        </h2>

        <p className="mb-6">
          ESP supplies experienced, hospitality-trained waiters for events, conferences,
          exhibitions, and venues across Johannesburg, Pretoria, Midrand, and Centurion.
        </p>

        <p className="mb-6">
          Established in 2007, ESP is trusted for delivering polished, reliable service
          staff who understand professional hospitality environments.
        </p>

        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Book Professional Waiters
        </a>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gray-900 text-white px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Book Professional Hospitality Staff
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contact ESP to discuss your event staffing requirements.
        </p>

        <a
          href="mailto:bericksse@gmail.com"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Contact ESP
        </a>
      </section>

    </div>
  );
}
