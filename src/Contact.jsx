import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">

          <div className="flex items-center gap-6">
            <img
              src="/esp-logo-full.png"
              alt="ESP - Exceptional Service Personnel"
              className="h-20 w-auto"
            />
            <div className="text-xs text-gray-500">
              Established 2007
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <Link to="/contact" className="hover:text-orange-600">Contact</Link>
          </nav>

        </div>
      </header>

      {/* CONTENT */}
      <section className="px-6 py-24 max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Contact Exceptional Service Personnel
        </h1>

        <p className="text-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          For professional hospitality staffing, event support, or service training,
          please contact one of our directors directly.
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          <div className="border rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Berick Austin
            </h2>
            <p className="text-gray-600 mb-4">Director</p>
            <p className="mb-2">
              📞 <a href="tel:+27827859743" className="text-orange-600">082 785 9743</a>
            </p>
            <p>
              ✉️ <a href="mailto:bericksse@gmail.com" className="text-orange-600">
                bericksse@gmail.com
              </a>
            </p>
          </div>

          <div className="border rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Tebogo
            </h2>
            <p className="text-gray-600 mb-4">Director</p>
            <p className="mb-2">
              📞 <a href="tel:+27833055303" className="text-orange-600">083 305 5303</a>
            </p>
            <p>
              ✉️ <a href="mailto:tebogoa@gmail.com" className="text-orange-600">
                tebogoa@gmail.com
              </a>
            </p>
          </div>

        </div>

        <p className="text-center text-sm text-gray-500 mt-16">
          Based in Gauteng · Supporting conferences, exhibitions, corporate events & hospitality venues
        </p>

      </section>

    </div>
  );
}
