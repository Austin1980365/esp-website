import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-6">
            <img
              src="/esp-logo-full.png"
              alt="ESP - Exceptional Service Personnel"
              className="h-28 md:h-32 w-auto"
            />
            <div className="text-xs text-gray-500">
              Established 2007
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-orange-600">Home</a>
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#waiters" className="hover:text-orange-600">Waiters</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="px-6 py-24 text-center max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional hospitality staffing you can rely on
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          <strong>Exceptional Service Personnel (ESP)</strong> is a hospitality staffing
          partner supporting events and venues across Gauteng. Since 2007, we have
          supplied professional waiters, bar staff, and service personnel to environments
          where reliability and consistency matter.
        </p>

        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Request Hospitality Staff
        </a>
      </section>

      {/* RELIABILITY */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Where reliability matters
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Trusted hospitality staffing for demanding environments
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            ESP supports conferences, exhibitions, corporate events, and hospitality
            venues where service consistency, professionalism, and on-site supervision
            are critical.
          </p>

          <p className="text-lg text-gray-700">
            With over 15 years of operational experience, ESP has delivered reliable
            hospitality staff to high-pressure environments across Gauteng — including
            long-standing service delivery at major convention and exhibition venues.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our hospitality services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                Professional Waiters
              </h3>
              <p>
                Experienced waiters for conferences, exhibitions, banquets,
                corporate functions, and private events across Gauteng.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                Skilled Bar Staff
              </h3>
              <p>
                Confident, professional bar staff trained to perform under pressure
                in high-volume hospitality environments.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                Hospitality Training
              </h3>
              <p>
                Practical front-of-house service training focused on professionalism,
                guest interaction, and service standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITERS */}
      <section id="waiters" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Professional event waiters in Gauteng
        </h2>

        <p className="mb-6">
          ESP supplies hospitality-trained waiters for events, conferences,
          exhibitions, and venues across Johannesburg, Pretoria, Midrand,
          and Centurion.
        </p>

        <p className="mb-10">
          Our teams are selected, trained, and supervised to deliver consistent,
          polished service in demanding hospitality environments.
        </p>

        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Book Professional Waiters
        </a>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gray-900 text-white px-6 py-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Book professional hospitality staff
        </h2>

        <p className="max-w-2xl mx-auto mb-10">
          Contact ESP to discuss your hospitality staffing or training requirements
          anywhere in Gauteng.
        </p>

        <a
          href="mailto:bericksse@gmail.com"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Contact ESP
        </a>
      </section>

    </div>
  );
}
