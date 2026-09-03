import React from "react";
import { Link, Routes, Route } from "react-router-dom";

/* =========================================================
   ESP — EXCEPTIONAL SERVICE PERSONNEL
   Hospitality Staffing | Training | Customer Experience
   ========================================================= */

const services = [
  {
    title: "Hospitality Staffing",
    text: "Professional, service-focused hospitality personnel for restaurants, events, venues and customer-facing operations.",
    link: "/staffing",
  },
  {
    title: "Training & Development",
    text: "Practical training that develops confident teams, stronger service standards and consistent customer experiences.",
    link: "/training",
  },
  {
    title: "Customer Experience",
    text: "Service improvement solutions designed to help businesses create memorable, five-star customer experiences.",
    link: "/customer-experience",
  },
];

const staffingServices = [
  "Waiters & Waitresses",
  "Bartenders",
  "Hospitality Personnel",
  "Event Staff",
  "Front-of-House Personnel",
  "Function & Venue Staff",
];

const trainingAreas = [
  "Five-Star Service Standards",
  "Guest & Customer Experience",
  "Professional Communication",
  "Service Etiquette",
  "Upselling & Revenue Awareness",
  "Complaint Handling",
  "Teamwork & Professionalism",
  "Restaurant & Hospitality Operations",
];

const experienceAreas = [
  "Customer Journey Review",
  "Service Standards",
  "Front-of-House Performance",
  "Guest Interaction",
  "Service Recovery",
  "Team Culture",
  "Operational Consistency",
  "Customer Experience Training",
];

/* =========================================================
   HEADER
   ========================================================= */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[94px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO
            The wrapper keeps the header fixed while allowing
            the source logo to display at a useful visual size.
        */}
        <Link to="/" className="flex items-center">
          <div className="relative h-[88px] w-[220px] overflow-hidden">
            <img
              src="/esp-logo-full.png"
              alt="ESP Exceptional Service Personnel"
              className="absolute left-[-22px] top-1/2 h-[142px] w-[235px] -translate-y-1/2 object-contain"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
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
            className="rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            Get in Touch
          </Link>
        </nav>

        {/* MOBILE */}
        <Link
          to="/contact"
          className="rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white lg:hidden"
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
      className="text-sm font-bold text-slate-900 transition hover:text-orange-600"
    >
      {children}
    </Link>
  );
}

/* =========================================================
   BUTTONS
   ========================================================= */

function PrimaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-700"
    >
      {children}
      <span className="ml-2">→</span>
    </Link>
  );
}

function SecondaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-full border border-slate-500 px-7 py-4 text-sm font-bold text-white transition hover:border-orange-500 hover:text-orange-400"
    >
      {children}
      <span className="ml-2">→</span>
    </Link>
  );
}

/* =========================================================
   SECTION HEADING
   ========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}) {
  return (
    <div className="max-w-3xl">

      {eyebrow && (
        <div
          className={`mb-4 text-sm font-bold uppercase tracking-[0.2em] ${
            light ? "text-orange-400" : "text-orange-600"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   HOME
   ========================================================= */

function Home() {
  return (
    <main>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#020817]">

        <div className="relative min-h-[700px] lg:min-h-[700px]">

          {/* CLEAN HERO PHOTOGRAPH */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
            <div className="absolute inset-0 overflow-hidden">

              <img
                src="/esp-hero-final.png"
                alt="Professional hospitality waiter serving guests"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Navy fade from text area into photograph */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 via-25% to-transparent" />

              {/* Slight overall darkening for premium contrast */}
              <div className="absolute inset-0 bg-[#020817]/10" />

            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-20 lg:px-8">

            <div className="max-w-[680px]">

              {/* EYEBROW */}
              <div className="mb-8 inline-flex rounded-full border border-orange-500/50 bg-orange-500/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                Staffing • Training • Customer Experience
              </div>

              {/* MAIN HEADLINE */}
              <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[68px]">

                Exceptional
                <br />

                Service
                <br />

                Starts With
                <br />

                <span className="text-orange-500">
                  Exceptional
                  <br />
                  People.
                </span>

              </h1>

              {/* INTRODUCTION */}
              <p className="mt-8 max-w-[610px] text-lg leading-8 text-slate-200">
                Professional hospitality staffing, practical training and
                customer experience solutions for businesses and events
                across Gauteng.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <PrimaryButton to="/staffing">
                  Hire Hospitality Staff
                </PrimaryButton>

                <SecondaryButton to="/training">
                  Train Your Team
                </SecondaryButton>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          TRUST BAR
          ===================================================== */}

      <section className="border-b border-slate-800 bg-[#071120]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-700 lg:grid-cols-4">

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

      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="What ESP Does"
            title="More Than Staffing. We Build Better Service."
            text="Exceptional Service Personnel combines experienced hospitality staffing with practical training and customer experience solutions to help businesses deliver service that customers remember."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY ESP
          ===================================================== */}

      <section className="bg-slate-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <SectionHeading
              light
              eyebrow="Why ESP"
              title="Professional People. Practical Standards. Better Experiences."
              text="Great customer service does not happen by accident. It comes from people who understand service, clear standards and a culture that puts the customer first."
            />

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <DarkFeature
              number="01"
              title="Experience"
              text="Decades of practical hospitality and service experience inform everything we do."
            />

            <DarkFeature
              number="02"
              title="People"
              text="We focus on professional, presentable and service-minded personnel."
            />

            <DarkFeature
              number="03"
              title="Standards"
              text="Clear service standards create consistency across every customer interaction."
            />

            <DarkFeature
              number="04"
              title="Results"
              text="Better service strengthens customer loyalty, reputation and business performance."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="bg-orange-600 py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">
              Ready to improve your service?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black text-white sm:text-4xl">
              Let's create a customer experience your business can be proud of.
            </h2>

          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-900"
          >
            Talk to ESP →
          </Link>

        </div>

      </section>

    </main>
  );
}

/* =========================================================
   TRUST ITEM
   ========================================================= */

function TrustItem({ number, label }) {
  return (
    <div className="px-6 py-7 text-center">

      <div className="text-2xl font-black text-orange-500">
        {number}
      </div>

      <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
        {label}
      </div>

    </div>
  );
}

/* =========================================================
   SERVICE CARD
   ========================================================= */

function ServiceCard({
  title,
  text,
  link,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">

      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl font-black text-orange-600">
        +
      </div>

      <h3 className="text-2xl font-black text-slate-950">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>

      <Link
        to={link}
        className="mt-7 inline-flex font-bold text-orange-600 transition group-hover:text-orange-700"
      >
        Learn More →
      </Link>

    </div>
  );
}

/* =========================================================
   DARK FEATURE
   ========================================================= */

function DarkFeature({
  number,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

      <div className="text-sm font-black text-orange-500">
        {number}
      </div>

      <h3 className="mt-4 text-xl font-black text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   STAFFING PAGE
   ========================================================= */

function Staffing() {
  return (
    <>
      <PageHero
        eyebrow="Hospitality Staffing"
        title="Professional Hospitality Staff When You Need Them."
        text="Reliable, presentable and service-focused personnel for hospitality businesses, functions, events and customer-facing operations across Gauteng."
      >
        <PrimaryButton to="/contact">
          Request Staff
        </PrimaryButton>
      </PageHero>

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Staffing Services"
            title="The Right People Make the Difference."
            text="ESP provides hospitality personnel who understand the importance of presentation, professionalism, teamwork and customer service."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {staffingServices.map((item, index) => (
              <ListCard
                key={item}
                number={`0${index + 1}`}
                title={item}
              />
            ))}

          </div>

          <div className="mt-20 rounded-3xl bg-slate-950 p-10 lg:p-14">

            <div className="max-w-3xl">

              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Service First
              </div>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Staffing is not just about filling a shift.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Your staff represent your business. That is why professional
                appearance, attitude, communication and customer awareness
                matter just as much as the role they perform.
              </p>

              <div className="mt-8">
                <PrimaryButton to="/contact">
                  Discuss Your Staffing Needs
                </PrimaryButton>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   TRAINING PAGE
   ========================================================= */

function Training() {
  return (
    <>
      <PageHero
        eyebrow="Training & Development"
        title="Train Your Team to Deliver Five-Star Service."
        text="Practical, engaging training designed to improve confidence, professionalism and customer service performance."
      >
        <PrimaryButton to="/contact">
          Discuss Training
        </PrimaryButton>
      </PageHero>

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="Training Areas"
            title="Training That Connects Directly to the Floor."
            text="Our approach is practical and service-focused. Training should give your team tools they can use immediately."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {trainingAreas.map((item, index) => (
              <ListCard
                key={item}
                number={String(index + 1).padStart(2, "0")}
                title={item}
              />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   CUSTOMER EXPERIENCE PAGE
   ========================================================= */

function CustomerExperience() {
  return (
    <>
      <PageHero
        eyebrow="Customer Experience"
        title="Turn Good Service Into Exceptional Service."
        text="We help customer-facing businesses identify service gaps, strengthen standards and build a culture where exceptional experiences become consistent."
      >
        <PrimaryButton to="/contact">
          Improve Your Service
        </PrimaryButton>
      </PageHero>

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="Experience Solutions"
            title="Look at Your Business Through the Customer's Eyes."
            text="A great customer experience is created through hundreds of small interactions. We help businesses understand where those moments can be improved."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {experienceAreas.map((item, index) => (
              <ListCard
                key={item}
                number={String(index + 1).padStart(2, "0")}
                title={item}
              />
            ))}

          </div>

        </div>

      </section>

      <section className="bg-slate-950 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            light
            eyebrow="The ESP Approach"
            title="Observe. Improve. Train. Repeat."
            text="Sustainable service improvement comes from understanding what is happening now, implementing practical changes and giving teams the confidence to maintain the standard."
          />

        </div>

      </section>
    </>
  );
}

/* =========================================================
   ABOUT PAGE
   ========================================================= */

function About() {
  return (
    <>
      <PageHero
        eyebrow="About ESP"
        title="Built Around Exceptional Service."
        text="Exceptional Service Personnel was established in 2007 with a simple principle: exceptional service starts with exceptional people."
      />

      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <SectionHeading
              eyebrow="Our Philosophy"
              title="People Are at the Heart of Service."
              text="Whether someone walks into a restaurant, attends an event, checks into a hotel or interacts with a customer-facing business, the people they encounter shape the experience."
            />

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">

            <p>
              ESP brings together hospitality staffing, practical training and
              customer experience thinking to help businesses raise their
              service standards.
            </p>

            <p>
              Our focus is not simply on completing a task. It is on
              understanding the customer, anticipating needs and delivering
              service with professionalism.
            </p>

            <p>
              That philosophy applies across hospitality and any environment
              where people interact directly with customers.
            </p>

          </div>

        </div>

      </section>

      <section className="bg-slate-950 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-3">

            <StatCard
              number="2007"
              title="Established"
              text="ESP has been serving the hospitality and service industry since 2007."
            />

            <StatCard
              number="250+"
              title="Personnel"
              text="A trained pool of hospitality and event personnel."
            />

            <StatCard
              number="Gauteng"
              title="Service Area"
              text="Serving businesses and events across Gauteng."
            />

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   FAQ PAGE
   ========================================================= */

function FAQ() {
  const faqs = [
    {
      question: "What services does ESP provide?",
      answer:
        "ESP provides hospitality staffing, training and customer experience solutions for businesses and events.",
    },
    {
      question: "Where does ESP operate?",
      answer:
        "ESP operates across Gauteng, including Johannesburg, Pretoria, Midrand, Centurion and surrounding areas.",
    },
    {
      question: "What type of staff can ESP provide?",
      answer:
        "Depending on your requirements, ESP can provide waiters, bartenders, hospitality personnel, event staff and other front-of-house personnel.",
    },
    {
      question: "Does ESP provide hospitality training?",
      answer:
        "Yes. Training can cover service standards, customer experience, communication, professionalism, complaint handling and other practical hospitality skills.",
    },
    {
      question: "Can ESP help improve our customer service?",
      answer:
        "Yes. Customer experience solutions can help identify service gaps, strengthen standards and improve consistency across customer interactions.",
    },
    {
      question: "How long has ESP been operating?",
      answer:
        "Exceptional Service Personnel was established in 2007.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Questions About ESP?"
        text="Here are some of the questions businesses commonly ask about our staffing, training and customer experience services."
      />

      <section className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="space-y-5">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-7"
              >

                <summary className="cursor-pointer list-none pr-8 text-lg font-black text-slate-950">
                  {faq.question}
                </summary>

                <p className="mt-5 leading-7 text-slate-600">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   CONTACT PAGE
   ========================================================= */

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Service Needs."
        text="Whether you need hospitality personnel, team training or help improving your customer experience, we'd like to understand what you're trying to achieve."
      />

      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <SectionHeading
              eyebrow="Contact ESP"
              title="Tell Us What You Need."
              text="Contact us to discuss your staffing, training or customer experience requirements."
            />

            <div className="mt-10 rounded-2xl bg-slate-950 p-8">

              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Service Areas
              </div>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Johannesburg • Pretoria • Midrand • Centurion • Greater Gauteng
              </p>

            </div>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 lg:p-10">

            <h2 className="text-2xl font-black text-slate-950">
              Enquiry
            </h2>

            <div className="mt-8 space-y-5">

              <Input label="Name" />

              <Input label="Company" />

              <Input
                label="Email"
                type="email"
              />

              <Input
                label="Telephone"
              />

              <div>

                <label className="mb-2 block text-sm font-bold text-slate-800">
                  How can we help?
                </label>

                <textarea
                  rows="6"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500"
                  placeholder="Tell us about your staffing, training or customer experience requirements..."
                />

              </div>

              <button
                type="button"
                className="w-full rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                Send Enquiry →
              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   INPUT
   ========================================================= */

function Input({
  label,
  type = "text",
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>

      <input
        type={type}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500"
      />

    </div>
  );
}

/* =========================================================
   PAGE HERO
   ========================================================= */

function PageHero({
  eyebrow,
  title,
  text,
  children,
}) {
  return (
    <section className="bg-slate-950 py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-4xl">

          <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            {eyebrow}
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {text}
          </p>

          {children && (
            <div className="mt-9 flex flex-wrap gap-4">
              {children}
            </div>
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   LIST CARD
   ========================================================= */

function ListCard({
  number,
  title,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="text-sm font-black text-orange-600">
        {number}
      </div>

      <h3 className="mt-4 text-lg font-black text-slate-950">
        {title}
      </h3>

    </div>
  );
}

/* =========================================================
   STAT CARD
   ========================================================= */

function StatCard({
  number,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <div className="text-4xl font-black text-orange-500">
        {number}
      </div>

      <h3 className="mt-4 text-xl font-black text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   404
   ========================================================= */

function NotFound() {
  return (
    <section className="bg-slate-950 py-32">

      <div className="mx-auto max-w-3xl px-6 text-center">

        <div className="text-7xl font-black text-orange-500">
          404
        </div>

        <h1 className="mt-6 text-4xl font-black text-white">
          Page Not Found
        </h1>

        <p className="mt-5 text-lg text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <div className="mt-8">
          <PrimaryButton to="/">
            Return Home
          </PrimaryButton>
        </div>

      </div>

    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className="bg-[#020817] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-block">

              <div className="relative h-[82px] w-[205px] overflow-hidden">

                <img
                  src="/esp-logo-full.png"
                  alt="ESP Exceptional Service Personnel"
                  className="absolute left-[-22px] top-1/2 h-[140px] w-[225px] -translate-y-1/2 object-contain"
                />

              </div>

            </Link>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Professional hospitality staffing, practical training and
              customer experience solutions built around exceptional service.
            </p>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-orange-500">
              Exceptional Service Starts With Exceptional People.
            </p>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="font-black text-white">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                className="block hover:text-orange-500"
                to="/staffing"
              >
                Hospitality Staffing
              </Link>

              <Link
                className="block hover:text-orange-500"
                to="/training"
              >
                Training & Development
              </Link>

              <Link
                className="block hover:text-orange-500"
                to="/customer-experience"
              >
                Customer Experience
              </Link>

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="font-black text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                className="block hover:text-orange-500"
                to="/about"
              >
                About ESP
              </Link>

              <Link
                className="block hover:text-orange-500"
                to="/faq"
              >
                FAQ
              </Link>

              <Link
                className="block hover:text-orange-500"
                to="/contact"
              >
                Get in Touch
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-slate-800 pt-7 text-sm text-slate-500">
          © {new Date().getFullYear()} Exceptional Service Personnel. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

/* =========================================================
   APP / ROUTES
   ========================================================= */

export default function App() {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/staffing"
          element={<Staffing />}
        />

        <Route
          path="/training"
          element={<Training />}
        />

        <Route
          path="/customer-experience"
          element={<CustomerExperience />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </div>
  );
}
