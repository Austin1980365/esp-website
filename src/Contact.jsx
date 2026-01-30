import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-900 font-sans px-6 py-24 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-6 text-center">
        Contact Exceptional Service Personnel
      </h1>

      <p className="text-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto">
        For professional hospitality staffing and service support across Gauteng,
        please contact one of our directors directly.
      </p>

      <div className="grid md:grid-cols-2 gap-16">

        {/* BERICK */}
        <div className="border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-2">
            Berick Austin
          </h2>
          <p className="text-gray-600 mb-4">
            Director
          </p>

          <p className="mb-2">
            📞 <a href="tel:+27827859743" className="text-orange-600 font-medium">
              082 785 9743
            </a>
          </p>

          <p>
            ✉️ <a href="mailto:bericksse@gmail.com" className="text-orange-600 font-medium">
              bericksse@gmail.com
            </a>
          </p>
        </div>

        {/* TEBOGO */}
        <div className="border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-2">
            Tebogo
          </h2>
          <p className="text-gray-600 mb-4">
            Director
          </p>

          <p className="mb-2">
            📞 <a href="tel:+27XXXXXXXXX" className="text-orange-600 font-medium">
              [Tebogo’s phone number]
            </a>
          </p>

          <p>
            ✉️ <a href="mailto:tebogo@espstaffing.co.za" className="text-orange-600 font-medium">
              tebogo@espstaffing.co.za
            </a>
          </p>
        </div>

      </div>

      <p className="text-center text-sm text-gray-500 mt-16">
        Based in Gauteng · Supporting Johannesburg, Pretoria, Midrand & surrounding areas
      </p>

    </div>
  );
}

