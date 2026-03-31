import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { Brain, Compass, Target, Zap } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Build RIQ as an AI-native reinsurer — not a legacy stack with AI layered on",
    lead: "Elixirr will design and build RIQ's data platform, MLOps stack, governance model, digital experience layer, and business workflows as a single integrated system — ensuring AI-enabled underwriting, servicing, and partner-facing use cases reach production with the right controls and feedback loops from the start.",
    bullets: [
      "The alternative — a conventional enterprise platform with AI layered on — delivers incremental improvement, not step-change advantage",
      "Elixirr has over fifteen years of machine learning capability, was an early adopter of generative AI, and among the first to ship commercial products on GPT-3",
      "RIQ gets a partner that builds AI-native architecture from the ground up — not one that retrofits it",
    ],
  },
  {
    icon: Target,
    title: "Lead where differentiation matters; orchestrate where scale matters",
    lead: <>Elixirr will own and deliver <strong style={{ color: "hsl(var(--indigo))" }}>Lots 3 and 4</strong> — building the AI/ML platform, solutions pipeline, digital channels, and broker/partner experience — to drive measurable differentiation and early P&amp;L impact across underwriting precision, partner experience, operational productivity, and data-driven decision support.</>,
    bullets: [
      "Elixirr leads in AI/ML platform development, digital channels and broker experience, responsible AI, and programme orchestration — the areas that decide whether RIQ becomes a genuinely differentiated reinsurer",
      "Where specialist depth or infrastructure scale is required, Elixirr coordinates the right providers rather than over-claiming",
      "RIQ gets best-in-class expertise without the cost and complexity of managing fragmented vendor relationships alone",
    ],
  },
  {
    icon: Compass,
    title: "A single transformation control point that manages the complexity so RIQ doesn't have to",
    lead: <>Elixirr will stand up the transformation control point from day one — defining the target operating model, governance, lot interfaces, decision rights, sequencing, and vendor coordination through <strong style={{ color: "hsl(var(--indigo))" }}>Lot 10</strong>, so RIQ's lean team can move fast without becoming the integration layer between partners.</>,
    bullets: [
      "Without a strong control point, RIQ risks fragmented delivery, unclear accountability, and expensive rework across lots",
      "Elixirr's partner-led model embeds senior decision-makers in the programme — not layers of junior consultants escalating to absent leadership",
      "Faster decisions, clearer ownership, and a single point of trust RIQ can rely on",
    ],
  },
  {
    icon: Zap,
    title: "Production value fast — pragmatic sequencing over perfection",
    lead: <>Elixirr will embed responsible AI and data governance from the outset through <strong style={{ color: "hsl(var(--indigo))" }}>Lot 8</strong> — underpinning the credibility of every <strong style={{ color: "hsl(var(--indigo))" }}>Lot 3</strong> deployment. Via <strong style={{ color: "hsl(var(--indigo))" }}>Lot 10</strong>, Elixirr will manage programme sequencing, vendor interdependencies, and the convergence path across jurisdictions to keep delivery on track.</>,
    bullets: [
      "The programme is sequenced around data availability, regulatory readiness, and high-ROI underwriting, claims, and support-function use cases",
      "Elixirr's AI-centric delivery model enables rapid mobilisation, early production releases, and governed iteration",
      "Investment translates into operational advantage quickly — not months of strategy phases that leave delivery risk unresolved",
    ],
  },
];

const WhyElixirr = () => (
  <section id="why-elixirr" className="section-padding relative" style={{ background: "hsl(var(--surface-mid))" }}>
    <div className="absolute inset-0 bg-grid-dot" />
    <div className="section-container relative z-10">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px" style={{ background: "hsl(var(--gold))" }} />
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold-deep))" }}>THE ELIXIRR APPROACH</span>
        </div>
      </FadeIn>
      <div className="mb-20" />

      <FadeIn delay={0.15}>
        <h3 className="heading-section max-w-4xl mb-6">
          Elixirr's partnership with RIQ
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>— a smarter way to transform</span>
        </h3>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="body-large max-w-3xl mb-16">
          <strong>One partnership model</strong> with Elixirr to accelerate RIQ's path to a modern, <strong>AI-native operating platform</strong>. <span style={{ color: "hsl(var(--gold))" }}>Four reasons why this works so well.</span>
        </p>
      </FadeIn>

      <div className="relative mb-20">
        <div className="hidden md:block absolute top-[3.25rem] left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.15), hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.15))" }} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            { icon: Brain, title: "AI-native as a non-negotiable", caption: "Built on AI from day one — not a legacy stack with AI bolted on." },
            { icon: Target, title: "Leading where it matters", caption: "Elixirr leads where differentiation matters; and where noone does it like us." },
            { icon: Compass, title: "Integrated programme oversight", caption: "One central partner RIQ can trust coordinating delivery, dependencies, and outcomes." },
            { icon: Zap, title: "Speed to value as the priority", caption: "Strategic sequencing for production value early — not perfection first." },
          ].map(({ icon: Icon, title, caption }, i) => (
            <FadeIn key={i} delay={0.25 + i * 0.1}>
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
                  <Icon size={20} style={{ color: "hsl(var(--gold))" }} />
                </motion.div>
                {i < 3 && (
                  <div className="md:hidden flex items-center justify-start ml-[1.35rem] -mt-3 mb-3">
                    <div className="w-px h-6" style={{ background: "hsl(var(--gold) / 0.3)" }} />
                  </div>
                )}
                <div className="px-0 md:px-4 pb-8 md:pb-0">
                  <h4 className="text-lg md:text-xl font-semibold leading-tight mb-2" style={{ color: "hsl(var(--indigo))" }}>
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {caption}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.25}>
        <div className="mb-20">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-5 block" style={{ color: "hsl(var(--gold))" }}>
            PRIORITY LOTS ELIXIRR WILL OWN & DELIVER, WHILST MANAGING OVERALL PROGRAMME SEQUENCING AND DEPENDENCIES BETWEEN ALL 10 LOTS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { lot: "Lot 3", title: "AI/ML Platform & Solutions Development", desc: "AI/ML platform and use-case roadmap" },
              { lot: "Lot 4", title: "Digital Channels & Broker / Partner Experience", desc: "Digital channels and broker / partner experience" },
              { lot: "Lot 8", title: "Data Governance & Responsible AI", desc: "Data governance, responsible AI, and explainability" },
              { lot: "Lot 10", title: "Programme Management Office", desc: "PMO, transformation orchestration, and executive control" },
            ].map(({ lot, title: lotTitle, desc }, j) => (
              <motion.div
                key={j}
                className="relative p-5 rounded-md border overflow-hidden"
                style={{
                  background: "hsl(var(--surface))",
                  borderColor: "hsl(var(--indigo) / 0.12)",
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(var(--indigo) / 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold) / 0.4))" }} />
                <div className="absolute top-4 right-4">
                  <span className="text-3xl font-bold" style={{ color: "hsl(var(--indigo) / 0.06)" }}>
                    {lot.replace("Lot ", "")}
                  </span>
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: "hsl(var(--indigo))" }}>
                  {lot}
                </span>
                <h4 className="text-base font-semibold mb-1.5 leading-tight" style={{ color: "hsl(var(--indigo))" }}>
                  {lotTitle}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px" style={{ background: "hsl(var(--gold))" }} />
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold-deep))" }}>THE RATIONALE</span>
        </div>
      </FadeIn>

      <div className="space-y-0">
        {differentiators.map(({ icon: Icon, title, lead, bullets }, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.08}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t" style={{ borderColor: "hsl(var(--indigo) / 0.08)" }}>
              <div className="md:col-span-1 flex items-start pt-1">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{
                    background: "hsl(var(--indigo))",
                    borderRadius: "2px",
                    boxShadow: "0 4px 20px hsl(var(--indigo) / 0.2)",
                  }}
                >
                  <Icon size={18} style={{ color: "hsl(var(--gold))" }} />
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight" style={{ color: "hsl(var(--indigo))" }}>
                  {title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-base leading-[1.75] mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{lead}</p>
                <ul className="space-y-3">
                  {bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-base leading-[1.75]" style={{ color: "hsl(var(--muted-foreground))" }}>
                      <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--gold))" }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
        <div className="border-t" style={{ borderColor: "hsl(var(--indigo) / 0.08)" }} />
      </div>
    </div>
  </section>
);

export default WhyElixirr;
