import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const themes = [
  { number: "I", title: "Build AI-native — not a legacy stack with AI layered on" },
  { number: "II", title: "Own the transformation control point across architecture, sequencing, and governance" },
  { number: "III", title: "Lead where differentiation matters; orchestrate where scale matters" },
  { number: "IV", title: "Sequence for production value fast — not perfection first" },
];

const StrategicLogic = () => (
  <section id="strategic-logic" className="py-20 md:py-28 lg:py-32 relative overflow-hidden" style={{ background: "hsl(var(--surface-mid))" }}>
    <div className="absolute inset-0 bg-grid-fine" />
    <div className="section-container relative z-10">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px gradient-accent-line" />
          <span className="label-caps">Our strategic logic</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-4xl mb-6">
          Four connected win themes
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>that work together as one argument</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="body-large max-w-3xl mb-16">
          These are not four disconnected messages. An AI-native ambition without a control point
          will fragment. A control point without <strong>clear choices</strong> on where Elixirr leads will feel
          abstract. A lead-orchestrate model without <strong>responsible sequencing</strong> will slow down value
          creation. The strength of the Elixirr story is that <strong>all four themes point to the same
          operating logic</strong> for RIQ.
        </p>
      </FadeIn>

      <div className="relative">
        <div className="hidden md:block absolute top-[3.25rem] left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.15), hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.15))" }} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {themes.map(({ number, title }, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <div className="relative flex flex-col items-start md:items-center text-left md:text-center group">
                <motion.div
                  className="relative z-10 w-12 h-12 flex items-center justify-center mb-6 shrink-0"
                  style={{
                    background: "hsl(var(--indigo))",
                    borderRadius: "2px",
                    boxShadow: "0 4px 20px hsl(var(--indigo) / 0.2)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-bold" style={{ color: "hsl(var(--gold))" }}>
                    {number}
                  </span>
                </motion.div>

                {i < themes.length - 1 && (
                  <div className="md:hidden flex items-center justify-start ml-[1.35rem] -mt-3 mb-3">
                    <div className="w-px h-6" style={{ background: "hsl(var(--gold) / 0.3)" }} />
                  </div>
                )}

                <div className="px-0 md:px-4 pb-8 md:pb-0">
                  <h3 className="text-lg md:text-xl font-semibold leading-tight" style={{ color: "hsl(var(--indigo))" }}>
                    {title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <div className="mt-12 md:mt-16 border-t pt-8" style={{ borderColor: "hsl(var(--indigo) / 0.06)" }}>
            <p className="text-center text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto" style={{ color: "hsl(var(--indigo-light))" }}>
              xxx
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default StrategicLogic;
