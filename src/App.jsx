export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HERO / HOME */}
      <section id="home" className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Hospitality Staffing in Gauteng
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          ESP (Exceptional Service Personnel) is a hospitality staffing and service training
          company supplying professional waiters, bar staff, and trained hospitality personnel
          to events and venues across Gauteng. Established in 2007, ESP is trusted for reliable,
          polished service delivery in high-pressure hospitality environments.
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

            {/* WAITERS */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Professional Waiters</h3>
              <p>
                Experienced waiters for corporate events, conferences, exhibitions, banquets,
                and private functions. Our waiters are trained in service flow, guest interaction,
                grooming, and professional hospitality standards.
              </p>
            </div>

            {/* BAR STAFF */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Skilled Bar Staff</h3>
              <p>
                Professional bar staff for high-volume events and hospitality venues. Fast,
                confident, and trained to perform under pressure while maintaining excellent
                service standards.
              </p>
            </div>

            {/* TRAINING */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Hospitality Service Training</h3>
              <p>
                Hospitality service training focused on professional behaviour, customer
                interaction, grooming, and service awareness for front-of-house teams and venues.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE / TRUST */}
      <section id="experience" className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Proven Hospitality Experience Since 2007
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          ESP has supplied hospitality staff to events and venues across Gauteng for over
          15 years, including long-standing service delivery at Gallagher Convention Centre.
          This experience means our teams understand large-scale, high-pressure environments
          and consistently deliver professional service excellence.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gray-900 text-white px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Book Professional Hospitality Staff</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Whether you need waiters, bar staff, or hospitality service training, ESP is ready
          to support your next event or venue.
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
