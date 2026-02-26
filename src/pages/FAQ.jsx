import React from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      <section className="px-6 py-20 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              How long has ESP been operating?
            </h3>
            <p>
              Exceptional Service Personnel was established in 2007 and has
              been supplying professional hospitality and event staff
              across Gauteng for over 17 years.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How many staff does ESP supply?
            </h3>
            <p>
              ESP has a staff complement of over 250 trained hospitality
              and event personnel.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Does ESP supply Gallagher Convention Centre?
            </h3>
            <p>
              Yes. ESP has supplied hospitality staff to
              <strong> Gallagher Convention Centre</strong>
              continuously since 2007.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Where does ESP operate?
            </h3>
            <p>
              ESP operates across Johannesburg, Pretoria,
              Midrand, Centurion and the greater Gauteng region.
            </p>
          </div>

        </div>

        <div className="mt-12">
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
