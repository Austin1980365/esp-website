import React, { useState } from "react";
import { motion } from "framer-motion";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow border border-orange-100 bg-white p-6 ${className}`}>{children}</div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 shadow-sm">
    {children}
  </span>
);

const Icon = ({ name, className = "w-6 h-6" }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "star": return (<svg className={className} viewBox="0 0 24 24" {...common}><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18.9 6.2 21l1.1-6.5L2.6 9.8l6.5-.9L12 3z"/></svg>);
    case "users": return (<svg className={className} viewBox="0 0 24 24" {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
    case "check": return (<svg className={className} viewBox="0 0 24 24" {...common}><path d="M20 6 9 17l-5-5"/></svg>);
    case "clock": return (<svg className={className} viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>);
    case "graduation": return (<svg className={className} viewBox="0 0 24 24" {...common}><path d="M2 7l10-4 10 4-10 4L2 7z"/><path d="M6 10v4a6 6 0 0 0 12 0v-4"/></svg>);
    case "clipboard": return (<svg className={className} viewBox="0 0 24 24" {...common}><rect x="7" y="3" width="10" height="4" rx="1"/><rect x="5" y="7" width="14" height="14" rx="2"/><path d="M9 12h6M9 16h6"/></svg>);
    case "message": return (<svg className={className} viewBox="0 0 24 24" {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"/></svg>);
    default: return null;
  }
};

const Feature = ({ title, desc, icon }) => (
  <Card>
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-xl bg-orange-100 text-orange-600"><Icon name={icon} className="w-6 h-6"/></div>
      <div>
        <h3 className="font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  </Card>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold tracking-tight text-orange-600">{value}</div>
    <div className="text-sm text-zinc-500 mt-1">{label}</div>
  </div>
);

//
// 🚀 Formspree-powered Contact Form
//
function FormspreeForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const FORMSPREE_URL = "https://formspree.io/f/xgvlzybo";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "ESP Website Enquiry");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label className="text-sm font-medium">Your name</label>
        <input name="name" required className="mt-1 w-full rounded-xl border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Full name" />
      </div>
      <div>
        <label className="text-sm font-medium">Email</label>
        <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="you@email.com" />
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea name="message" required className="mt-1 w-full rounded-xl border border-orange-200 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Tell us about your event or training needs" />
      </div>
      <button type="submit" disabled={status === "sending"} className="w-full rounded-xl bg-black text-white px-4 py-2 text-sm hover:bg-orange-600 disabled:opacity-70">
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "success" && <p className="text-sm text-green-600">Thanks—your message was sent. We’ll get back to you shortly.</p>}
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      {status === "idle" && (
        <p className="text-xs text-zinc-500">We’ll reply from <strong>bericksse@gmail.com</strong>. Prefer WhatsApp? +27 82 785 9743</p>
      )}
    </form>
  );
}

//
// === Site content ===
export default function ESP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900">
      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/95 border-b border-orange-100">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src="/esp-logo-full.png" alt="ESP Logo" className="h-10 w-auto" />
            <div>
              <div className="text-sm tracking-widest text-orange-600">EXCEPTIONAL SERVICE</div>
              <div className="font-semibold -mt-1">Personnel</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#training" className="hover:text-orange-600">Training</a>
            <a href="#clients" className="hover:text-orange-600">Clients</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm shadow-sm hover:bg-orange-600">Let’s Talk</a>
        </Section>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <Section className="py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>Hospitality Staffing</Badge>
              <Badge>Training</Badge>
              <Badge>South Africa</Badge>
              <Badge>Since 2007</Badge>
            </div>
            <img src="/esp-logo-full.png" alt="ESP Logo" className="h-16 sm:h-20 mb-6" />
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-black">
              Hospitality staffing and training with heart.
            </h1>
            <p className="mt-5 text-lg text-zinc-600 max-w-prose">
              At Exceptional Service Personnel (ESP), we believe kindness and skill go hand in hand. Our people bring warmth, reliability, and professionalism—so your guests feel right at home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-3 text-sm shadow-sm hover:bg-orange-600">Book a Chat</a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-3 text-sm hover:bg-orange-50">See What We Do</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="250+" label="Shifts filled each month"/>
              <Stat value="97%" label="Happy clients stick with us"/>
              <Stat value="48 hrs" label="Average time to find staff"/>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}}>
            <Card className="p-6 text-center text-sm text-zinc-600">
              <p>“The right people make all the difference.”</p>
            </Card>
          </motion.div>
        </Section>
      </header>

      {/* Services */}
      <Section id="services" className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Services</h2>
          <p className="mt-3 text-zinc-600">
            We provide <strong>hospitality staffing in Johannesburg, Pretoria and across Gauteng</strong>, from
            <strong> waiters and bar staff for events</strong> to <strong>baristas and FOH staff</strong> for restaurants,
            hotels and sports clubs. Whether you need <strong>temporary hospitality staff in Midrand</strong> or ongoing
            rosters in Sandton, ESP supplies reliable, well-trained people who fit right in.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Feature icon="users" title="Extra Hands" desc="Need help for a big night or event? We’ll match you with friendly, skilled staff who fit right in."/>
          <Feature icon="clipboard" title="Team Management" desc="Our supervisors keep everything running smoothly, so you can relax and focus on guests."/>
          <Feature icon="clock" title="Seasonal Support" desc="Busy season ahead? Scale up your team without losing quality service."/>
        </div>
      </Section>

      {/* Training */}
      <Section id="training" className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Training That Works</h2>
          <p className="mt-3 text-zinc-600">
            Our <strong>hospitality training courses in Johannesburg and Gauteng</strong> give your team practical skills
            they can use right away. From <strong>waiter training</strong> and <strong>barista workshops</strong> to tailored
            <strong> FOH training in Pretoria and Midrand</strong>, ESP helps venues lift service standards quickly and consistently.
          </p>
        </div>
      </Section>

      {/* Clients */}
      <Section id="clients" className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Friends We’ve Helped</h2>
          <p className="mt-3 text-zinc-600">Sports clubs, restaurants, hotels, event venues, coffee bars, caterers, stadiums and corporate canteens.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Sports Clubs","Restaurants","Hotels","Event Venues","Coffee Bars","Caterers","Stadiums","Corporate Canteens"].map((tag,i)=>(
            <div key={i} className="rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-center text-orange-700">{tag}</div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Let’s Chat</h2>
          <p className="mt-3 text-zinc-600">Tell us what you need—we’ll get back with ideas and options, no fuss.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <FormspreeForm />
          </Card>
          <div className="grid gap-6">
            <Card>
              <h3 className="font-semibold text-black">Direct Contact</h3>
              <p className="text-sm font-semibold text-black">Berick Austin</p>
              <p className="mt-2 text-sm text-zinc-600">Email: <a className="underline" href="mailto:bericksse@gmail.com">bericksse@gmail.com</a></p>
              <p className="text-sm text-zinc-600">Phone / WhatsApp: +27 82 785 9743</p>
              <p className="text-sm text-zinc-600">Midrand, South Africa</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-black">Direct Contact</h3>
              <p className="text-sm font-semibold text-black">Tebogo Mhlongo</p>
              <p className="mt-2 text-sm text-zinc-600">Email: <a className="underline" href="mailto:tebogoa@gmail.com">tebogoa@gmail.com</a></p>
              <p className="text-sm text-zinc-600">Phone: 083 305 5303</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-orange-100">
        <Section className="py-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <img src="/esp-logo-full.png" alt="ESP Logo" className="h-8 w-auto" />
            <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Exceptional Service Personnel · EST 2007.</p>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#training" className="hover:text-orange-600">Training</a>
            <a href="#clients" className="hover:text-orange-600">Clients</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </div>
          <div className="md:text-right text-sm">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2 hover:bg-orange-50">Say Hello</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
