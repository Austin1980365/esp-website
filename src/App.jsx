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
                banquets, and private functions. Trained in service flow, guest
                interaction, grooming, and professionalism.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Skilled Bar Staff</h3>
              <p>
                Professional bar staff for high-volume events and hospitality venues.
                Fast, confident, and trained to perform under pressure while maintaining
                service standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Hospitality Service Training</h3>
              <p>
                Service training focused on professional behaviour, customer interaction,
                grooming, and service awareness for front-of-house teams.
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
          Looking for professional waiters in Gauteng? ESP supplies experienced,
          hospitality-trained waiters for events, conferences, exhibitions, and venues
          across Johannesburg, Pretoria, Midrand, and Centurion.
        </p>

        <p className="mb-6">
          Established in 2007, ESP is trusted for delivering polished, reliable service
          staff who understand the standards and pressure of professional hospitality
          environments.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Where Our Waiters Work
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li>Corporate events and functions</li>
          <li>Conferences and exhibitions</li>
          <li>Banquets and gala dinners</li>
          <li>Product launches</li>
          <li>Private events and hospitality venues</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          What Sets ESP Waiters Apart
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li>Professionally trained hospitality staff</li>
          <li>Well-groomed and presentable</li>
          <li>Confident guest interaction</li>
          <li>Reliable, punctual, and supervised</li>
          <li>Focused on guest experience</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Proven Experience Since 2007
        </h3>
        <p className="mb-6">
          ESP has supplied hospitality staff to events and venues across Gauteng for over
          15 years, including long-standing service delivery at Gallagher Convention
          Centre.
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
          Whether you need waiters, bar staff, or hospitality service training, ESP is
          ready to support your next event or venue.
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
