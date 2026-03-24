'use client';
import { useState, useEffect, useRef } from 'react';
import {
  Shield, ShieldCheck, Radio, Zap, Eye, FileCheck, Lock,
  AlertTriangle, MapPin, Mic, Sun, Clipboard, ChevronRight,
  Send, Star, Building2, HardHat, Wrench, Award
} from 'lucide-react';

/* ─── Scroll Animation Hook ─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Nav ────────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-safety" strokeWidth={2.5} />
          <span className="font-display text-xl font-bold tracking-tight text-white">
            RAVEN<span className="text-safety">STRATA</span>
          </span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#capabilities" className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors">Capabilities</a>
          <a href="#approach" className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors">Approach</a>
          <a href="#founders-letter" className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors">Our Story</a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-safety hover:bg-safety-light text-white text-sm font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-safety/20"
          >
            Request Briefing
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ═══ HERO ═══════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-safety/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(234,88,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-bg border border-safety/10 mb-8">
              <ShieldCheck className="w-4 h-4 text-safety" />
              <span className="text-xs font-bold uppercase tracking-widest text-safety">Veteran-Owned · Purpose-Built</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white mb-6">
              Critical<br />
              Infrastructure<br />
              <span className="text-safety">Safety</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-4 font-light">
              Digital pre-job safety briefings for the crews who keep the lights on, the gas flowing, and the infrastructure standing.
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed mb-10 font-mono">
              Electric Utilities · Gas Operations · Construction · Pipeline · Telecom
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-safety hover:bg-safety-light text-white font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-safety/25"
              >
                Request a Private Briefing
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-base rounded-xl transition-all duration-200 hover:bg-slate-900"
              >
                View Capabilities
              </a>
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn delay={500}>
            <div className="flex flex-wrap items-center gap-6 mt-16 pt-8 border-t border-slate-800/50">
              {[
                { icon: Zap, label: 'Electric Utilities' },
                { icon: Building2, label: 'Gas Operations' },
                { icon: HardHat, label: 'Construction' },
                { icon: Wrench, label: 'Pipeline & Telecom' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-500">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══ STEALTH FEATURES ═══════════════════════════════════════════════ */
function Capabilities() {
  const features = [
    {
      icon: Eye,
      title: 'Proprietary Hazard Logic',
      desc: 'Our system maps job types to specific hazards and surfaces tailored mitigations — not generic checklists. The intelligence layer was designed by field operators, not software engineers.',
      tag: 'Proprietary',
    },
    {
      icon: AlertTriangle,
      title: 'Real-Time Hazard Mitigation',
      desc: 'Voltage-aware PPE selection. Stop-work triggers that block submission when critical risks are flagged. The platform actively prevents crews from skipping safety steps.',
      tag: 'Proprietary',
    },
    {
      icon: FileCheck,
      title: 'Enterprise Audit Trails',
      desc: 'GPS-stamped, timestamped, digitally signed briefings with immutable records. Every field change, every signature, every override is logged for regulatory and legal defensibility.',
      tag: 'Enterprise',
    },
    {
      icon: Radio,
      title: 'Substation Intelligence',
      desc: 'Feeder-to-substation relationship mapping with reverse lookup. Voltage auto-confirmation. Your electrical infrastructure data is embedded in every briefing — not entered manually.',
      tag: 'Proprietary',
    },
    {
      icon: Lock,
      title: 'Scope Change Documentation',
      desc: 'Jobs change at noon. Timestamped addenda append to the original briefing without restarting the process. Legally defensible mid-day documentation.',
      tag: 'Enterprise',
    },
    {
      icon: Mic,
      title: 'Field-Optimized Interface',
      desc: 'Voice dictation for crews in heavy gloves. Sunlight mode for outdoor readability. 46px touch targets. Every interaction was designed for the conditions your people actually work in.',
      tag: 'Field-Ready',
    },
  ];

  return (
    <section id="capabilities" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs font-bold uppercase tracking-[4px] text-safety mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Engineered for the field.<br />
            <span className="text-slate-500">Not the conference room.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-16 font-light">
            We don't show product screenshots to unqualified audiences. What we will tell you is that every capability below exists, works, and was built by someone who uses it.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 80}>
              <div className="group relative p-7 bg-slate-900/60 border border-slate-800 rounded-2xl transition-all duration-300 hover:border-safety/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 h-full">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-safety/0 via-safety/30 to-safety/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-safety/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-safety" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    f.tag === 'Proprietary' ? 'bg-safety/10 text-safety' :
                    f.tag === 'Enterprise' ? 'bg-emerald-500/10 text-emerald-400' :
                    'bg-sky-500/10 text-sky-400'
                  }`}>
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ HOW IT WORKS ═══════════════════════════════════════════════════ */
function Approach() {
  const steps = [
    { num: '01', title: 'Secure Briefing', desc: 'We learn your infrastructure, safety framework, and operational requirements in a private session.' },
    { num: '02', title: 'White-Glove Build', desc: 'Your instance is configured with your substations, feeders, crews, and safety protocols. You never touch a settings page.' },
    { num: '03', title: 'Operational Pilot', desc: '60-90 days with one or two crews. No cost. We prove the value with your data on your jobs.' },
    { num: '04', title: 'Enterprise Deployment', desc: 'Roll out via your MDM to every Toughbook and iPad. Full admin dashboard, analytics, and dedicated support.' },
  ];

  return (
    <section id="approach" className="py-28 bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs font-bold uppercase tracking-[4px] text-safety mb-4">Approach</p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-16">
            We configure. You operate.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 100}>
              <div className="relative">
                <div className="font-mono text-5xl font-black text-safety/10 mb-4">{s.num}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-slate-700" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FOUNDER'S LETTER ═══════════════════════════════════════════════ */
function FoundersLetter() {
  return (
    <section id="founders-letter" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs font-bold uppercase tracking-[4px] text-safety mb-8">From the Founder</p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-4 -left-4 text-8xl font-display text-safety/10 leading-none select-none">"</div>

            <div className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="space-y-5 text-slate-300 text-base leading-[1.8]">
                <p>
                  I built Raven Strata because I was tired of filling out the same paper form every morning at the truck — knowing that the form didn't actually make anyone safer. It was a liability exercise, not a safety tool.
                </p>
                <p>
                  I'm a United States Marine Corps veteran and a working lineman. I operate a bucket truck doing live line electrical work. I've filled out thousands of tailboard briefings in rain, snow, 95-degree heat, and 4:30 AM darkness. I know what works in the field and what doesn't.
                </p>
                <p>
                  What doesn't work: typing essays on an iPad in heavy gloves. Scrolling through 200 generic hazards to find the 6 that matter. Starting a brand new 8-page form because the job changed at noon.
                </p>
                <p>
                  What does work: an app that already knows what substation you're working at, auto-populates the hazards for your specific job type, checks the PPE required for the voltage you're touching, and blocks submission if someone flags fatigue — then tells you exactly where to go fix it.
                </p>
                <p>
                  Every feature in Raven Strata exists because I needed it at the truck. Not because a product manager hypothesized it in a conference room.
                </p>
                <p className="text-white font-semibold">
                  Mission first. Safety always.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/50">
                <p className="font-signature text-3xl text-safety mb-1">Cody Gordon</p>
                <p className="text-sm text-slate-500">
                  Founder & CEO, Raven Strata<br />
                  USMC Veteran · Journeyman Lineman
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══ CONTACT FORM ═══════════════════════════════════════════════════ */
function Contact() {
  const [form, setForm] = useState({ name: '', title: '', org: '', orgType: '', crewSize: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send to API/email service
    // For now: mailto fallback
    const subject = encodeURIComponent(`Private Briefing Request — ${form.org}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nTitle: ${form.title}\nOrganization: ${form.org}\nType: ${form.orgType}\nCrew Size: ${form.crewSize}\nEmail: ${form.email}\nPhone: ${form.phone}`
    );
    window.location.href = `mailto:cody@ravenstrata.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm font-body placeholder:text-slate-600 focus:outline-none focus:border-safety/50 focus:ring-1 focus:ring-safety/20 transition-all";
  const selectClass = "w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm font-body focus:outline-none focus:border-safety/50 focus:ring-1 focus:ring-safety/20 transition-all appearance-none";

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 border-y border-slate-800/50">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-[4px] text-safety mb-4">Access</p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Request a Private Briefing
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
              Raven Strata is not a self-serve product. We work directly with safety leadership to configure each deployment. Complete this form and we'll schedule a private demonstration.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                  <input type="text" required value={form.name} onChange={e => up('name', e.target.value)} placeholder="John Miller" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Title / Role *</label>
                  <input type="text" required value={form.title} onChange={e => up('title', e.target.value)} placeholder="Safety Director" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Organization *</label>
                <input type="text" required value={form.org} onChange={e => up('org', e.target.value)} placeholder="Your utility or company name" className={inputClass} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Organization Type *</label>
                  <select required value={form.orgType} onChange={e => up('orgType', e.target.value)} className={selectClass}>
                    <option value="">Select type</option>
                    <option value="Electric Utility — IOU">Electric Utility — Investor-Owned</option>
                    <option value="Electric Utility — Municipal">Electric Utility — Municipal</option>
                    <option value="Electric Utility — Co-op">Electric Utility — Co-op</option>
                    <option value="Gas Utility">Gas Utility</option>
                    <option value="Dual-Fuel Utility">Dual-Fuel (Electric + Gas)</option>
                    <option value="Construction / Contractor">Construction / Contractor</option>
                    <option value="Pipeline">Pipeline</option>
                    <option value="Telecom / Fiber">Telecom / Fiber</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Field Crew Size *</label>
                  <select required value={form.crewSize} onChange={e => up('crewSize', e.target.value)} className={selectClass}>
                    <option value="">Select range</option>
                    <option value="Under 50">Under 50 field workers</option>
                    <option value="50-200">50 – 200</option>
                    <option value="200-500">200 – 500</option>
                    <option value="500-1000">500 – 1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email *</label>
                  <input type="email" required value={form.email} onChange={e => up('email', e.target.value)} placeholder="john@utility.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => up('phone', e.target.value)} placeholder="(608) 555-0000" className={inputClass} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 bg-safety hover:bg-safety-light text-white font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-safety/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Request Private Briefing
              </button>

              <p className="text-center text-xs text-slate-600 mt-3">
                Your information is confidential and will not be shared.
              </p>
            </form>
          ) : (
            <div className="bg-slate-900/40 border border-safety/20 rounded-2xl p-12 text-center">
              <ShieldCheck className="w-14 h-14 text-safety mx-auto mb-5" />
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-3">Briefing Request Received</h3>
              <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
                Thank you for your interest in Raven Strata. We will contact you within 24 hours to schedule a private demonstration configured for your specific operations.
              </p>
              <p className="mt-6 text-sm font-mono text-slate-600">
                — Raven Strata Command
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══ FOOTER ═════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="py-16 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-safety" strokeWidth={2.5} />
              <span className="font-display text-lg font-bold tracking-tight text-white">RAVEN<span className="text-safety">STRATA</span></span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Digital pre-job safety briefings purpose-built for the crews who maintain critical infrastructure.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Our Mission</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              To ensure every field crew has the intelligence, documentation, and safety assurance they need before boots hit the ground — so everyone goes home the same way they left.
            </p>
          </div>

          {/* Veteran Badge + Contact */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 mb-5">
              <Award className="w-5 h-5 text-safety" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Veteran-Owned Business</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">United States Marine Corps</div>
              </div>
            </div>
            <div className="space-y-2">
              <a href="mailto:cody@ravenstrata.com" className="block text-sm text-slate-400 hover:text-safety transition-colors">
                cody@ravenstrata.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Raven Strata. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 font-mono">
            Mission First. Safety Always.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══ PAGE ════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capabilities />
      <Approach />
      <FoundersLetter />
      <Contact />
      <Footer />
    </main>
  );
}
