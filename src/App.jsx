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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            src="/esp-logo-full.png"
            alt="ESP - Exceptional Service Personnel - Established 2007"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-orange-600"
                    : "text-slate-700 hover:text-orange-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
          >
            Get in Touch
          </Link>
        </nav>

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

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-bold ${
                    isActive ? "text-orange-600" : "text-slate-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-2 rounded-full bg-orange-600 px-6 py-3 text-center text-sm font-bold text-white"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src="/esp-logo-full.png"
                alt="ESP - Exceptional Service Personnel"
                className="h-24 w-auto rounded bg-white p-2 object-contain"
              />
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Professional hospitality staffing, practical training and
              customer experience solutions for businesses and events across
              Gauteng.
            </p>

            <p className="mt-5 text-sm font-bold text-orange-400">
              Exceptional People. Exceptional Service. Exceptional Experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link className="transition hover:text-white" to="/staffing">
                Hospitality Staffing
              </Link>

              <Link className="transition hover:text-white" to="/training">
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
              <Link className="transition hover:text-white" to="/about">
                About ESP
              </Link>

              <Link className="transition hover:text-white" to="/faq">
                FAQ
              </Link>

              <Link className="transition hover:text-white" to="/contact">
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

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-300">
              Staffing • Training • Customer Experience
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Exceptional
              <span className="block text-orange-500">People.</span>
              Exceptional
              <span className="block text-orange-500">Service.</span>
              Exceptional
              <span className="block">Experiences.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Since 2007, ESP has helped businesses and events across Gauteng
              deliver professional hospitality experiences through reliable
              people, practical training and service expertise.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/staffing"
                className="rounded-full bg-orange-600 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-orange-700"
              >
                Hire Hospitality Staff
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white/10"
              >
                Talk to ESP
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-400">
              <span>Established 2007</span>
              <span>250+ Trained Personnel</span>
              <span>Gauteng</span>
            </div>
          </div>

          {/* HERO VISUAL PANEL */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-orange-950/50 p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  What we bring
                </p>

                <div className="mt-8 space-y-5">
                  <HeroService
                    number="01"
                    title="Professional People"
                    text="Reliable hospitality personnel who understand presentation, professionalism and service."
                  />

                  <HeroService
                    number="02"
                    title="Practical Training"
                    text="Training designed around what actually happens when your team is dealing with customers."
                  />

                  <HeroService
                    number="03"
                    title="Better Experiences"
                    text="Practical customer-experience solutions that identify service gaps and create improvement."
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-orange-600 px-6 py-4 shadow-xl sm:block">
              <p className="text-xs font-black uppercase tracking-wider text-orange-100">
                Established
              </p>
              <p className="text-2xl font-black text-white">2007</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                More than staffing
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Your customers experience your business through your people.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Great service doesn't happen by accident. It comes from the
                right people, clear standards, practical training and a genuine
                understanding of what the customer experiences.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-500">
                That's why ESP brings staffing, training and customer
                experience together under one approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE SERVICES */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Three ways ESP can help.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <MainServiceCard
              number="01"
              title="Hospitality Staffing"
              heading="Professional hospitality staff when you need them."
              text="Waiters, bartenders and event personnel for functions, conferences, venues and customer-facing operations across Gauteng."
              link="/staffing"
              linkText="Explore Staffing"
            />

            <MainServiceCard
              number="02"
              title="Hospitality Training"
              heading="Build a team that delivers better service."
              text="Practical customer-service and hospitality training focused on confidence, professionalism, communication and real service situations."
              link="/training"
              linkText="Explore Training"
            />

            <MainServiceCard
              number="03"
              title="Customer Experience"
              heading="Find the gaps. Improve the experience."
              text="Service assessments, mystery guest evaluations, standards and practical customer-experience improvement."
              link="/customer-experience"
              linkText="Improve Your Service"
            />
          </div>
        </div>
      </section>

      {/* STAFFING SEO SECTION */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              Hospitality Staffing in Gauteng
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Need professional waiters or event staff?
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              ESP provides professional hospitality personnel for events,
              conferences, functions and customer-facing businesses across
              Gauteng.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-400">
              From waiters and bartenders to conference and banqueting
              personnel, we help businesses put the right people on the floor.
            </p>

            <Link
              to="/staffing"
              className="mt-8 inline-flex rounded-full bg-orange-600 px-7 py-4 text-sm font-black text-white transition hover:bg-orange-700"
            >
              View Hospitality Staffing
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DarkStat value="Waiters" label="Hospitality Personnel" />
            <DarkStat value="Events" label="Functions & Events" />
            <DarkStat value="250+" label="Trained Personnel" />
            <DarkStat value="Gauteng" label="Primary Service Area" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                Experience you can build on
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Established in 2007. Built around service.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ESP's foundation is real hospitality experience. For almost
                two decades, the business has supplied professional personnel
                across Gauteng.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">
                That operational experience now supports a broader approach:
                helping businesses get the right people, develop their teams
                and improve the customer experience.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800"
              >
                Learn More About ESP
              </Link>
            </div>

            <div className="rounded-[2rem] bg-slate-100 p-8 sm:p-10">
              <div className="border-l-4 border-orange-600 pl-6">
                <p className="text-2xl font-black leading-tight text-slate-950">
                  People.
                  <br />
                  Service.
                  <br />
                  Experience.
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  The three elements behind the next chapter of ESP.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <LightStat value="2007" label="Established" />
                <LightStat value="250+" label="Trained Personnel" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ESP */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              Why ESP
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Practical experience, not just theory.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <WhyCard
              title="Experience"
              text="An established hospitality operation with a history dating back to 2007."
            />

            <WhyCard
              title="People"
              text="A focus on professionalism, presentation, attitude and the human side of service."
            />

            <WhyCard
              title="Practicality"
              text="Training and improvement built around real customer-facing situations."
            />
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
              Need staff? Want to train your team? Looking to improve the
              customer experience? Start with a conversation.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-black text-white transition hover:bg-slate-800"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}

function HeroService({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex gap-4">
        <span className="text-xs font-black text-orange-500">{number}</span>

        <div>
          <h3 className="font-black text-white">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

function MainServiceCard({
  number,
  title,
  heading,
  text,
  link,
  linkText,
}) {
  return (
    <div className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black text-orange-600">{number}</span>

        <span className="h-2 w-2 rounded-full bg-orange-600" />
      </div>

      <p className="mt-8 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950">
        {heading}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{text}</p>

      <Link
        to={link}
        className="mt-7 inline-flex items-center text-sm font-black text-orange-600 transition group-hover:text-orange-700"
      >
        {linkText}
        <span className="ml-2 transition group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}

function DarkStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}

function LightStat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="text-2xl font-black text-slate-950">{value}</div>
      <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}

function WhyCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-7">
      <div className="mb-5 h-1 w-12 rounded-full bg-orange-600" />

      <h3 className="text-xl font-black text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

/* ============================================================
   INNER PAGES
   ============================================================ */

function SimplePage({ eyebrow, title, description, children }) {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">{children}</div>
      </section>
    </>
  );
}

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
        text="Tell us what you're planning, where it is taking place and how many people you require."
        button="Request Staff"
      />
    </SimplePage>
  );
}

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
          Over the years, that experience has created a practical understanding
          of what makes customer-facing teams succeed — from staffing and
          presentation to communication, service standards and guest
          interaction.
        </p>

        <p>
          The next chapter of ESP brings those capabilities together through
          staffing, training and customer-experience solutions.
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
            That's the foundation of the new ESP approach.
          </p>
        </div>
      </div>
    </SimplePage>
  );
}

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

            <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </SimplePage>
  );
}

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
            experience, we'll help you identify the appropriate next step.
          </p>

          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              <strong className="text-white">Staffing:</strong> Tell us the
              event, date, location and number of personnel required.
            </p>

            <p>
              <strong className="text-white">Training:</strong> Tell us about
              your team and the areas you want to improve.
            </p>

            <p>
              <strong className="text-white">Customer Experience:</strong> Tell
              us what service challenge you are experiencing.
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
            The existing ESP contact details and enquiry process will be
            connected here during the next build stage.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-100 p-6">
            <p className="text-sm font-bold text-slate-950">
              Next step
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              We'll connect the real contact information and enquiry form once
              we confirm the existing details.
            </p>
          </div>
        </div>
      </div>
    </SimplePage>
  );
}

function InnerServiceCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-5 h-1 w-12 rounded-full bg-orange-600" />

      <h2 className="text-xl font-black text-slate-950">{title}</h2>

      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
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
        {button}
      </Link>
    </div>
  );
}

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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />

      <main>
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
      </main>

      <Footer />
    </div>
  );
}
