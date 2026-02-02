import React from "react";
import { Link } from "react-router-dom";

export default function Waiters() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* PAGE HEADER */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Event Waiters for Hire in Gauteng
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Exceptional Service Personnel (ESP) supplies professional, hospitality-trained
          waiters for conferences, exhibitions, corporate events, and private functions
          across Gauteng.
        </p>

        <p className="text-gray-700 mb-10">
          Established in 2007, ESP has been supplying waiters to high-pressure hospitality
          environments, including long-standing service delivery at
          <strong> Gallagher Convention Centre</strong>.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Book Professional Waiters
        </Link>
      </section>

      {/* WHERE WE SUPPLY */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Event & Conference Waiters Across Gauteng
          </h2>

          <p className="text-lg mb-6">
            ESP supplies professional waiters for events and venues across
            Johannesburg, Pretoria, Midrand, Centurion, and the greater Gauteng region.
            Our teams are experienced in large-scale conferences, exhibitions, banquets,
            and corporate functions.
          </p>

          <p className="text-lg">
            With a staff complement of over <strong>250 trained hospitality staff</strong>,
            ESP is equipped to scale for both once-off events and ongoing venue operations.
          </p>
        </div>
      </section>

      {/* WHAT MAKES OUR WAITERS DIFFERENT */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            What Sets ESP Waiters Apart
          </h2>

          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Hospitality-trained, professional event waiters</li>
            <li>Well-groomed and presentable staff</li>
            <li>Experienced in conferences and exhibitions</li>
            <li>Reliable, punctual, and supervised teams</li>
            <li>Trained to perform under pressure</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Trusted Waiter Supply Since 2007
          </h2>

          <p className="text-lg">
            ESP has been supplying waiters and hospitality staff to
            <strong> Gallagher Convention Centre since 2007</strong>, one of South
            Africa’s busiest conference and exhibition venues. This long-term
            relationship reflects our ability to deliver consistent service
            in demanding hospitality environments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need professional waiters for your event?
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          Contact ESP to discuss waiter staffing for conferences, exhibitions,
          and events anywhere in Gauteng.
        </p>

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
