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
ESP — Exceptional Service Personnel
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

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* LARGE ESP LOGO */}
        <Link
          to="/"
          className="relative flex h-24 w-44 items-center overflow-hidden"
          aria-label="ESP Exceptional Service Personnel"
        >
          <img
            src="/esp-logo-full.png"
            alt="ESP - Exceptional Service Personnel - Established 2007"
            className="absolute left-1/2 top-1/2 h-44 w-44 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
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
            className="rounded-full bg-orange-600 px-7 py-3.5 text-sm font-black text-white shadow-sm transition hover:bg-orange-700"
          >
            Get in Touch
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="grid min-h-[620px] lg:grid-cols-2">

          {/* HERO TEXT */}
          <div className="relative z-10 flex items-center">
            <div className="mx-auto w-full max-w-3xl px-5 py-16 lg:px-12 lg:py-20 xl:px-16">

              <div className="mb-7 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
                Staffing • Training • Customer Experience
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl xl:text-7xl">
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

              <p className="mt-8 text-sm font-bold text-slate-400">
                Established 2007 • 250+ Trained Personnel • Gauteng
              </p>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-0">

            <img
              src="/esp-hero-hospitality.png"
              alt="Professional hospitality waiter providing exceptional service"
              className="absolute inset-0 h-full w-full scale-[1.18] object-cover object-[82%_center]"
            />

            {/* DARK BLEND INTO TEXT */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent lg:from-slate-950 lg:via-slate-950/10 lg:to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent" />

          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="relative z-10 bg-white px-5 py-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-slate-950 shadow-xl md:grid-cols-2 lg:grid-cols-4">

          <Credibility
            title="19+ YEARS"
            text="Established 2007"
            icon="▣"
          />

          <Credibility
            title="250+ PERSONNEL"
            text="Trained & Deployed"
            icon="♙"
          />

          <Credibility
            title="GAUTENG"
            text="Our Primary Focus"
            icon="⌖"
          />

          <Credibility
            title="HOSPITALITY EXPERTISE"
            text="Staffing • Training • Experience"
            icon="★"
          />

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Three Ways We Can Help Your Business
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From putting the right people on the floor to developing
              your team and improving the customer journey, ESP brings
              practical hospitality experience to every engagement.
            </p>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            <ServiceCard
              number="01"
              icon="♨"
              title="Hospitality Staffing"
              text="Professional waiters, bartenders and event personnel when you need reliable people on the floor."
              link="/staffing"
              linkText="Explore Staffing"
            />

            <ServiceCard
              number="02"
              icon="⌑"
              title="Hospitality Training"
              text="Practical training designed to improve service, confidence, professionalism and guest interactions."
              link="/training"
              linkText="Explore Training"
            />

            <ServiceCard
              number="03"
              icon="♙"
              title="Customer Experience"
              text="Identify service gaps and create better, more consistent customer experiences across your business."
              link="/customer-experience"
              linkText="Improve Your Service"
            />

          </div>
        </div>
      </section>

      {/* STAFFING SECTION */}
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              Hospitality Staffing in Gauteng
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Professional Waiters & Hospitality Staff When You Need Them
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              ESP provides professional hospitality personnel for events,
              conferences, functions and customer-facing businesses across
              Gauteng.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
              From waiters and bartenders to conference and banqueting
              personnel, we help businesses put the right people on the floor.
            </p>

            <Link
              to="/staffing"
              className="mt-8 inline-flex rounded-full bg-orange-600 px-7 py-4 text-sm font-black text-white transition hover:bg-orange-700"
            >
              View Hospitality Staffing →
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <DarkStat
              value="Waiters"
              label="Hospitality Personnel"
            />

            <DarkStat
              value="Events"
              label="Functions & Events"
            />

            <DarkStat
              value="250+"
              label="Trained Personnel"
            />

            <DarkStat
              value="Gauteng"
              label="Primary Service Area"
            />

          </div>

        </div>
      </section>

      {/* WHY ESP */}
      <section className="bg-orange-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              Why ESP
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Experience that understands the service floor.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              ESP's foundation is real hospitality experience. That
              experience shapes how we approach staffing, training and
              customer experience.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <WhyCard
              number="01"
              title="Established"
              text="ESP was established in 2007 and has built its experience in hospitality staffing and service."
            />

            <WhyCard
              number="02"
              title="People First"
              text="We understand that customers experience your business through the people representing it."
            />

            <WhyCard
              number="03"
              title="Practical"
              text="Our approach is focused on what actually happens when teams are dealing with customers."
            />

          </div>

        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              The ESP approach
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              People. Service. Experience.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Great customer experiences don't happen by accident.
              They come from the right people, clear standards,
              practical training and a genuine understanding of the
              customer journey.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-500">
              That's why ESP brings staffing, training and customer
              experience together under one service philosophy.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Learn More About ESP →
            </Link>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">

            <div className="border-l-4 border-orange-600 pl-6">

              <p className="text-3xl font-black leading-tight">
                Exceptional
                <br />
                People.
                <br />
                Exceptional
                <br />
                Service.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                A service philosophy built from practical hospitality
                experience.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
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
              Need staff? Want to train your team? Looking to improve
              the customer experience? Start with a conversation.
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
   COMPONENTS
============================================================ */

function Credibility({ title, text, icon }) {
  return (
    <div className="border-b border-white/10 px-6 py-6 last:border-b-0 md:nth-last-child-2:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">

      <div className="flex items-center gap-4">

        <div className="text-3xl text-orange-500">
          {icon}
        </div>

        <div>
          <p className="text-sm font-black text-white">
            {title}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {text}
          </p>
        </div>

      </div>

    </div>
  );
}

function ServiceCard({
  number,
  icon,
  title,
  text,
  link,
  linkText,
}) {
  return (
    <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
          {icon}
        </div>

        <span className="text-sm font-black text-orange-600">
          {number}
        </span>

      </div>

      <h3 className="mt-7 text-2xl font-black text-slate-950">
        {title}
      </h3>

      <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">
        {text}
      </p>

      <Link
        to={link}
        className="mt-6 inline-flex text-sm font-black text-orange-600 transition group-hover:text-orange-700"
      >
        {linkText}
        <span className="ml-2 transition group-hover:translate-x-1">
          →
        </span>
      </Link>

    </div>
  );
}

function DarkStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7">

      <p className="text-2xl font-black text-white">
        {value}
      </p>

      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>

    </div>
  );
}

function WhyCard({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-7">

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
   INNER PAGES
============================================================ */

function SimplePage({
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
    <SimplePage
      eyebrow="Hospitality Staffing"
      title="Professional Waiters & Hospitality Staff for Hire in Gauteng"
      description="Reliable hospitality personnel for events, conferences, functions, venues and customer-facing businesses across Gauteng."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <InnerServiceCard
          title="Waiters"
          text="Professional hospitality personnel for functions, restaurants, conferences and events."
        />

        <InnerServiceCard
          title="Bartenders"
          text="Professional bar personnel who understand presentation, service and guest interaction."
        />

        <InnerServiceCard
          title="Event Staff"
          text="Flexible hospitality staffing support for corporate events, private functions, launches and special occasions."
        />

        <InnerServiceCard
          title="Conference & Banqueting"
          text="Hospitality personnel for conferences, banquets, venues and large-scale functions."
        />

      </div>

      <PageCTA
        title="Need hospitality staff?"
        text="Tell us what you're planning, where it is taking place and how many personnel you require."
        button="Request Staff"
      />

    </SimplePage>
  );
}

/* ============================================================
   TRAINING
============================================================ */

function Training() {
  return (
    <SimplePage
      eyebrow="Hospitality Training"
      title="Training That Improves Real Service"
      description="Practical hospitality and customer-service training designed around the realities of customer-facing environments."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <InnerServiceCard
          title="Customer Service"
          text="Build stronger customer interactions, communication skills and service confidence."
        />

        <InnerServiceCard
          title="Waiter & Front-of-House Training"
          text="Improve service sequence, presentation, product knowledge, upselling and professionalism."
        />

        <InnerServiceCard
          title="Five-Star Service"
          text="Create service standards that help teams consistently deliver a more polished customer experience."
        />

        <InnerServiceCard
          title="Management & Supervisory Training"
          text="Develop supervisors and managers who can lead teams and maintain service standards."
        />

      </div>

      <PageCTA
        title="Training should change behaviour."
        text="Our approach is practical, interactive and focused on what staff actually do when dealing with customers."
        button="Discuss Training"
      />

    </SimplePage>
  );
}

/* ============================================================
   CUSTOMER EXPERIENCE
============================================================ */

function CustomerExperience() {
  return (
    <SimplePage
      eyebrow="Customer Experience"
      title="Turn Everyday Service Into a Better Customer Experience"
      description="Identify service gaps, strengthen standards and help your people deliver a more consistent customer experience."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <InnerServiceCard
          title="Service Audits"
          text="Assess how customers experience your operation and identify practical opportunities for improvement."
        />

        <InnerServiceCard
          title="Mystery Guest Assessments"
          text="Gain an independent view of what customers actually experience across key service touchpoints."
        />

        <InnerServiceCard
          title="Service Standards"
          text="Develop practical standards and procedures that make good service easier to deliver consistently."
        />

        <InnerServiceCard
          title="Customer Experience Consulting"
          text="Work through people, processes and customer touchpoints to create practical service improvements."
        />

      </div>

      <PageCTA
        title="Your service is only as strong as the experience your customer receives."
        text="Let's identify what's working, what's getting in the way and what can be improved."
        button="Discuss Your Service"
      />

    </SimplePage>
  );
}

/* ============================================================
   ABOUT
============================================================ */

function About() {
  return (
    <SimplePage
      eyebrow="About ESP"
      title="Experience You Can Build On"
      description="ESP combines an established hospitality staffing operation with practical service and customer-experience expertise."
    >

      <div className="space-y-8 text-base leading-8 text-slate-600">

        <p>
          Established in 2007, ESP has built its reputation supplying
          professional hospitality and event personnel across Gauteng.
        </p>

        <p>
          That experience has created a practical understanding of what
          makes customer-facing teams succeed — from staffing and
          presentation to communication, service standards and guest
          interaction.
        </p>

        <p>
          The next chapter of ESP brings those capabilities together
          through staffing, training and customer-experience solutions.
        </p>

        <div className="rounded-2xl bg-slate-950 p-8 text-white">

          <p className="text-3xl font-black">
            People.
            <br />
            Service.
            <br />
            Experience.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            That's the foundation of the ESP approach.
          </p>

        </div>

      </div>
    </SimplePage>
  );
}

/* ============================================================
   FAQ
============================================================ */

function FAQ() {

  const questions = [
    {
      q: "When was ESP established?",
      a: "ESP was established in 2007 and has been supplying hospitality and event personnel across Gauteng since then.",
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
      a: "Yes. Customer-experience services can include service assessments, mystery guest evaluations, service standards and practical improvement recommendations.",
    },
  ];

  return (
    <SimplePage
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

    </SimplePage>
  );
}

/* ============================================================
   CONTACT
============================================================ */

function Contact() {
  return (
    <SimplePage
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
            Whether the requirement is staffing, training or customer
            experience, we'll help identify the appropriate next step.
          </p>

          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">

            <p>
              <strong className="text-white">
                Staffing:
              </strong>{" "}
              Tell us the event, date, location and number of personnel
              required.
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
              Tell us what service challenge you are experiencing.
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
            We'll connect the existing ESP contact details and enquiry
            process here during the next build stage.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-100 p-6">

            <p className="text-sm font-bold text-slate-950">
              Next step
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              We'll connect the real contact information and enquiry form
              once the existing details have been confirmed.
            </p>

          </div>

        </div>

      </div>
    </SimplePage>
  );
}

/* ============================================================
   SUPPORT COMPONENTS
============================================================ */

function InnerServiceCard({ title, text }) {
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

function PageCTA({ title, text, button }) {
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

          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-block rounded-xl bg-white p-3"
            >
              <img
                src="/esp-logo-full.png"
                alt="ESP - Exceptional Service Personnel"
                className="h-28 w-28 object-contain"
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

          <div>

            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">

              <Link
                className="transition hover:text-white"
                to="/staffing"
              >
                Hospitality Staffing
              </Link>

              <Link
                className="transition hover:text-white"
                to="/training"
              >
                Hospitality Training
              </Link>

              <Link
                className="transition hover:text-white"
                to="/customer-experience"
              >
                Customer Experience
              </Link>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
              ESP
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">

              <Link
                className="transition hover:text-white"
                to="/about"
              >
                About ESP
              </Link>

              <Link
                className="transition hover:text-white"
                to="/faq"
              >
                FAQ
              </Link>

              <Link
                className="transition hover:text-white"
                to="/contact"
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
   404
============================================================ */

function NotFound() {
  return (
    <SimplePage
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
    </SimplePage>
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
