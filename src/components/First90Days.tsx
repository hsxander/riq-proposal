import FadeIn from "./FadeIn";

const phases = [
  {
    label: "30 days",
    items: [
      "Confirm target operating model",
      "Define lot interfaces and governance",
      "Align on priority use cases and decision criteria",
    ],
  },
  {
    label: "60 days",
    items: [
      "Stand up PMO and vendor model",
      "Define AI, data, and responsible AI baseline",
      "Shape broker/partner and underwriting workflow priorities",
    ],
  },
  {
    label: "90 days",
    items: [
      "Mobilize first proof-of-value workstreams",
      "Lock roadmap and architecture decisions",
      "Define convergence approach for future acquisitions",
    ],
  },
];

const First90Days = () => (
  <section id="first-90-days" className="py-10 md:py-14 gradient-hero">
    <div className="section-container">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold)), transparent)" }} />
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]"
            style={{ color: "hsl(var(--gold))" }}>Timeline</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-xl md:text-2xl font-semibold leading-[1.15] tracking-tight mb-8"
          style={{ color: "hsl(var(--surface))" }}>
          A practical first 90 days
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "hsl(var(--surface) / 0.06)" }}>
        {phases.map(({ label, items }, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.12}>
            <div className="p-5 md:p-6 h-full" style={{ background: "hsl(var(--indigo))" }}>
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: "hsl(var(--gold))" }}>
                {label}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "hsl(var(--gold) / 0.4)" }} />
                    <span className="text-xs leading-relaxed" style={{ color: "hsl(var(--surface-dark))" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default First90Days;