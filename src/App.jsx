import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

/* =========================================================
   ESP WEBSITE
   Exceptional People. Exceptional Service. Exceptional Experiences.
   ========================================================= */

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

  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-lg font-black tracking-tight text-white">
            ESP
          </div>

          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-slate-950">
              ESP
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Exceptional Service Personnel
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
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
            className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-semibold ${
                    isActive ? "text-orange-600" : "text-slate-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-2 rounded-full bg-orange-600 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get in Touch
            </Link>
          </div>
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
            <div className="mb-4 text-2xl font-black">ESP</div>

            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Professional hospitality staffing, practical training and
              customer experience solutions for businesses and events across
              Gauteng.
            </p>

            <p className="mt-5 text-sm font-semibold text-orange-400">
              Exceptional People. Exceptional Service. Exceptional Experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link className="hover:text-white" to="/staffing">
                Hospitality Staffing
              </Link>
              <Link className="hover:text-white" to="/training">
                Hospitality Training
              </Link>
              <Link className="hover:text-white" to="/customer-experience">
                Customer Experience
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link className="hover:text-white" to="/about">
                About ESP
              </Link>
              <Link className="hover:text-white" to="/faq">
                FAQ
              </Link>
              <Link className="hover:text-white" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} ESP — Exceptional Service Personnel.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(234,88,12,0.20),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              Hospitality Staffing • Training • Customer Experience
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Exceptional People.
              <span className="block text-orange-500">
                Exceptional Service.
              </span>
              <span className="block">Exceptional Experiences.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Since 2007, ESP has helped businesses and events across Gauteng
              deliver professional hospitality experiences through reliable
              people, practical training and service expertise.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/staffing"
                className="rounded-full bg-orange-600 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-orange-700"
              >
                Hire Hospitality Staff
              </Link>

              <Link
                to="/training"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Train Your Team
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-400">
              <span>Established 2007</span>
              <span>250+ Trained Personnel</span>
              <span>Gauteng Based</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-orange-400">
                What we do
              </div>

              <div className="space-y-4">
                <ServiceCard
                  number="01"
                  title="Hospitality Staffing"
                  text="Professional waiters, bartenders and event personnel when you need reliable people on the floor."
                  link="/staffing"
                />

                <ServiceCard
                  number="02"
                  title="Hospitality Training"
                  text="Practical training designed to improve service, confidence, professionalism and guest interactions."
                  link="/training"
                />

                <ServiceCard
                  number="03"
                  title="Customer Experience"
                  text="Identify service gaps and create better, more consistent customer experiences."
                  link="/customer-experience"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              More than staffing
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Your customers experience your business through your people.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Great service doesn't happen by accident. It comes from the
              right people, clear standards, practical training and a culture
              that understands what the customer actually experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="People"
              text="Reliable, professional hospitality personnel who understand the importance of presentation, attitude and service."
            />

            <FeatureCard
              title="Service"
              text="Practical training and service standards that help teams perform consistently in real customer-facing environments."
            />

            <FeatureCard
              title="Experience"
              text="A customer-focused approach that looks beyond individual transactions to the complete guest or customer journey."
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Built on experience
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Almost two decades of hospitality experience.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              ESP was established in 2007 and has built its reputation by
              supplying professional hospitality and event personnel across
              Gauteng.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              That operational experience now forms the foundation for a
              broader approach to people, service and customer experience.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Learn About ESP
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard value="2007" label="Established" />
            <StatCard value="250+" label="Trained Personnel" />
            <StatCard value="Gauteng" label="Primary Service Area" />
            <StatCard value="17+" label="Years of Experience" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ServiceCard({ number, title, text, link }) {
  return (
    <Link
      to={link}
      className="group block rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-orange-500/40 hover:bg-slate-900"
    >
      <div className="flex gap-4">
        <div className="text-xs font-black text-orange-500">{number}</div>

        <div>
          <h3 className="font-bold text-white group-hover:text-orange-400">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
        </div>
      </div>
    </Link>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-5 h-1 w-12 rounded-full bg-orange-600" />

      <h3 className="text-xl font-black text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
      <div className="text-3xl font-black text-slate-950">{value}</div>
      <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-orange-600 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight">
            Let's improve the experience your customers receive.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-orange-50">
            Whether you need professional hospitality staff, team training or
            help improving your service operation, let's talk.
          </p>
        </div>

        <Link
          to="/contact"
          className="shrink-0 rounded-full bg-slate-950 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}

function SimplePage({ eyebrow, title, description, children }) {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">{children}</div>
      </section>
    </>
  );
}

function Staffing() {
  return (
    <SimplePage
      eyebrow="Hospitality Staffing"
      title="Professional Hospitality Staff for Hire in Gauteng"
      description="Reliable waiters, bartenders and hospitality personnel for events, conferences, venues and customer-facing businesses."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Waiters"
          text="Professional hospitality personnel for functions, restaurants, conferences and events."
        />

        <FeatureCard
          title="Bartenders"
          text="Experienced bar personnel who understand service, presentation and responsible guest interaction."
        />

        <FeatureCard
          title="Event Staff"
          text="Flexible staffing support for corporate events, private functions, launches and special occasions."
        />

        <FeatureCard
          title="Conference & Banqueting"
          text="Hospitality personnel for conferences, banquets, venues and large-scale functions."
        />
      </div>

      <div className="mt-12 rounded-2xl bg-slate-100 p-8">
        <h2 className="text-2xl font-black text-slate-950">
          Need hospitality staff?
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Tell us what you are planning, how many people you need and where the
          service will take place. We'll help you determine the appropriate
          staffing requirement.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white"
        >
          Request Staff
        </Link>
      </div>
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
        <FeatureCard
          title="Customer Service"
          text="Build stronger customer interactions, communication skills and service confidence."
        />

        <FeatureCard
          title="Waiter & Front-of-House Training"
          text="Improve service sequence, presentation, product knowledge, upselling and professionalism."
        />

        <FeatureCard
          title="Five-Star Service"
          text="Create service standards that consistently deliver a more polished customer experience."
        />

        <FeatureCard
          title="Management & Supervisory Training"
          text="Develop supervisors and managers who can lead teams and maintain service standards."
        />
      </div>

      <div className="mt-12 rounded-2xl bg-slate-950 p-8 text-white">
        <h2 className="text-2xl font-black">Training should change behaviour.</h2>

        <p className="mt-3 leading-7 text-slate-300">
          Our approach is practical, interactive and focused on what staff
          actually do when dealing with customers.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white"
        >
          Discuss Training
        </Link>
      </div>
    </SimplePage>
  );
}

function CustomerExperience() {
  return (
    <SimplePage
      eyebrow="Customer Experience"
      title="Turn Everyday Service Into a Better Customer Experience"
      description="Identify service gaps, strengthen standards and help your people deliver a more consistent experience."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Service Audits"
          text="Assess how customers experience your operation and identify practical opportunities for improvement."
        />

        <FeatureCard
          title="Mystery Guest Assessments"
          text="Gain an independent view of what customers actually experience across key service touchpoints."
        />

        <FeatureCard
          title="Service Standards"
          text="Develop practical standards and procedures that make good service easier to deliver consistently."
        />

        <FeatureCard
          title="Customer Experience Consulting"
          text="Work through people, processes and customer touchpoints to create measurable service improvements."
        />
      </div>

      <div className="mt-12 rounded-2xl bg-orange-50 p-8">
        <h2 className="text-2xl font-black text-slate-950">
          Your service is only as strong as the experience your customer receives.
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Let's identify what's working, what's getting in the way and what can
          be improved.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white"
        >
          Discuss Your Service
        </Link>
      </div>
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
          Over the years, that experience has provided a practical
          understanding of what makes customer-facing teams succeed — from
          staffing and presentation to communication, service standards and
          guest interaction.
        </p>

        <p>
          The next chapter of ESP brings those capabilities together through
          staffing, training and customer-experience solutions.
        </p>

        <div className="rounded-2xl bg-slate-100 p-8">
          <h2 className="text-2xl font-black text-slate-950">
            People. Service. Experience.
          </h2>

          <p className="mt-3">
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
      a: "Yes. ESP is developing practical hospitality and customer-service training designed to improve staff performance and service delivery.",
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
            className="group rounded-2xl border border-slate-200 bg-white p-6"
          >
            <summary className="cursor-pointer list-none pr-8 font-bold text-slate-950">
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
        <div className="rounded-2xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-black">Start a conversation</h2>

          <p className="mt-4 leading-7 text-slate-300">
            Give us some information about your requirements and we'll help you
            determine the best next step.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
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

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">
            Enquire with ESP
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Contact details and the enquiry form will be connected during the
            next build stage.
          </p>

          <div className="mt-8 rounded-xl bg-slate-100 p-5 text-sm text-slate-600">
            <strong className="text-slate-950">Next:</strong> We'll connect the
            existing ESP contact details and enquiry process here.
          </div>
        </div>
      </div>
    </SimplePage>
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
        className="inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white"
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
