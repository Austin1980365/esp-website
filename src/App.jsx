import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

/*
============================================================
ESP — EXCEPTIONAL SERVICE PERSONNEL
Hospitality Staffing • Training • Customer Experience
Established 2007
============================================================
*/

const navItems = [
  { label: "Staffing", path: "/staffing" },
  { label: "Training", path: "/training" },
  { label: "Customer Experience", path: "/customer-experience" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
];

/* ============================================================
   HEADER
============================================================ */

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* LARGE ESP LOGO */}
        <Link
          to="/"
          aria-label="ESP Exceptional Service Personnel"
          className="flex h-24 w-56 items-center"
        >
          <img
            src="/esp-logo-full.png"
            alt="ESP Exceptional Service Personnel Established 2007"
            className="h-22 w-56 object-contain object-left"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-orange-600"
                    : "text-slate-800 hover:text-orange-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-full bg-orange-600 px-7 py-3.5 text-sm font-black text-white transition hover:bg-orange-700"
          >
            Get in Touch
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">

          <nav className="flex flex-col gap-4">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-bold ${
                    isActive
                      ? "text-orange-600"
                      : "text-slate-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-2 rounded-full bg-orange-600 px-6 py-3 text-center text-sm font-black text-white"
            >
              Get in Touch
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}

/* ============================================================
   HOME PAGE
============================================================ */

function Home() {
  return (
    <>
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="grid min-h-[680px] lg:grid-cols-2">

          {/* HERO COPY */}
          <div className="relative z-20 flex items-center">

            <div className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-12 xl:px-16">

              <div className="mb-7 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
                Staffing • Training • Customer Experience
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">

                Exceptional Service
                <br />

                Starts With
                <br />

                <span className="text-orange-500">
                  Exceptional People.
                </span>

              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Professional hospitality staffing, practical training and
                customer experience solutions for businesses and events
                across Gauteng.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/staffing"
                  className="rounded-full bg-orange-600 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-orange-700"
                >
                  Hire Hospitality Staff
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  to="/training"
                  className="rounded-full border border-white/40 bg-white/5 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white/10"
                >
                  Train Your Team
                  <span className="ml-2">→</span>
                </Link>

              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-400">

                <span>Established 2007</span>
                <span>250+ Trained Personnel</span>
                <span>Gauteng Based</span>

              </div>

            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-0">

            <img
              src="/esp-hero-hospitality.png"
              alt="Professional hospitality waiter providing exceptional service"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* DARK LEFT BLEND */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/65 to-transparent" />

            {/* DARK BOTTOM BLEND */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/60 to-transparent" />

          </div>

        </div>

      </section>

      {/* ======================================================
          TRUST BAR
      ====================================================== */}

      <section className="bg-white px-5 py-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-slate-950 shadow-xl md:grid-cols-2 lg:grid-cols-4">

          <TrustItem
            title="ESTABLISHED 2007"
            text="Years of hospitality experience"
          />

          <TrustItem
            title="250+ PERSONNEL"
            text="Trained hospitality personnel"
          />

          <TrustItem
            title="GAUTENG"
            text="Serving businesses across Gauteng"
          />

          <TrustItem
            title="SERVICE FOCUSED"
            text="People • Service • Experience"
          />

        </div>

      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              How ESP can help
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              More Than Staffing.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              ESP combines hospitality staffing, practical training and
              customer experience expertise to help businesses deliver
              better service.
            </p>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            <ServiceCard
              number="01"
              title="Hospitality Staffing"
              text="Professional waiters, bartenders and hospitality personnel for events, functions and customer-facing businesses."
              link="/staffing"
              button="Explore Staffing"
            />

            <ServiceCard
              number="02"
              title="Hospitality Training"
              text="Practical training that develops service confidence, professionalism, communication and customer interaction."
              link="/training"
              button="Explore Training"
            />

            <ServiceCard
              number="03"
              title="Customer Experience"
              text="Identify service gaps and create better, more consistent customer experiences across your operation."
              link="/customer-experience"
              button="Improve Your Service"
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          STAFFING FEATURE
      ====================================================== */}

      <section className="bg-slate-950 py-20 text-white lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              Hospitality Staffing in Gauteng
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              The Right People on the Floor.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              ESP provides professional hospitality personnel for
              events, conferences, functions, venues and customer-facing
              businesses across Gauteng.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
              Our people understand presentation, professionalism and
              the importance of delivering a positive guest experience.
            </p>

            <Link
              to="/staffing"
              className="mt-8 inline-flex rounded-full bg-orange-600 px-7 py-4 text-sm font-black text-white transition hover:bg-orange-700"
            >
              View Hospitality Staffing →
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <FeatureBox
              title="Waiters"
              text="Professional service personnel"
            />

            <FeatureBox
              title="Bartenders"
              text="Professional bar personnel"
            />

            <FeatureBox
              title="Events"
              text="Functions & special events"
            />

            <FeatureBox
              title="Banqueting"
              text="Conference & banquet service"
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          TRAINING / EXPERIENCE
      ====================================================== */}

      <section className="bg-slate-50 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            <div className="rounded-[2rem] bg-white p-8 shadow-sm lg:p-10">

              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                Practical Training
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Training That Works on the Floor.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Great service comes from people who know what is expected
                of them and have the confidence to deliver it.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-500">
                ESP training focuses on practical service behaviour,
                communication, professionalism and customer interaction.
              </p>

              <Link
                to="/training"
                className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-black text-white"
              >
                Explore Training →
              </Link>

            </div>

            <div className="rounded-[2rem] bg-orange-600 p-8 text-white lg:p-10">

              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-100">
                Customer Experience
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Better Service. Better Experiences.
              </h2>

              <p className="mt-5 text-base leading-8 text-orange-50">
                Your customers judge your business through every
                interaction. ESP helps identify service gaps and create
                practical improvements.
              </p>

              <Link
                to="/customer-experience"
                className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-black text-white"
              >
                Improve Your Service →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          WHY ESP
      ====================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              Why ESP
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Experience that understands the service environment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Hospitality is about people. Customer experience is about
              what those people make the customer feel.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <WhyCard
              number="01"
              title="Established Experience"
              text="ESP has been operating since 2007, building practical experience in hospitality staffing and service."
            />

            <WhyCard
              number="02"
              title="People First"
              text="We understand that customers experience a business through the people representing it."
            />

            <WhyCard
              number="03"
              title="Practical Approach"
              text="Our focus is on what actually happens when your team interacts with customers."
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-orange-600 py-16 text-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-100">
              Let's talk
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              What would you like to improve?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-orange-50">
              Need hospitality staff? Want to train your team? Looking
              to improve your customer experience? Start with a
              conversation.
            </p>

          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-black text-white transition hover:bg-slate-800"
          >
            Start a Conversation →
          </Link>

        </div>

      </section>
    </>
  );
}

/* ============================================================
   TRUST ITEM
============================================================ */

function TrustItem({ title, text }) {
  return (
    <div className="border-b border-white/10 px-6 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">

      <p className="text-sm font-black text-white">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-400">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({
  number,
  title,
  text,
  link,
  button,
}) {
  return (
    <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div className="h-1 w-14 rounded-full bg-orange-600" />

        <span className="text-sm font-black text-orange-600">
          {number}
        </span>

      </div>

      <h3 className="mt-7 text-2xl font-black text-slate-950">
        {title}
      </h3>

      <p className="mt-4 min-h-[100px] text-sm leading-7 text-slate-600">
        {text}
      </p>

      <Link
        to={link}
        className="mt-6 inline-flex text-sm font-black text-orange-600"
      >
        {button}
        <span className="ml-2 transition group-hover:translate-x-1">
          →
        </span>
      </Link>

    </div>
  );
}

/* ============================================================
   FEATURE BOX
============================================================ */

function FeatureBox({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7">

      <div className="mb-5 h-1 w-10 rounded-full bg-orange-600" />

      <h3 className="text-xl font-black text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="h-1 w-12 rounded-full bg-orange-600" />

        <span className="text-xs font-black text-orange-600">
          {number}
        </span>

      </div>

      <h3 className="mt-6 text-xl font-black text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   STANDARD PAGE
============================================================ */

function StandardPage({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white lg:py-24">

        <div className="mx-auto max-w-6xl px-5 lg:px-8">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>

        </div>

      </section>

      <section className="bg-white py-16 lg:py-20">

        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          {children}
        </div>

      </section>
    </>
  );
}

/* ============================================================
   STAFFING
============================================================ */

function Staffing() {
  return (
    <StandardPage
      eyebrow="Hospitality Staffing"
      title="Professional Waiters & Hospitality Staff for Hire in Gauteng"
      description="Reliable hospitality personnel for events, conferences, functions, venues and customer-facing businesses across Gauteng."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <InfoCard
          title="Waiters"
          text="Professional hospitality personnel for functions, restaurants, conferences and events."
        />

        <InfoCard
          title="Bartenders"
          text="Professional bar personnel who understand presentation, service and guest interaction."
        />

        <InfoCard
          title="Event Staff"
          text="Flexible hospitality staffing support for corporate events, private functions, launches and special occasions."
        />

        <InfoCard
          title="Conference & Banqueting"
          text="Hospitality personnel for conferences, banquets, venues and large-scale functions."
        />

      </div>

      <CTABox
        title="Need hospitality staff?"
        text="Tell us about your event, location, date and staffing requirements."
        button="Request Hospitality Staff"
      />

    </StandardPage>
  );
}

/* ============================================================
   TRAINING
============================================================ */

function Training() {
  return (
    <StandardPage
      eyebrow="Hospitality Training"
      title="Training That Improves Real Service"
      description="Practical hospitality and customer-service training designed around the realities of customer-facing environments."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <InfoCard
          title="Customer Service"
          text="Build stronger customer interactions, communication skills and service confidence."
        />

        <InfoCard
          title="Waiter & Front-of-House Training"
          text="Improve service sequence, presentation, product knowledge, upselling and professionalism."
        />

        <InfoCard
          title="Five-Star Service"
          text="Create service standards that help teams consistently deliver a more polished customer experience."
        />

        <InfoCard
          title="Management & Supervisory Training"
          text="Develop supervisors and managers who can lead teams and maintain service standards."
        />

      </div>

      <CTABox
        title="Training should change behaviour."
        text="Our approach is practical, interactive and focused on what staff actually do when dealing with customers."
        button="Discuss Training"
      />

    </StandardPage>
  );
}

/* ============================================================
   CUSTOMER EXPERIENCE
============================================================ */

function CustomerExperience() {
  return (
    <StandardPage
      eyebrow="Customer Experience"
      title="Turn Everyday Service Into a Better Customer Experience"
      description="Identify service gaps, strengthen standards and help your people deliver a more consistent customer experience."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <InfoCard
          title="Service Audits"
          text="Assess how customers experience your operation and identify practical opportunities for improvement."
        />

        <InfoCard
          title="Mystery Guest Assessments"
          text="Gain an independent view of what customers actually experience across key service touchpoints."
        />

        <InfoCard
          title="Service Standards"
          text="Develop practical standards and procedures that make good service easier to deliver consistently."
        />

        <InfoCard
          title="Customer Experience Consulting"
          text="Work through people, processes and customer touchpoints to create practical service improvements."
        />

      </div>

      <CTABox
        title="Your service is only as strong as the experience your customer receives."
        text="Let's identify what's working, what's getting in the way and what can be improved."
        button="Discuss Customer Experience"
      />

    </StandardPage>
  );
}

/* ============================================================
   ABOUT
============================================================ */

function About() {
  return (
    <StandardPage
      eyebrow="About ESP"
      title="Experience You Can Build On"
      description="ESP combines established hospitality staffing experience with practical service and customer-experience expertise."
    >

      <div className="space-y-8">

        <p className="text-base leading-8 text-slate-600">
          Established in 2007, ESP has built its experience supplying
          professional hospitality and event personnel across Gauteng.
        </p>

        <p className="text-base leading-8 text-slate-600">
          That experience has created a practical understanding of what
          makes customer-facing teams succeed — from staffing and
          presentation to communication, service standards and guest
          interaction.
        </p>

        <p className="text-base leading-8 text-slate-600">
          ESP brings these capabilities together through hospitality
          staffing, training and customer-experience solutions.
        </p>

        <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">

          <p className="text-4xl font-black leading-tight">
            People.
            <br />
            Service.
            <br />
            Experience.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            The foundation of the ESP approach.
          </p>

        </div>

      </div>

    </StandardPage>
  );
}

/* ============================================================
   FAQ
============================================================ */

function FAQ() {

  const questions = [
    {
      q: "When was ESP established?",
      a: "ESP was established in 2007 and has experience supplying hospitality and event personnel across Gauteng.",
    },
    {
      q: "Where does ESP operate?",
      a: "ESP primarily operates across Gauteng, including Johannesburg, Pretoria, Midrand, Centurion and surrounding areas.",
    },
    {
      q: "What type of staff can ESP provide?",
      a: "ESP provides professional hospitality and event personnel including waiters, bartenders, conference and banqueting staff.",
    },
    {
      q: "Does ESP provide hospitality training?",
      a: "Yes. ESP provides practical hospitality and customer-service training designed to improve staff performance and service delivery.",
    },
    {
      q: "Can ESP help improve our customer experience?",
      a: "Yes. ESP can assist with service assessments, mystery guest evaluations, service standards and practical improvement recommendations.",
    },
  ];

  return (
    <StandardPage
      eyebrow="Frequently Asked Questions"
      title="Frequently Asked Questions"
      description="Answers to common questions about ESP staffing, training and customer-experience services."
    >

      <div className="space-y-4">

        {questions.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <summary className="cursor-pointer list-none pr-8 font-black text-slate-950">
              {item.q}
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {item.a}
            </p>

          </details>
        ))}

      </div>

    </StandardPage>
  );
}

/* ============================================================
   CONTACT
============================================================ */

function Contact() {
  return (
    <StandardPage
      eyebrow="Contact ESP"
      title="Let's Talk About What You Need"
      description="Whether you need hospitality staff, training for your team or help improving your customer experience, tell us what you're looking to achieve."
    >

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-[2rem] bg-slate-950 p-8 text-white">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
            Start a conversation
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Tell us what you need.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Whether your requirement is staffing, training or customer
            experience, we'll help identify the appropriate next step.
          </p>

          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">

            <p>
              <strong className="text-white">
                Staffing:
              </strong>{" "}
              Tell us about the event, date, location and number of
              personnel required.
            </p>

            <p>
              <strong className="text-white">
                Training:
              </strong>{" "}
              Tell us about your team and the areas you want to improve.
            </p>

            <p>
              <strong className="text-white">
                Customer Experience:
              </strong>{" "}
              Tell us about the service challenge you are experiencing.
            </p>

          </div>

        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
            Enquiry
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-950">
            Contact ESP
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            We can discuss your staffing, training or customer-experience
            requirements and determine the best way forward.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-orange-600 px-7 py-3.5 text-sm font-black text-white"
          >
            Return to ESP Home
          </Link>

        </div>

      </div>

    </StandardPage>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="mb-5 h-1 w-12 rounded-full bg-orange-600" />

      <h2 className="text-xl font-black text-slate-950">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   CTA BOX
============================================================ */

function CTABox({
  title,
  text,
  button,
}) {
  return (
    <div className="mt-12 rounded-[2rem] bg-orange-50 p-8 sm:p-10">

      <h2 className="max-w-3xl text-2xl font-black text-slate-950">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
        {text}
      </p>

      <Link
        to="/contact"
        className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-black text-white transition hover:bg-slate-800"
      >
        {button} →
      </Link>

    </div>
  );
}

/* ============================================================
   FOOTER
============================================================ */

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* FOOTER BRAND */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex rounded-xl bg-white p-3"
            >

              <img
                src="/esp-logo-full.png"
                alt="ESP Exceptional Service Personnel"
                className="h-24 w-36 object-contain"
              />

            </Link>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              Professional hospitality staffing, practical training and
              customer experience solutions for businesses and events
              across Gauteng.
            </p>

            <p className="mt-5 text-sm font-bold text-orange-400">
              Exceptional Service Starts With Exceptional People.
            </p>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">

              <Link
                to="/staffing"
                className="transition hover:text-white"
              >
                Hospitality Staffing
              </Link>

              <Link
                to="/training"
                className="transition hover:text-white"
              >
                Hospitality Training
              </Link>

              <Link
                to="/customer-experience"
                className="transition hover:text-white"
              >
                Customer Experience
              </Link>

            </div>

          </div>

          {/* ESP */}
          <div>

            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
              ESP
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">

              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About ESP
              </Link>

              <Link
                to="/faq"
                className="transition hover:text-white"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} ESP — Exceptional Service Personnel.
          Established 2007. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

/* ============================================================
   404 PAGE
============================================================ */

function NotFound() {
  return (
    <StandardPage
      eyebrow="404"
      title="Page Not Found"
      description="The page you're looking for doesn't exist."
    >

      <Link
        to="/"
        className="inline-flex rounded-full bg-orange-600 px-7 py-3.5 text-sm font-black text-white"
      >
        Return Home
      </Link>

    </StandardPage>
  );
}

/* ============================================================
   APP
============================================================ */

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">

      <Header />

      <main>

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

      </main>

      <Footer />

    </div>
  );
}
