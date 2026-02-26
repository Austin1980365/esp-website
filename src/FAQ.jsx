import React from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      <section className="px-6 py-20 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Frequently Asked Questions
        </h1>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          About Exceptional Service Personnel
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">How long has ESP been operating?</h3>
            <p>Exceptional Service Personnel was established in 2007 and has been supplying professional hospitality and event staff across Gauteng for over 17 years.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">How many staff does ESP supply?</h3>
            <p>ESP has a staff complement of over 250 trained hospitality and event personnel capable of supporting both large-scale events and ongoing venue operations.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Does ESP supply Gallagher Convention Centre?</h3>
            <p>Yes. ESP has been supplying hospitality and event staff to <strong>Gallagher Convention Centre</strong> continuously since 2007, demonstrating long-term operational reliability.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-4">
          Staffing Services
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">What types of staff do you supply?</h3>
            <p>ESP supplies professional waiters, bar staff, ushers, setup and breakdown crews, food service assistants, cashiers, and bar management teams.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Do you supply staff for conferences and exhibitions?</h3>
            <p>Yes. ESP specialises in conference, exhibition, and corporate event staffing across Gauteng.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Can you handle large-scale events?</h3>
            <p>With over 250 trained personnel, ESP is equipped to scale for both once-off large events and ongoing venue operations.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-4">
          Locations
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Where does ESP operate?</h3>
            <p>ESP operates across Johannesburg, Pretoria, Midrand, Centurion and the greater Gauteng region.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-4">
          Training & Upskilling
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Do you provide hospitality training?</h3>
            <p>Yes. ESP provides practical front-of-house training and upskilling for venue staff, focusing on professionalism, service standards, and operational readiness.</p>
          </div>
        </div>

        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Contact ESP
          </Link>
        </div>

      </section>
    </div>
  );
}
