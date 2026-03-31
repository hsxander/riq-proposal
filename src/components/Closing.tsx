import FadeIn from "./FadeIn";

const Closing = () => (
  <section id="closing" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-fine" />
    <div className="section-container relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px gradient-accent-line" />
            <span className="label-caps">Why Elixirr, why now</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="heading-section mb-10">
            From AI-native ambition
            <br />
            <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>to executable, governed transformation</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="body-large mb-12 max-w-3xl">
            RIQ has a <strong>narrow window</strong> to turn an ambitious strategy into an executable programme
            design. The decisions made now about architecture, governance, lot ownership, and
            operating model will shape not only the <strong>UAE build</strong>, but also the ease with which <strong>future
            acquisitions can be integrated and converged</strong>.
          </p>
        </FadeIn>

        {/* Four themes recalled */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { num: "I", text: "AI-native architecture from the outset" },
              { num: "II", text: "Control point across the programme" },
              { num: "III", text: "Focused leadership in the highest-value workpackages" },
              { num: "IV", text: "Fast, governed value delivery" },
            ].map(({ num, text }, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-t" style={{ borderColor: "hsl(var(--gold) / 0.3)" }}>
                <span className="text-sm font-bold" style={{ color: "hsl(var(--gold-deep))" }}>{num}</span>
                <span className="text-sm font-medium" style={{ color: "hsl(var(--indigo))" }}>{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              "AI-first consultancy with 15+ years of machine learning experience and early GPT-3 commercial adoption",
              "Certainty of cost, certainty of time to value, certainty of delivery quality",
              "Senior-led, fast-moving teams built for clients that need pace and precision, not bureaucracy",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(var(--gold))" }} />
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{point}</p>
              </div>
            ))}
          </div>
        </FadeIn>


        <FadeIn delay={0.55}>
          <div className="mt-20 flex items-center gap-4">
            <div className="w-12 h-px" style={{ background: "hsl(var(--indigo) / 0.15)" }} />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--muted-foreground))" }}>
              Elixirr
            </span>
            <div className="w-12 h-px" style={{ background: "hsl(var(--indigo) / 0.15)" }} />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Closing;
