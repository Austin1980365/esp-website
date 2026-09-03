import React from "react";
import { Link, Routes, Route } from "react-router-dom";

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/esp-logo-full.png"
            alt="ESP Exceptional Service Personnel"
            className="h-[76px] w-[190px] object-contain object-left"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/staffing">Staffing</NavLink>
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/customer-experience">
            Customer Experience
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>

          <Link
            to="/contact"
            className="rounded-full bg-[#f28c28] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#d97516]"
          >
            Get in Touch
          </Link>
        </nav>

        {/* MOBILE CTA */}
        <Link
          to="/contact"
          className="rounded-full bg-[#f28c28] px-5 py-2.5 text-sm font-bold text-white lg:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm font-semibold text-slate-700 transition hover:text-[#f28c28]"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#020817] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="mb-5">
              <img
                src="/esp-logo-full.png"
                alt="ESP Exceptional Service Personnel"
                className="h-[72px] w-[190px] object-contain object-left brightness-0 invert"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Professional hospitality staffing, practical training and
              customer experience solutions built around exceptional service.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#f28c28]">
              Services
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <Link
                to="/staffing"
                className="block transition hover:text-white"
              >
                Hospitality Staffing
              </Link>

              <Link
                to="/training"
                className="block transition hover:text-white"
              >
                Staff Training
              </Link>

              <Link
                to="/customer-experience"
                className="block transition hover:text-white"
              >
                Customer Experience
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#f28c28]">
              Company
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <Link
                to="/about"
                className="block transition hover:text-white"
              >
                About ESP
              </Link>

              <Link
                to="/faq"
                className="block transition hover:text-white"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#f28c28]">
              Service Area
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Johannesburg
              <br />
              Pretoria
              <br />
              Midrand
              <br />
              Centurion
              <br />
              Greater Gauteng
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Exceptional Service Personnel. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  return (
    <>
      <Header />

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative min-h-[680px] overflow-hidden bg-[#020817]">
          
          {/* HERO IMAGE */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
            <img
              src="/esp-hero-final.png"
              alt="Professional hospitality waiter serving guests"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* LIGHTER BLEND - prevents shadow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 via-[#020817]/35 via-25% to-transparent" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 lg:px-8">
            <div className="max-w-2xl">

              <div className="mb-6 inline-flex items-center rounded-full border border-[#f28c28]/40 bg-[#f28c28]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Five-Star Customer Experience
              </div>

              <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Exceptional
                <span className="block">Service</span>

                <span className="mt-3 block text-white">
                  Starts With
                </span>

                <span className="block text-[#f28c28]">
                  Exceptional
                </span>

                <span className="block text-[#f28c28]">
                  People.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                Professional hospitality staffing, practical training and
                customer experience solutions for businesses and events
                across Gauteng.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/staffing"
                  className="inline-flex items-center justify-center rounded-full bg-[#f28c28] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#d97516]"
                >
                  Hire Hospitality Staff
                  <span className="ml-3 text-lg">→</span>
                </Link>

                <Link
                  to="/training"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Train Your Team
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            TRUST BAR
        ================================================= */}

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">

            <TrustItem
              number="2007"
              label="Established"
            />

            <TrustItem
              number="250+"
              label="Trained Personnel"
            />

            <TrustItem
              number="Gauteng"
              label="Service Area"
            />

            <TrustItem
              number="5-Star"
              label="Service Focus"
            />

          </div>
        </section>

        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                  More Than Staffing
                </p>

                <h2 className="text-4xl font-black tracking-tight text-[#020817] sm:text-5xl">
                  Service is not just what your customers receive.
                  <span className="block text-[#f28c28]">
                    It is how they remember you.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  ESP combines practical hospitality experience with a
                  customer-first approach to help businesses create service
                  experiences that people remember for the right reasons.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether you need reliable hospitality personnel, want to
                  improve your team's service standards, or are looking to
                  build a stronger customer experience culture, our approach
                  is practical, professional and focused on results.
                </p>

                <Link
                  to="/customer-experience"
                  className="mt-8 inline-flex items-center font-bold text-[#020817] transition hover:text-[#f28c28]"
                >
                  Explore Customer Experience
                  <span className="ml-3 text-[#f28c28]">→</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            SERVICES
        ================================================= */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                What We Do
              </p>

              <h2 className="text-4xl font-black tracking-tight text-[#020817] sm:text-5xl">
                Practical solutions for better service.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                From the people on the floor to the standards behind the
                scenes, we help businesses build stronger customer
                experiences.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">

              <ServiceCard
                number="01"
                title="Hospitality Staffing"
                text="Professional hospitality personnel for restaurants, events, venues and customer-facing operations."
                link="/staffing"
              />

              <ServiceCard
                number="02"
                title="Team Training"
                text="Practical, hands-on training designed to improve service standards, confidence and consistency."
                link="/training"
              />

              <ServiceCard
                number="03"
                title="Customer Experience"
                text="Identify service gaps and create a stronger customer journey from first contact to final impression."
                link="/customer-experience"
              />

            </div>
          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="bg-[#020817] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
              Ready to Improve Your Service?
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Let's create a customer experience
              <span className="block text-[#f28c28]">
                your business can be proud of.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us what you need and we can discuss the right solution
              for your business, team or event.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-full bg-[#f28c28] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#d97516]"
            >
              Get in Touch
              <span className="ml-3">→</span>
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function TrustItem({ number, label }) {
  return (
    <div className="px-5 py-8 text-center sm:px-8">
      <div className="text-2xl font-black text-[#020817]">
        {number}
      </div>

      <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}

function ServiceCard({ number, title, text, link }) {
  return (
    <Link
      to={link}
      className="group border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#f28c28]/40 hover:shadow-xl"
    >
      <div className="text-sm font-black text-[#f28c28]">
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-black text-[#020817]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>

      <div className="mt-8 font-bold text-[#020817] group-hover:text-[#f28c28]">
        Learn More →
      </div>
    </Link>
  );
}

/* =========================================================
   STAFFING
========================================================= */

function Staffing() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Hospitality Staffing"
        title="The right people make all the difference."
        text="Professional hospitality personnel who understand that great service is about more than completing a task."
      />

      <StaffingContent />

      <Footer />
    </>
  );
}

function StaffingContent() {
  return (
    <main>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Professional Personnel
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#020817]">
                Reliable people. Professional standards.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                ESP provides professional hospitality personnel for
                customer-facing environments where presentation, reliability
                and service matter.
              </p>

              <p className="mt-6">
                Our personnel can support restaurants, private functions,
                corporate events, venues and other hospitality operations
                across Gauteng.
              </p>
            </div>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <FeatureCard
              title="Waiters"
              text="Professional front-of-house personnel focused on attentive and efficient guest service."
            />

            <FeatureCard
              title="Bartenders"
              text="Confident, professional bar staff who understand service, presentation and guest interaction."
            />

            <FeatureCard
              title="Event Staff"
              text="Flexible hospitality personnel for functions, events and customer-facing requirements."
            />

          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-4xl font-black text-[#020817]">
            Need hospitality staff?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us about your requirements and we'll discuss how ESP can
            support your operation or event.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-[#f28c28] px-8 py-4 font-bold text-white transition hover:bg-[#d97516]"
          >
            Request Staff →
          </Link>

        </div>
      </section>

    </main>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="border border-slate-200 bg-white p-8">
      <div className="mb-5 h-1 w-12 bg-[#f28c28]" />

      <h3 className="text-xl font-black text-[#020817]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   TRAINING
========================================================= */

function Training() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Training"
        title="Build a team that understands exceptional service."
        text="Practical customer-service training designed to improve confidence, consistency and the guest experience."
      />

      <main>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-2">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                  Practical Training
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#020817]">
                  Training that translates to the floor.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Great service is not created by a manual alone. Teams need
                  practical guidance, clear standards and an understanding of
                  what customers actually experience.
                </p>
              </div>

              <div className="grid gap-5">

                <TrainingItem
                  title="Service Fundamentals"
                  text="The foundations of professional customer service and hospitality."
                />

                <TrainingItem
                  title="Guest Interaction"
                  text="Communication, confidence, attentiveness and professional interaction."
                />

                <TrainingItem
                  title="Professional Standards"
                  text="Presentation, etiquette, teamwork and consistency."
                />

                <TrainingItem
                  title="Handling Difficult Situations"
                  text="Practical approaches to complaints, pressure and challenging customer interactions."
                />

              </div>

            </div>
          </div>
        </section>

        <section className="bg-[#020817] py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <h2 className="text-4xl font-black text-white">
              Give your team the tools to deliver better service.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Training can be adapted to your business, your team and the
              specific service challenges you are experiencing.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-[#f28c28] px-8 py-4 font-bold text-white transition hover:bg-[#d97516]"
            >
              Discuss Training →
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function TrainingItem({ title, text }) {
  return (
    <div className="border-l-4 border-[#f28c28] bg-slate-50 p-6">
      <h3 className="font-black text-[#020817]">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   CUSTOMER EXPERIENCE
========================================================= */

function CustomerExperience() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Customer Experience"
        title="Turn good service into a five-star experience."
        text="Look beyond individual service moments and build a customer journey that consistently delivers."
      />

      <main>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Experience Matters
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#020817] sm:text-5xl">
                Every interaction is part of your brand.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Customer experience is not limited to hospitality. Any
                business that deals with customers has an opportunity to
                create a stronger experience.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">

              <ExperienceCard
                number="01"
                title="Assess"
                text="Identify service gaps, inconsistencies and areas that affect the customer journey."
              />

              <ExperienceCard
                number="02"
                title="Improve"
                text="Develop practical improvements that teams can understand and apply."
              />

              <ExperienceCard
                number="03"
                title="Maintain"
                text="Create standards and habits that help exceptional service become consistent."
              />

            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <h2 className="text-4xl font-black text-[#020817]">
              What does your customer experience feel like?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Let's look at where your service is today and where it could
              be tomorrow.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-[#f28c28] px-8 py-4 font-bold text-white transition hover:bg-[#d97516]"
            >
              Start a Conversation →
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function ExperienceCard({ number, title, text }) {
  return (
    <div className="border border-slate-200 bg-white p-8">
      <div className="text-sm font-black text-[#f28c28]">
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-black text-[#020817]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="About ESP"
        title="Experience matters. Service matters more."
        text="Built on years of hospitality experience with a simple belief: exceptional service starts with exceptional people."
      />

      <main>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-2">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                  Our Story
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#020817]">
                  Hospitality experience with a customer-first mindset.
                </h2>
              </div>

              <div className="text-lg leading-8 text-slate-600">
                <p>
                  Exceptional Service Personnel was established in 2007 with
                  a focus on supplying professional hospitality personnel.
                </p>

                <p className="mt-6">
                  Over time, our focus has grown beyond simply providing
                  people. The real value lies in helping businesses create
                  better service experiences through the people who interact
                  with their customers every day.
                </p>

                <p className="mt-6">
                  Today, ESP brings together staffing, training and customer
                  experience solutions with hospitality at the foundation.
                </p>
              </div>

            </div>

          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-6 md:grid-cols-3">

              <ValueCard
                title="Professionalism"
                text="We believe presentation, reliability and attitude are fundamental to exceptional service."
              />

              <ValueCard
                title="People"
                text="The customer experience ultimately comes down to the people representing your business."
              />

              <ValueCard
                title="Consistency"
                text="Five-star service is not a once-off performance. It is a standard that must be maintained."
              />

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function ValueCard({ title, text }) {
  return (
    <div className="bg-white p-8">
      <div className="mb-6 h-1 w-12 bg-[#f28c28]" />

      <h3 className="text-2xl font-black text-[#020817]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   FAQ
========================================================= */

function FAQ() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        text="Some of the questions businesses commonly ask about ESP."
      />

      <main className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="space-y-5">

            <FAQItem
              question="When was ESP established?"
              answer="Exceptional Service Personnel was established in 2007."
            />

            <FAQItem
              question="Where does ESP operate?"
              answer="ESP operates across Gauteng, including Johannesburg, Pretoria, Midrand and Centurion."
            />

            <FAQItem
              question="What type of personnel do you provide?"
              answer="ESP provides professional hospitality and event personnel, including waiters, bartenders and other customer-facing staff."
            />

            <FAQItem
              question="Do you provide staff training?"
              answer="Yes. Training can focus on practical customer service, hospitality standards, guest interaction, professionalism and other service requirements."
            />

            <FAQItem
              question="Is ESP only for hotels and lodges?"
              answer="No. Hospitality is our specialist foundation, but our customer-experience approach applies to restaurants, events, venues and other businesses that interact with customers."
            />

            <FAQItem
              question="How do I enquire about your services?"
              answer="Use the contact page to tell us about your staffing, training or customer-experience requirements."
            />

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="border border-slate-200 p-7">
      <h3 className="text-lg font-black text-[#020817]">
        {question}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {answer}
      </p>
    </div>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your service."
        text="Whether you need hospitality personnel, team training or help improving your customer experience, we'd like to hear from you."
      />

      <main className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Start a Conversation
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#020817]">
                Tell us what you need.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Give us a little information about your business, event,
                staffing requirement or training needs and we can discuss the
                best way forward.
              </p>

              <div className="mt-10 border-l-4 border-[#f28c28] bg-slate-50 p-6">
                <p className="font-bold text-[#020817]">
                  Serving businesses across Gauteng
                </p>

                <p className="mt-2 text-slate-600">
                  Johannesburg · Pretoria · Midrand · Centurion · Greater
                  Gauteng
                </p>
              </div>
            </div>

            <form
              className="border border-slate-200 bg-slate-50 p-8"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="grid gap-5">

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Name
                  </label>

                  <input
                    type="text"
                    className="w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#f28c28]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Business
                  </label>

                  <input
                    type="text"
                    className="w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#f28c28]"
                    placeholder="Business name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#f28c28]"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    What can we help with?
                  </label>

                  <select className="w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#f28c28]">
                    <option>Hospitality Staffing</option>
                    <option>Team Training</option>
                    <option>Customer Experience</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    className="w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#f28c28]"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-[#f28c28] px-7 py-4 font-bold text-white transition hover:bg-[#d97516]"
                >
                  Send Enquiry →
                </button>

              </div>

            </form>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   PAGE HERO
========================================================= */

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-[#020817] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-4xl">

          <div className="inline-flex rounded-full border border-[#f28c28]/40 bg-[#f28c28]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
            {eyebrow}
          </div>

          <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {text}
          </p>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   404
========================================================= */

function NotFound() {
  return (
    <>
      <Header />

      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f28c28]">
            404
          </p>

          <h1 className="mt-4 text-5xl font-black text-[#020817]">
            Page Not Found
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            The page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-[#f28c28] px-7 py-4 font-bold text-white transition hover:bg-[#d97516]"
          >
            Back to Home →
          </Link>

        </div>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/staffing" element={<Staffing />} />

      <Route path="/training" element={<Training />} />

      <Route
        path="/customer-experience"
        element={<CustomerExperience />}
      />

      <Route path="/about" element={<About />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
