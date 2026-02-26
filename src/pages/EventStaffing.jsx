import React from "react";
import { Link } from "react-router-dom";

export default function EventStaffing() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      <section className="px-6 py-20 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Event Staffing in Gauteng
        </h1>

        <p className="text-lg mb-6">
          Exceptional Service Personnel (ESP) provides professional event staffing
          services across Gauteng, supporting conferences, exhibitions,
          corporate functions and large-scale hospitality environments.
        </p>

        <p className="text-lg mb-6">
          Established in 2007, ESP has supplied hospitality and event staff
          to demanding venues including long-term service delivery at
          <strong> Gallagher Convention Centre</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Event & Conference Staffing Services
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-10">
          <li>Professional waiters & bar staff</li>
          <li>Ushers & front-of-house teams</li>
          <li>Setup & breakdown crews</li>
          <li>Food service assistants</li>
          <li>Cashiers & registration staff</li>
          <li>Bar management & beverage teams</li>
        </ul>

        <p className="text-lg mb-10">
          With a staff complement of over 250 trained personnel,
          ESP is equipped to scale for both once-off events
          and ongoing venue operations.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Contact ESP for Event Staffing
        </Link>

      </section>

    </div>
  );
}
