import { ReactNode } from "react";
import FadeIn from "./FadeIn";

const WhatRiqBuys = () => (
  <section id="what-riq-buys" className="pb-24 md:pb-32 lg:pb-40 pt-12 md:pt-16 relative">
    <div className="absolute inset-0 bg-grid-dot" />
    <div className="section-container relative z-10">
      {/* Section label */}
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px" style={{ background: "hsl(var(--gold))" }} />
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold-deep))" }}>THE CORE CHALLENGE</span>
        </div>
      </FadeIn>

      {/* Headline — full width */}
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-5xl mb-8">
          The core challenge that spans
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>across every lot</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mb-10 max-w-4xl">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            RIQ needs delivery partners who can support the <strong style={{ color: "hsl(var(--indigo))" }}>design, build, and operation</strong> of their next-generation insurance platform across <strong style={{ color: "hsl(var(--indigo))" }}>10 discrete lots</strong>, multiple core systems and vendors, and over a breath of delivery capabilities from data, AI, digital experience, to enterprise integration.
          </p>
        </div>
      </FadeIn>

      {/* Core tension statement */}
      <FadeIn delay={0.25}>
        <div className="mb-16 max-w-5xl">
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
            However, breaking the transformation into discrete lots risks overlooking <strong style={{ color: "hsl(var(--indigo))" }}>critical elements of an AI-centric ecosystem</strong>, particularly where they fall <strong style={{ color: "hsl(var(--indigo))" }}>between or cut across multiple lots</strong>.
          </p>

          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "hsl(var(--gold))" }}>Key Considerations for RIQ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: "I",
                title: "Product / System Development Lifecycles (PDLC/SDLC)",
                risk: <>With <strong>10 lots and multiple vendors</strong>, an AI-centric ecosystem requires an equally <strong>AI-centric delivery capability</strong> to build and sustain it. This means redefining the SDLC and PDLC to <strong>maximise productivity</strong> through rapidly evolving tooling, while ensuring ambition is not constrained by assumptions rooted in <strong>traditional IT estates and engineering models</strong>.</>,
              },
              {
                num: "II",
                title: "Operating Model",
                risk: <>Agents do not behave like traditional software services; they are <strong>non-deterministic</strong> and rely on models that are inherently subject to drift. With a <strong>SaaS and managed-service bias</strong>, RIQ needs <strong>design-to-run support</strong> — not just delivery. <strong>AgentOps</strong> addresses this by focusing on the monitoring and management of agents in an operational context, placing greater emphasis on <strong>understanding business context</strong> and how effectively the service performs within it.</>,
              },
              {
                num: "III",
                title: "Data Products",
                risk: <>Across <strong>2+ jurisdictions</strong> — a greenfield UAE build and western-hemisphere acquisition convergence — <strong>decoupling data from the applications</strong> that consume it is fundamental. Data becomes the organisation's <strong>primary asset</strong> and must be governed, curated, and managed accordingly. This begins with establishing <strong>clear ownership and capability</strong> around data and focusing on curating information based on its <strong>business value</strong> rather than its relationship to a specific system or application.</>,
              },
              {
                num: "IV",
                title: "Cohesive Practices",
                risk: <>With <strong>lean internal teams</strong> coordinating across <strong>multiple vendors and lots</strong>, AI solutions must span the <strong>full spectrum of value creation</strong> — from enterprise platforms to tactical use cases. <strong>Portability</strong> enables solutions developed at the edge to <strong>scale into enterprise services</strong>, underpinned by common design principles, shared reference data, and standardised tooling.</>,
              },
            ].map(({ num, title, risk }, i) => (
              <FadeIn key={i} delay={0.25 + i * 0.06}>
                <div className="p-5 rounded-sm h-full" style={{ background: "hsl(var(--indigo) / 0.04)", borderLeft: "3px solid hsl(var(--gold))" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 flex items-center justify-center text-xs font-bold rounded-sm" style={{ background: "hsl(var(--indigo))", color: "hsl(var(--gold))" }}>
                      {num}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "hsl(var(--indigo))" }}>{title}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {risk}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>




      <FadeIn delay={0.6}>
        <div className="mt-16 max-w-3xl">
          <div className="divider-editorial mb-8" />
          <p className="section-bridge-text">
            A conventional, lot-by-lot response risks missing the core challenge. RIQ needs a partner that can <strong>respond differently</strong>.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default WhatRiqBuys;
