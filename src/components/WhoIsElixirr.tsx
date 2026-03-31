import FadeIn from "./FadeIn";
import { Compass, Workflow, Monitor, Brain, Users, Cpu, BarChart3, Sparkles, Database, Shield, Cog, Layers } from "lucide-react";

const insuranceCapabilities = [
  {
    theme: "(Re)insurance strategy & transformation",
    detail: "Board-level advisory on growth, operating model, and market repositioning for insurers, MGAs, brokers, and reinsurers.",
    icon: Compass,
  },
  {
    theme: "Underwriting, pricing, claims & servicing",
    detail: "End-to-end workflow redesign across the insurance value chain — from submission triage to claims adjudication.",
    icon: Workflow,
  },
  {
    theme: "Digital experience & product design",
    detail: "End-to-end digital product strategy, UX design, and customer experience transformation — from discovery and prototyping through to build and launch.",
    icon: Monitor,
  },
  {
    theme: "Data, AI & technology-enabled transformation",
    detail: "From data platform architecture to ML-enabled pricing and generative AI co-pilots — delivered in production, not proof of concept.",
    icon: Brain,
  },
  {
    theme: "Target operating model design",
    detail: "Design of future-state operating models spanning people, process, technology, and governance — aligned to strategic intent and deliverable in phases.",
    icon: Layers,
  },
  {
    theme: "Programme leadership & governance",
    detail: "Mobilisation, delivery sequencing, adoption, vendor orchestration, and transformation governance for complex multi-workstream programmes.",
    icon: Users,
  },
];

const aiCapabilities = [
  { label: "AI strategy to production delivery", icon: Cpu },
  { label: "Machine learning & predictive modelling", icon: BarChart3 },
  { label: "Generative AI & co-pilot solutions", icon: Sparkles },
  { label: "Data platform & workflow enablement", icon: Database },
  { label: "Responsible AI, governance & explainability", icon: Shield },
  { label: "AI-centric delivery model & SDLC", icon: Cog },
];


const WhoIsElixirr = () => (
  <section id="who-is-elixirr" className="section-padding relative">
    <div className="absolute inset-0 bg-grid-dot" />
    <div className="section-container relative z-10">
      {/* Section label */}
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px" style={{ background: "hsl(var(--gold))" }} />
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold-deep))" }}>
            Who are Elixirr
          </span>
        </div>
      </FadeIn>

      {/* Headline */}
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-4xl mb-8">
          AI-first consultancy.
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>
            Insurance delivery partner.
          </span>
        </h2>
      </FadeIn>

      {/* Overview — two-column editorial */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20">
        <div className="md:col-span-7">
          <FadeIn delay={0.2}>
            <p className="body-large mb-6">
              Elixirr is an <strong>AI-first consultancy and digital delivery partner</strong> that combines
              board-level strategy, insurance operating model design, digital transformation,
              data and AI execution, and programme mobilisation.
            </p>
            <p className="body-regular">
              We work with leading insurers, MGAs, brokers, and reinsurers to help them
              redesign value creation, modernise workflows, and deliver transformation at pace.
              For RIQ, that means a partner with the <strong>strategic depth to define the target state</strong>{" "}
              and the <strong>delivery capability to build it</strong>.
            </p>
          </FadeIn>
        </div>
        <div className="md:col-span-5 flex items-start">
          <FadeIn delay={0.3}>
            <div className="w-full p-8 border" style={{ borderColor: "hsl(var(--indigo) / 0.08)", borderRadius: "2px" }}>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-5 block" style={{ color: "hsl(var(--gold))" }}>
                How we work
              </span>
              <div className="space-y-3">
                {["Partner-led, low-bureaucracy model", "Strategy through to production delivery & value", "AI-centric engineering & SDLC", "Certainty of cost, time, and quality", "Deep insurance domain expertise"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "hsl(var(--gold))" }} />
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--indigo))" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Insurance capabilities */}
      <FadeIn delay={0.25}>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-8 block" style={{ color: "hsl(var(--gold))" }}>
          OUR CHALLENGER DNA
        </span>
      </FadeIn>
      <FadeIn delay={0.28}>
        <div className="border-t mb-6" style={{ borderColor: "hsl(var(--indigo) / 0.08)" }} />
      </FadeIn>
      <FadeIn delay={0.29}>
        <div className="mb-20 relative">
          {/* Mobile: simple list */}
          <div className="md:hidden space-y-5">
            {[
              { text: <>Engagements structured around <strong>outcomes, not time</strong> — results guaranteed at cost</> },
              { text: <>Fully <strong>independent of any vendors</strong> whilst knowing thousands of them</> },
              { text: <>Innovation ecosystem across <strong>2,000+ VCs, start-ups, and accelerators</strong> to help reimagine and accelerate delivery</> },
              { text: <>Uniquely blended team of <strong>industry experts</strong> (COOs, CIOs, CDOs, and transformation leaders) from the likes of <strong>Zurich, Aviva, Hastings, QBE and Allianz</strong>, with top-end technical team and award-winning consultants</> },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(var(--gold))" }} />
                <p className="text-sm leading-[1.75]" style={{ color: "hsl(var(--muted-foreground))" }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Desktop: DNA interweave layout */}
           <div className="hidden md:block relative" style={{ minHeight: "620px" }}>
            {/* Central DNA strand */}
            <div
              className="absolute left-1/2 top-0 bottom-0 group/dna cursor-pointer"
              style={{ transform: "translateX(-50%)", width: "80px" }}
              onMouseEnter={e => {
                const svg = e.currentTarget.querySelector('svg');
                if (!svg) return;
                svg.querySelectorAll('.dna-helix-gold').forEach(el => {
                  (el as SVGElement).style.strokeWidth = '3';
                  (el as SVGElement).style.filter = 'drop-shadow(0 0 6px hsl(46, 100%, 45%))';
                });
                svg.querySelectorAll('.dna-helix-indigo').forEach(el => {
                  (el as SVGElement).style.strokeWidth = '3';
                  (el as SVGElement).style.filter = 'drop-shadow(0 0 4px hsl(278, 42%, 20%))';
                });
                svg.querySelectorAll('.dna-rung').forEach((el, i) => {
                  (el as SVGElement).style.opacity = '0.5';
                  (el as SVGElement).style.strokeWidth = '1.5';
                  (el as SVGElement).style.transitionDelay = `${i * 30}ms`;
                });
                svg.querySelectorAll('.dna-node-outer').forEach(el => {
                  (el as SVGElement).style.r = '10';
                  (el as SVGElement).style.opacity = '0.3';
                });
                svg.querySelectorAll('.dna-node-inner').forEach(el => {
                  (el as SVGElement).style.r = '5';
                  (el as SVGElement).style.filter = 'drop-shadow(0 0 8px hsl(46, 100%, 50%))';
                });
              }}
              onMouseLeave={e => {
                const svg = e.currentTarget.querySelector('svg');
                if (!svg) return;
                svg.querySelectorAll('.dna-helix-gold').forEach(el => {
                  (el as SVGElement).style.strokeWidth = '2';
                  (el as SVGElement).style.filter = 'none';
                });
                svg.querySelectorAll('.dna-helix-indigo').forEach(el => {
                  (el as SVGElement).style.strokeWidth = '2';
                  (el as SVGElement).style.filter = 'none';
                });
                svg.querySelectorAll('.dna-rung').forEach(el => {
                  (el as SVGElement).style.opacity = '';
                  (el as SVGElement).style.strokeWidth = '0.8';
                  (el as SVGElement).style.transitionDelay = '0ms';
                });
                svg.querySelectorAll('.dna-node-outer').forEach(el => {
                  (el as SVGElement).style.r = '6';
                  (el as SVGElement).style.opacity = '0.15';
                });
                svg.querySelectorAll('.dna-node-inner').forEach(el => {
                  (el as SVGElement).style.r = '3.5';
                  (el as SVGElement).style.filter = 'none';
                });
              }}
            >
              <svg width="80" height="100%" viewBox="0 0 80 520" preserveAspectRatio="none" className="h-full w-full">
                <defs>
                  <linearGradient id="dna-gold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(46, 100%, 45%)" stopOpacity="0.1" />
                    <stop offset="20%" stopColor="hsl(46, 100%, 45%)" stopOpacity="0.6" />
                    <stop offset="80%" stopColor="hsl(46, 100%, 45%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(46, 100%, 45%)" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="dna-indigo" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(278, 42%, 10%)" stopOpacity="0.05" />
                    <stop offset="20%" stopColor="hsl(278, 42%, 10%)" stopOpacity="0.25" />
                    <stop offset="80%" stopColor="hsl(278, 42%, 10%)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="hsl(278, 42%, 10%)" stopOpacity="0.05" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Left helix strand */}
                <path
                  className="dna-helix-gold"
                  d="M 10 0 C 10 30, 70 40, 70 65 C 70 90, 10 100, 10 130 C 10 160, 70 170, 70 195 C 70 220, 10 230, 10 260 C 10 290, 70 300, 70 325 C 70 350, 10 360, 10 390 C 10 420, 70 430, 70 455 C 70 480, 10 490, 10 520"
                  fill="none"
                  stroke="url(#dna-gold)"
                  strokeWidth="2"
                  style={{ transition: "stroke-width 0.4s ease, filter 0.4s ease" }}
                />
                {/* Right helix strand */}
                <path
                  className="dna-helix-indigo"
                  d="M 70 0 C 70 30, 10 40, 10 65 C 10 90, 70 100, 70 130 C 70 160, 10 170, 10 195 C 10 220, 70 230, 70 260 C 70 290, 10 300, 10 325 C 10 350, 70 360, 70 390 C 70 420, 10 430, 10 455 C 10 480, 70 490, 70 520"
                  fill="none"
                  stroke="url(#dna-indigo)"
                  strokeWidth="2"
                  style={{ transition: "stroke-width 0.4s ease, filter 0.4s ease" }}
                />
                {/* Horizontal rungs connecting helices */}
                {[32, 65, 98, 130, 163, 195, 228, 260, 293, 325, 358, 390, 423, 455, 488].map((y, i) => (
                  <line
                    key={`rung-${i}`}
                    className="dna-rung"
                    x1="25"
                    y1={y}
                    x2="55"
                    y2={y}
                    stroke="hsl(46, 100%, 45%)"
                    strokeWidth="0.8"
                    opacity={0.15 + (Math.sin(i * 0.7) * 0.1)}
                    style={{ transition: "opacity 0.3s ease, stroke-width 0.3s ease" }}
                  />
                ))}
                {/* Glowing nodes at each bullet position */}
                {[65, 195, 325, 455].map((y, i) => (
                  <g key={`node-${i}`} filter="url(#glow)">
                    <circle className="dna-node-outer" cx="40" cy={y} r="6" fill="hsl(46, 100%, 45%)" opacity="0.15" style={{ transition: "r 0.4s ease, opacity 0.4s ease" }} />
                    <circle className="dna-node-inner" cx="40" cy={y} r="3.5" fill="hsl(46, 100%, 45%)" opacity="0.7" style={{ transition: "r 0.4s ease, filter 0.4s ease" }} />
                  </g>
                ))}
              </svg>
            </div>

            {/* Bullet cards — alternating left/right of the DNA strand */}
            {[
              { text: <>Engagements structured around <strong>outcomes, not time</strong> — results guaranteed at cost</>, side: "left" as const },
              { text: <>Fully <strong>independent of any vendors</strong> whilst knowing thousands of them</>, side: "right" as const },
              { text: <>Innovation ecosystem across <strong>2,000+ VCs, start-ups, and accelerators</strong> to help reimagine and accelerate delivery</>, side: "left" as const },
              { text: <>Uniquely blended team of <strong>industry experts</strong> (COOs, CIOs, CDOs, and transformation leaders) from the likes of <strong>Zurich, Aviva, Hastings, QBE and Allianz</strong>, with top-end technical team and award-winning consultants</>, side: "right" as const },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute flex items-center"
                style={{
                  top: `${(i * 25) + 10}%`,
                  ...(item.side === "left"
                    ? { left: 0, right: "calc(50% + 52px)" }
                    : { left: "calc(50% + 52px)", right: 0 }),
                  transform: "translateY(-50%)",
                }}
              >
                <div
                  className="w-full p-7 rounded-lg transition-all duration-300 cursor-default group"
                  style={{
                    background: "hsl(var(--indigo) / 0.04)",
                    border: "1px solid hsl(var(--indigo) / 0.1)",
                    boxShadow: "0 2px 8px hsl(var(--indigo) / 0.04)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "hsl(var(--indigo) / 0.08)";
                    e.currentTarget.style.borderColor = "hsl(var(--gold) / 0.3)";
                    e.currentTarget.style.boxShadow = "0 6px 24px hsl(var(--indigo) / 0.08)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "hsl(var(--indigo) / 0.04)";
                    e.currentTarget.style.borderColor = "hsl(var(--indigo) / 0.1)";
                    e.currentTarget.style.boxShadow = "0 2px 8px hsl(var(--indigo) / 0.04)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <p className="text-[0.9rem] leading-[1.8]" style={{ color: "hsl(var(--muted-foreground))" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-8 block" style={{ color: "hsl(var(--gold))" }}>
          RELEVANT CAPABILITIES
        </span>
      </FadeIn>
      <div className="space-y-0 mb-20">
        {insuranceCapabilities.map(({ theme, detail, icon: Icon }, i) => (
          <FadeIn key={i} delay={0.35 + i * 0.05}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t items-center" style={{ borderColor: "hsl(var(--indigo) / 0.08)" }}>
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--gold) / 0.12)" }}>
                  <Icon size={24} style={{ color: "hsl(var(--gold))" }} />
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg md:text-xl font-semibold leading-tight" style={{ color: "hsl(var(--indigo))" }}>
                  {theme}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm leading-[1.75]" style={{ color: "hsl(var(--muted-foreground))" }}>{detail}</p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div className="border-t" style={{ borderColor: "hsl(var(--indigo) / 0.08)" }} />
      </div>

      {/* Data & AI capability band */}
      <FadeIn delay={0.55}>
        <div className="mb-20 rounded-xl p-10 md:p-14 relative overflow-hidden" style={{ background: "hsl(var(--indigo))", borderLeft: "4px solid hsl(var(--gold))", boxShadow: "0 4px 12px hsl(var(--indigo) / 0.15), 0 12px 36px hsl(var(--indigo) / 0.2)" }}>
          <div className="relative z-10">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-6 block" style={{ color: "hsl(var(--gold))" }}>
              Data & AI depth
            </span>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl font-light" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
              Elixirr has <strong style={{ color: "hsl(0 0% 100% / 0.9)" }}>more than 15 years of experience</strong> in machine learning, was an <strong style={{ color: "hsl(0 0% 100% / 0.9)" }}>early
              adopter of generative AI</strong>, and among the first to launch commercial products
              powered by GPT-3. Our engineering organisation is built around an <strong style={{ color: "hsl(0 0% 100% / 0.9)" }}>AI-centric
              software development lifecycle</strong> and delivery model.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {aiCapabilities.map(({ label, icon: Icon }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 rounded-sm transition-all duration-300 cursor-default"
                  style={{
                    borderLeft: "3px solid hsl(var(--gold) / 0.5)",
                    background: "transparent",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderLeftColor = "hsl(var(--gold))";
                    e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                    e.currentTarget.style.paddingLeft = "20px";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderLeftColor = "hsl(var(--gold) / 0.5)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.paddingLeft = "16px";
                  }}
                >
                  <Icon size={16} style={{ color: "hsl(var(--gold) / 0.7)" }} className="shrink-0" />
                  <p className="text-[0.8rem] font-medium tracking-wide" style={{ color: "hsl(0 0% 100% / 0.75)" }}>{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] block mb-4" style={{ color: "hsl(0 0% 100% / 0.35)" }}>Our technical teams are trusted by some of the biggest names in insurance and wider industries</span>

              <div className="mb-3">
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] block mb-2" style={{ color: "hsl(var(--gold) / 0.6)" }}>Insurance</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Gallagher", "Allianz", "Unum", "Aviva", "AXA", "Bupa", "NFU Mutual", "Old Mutual", "MPS"].map(name => (
                    <span key={name} className="text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 100% / 0.7)" }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] block mb-2" style={{ color: "hsl(var(--gold) / 0.6)" }}>Wider industries</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Google", "Apple", "BBC", "Barclays", "GSK", "NatWest", "Meta", "Spotify", "LVMH", "L'Oréal", "PepsiCo", "Tesco"].map(name => (
                    <span key={name} className="text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 100% / 0.7)" }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default WhoIsElixirr;
