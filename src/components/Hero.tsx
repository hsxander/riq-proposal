import FadeIn from "./FadeIn";
import elixirrLogo from "@/assets/elixirr-logo.png";
import riqLogo from "@/assets/riq-logo.png";
import { ArrowDown, Crosshair } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden gradient-hero">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--surface)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--surface)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.3), transparent)" }}
      />

      <div className="section-container w-full py-28 md:py-36 lg:py-10 relative z-10">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-4 mb-10">
            <img src={elixirrLogo} alt="Elixirr" className="h-6 md:h-7" />
            <div className="w-8 h-px gradient-accent-line" />
            <img src={riqLogo} alt="RIQ" className="h-9 md:h-10 rounded-sm" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight max-w-5xl mb-10"
            style={{ color: "hsl(var(--surface))" }}
          >
            Building RIQ:
            <br />
            <span className="gradient-gold-text italic font-normal">the global, AI-native reinsurer</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg md:text-xl leading-[1.7] max-w-3xl mb-5" style={{ color: "hsl(var(--surface-dark))" }}>
            Layering agentic capabilities onto a <strong>conventional enterprise architecture</strong> is likely to produce only <strong>marginal gains</strong>. True transformation comes from <strong>designing the operating platform around agentic workflows</strong> from the outset.
          </p>
          <p className="text-lg md:text-xl leading-[1.7] max-w-3xl mb-10" style={{ color: "hsl(var(--surface-dark))" }}>
            This approach opens the door to <strong>realised value</strong> through <strong>risk selection</strong>, <strong>cost management</strong> and <strong>customer service</strong>.
          </p>
          <p
            className="text-lg md:text-xl leading-[1.7] max-w-3xl mb-10 pl-5 border-l-2"
            style={{ color: "hsl(var(--surface))", borderColor: "hsl(var(--gold))" }}
          >
            As RIQ builds its <strong>global, multi-platform reinsurer</strong>, <strong>decisions made now</strong> will either unlock <strong>compounding advantage</strong> or embed <strong>long-term complexity</strong>.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mb-12 relative">
            <p
              className="text-2xl md:text-3xl font-semibold tracking-tight mb-6"
              style={{ color: "hsl(var(--surface))" }}
            >
              {"\n"}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--gold))" }}>
              RECENT ELIXIRR TRANSFORMATION OUTCOMES FOR CLIENTS
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div
                className="group relative rounded-lg p-[2px] transition-all duration-500 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold) / 0.3), hsl(var(--gold)))",
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold) / 0.5))" }}
                />
                <div
                  className="relative rounded-[7px] px-7 py-6"
                  style={{ background: "linear-gradient(135deg, hsl(var(--indigo)), hsl(var(--indigo) / 0.85))" }}
                >
                  <div className="w-10 h-1 rounded-full mb-4" style={{ background: "hsl(var(--gold))" }} />
                  <p className="text-lg font-bold leading-relaxed mb-4" style={{ color: "hsl(var(--surface))" }}>
                    Developed an end-to-end, AI-accelerated broking platform for a global reinsurance leader.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(var(--gold) / 0.7)" }}>Since MVP release:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                      ~1K brokers onboarded in 25+ countries
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                      100% revenue captured across 16 lines of business
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                      80% of 1/1 renewals run end-to-end
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="group relative rounded-lg p-[2px] transition-all duration-500 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold) / 0.3), hsl(var(--gold)))",
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold) / 0.5))" }}
                />
                <div
                  className="relative rounded-[7px] px-7 py-6"
                  style={{ background: "linear-gradient(135deg, hsl(var(--indigo)), hsl(var(--indigo) / 0.85))" }}
                >
                  <div className="w-10 h-1 rounded-full mb-4" style={{ background: "hsl(var(--gold))" }} />
                  <p className="text-lg font-bold leading-relaxed mb-4" style={{ color: "hsl(var(--surface))" }}>
                    Co-created a greenfield, AI-first operating platform for a new MGA preparing for seismic market shifts to come.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(var(--gold) / 0.7)" }}>SINCE START OF BUILD:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                      Live in 6 months
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                      15+ vendors orchestrated
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                      ~50% lower expense ratio than typical MGAs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to right, hsl(var(--gold) / 0.5), transparent)" }}
              />
              <p
                className="text-lg md:text-xl italic tracking-wider font-semibold whitespace-nowrap"
                style={{ color: "hsl(var(--gold))", textShadow: "0 0 30px hsl(var(--gold) / 0.4)" }}
              >
                Elixirr is confident it can partner with RIQ
              </p>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to left, hsl(var(--gold) / 0.5), transparent)" }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
