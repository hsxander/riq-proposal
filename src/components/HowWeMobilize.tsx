import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    phase: "Day 1–30",
    title: "Establish the transformation control point",
    body: "Before RIQ can extract value from individual lots, it needs clarity on target operating model, governance, lot interfaces, decision rights, sequencing, and vendor interaction. That control structure allows a lean RIQ team to move quickly without becoming the integration layer between partners. Lot 10 delivers this from day one.",
  },
  {
    number: "02",
    phase: "Day 1–60",
    title: "Shape the AI-native operating spine",
    body: "Rather than treating AI as a separate workstream, connect the data platform, MLOps stack, governance model, digital experience layer, and business workflows so that AI-enabled underwriting, servicing, and partner-facing use cases can move into production with the right controls and feedback loops.",
  },
  {
    number: "03",
    phase: "Day 30–90",
    title: "Prioritise Lots 3 and 4 for impact",
    body: "Lots 3 and 4 are where differentiation is created — AI/ML platform and solutions development, and digital channels and broker/partner experience. Prioritise where RIQ can create measurable differentiation and P&L impact earliest: underwriting precision, broker and partner experience, operational productivity, and data-driven decision support.",
  },
  {
    number: "04",
    phase: "Day 30–90+",
    title: "Reinforce with governed AI delivery",
    body: "Lot 8 ensures responsible AI and data governance are embedded from the outset — reinforcing the quality and credibility of Lot 3 delivery. Lot 10 maintains cohesion across the programme, managing sequencing, vendor interdependencies, and the path to convergence across jurisdictions.",
  },
];

const first90 = [
  "Confirm target operating model and lot governance",
  "Stand up PMO and vendor interface model",
  "Prioritise AI use cases and build supporting business cases",
  "Define data / MLOps / responsible AI baseline",
  "Launch proof-of-value workstreams tied to underwriting and claims",
];

const HowWeMobilize = () => (
  <section id="how-we-mobilize" className="section-padding relative">
    <div className="absolute inset-0 bg-grid-dot" />
    <div className="section-container relative z-10">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px gradient-accent-line" />
          <span className="label-caps">Mobilisation</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-3xl mb-8">
          From strategy to
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>production value, fast</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="body-large max-w-3xl mb-20">
          RIQ does not need to wait for the entire estate to be settled before creating impact.
          The use-case portfolio should be prioritised around where RIQ can create <strong>measurable
          differentiation and P&L impact earliest</strong>.
        </p>
      </FadeIn>

      {/* First 90 days — timeline */}
      <FadeIn delay={0.25}>
        <div className="mb-0">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-16 block" style={{ color: "hsl(var(--gold))" }}>
            INDICATIVE FIRST-90-DAYS AGENDA
          </span>

          <div className="relative">
            {/* === DESKTOP TIMELINE === */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 gap-2 mb-0">
                {first90.map((item, i) => {
                  const isTop = i % 2 === 0;
                  const dayLabel = i < 2 ? "30 days" : i < 4 ? "60 days" : "90 days";
                  return (
                    <FadeIn key={`top-${i}`} delay={0.3 + i * 0.08}>
                      <div className={`${isTop ? "block" : "invisible"}`}>
                        <div
                          className="p-3 rounded-md transition-all duration-300 cursor-default"
                          style={{
                            background: "hsl(var(--background))",
                            border: "1px solid hsl(var(--indigo) / 0.08)",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = "hsl(var(--gold) / 0.35)";
                            e.currentTarget.style.boxShadow = "0 8px 24px hsl(var(--gold) / 0.1)";
                            e.currentTarget.style.transform = "translateY(-4px)";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = "hsl(var(--indigo) / 0.08)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <span className="text-[0.6rem] font-bold block mb-1" style={{ color: "hsl(var(--gold-deep))" }}>{dayLabel}</span>
                          <p className="text-xs leading-snug" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</p>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-px h-4" style={{ background: "hsl(var(--gold) / 0.3)" }} />
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>

              <div className="relative h-3 flex items-center">
                <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.1), hsl(var(--gold) / 0.6) 20%, hsl(var(--gold) / 0.6) 90%, hsl(var(--gold) / 0.8))" }} />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10" style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid hsl(var(--gold) / 0.8)" }} />
                <div className="grid grid-cols-5 gap-2 w-full relative">
                  {first90.map((_, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-3 h-3 rounded-full border-2 relative z-10" style={{ borderColor: "hsl(var(--gold))", background: "hsl(var(--background))" }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 mt-0">
                {first90.map((item, i) => {
                  const isBottom = i % 2 !== 0;
                  const dayLabel = i < 2 ? "30 days" : i < 4 ? "60 days" : "90 days";
                  return (
                    <FadeIn key={`bot-${i}`} delay={0.3 + i * 0.08}>
                      <div className={`${isBottom ? "block" : "invisible"}`}>
                        <div className="flex justify-center">
                          <div className="w-px h-4" style={{ background: "hsl(var(--gold) / 0.3)" }} />
                        </div>
                        <div
                          className="p-3 rounded-md transition-all duration-300 cursor-default"
                          style={{
                            background: "hsl(var(--background))",
                            border: "1px solid hsl(var(--indigo) / 0.08)",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = "hsl(var(--gold) / 0.35)";
                            e.currentTarget.style.boxShadow = "0 8px 24px hsl(var(--gold) / 0.1)";
                            e.currentTarget.style.transform = "translateY(4px)";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = "hsl(var(--indigo) / 0.08)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <span className="text-[0.6rem] font-bold block mb-1" style={{ color: "hsl(var(--gold-deep))" }}>{dayLabel}</span>
                          <p className="text-xs leading-snug" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>

            {/* === MOBILE: vertical list === */}
            <div className="md:hidden space-y-4">
              {first90.map((item, i) => {
                const dayLabel = i < 2 ? "30 days" : i < 4 ? "60 days" : "90 days";
                return (
                  <FadeIn key={i} delay={0.3 + i * 0.08}>
                    <div className="flex gap-4 items-start">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-3 h-3 rounded-full border-2 shrink-0" style={{ borderColor: "hsl(var(--gold))", background: "hsl(var(--background))" }} />
                        {i < first90.length - 1 && <div className="w-px flex-1 min-h-[2rem]" style={{ background: "hsl(var(--gold) / 0.2)" }} />}
                      </div>
                      <div className="p-4 rounded-md flex-1" style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--indigo) / 0.08)" }}>
                        <span className="text-xs font-bold block mb-1.5" style={{ color: "hsl(var(--gold-deep))" }}>{dayLabel}</span>
                        <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Connecting element */}
      <FadeIn delay={0.5}>
        <div className="flex justify-center my-6">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.5), hsl(var(--gold) / 0.2))" }} />
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full"
              style={{ color: "hsl(var(--gold))", background: "hsl(var(--gold) / 0.06)", border: "1px solid hsl(var(--gold) / 0.12)" }}>
              How we get there
            </span>
            <div className="w-px h-8" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.2), hsl(var(--gold) / 0.5))" }} />
          </div>
        </div>
      </FadeIn>

      {/* Mobilisation steps — connected with vertical line */}
      <div className="relative">
        {/* Vertical connecting line (desktop) */}
        <div className="hidden md:block absolute left-[0.625rem] top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.15) 90%, transparent)" }} />

        <div className="space-y-0">
          {steps.map(({ number, phase, title, body }, i) => (
            <FadeIn key={i} delay={0.6 + i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 relative" style={{ borderTop: i === 0 ? "none" : undefined, borderColor: "hsl(var(--indigo) / 0.06)" }}>
                {/* Dot on the vertical line (desktop) */}
                <div className="hidden md:flex md:col-span-1 items-start justify-start relative">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: "hsl(var(--gold))", background: "hsl(var(--background))" }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--gold))" }} />
                    </div>
                    <span className="text-[0.55rem] font-bold uppercase tracking-wider mt-2 whitespace-nowrap"
                      style={{ color: "hsl(var(--gold) / 0.7)" }}>{phase}</span>
                  </div>
                </div>
                {/* Mobile: phase tag + number */}
                <div className="md:hidden flex items-center gap-3 mb-1">
                  <div className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: "hsl(var(--gold))", background: "hsl(var(--background))" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--gold))" }} />
                  </div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider"
                    style={{ color: "hsl(var(--gold))" }}>{phase}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg md:text-xl font-semibold leading-tight" style={{ color: "hsl(var(--indigo))" }}>
                    {title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base leading-[1.75]" style={{ color: "hsl(var(--muted-foreground))" }}>{body}</p>
                </div>
              </div>
              {i < steps.length - 1 && <div className="border-t" style={{ borderColor: "hsl(var(--indigo) / 0.06)" }} />}
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowWeMobilize;
