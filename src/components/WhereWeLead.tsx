import FadeIn from "./FadeIn";

const priorityLots = [
  { lot: "Lot 3", title: "AI/ML Platform & Solutions Development", desc: "AI/ML platform and use-case roadmap", priority: "First priority" },
  { lot: "Lot 4", title: "Digital Channels & Broker / Partner Experience", desc: "Digital channels and broker / partner experience", priority: "First priority" },
  { lot: "Lot 8", title: "Data Governance & Responsible AI", desc: "Data governance, responsible AI, and explainability. Reinforces the AI-native proposition and strengthens the quality of Lot 3 delivery.", priority: "First priority" },
  { lot: "Lot 10", title: "Programme Management Office", desc: "PMO, transformation orchestration, and executive control", priority: "First priority" },
];

const WhereWeLead = () => (
  <section id="where-we-lead" className="section-padding relative">
    <div className="absolute inset-0 bg-grid-fine" />
    <div className="section-container relative z-10">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px gradient-accent-line" />
          <span className="label-caps">Where we lead</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-4xl mb-8">
          Lead where differentiation matters.
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>Orchestrate where scale matters.</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="body-large max-w-3xl mb-6">
          RIQ does not need one provider to do everything. It needs <strong>one partner to hold the
          architecture and programme logic together</strong>.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <p className="body-regular max-w-3xl mb-16">
          All lots are important, but <strong>not equally critical</strong>. The recommended first-priority
          workpackages are <strong>lots 3, 4, 8, and 10</strong> — the areas where Elixirr has the strongest
          right to win and where <strong>value creation is most concentrated</strong>.
        </p>
      </FadeIn>

      {/* First-priority lots */}
      <FadeIn delay={0.3}>
        <div className="mb-8">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-6 block" style={{ color: "hsl(var(--gold))" }}>
            First-priority workpackages
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {priorityLots.map(({ lot, title, desc, priority }, i) => (
              <FadeIn key={i} delay={0.35 + i * 0.06}>
                <div
                  className="flex items-start gap-5 p-6 rounded-sm relative overflow-hidden transition-all duration-300 cursor-default"
                  style={{ background: "hsl(var(--indigo))", borderLeft: "3px solid hsl(var(--gold))" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px hsl(var(--indigo) / 0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Lot number */}
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-sm" style={{ background: "hsl(var(--gold) / 0.12)" }}>
                    <span className="text-xl font-bold" style={{ color: "hsl(var(--gold))" }}>
                      {lot.replace("Lot ", "")}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold) / 0.6)" }}>
                        {priority}
                      </span>
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold))" }}>
                        {lot}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "hsl(var(--surface))" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--surface-dark))" }}>{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default WhereWeLead;
