import FadeIn from "./FadeIn";
import clientLogos from "@/assets/client-logos.png";
import { Shield, Building2, Landmark, Rocket, Handshake, HeartPulse } from "lucide-react";


const outcomes = [
  { value: "50–800%", label: "increase in self-service adoption following digital experience redesign" },
  { value: "~90%", label: "reduction in time taken to complete a key underwriting task using generative AI" },
  { value: "100+", label: "quotes per second on a real-time pricing platform, nearly two million quotes per day" },
  { value: "8%", label: "premium revenue uplift through improved ML-enabled pricing" },
  { value: "<6 months", label: "to design and launch an insurance MGA from the ground up" },
  { value: "£50m+", label: "validated five-year revenue upside from monetising an insurance data product" },
];

const testimonials = [
  { quote: "World class", context: "one of the best decisions we have made as a business", source: "CEO, Data & Analytics Advisory, global reinsurance broker" },
  { quote: "Brought excitement and a faster pace", context: "while challenging the client to move to another level", source: "Head of Propositions, UK insurer" },
  { quote: "Driven engagement and consensus", context: "while accelerating our growth agenda", source: "Chief Growth Officer, US insurer" },
  { quote: "Helped our teams think differently", context: "about the tools and systems they launch", source: "Head of IT Strategy, US life insurer" },
];

const InsuranceCredentials = () => (
  <section id="insurance-credentials" className="section-padding relative" style={{ background: "hsl(var(--surface-mid))" }}>
    <div className="absolute inset-0 bg-diagonal-lines" />
    <div className="section-container relative z-10">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px" style={{ background: "hsl(var(--gold))" }} />
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold-deep))" }}>Elixirr in insurance</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-4xl mb-8">
          Insurance-specific depth across
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>strategy, workflow, technology, and execution</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="body-large max-w-3xl mb-6">
          Elixirr combines <strong>board-level strategy</strong>, insurance operating model design, <strong>digital
          transformation</strong>, data and AI execution, and transformation delivery. We work across
          personal lines, life and health, commercial and specialty, and reinsurance.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <p className="body-large max-w-3xl mb-6">
          We build <strong>long-term partnerships</strong> with our insurance clients — not one-off engagements.
          With <strong>Allianz</strong>, one of the world's largest insurers, we have delivered <strong>100+ projects</strong> since
          2017 across <strong>18 operating entities</strong> and <strong>4 continents</strong>, spanning the full insurance
          value chain. That depth of relationship reflects how we work: embedded, trusted, and
          consistently re-engaged.
        </p>
      </FadeIn>


      {/* Outcome stats */}
      <FadeIn delay={0.35}>
        <div className="mb-20">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-8 block" style={{ color: "hsl(var(--gold))" }}>
            Evidence of scale and outcomes
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px rounded-sm overflow-hidden" style={{ background: "hsl(var(--indigo) / 0.08)" }}>
            {outcomes.map(({ value, label }, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-5 cursor-default transition-all duration-300 group"
                style={{ background: "hsl(var(--surface-mid))" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(var(--background))";
                  const stat = e.currentTarget.querySelector("[data-stat]") as HTMLElement;
                  if (stat) stat.style.textShadow = "0 0 18px hsl(var(--gold) / 0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "hsl(var(--surface-mid))";
                  const stat = e.currentTarget.querySelector("[data-stat]") as HTMLElement;
                  if (stat) stat.style.textShadow = "none";
                }}
              >
                <span data-stat className="text-2xl md:text-3xl font-bold transition-all duration-300" style={{ color: "hsl(var(--gold))" }}>
                  {value}
                </span>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Testimonials */}
      <FadeIn delay={0.4}>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-6 block" style={{ color: "hsl(var(--gold))" }}>
          What clients say
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "hsl(var(--indigo) / 0.06)" }}>
          {testimonials.map(({ quote, context, source }, i) => (
            <div
              key={i}
              className="p-8 md:p-12 transition-all duration-500 cursor-default group"
              style={{ background: "hsl(var(--surface-mid))" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "hsl(var(--background))";
                e.currentTarget.style.boxShadow = "0 8px 40px hsl(var(--indigo) / 0.08), inset 0 0 0 1px hsl(var(--gold) / 0.15)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "hsl(var(--surface-mid))";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="w-8 h-1 mb-8 transition-all duration-500 rounded-full" style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))" }} />
              <p className="text-2xl md:text-3xl font-semibold leading-[1.25] mb-4 transition-colors duration-300" style={{ color: "hsl(var(--indigo))" }}>
                "{quote}"
              </p>
              {context && (
                <p className="text-sm italic mb-4 leading-relaxed" style={{ color: "hsl(var(--purple-muted))" }}>
                  {context}
                </p>
              )}
              <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "hsl(var(--gold-deep))" }}>
                — {source}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Market coverage */}
      <FadeIn delay={0.55}>
        <div className="mt-20">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: "hsl(var(--gold))" }}>
            Insurance market coverage
          </span>
          <p className="body-large max-w-3xl mb-10">
            Elixirr partners with <strong>tier 1 insurance clients globally</strong> — from FTSE-listed
            carriers and Lloyd's syndicates to high-growth MGAs and global reinsurers.
            Our client relationships span the <strong>full insurance value chain</strong>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Reinsurers", icon: Shield },
              { name: "Global insurers", icon: Building2 },
              { name: "Lloyd's & London Market", icon: Landmark },
              { name: "MGAs & insurtechs", icon: Rocket },
              { name: "Brokers & intermediaries", icon: Handshake },
              { name: "Life & health carriers", icon: HeartPulse },
            ].map(({ name: seg, icon: Icon }, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-sm p-5 flex flex-col items-center justify-center text-center gap-3 transition-all duration-500 cursor-default"
                style={{
                  background: "hsl(var(--indigo))",
                  boxShadow: "0 4px 20px hsl(var(--indigo) / 0.25)",
                  minHeight: "110px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px hsl(var(--indigo) / 0.4), 0 0 0 1px hsl(var(--gold) / 0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px hsl(var(--indigo) / 0.25)";
                }}
              >
                {/* Top gold accent bar */}
                <div
                  className="absolute top-0 left-3 right-3 h-[2px] rounded-full transition-all duration-500 group-hover:left-0 group-hover:right-0"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
                />
                <Icon size={20} style={{ color: "hsl(var(--gold) / 0.7)" }} className="transition-colors duration-300 group-hover:text-[hsl(var(--gold))]" />
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.12em] leading-snug"
                  style={{ color: "hsl(var(--surface))" }}
                >
                  {seg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Client logos */}
      <FadeIn delay={0.6}>
        <div className="mt-20">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-8 block" style={{ color: "hsl(var(--gold))" }}>
            Tier 1 insurance clients
          </span>
          <img
            src={clientLogos}
            alt="Elixirr insurance client logos across Commercial & Specialty, Personal Lines, Life & Health, and Reinsurance"
            className="w-full rounded-sm"
          />
        </div>
      </FadeIn>

    </div>
  </section>
);

export default InsuranceCredentials;
