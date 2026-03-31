import FadeIn from "./FadeIn";
import { Clock } from "lucide-react";

interface ProofCard {
  client: string;
  description: string;
  stats: { value: string; hero?: boolean }[];
  statsExtra?: { description?: string; caption: string; items: { value: string; hero?: boolean }[] };
  anchor?: boolean;
  confidence: "high" | "medium" | "low";
}

const lot3Cards: ProofCard[] = [
  {
    client: "UK MGA",
    description: "Co-created a greenfield, <strong>AI-first operating platform</strong> for a new MGA preparing for <strong>seismic market shifts</strong> to come. Went <strong>live in 6 months</strong>, orchestrated <strong>15+ vendors</strong>, and achieved an expense ratio <strong>~50% lower than typical MGAs</strong>.",
    stats: [
      { value: "Live in 6 months", hero: true },
      { value: "15+ vendors orchestrated" },
      { value: "~50% lower expense ratio than typical MGAs", hero: true },
    ],
    anchor: true,
    confidence: "medium",
  },
  {
    client: "WORLD LEADING INSURER — UNDERWRITER CO-PILOT",
    description: "Designed and deployed a <strong>generative AI underwriting co-pilot</strong>. Trained and tuned an LLM on source documentation, connected it to a <strong>bespoke chatbot</strong>, and deployed into the client's <strong>AWS environment</strong> integrated with underwriting tools.",
    stats: [
      { value: "~90% reduction in task time", hero: true },
      { value: "80%+ accuracy in 3 weeks" },
    ],
    confidence: "medium",
  },
  {
    client: "UK INSURANCE BROKER & MGA - AI/ML PRODUCTS",
    description: "Built a <strong>real-time pricing and predictive modelling</strong> solution. Applied real-time model predictions to influence <strong>live pricing</strong>, with MLOps platform planned for <strong>Databricks-based ML models</strong>.",
    stats: [
      { value: "2m+ quotes/day", hero: true },
      { value: "<5ms response time" },
      { value: "8% premium revenue uplift", hero: true },
    ],
    confidence: "medium",
  },
];

const lot4Cards: ProofCard[] = [
  {
    client: "GLOBAL REINSURANCE BROKER - END-TO-END PLACEMENT WORKFLOW PLATFORM",
    description: "Designed and mobilised a <strong>placement platform</strong> to grow top-line revenues and build capabilities <strong>without growing headcount</strong>. Completed design thinking with <strong>c.50 stakeholders</strong>, assessed 30+ technologies, built POCs, and mobilised agile squads against an 18-month+ roadmap.",
    stats: [
      { value: "c.50 stakeholders" },
      { value: "c.30 design cycles in 1 week" },
      { value: "18m+ roadmap", hero: true },
    ],
    statsExtra: {
      description: "Since launch, the platform has scaled globally — onboarding <strong>~1,000 brokers across 25+ countries</strong>, capturing <strong>100% of revenue across 16 lines of business</strong>, and processing <strong>80% of 1/1 renewals end-to-end</strong>.",
      caption: "Since MVP release:",
      items: [
        { value: "~1K brokers onboarded in 25+ countries", hero: true },
        { value: "100% revenue captured across 16 lines of business", hero: true },
        { value: "80% 1/1 renewals run end-to-end", hero: true },
      ],
    },
    anchor: true,
    confidence: "medium",
  },
  {
    client: "GLOBAL HEALTH INSURER — ENTERPRISE DIGITAL STRATEGY",
    description: "Designed an enterprise-wide <strong>customer-centric Digital Strategy</strong> to drive scalability and sustained growth. Ran a <strong>12-week engagement</strong> across 4 phases — from customer vision and target experience design through to <strong>transformation planning</strong> — culminating in a <strong>5-year roadmap</strong> aligned to growth and tech strategies.",
    stats: [
      { value: "5 future journeys designed", hero: true },
      { value: "42 digital enablers identified", hero: true },
      { value: "50+ customers engaged" },
      { value: "40+ exec interviews" },
    ],
    confidence: "medium",
  },
  {
    client: "GLOBAL REINSURANCE BROKER — PRICING, MODELLING & ANALYTICS TRANSFORMATION",
    description: "Replaced fragmented, manual processes with an <strong>integrated tooling solution</strong> scalable across <strong>any line of business</strong> — delivering an <strong>end-to-end pricing dashboard</strong> integrating broking and actuarial insights, <strong>interactive visualisation tools</strong> for client-facing discussions, and a <strong>centralised data and modelling interface</strong> with workflow integration and export capabilities.",
    stats: [
      { value: "End-to-end pricing dashboard", hero: true },
      { value: "Unified modelling ecosystem" },
      { value: "Client-facing interactive visualisations", hero: true },
      { value: "Workflow integration (PPT, Excel)" },
    ],
    confidence: "medium",
  },
];

const Card = ({ card }: { card: ProofCard }) => (
  <div className={`h-full flex flex-col ${card.anchor ? 'card-indigo' : 'card-elevated'}`}>
    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] block mb-4"
      style={{ color: card.anchor ? "hsl(var(--gold))" : "hsl(var(--gold-deep))" }}>
      {card.client}
    </span>
    <p className="text-sm leading-relaxed mb-6 flex-1"
      style={{ color: card.anchor ? "hsl(var(--surface-dark))" : "hsl(var(--muted-foreground))" }}
      dangerouslySetInnerHTML={{ __html: card.description }}
    />
    <div className="flex flex-wrap gap-2">
      {card.stats.map(({ value, hero }, i) => (
        <span key={i} className="inline-flex items-center px-3 py-1.5 text-[0.7rem] font-bold tracking-wide"
          style={{
            borderRadius: "1px",
            background: hero
              ? (card.anchor ? "hsl(var(--gold) / 0.18)" : "hsl(var(--gold-muted))")
              : (card.anchor ? "hsl(var(--surface) / 0.08)" : "hsl(var(--indigo) / 0.04)"),
            color: hero
              ? (card.anchor ? "hsl(var(--gold-light))" : "hsl(var(--gold-deep))")
              : (card.anchor ? "hsl(var(--surface-dark))" : "hsl(var(--muted-foreground))"),
          }}>
          {value}
        </span>
      ))}
    </div>
    {card.statsExtra && (
      <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${card.anchor ? "hsl(var(--surface) / 0.1)" : "hsl(var(--indigo) / 0.08)"}` }}>
        {card.statsExtra.description && (
          <p className="text-sm leading-relaxed mb-4"
            style={{ color: card.anchor ? "hsl(var(--surface-dark))" : "hsl(var(--muted-foreground))" }}
            dangerouslySetInnerHTML={{ __html: card.statsExtra.description }}
          />
        )}
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] mb-2"
          style={{ color: card.anchor ? "hsl(var(--gold) / 0.7)" : "hsl(var(--gold-deep) / 0.7)" }}>
          {card.statsExtra.caption}
        </p>
        <div className="flex flex-wrap gap-2">
          {card.statsExtra.items.map(({ value, hero }, i) => (
            <span key={i} className="inline-flex items-center px-3 py-1.5 text-[0.7rem] font-bold tracking-wide"
              style={{
                borderRadius: "1px",
                background: hero
                  ? (card.anchor ? "hsl(var(--gold) / 0.18)" : "hsl(var(--gold-muted))")
                  : (card.anchor ? "hsl(var(--surface) / 0.08)" : "hsl(var(--indigo) / 0.04)"),
                color: hero
                  ? (card.anchor ? "hsl(var(--gold-light))" : "hsl(var(--gold-deep))")
                  : (card.anchor ? "hsl(var(--surface-dark))" : "hsl(var(--muted-foreground))"),
              }}>
              {value}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const ProofByLot = () => (
  <section id="proof-by-lot" className="section-padding" style={{ background: "hsl(var(--surface-mid))" }}>
    <div className="section-container">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px" style={{ background: "hsl(var(--gold))" }} />
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--gold-deep))" }}>THE EVIDENCE</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="heading-section max-w-3xl mb-16">
          Proof that maps to the lots
          <br />
          <span className="italic font-normal" style={{ color: "hsl(var(--purple-muted))" }}>that matter most</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="body-large max-w-4xl mb-16" style={{ color: "hsl(var(--muted-foreground))" }}>
          The case studies below focus on the capabilities most critical to RIQ, drawn from complex programmes across global insurance and financial services. Alongside our core experience across Europe, the US, and Africa, we have also delivered for clients in the <strong>Middle East</strong>, including the <strong>UAE and Saudi Arabia</strong>, giving us practical experience navigating regional operating and regulatory environments and mobilising effectively in-market.
        </p>
      </FadeIn>

      {/* Lot 3 */}
      <FadeIn delay={0.2}>
        <div className="flex items-center gap-4 mb-3">
          <span className="gold-badge">Lot 3</span>
          <span className="text-lg font-medium" style={{ color: "hsl(var(--indigo))" }}>
            AI/ML Platform & Solutions
          </span>
        </div>
      </FadeIn>
      <div className="mb-20">
        {lot3Cards.filter(c => c.anchor).map((card, i) => (
          <FadeIn key={`anchor-${i}`} delay={0.25}>
            <div className="mb-4">
              <Card card={card} />
            </div>
          </FadeIn>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lot3Cards.filter(c => !c.anchor).map((card, i) => (
            <FadeIn key={i} delay={0.3 + i * 0.06}>
              <Card card={card} />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lot 4 */}
      <FadeIn delay={0.2}>
        <div className="flex items-center gap-4 mb-3">
          <span className="gold-badge">Lot 4</span>
          <span className="text-lg font-medium" style={{ color: "hsl(var(--indigo))" }}>
            Digital Channels & Partners Experience
          </span>
        </div>
      </FadeIn>
      <div className="mb-20">
        {lot4Cards.filter(c => c.anchor).map((card, i) => (
          <FadeIn key={`anchor-${i}`} delay={0.25}>
            <div className="mb-4">
              <Card card={card} />
            </div>
          </FadeIn>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lot4Cards.filter(c => !c.anchor).map((card, i) => (
            <FadeIn key={i} delay={0.3 + i * 0.06}>
              <Card card={card} />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lot 8 */}
      <FadeIn delay={0.2}>
        <div className="flex items-center gap-4 mb-3">
          <span className="gold-badge">Lot 8</span>
          <span className="text-lg font-medium" style={{ color: "hsl(var(--indigo))" }}>
            Data Governance & Responsible AI
          </span>
        </div>
      </FadeIn>
      <div className="mb-20">
        <FadeIn delay={0.25}>
          <div className="mb-4">
            <Card card={{
              client: "GLOBAL INSURANCE BROKER — DATA GOVERNANCE TRANSFORMATION",
              description: "Launched an <strong>Enterprise-wide data transformation</strong> to establish trusted, governed data as a commercial asset, including design of a <strong>hybrid data governance framework</strong> underpinned by a <strong>centralised data platform with federated capabilities</strong>. Defined <strong>critical data elements</strong> to govern across Client, Risk, Placement, Policy, and Claims, and consolidating data across <strong>~200 products (~£3bn GWP placed)</strong>. Leveraged measurable efficiency gains through <strong>AI-enabled automation</strong> of the data discovery, mapping, and <strong>end-to-end lineage</strong> across key broking workflows.",
              stats: [
                { value: "~Critical data for ~200 products captured (~£3bn GWP)" },
                { value: "8 Enterprise data governance capabilities defined", hero: true },
              ],
              statsExtra: {
                description: "",
                caption: "Measurable outcomes:",
                items: [
                  { value: "30–50% reduction in manual data mapping", hero: true },
                  { value: "~40% faster data onboarding", hero: true },
                ],
              },
              anchor: true,
              confidence: "medium",
            }} />
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FadeIn delay={0.3}>
            <Card card={{
              client: "GLOBAL REINSURER — GENERATIVE AI STRATEGY, GOVERNANCE & ROADMAP",
              description: "Designed a <strong>Generative AI strategy and roadmap</strong> for a global reinsurer, defining where value could be unlocked, how use cases should be <strong>prioritised</strong>, and what <strong>governance foundations</strong> were needed to scale adoption responsibly. Conducted outside-in research, engaged <strong>45+ stakeholders</strong> across regions and functions, and facilitated senior leadership workshops — moving the organisation from AI opportunity to <strong>governed execution</strong> with clear priority use cases, capability needs, and control foundations.",
              stats: [
                { value: "167 use cases prioritised", hero: true },
                { value: "5 transformation initiatives identified" },
                { value: "45+ stakeholders engaged" },
              ],
              confidence: "medium",
            }} />
          </FadeIn>
          <FadeIn delay={0.36}>
            <Card card={{
              client: "REGIONAL BANK — GENERATIVE AI GOVERNANCE MODEL",
              description: "Designed a fit-for-purpose <strong>Generative AI governance model</strong> for a regulated financial institution, establishing the <strong>policies, forums, roles, and control processes</strong> needed to scale AI adoption safely. Reviewed market best practice, identified governance gaps, and collaborated across business, technology, and operations to deliver structures spanning <strong>ethics, security, usage, development, and scaling</strong> — embedding clear <strong>accountability and decision rights</strong> for responsible AI oversight.",
              stats: [
                { value: "3 governance policies delivered", hero: true },
                { value: "5 core governance processes defined", hero: true },
                { value: "Enterprise-wide oversight model" },
              ],
              confidence: "medium",
            }} />
          </FadeIn>
          <FadeIn delay={0.42}>
            <Card card={{
              client: "MUTUAL SOCIETY — ENTERPRISE DATA MODEL & DATA MANAGEMENT FRAMEWORK",
              description: "Designed an <strong>enterprise data model</strong> and <strong>data management framework</strong> to improve consistency, ownership, and control across the data estate. Built conceptual and logical models across <strong>11 key business areas</strong>, established naming conventions, and developed a complete framework covering <strong>data security, governance, quality, lineage, retention, compliance, and AI governance</strong> — creating trusted foundations for stronger governance and more reliable reporting.",
              stats: [
                { value: "120+ enterprise data entities defined", hero: true },
                { value: "15+ design workshops conducted" },
                { value: "25+ stakeholders engaged" },
              ],
              confidence: "medium",
            }} />
          </FadeIn>
        </div>
      </div>

      {/* Lot 10 */}
      <FadeIn delay={0.2}>
        <div className="flex items-center gap-4 mb-3">
          <span className="gold-badge">Lot 10</span>
          <span className="text-lg font-medium" style={{ color: "hsl(var(--indigo))" }}>
            Programme Management Office (PMO)
          </span>
        </div>
      </FadeIn>
      <div className="mb-20">
        <FadeIn delay={0.25}>
          <div className="mb-4">
            <Card card={{
              client: "FORTUNE 200 INSURER — ENTERPRISE TRANSFORMATION PMO",
              description: "Designed and mobilised a <strong>centrally funded transformation programme</strong> for a global life insurer, establishing the <strong>governance, tooling, and tracking</strong> required to manage delivery at scale. Defined the transformation governance model, funding mechanisms, and service catalogue — developing tools to manage <strong>150+ initiatives</strong>, running <strong>CFO alignment workshops</strong> across geographies and lines of business, and embedding playbooks, tooling, and training to drive adoption and <strong>value realisation</strong>.",
              stats: [
                { value: "€129m+ savings targeted", hero: true },
                { value: "150+ initiatives governed and tracked", hero: true },
                { value: "Enterprise-wide governance model" },
              ],
              anchor: true,
              confidence: "medium",
            }} />
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FadeIn delay={0.3}>
            <Card card={{
              client: "FORTUNE 200 INSURER — PROGRAMME GOVERNANCE & DELIVERY",
              description: "Supported a large-scale, <strong>multi-country transformation programme</strong>, establishing governance structures and driving execution across <strong>multiple operating entities</strong>. Created programme governance and drove progress against implementation plans, running <strong>300+ workshops</strong> to align stakeholders, defining repeatable processes, and supporting delivery across <strong>organisations and countries</strong>.",
              stats: [
                { value: "300+ workshops delivered", hero: true },
                { value: "Multi-country programme governance" },
                { value: "€30m+ savings delivered", hero: true },
              ],
              confidence: "medium",
            }} />
          </FadeIn>
          <FadeIn delay={0.36}>
            <Card card={{
              client: "FORTUNE 200 INSURER — TRANSFORMATION MANAGEMENT OFFICE (TMO)",
              description: "Established a <strong>Transformation Management Office (TMO)</strong> to coordinate delivery across a <strong>complex tri-partite vendor environment</strong>, managing interdependencies between the client, an external IT provider, and internal technology teams. Led <strong>end-to-end commercial negotiations across three parties</strong>, defined the enduring operating model governing all vendor relationships, and drove day-to-day TMO operations, coordinating <strong>milestone planning, risk management, and programme communications</strong> to keep multi-party delivery on track.",
              stats: [
                { value: "€91m savings secured", hero: true },
                { value: "3-party vendor model designed & governed" },
                { value: "€12m direct Elixirr savings", hero: true },
              ],
              confidence: "medium",
            }} />
          </FadeIn>
          <FadeIn delay={0.42}>
            <Card card={{
              client: "MAJOR PAN-AFRICAN BANK — ENTERPRISE PMO & PRODUCTIVITY PROGRAMME",
              description: "Designed and operationalised an <strong>enterprise-wide programme governance model</strong>, including reporting, tracking, and delivery structures to coordinate initiatives across <strong>multiple business units</strong>. Developed a programme strategy, governance model, and productivity playbook, establishing <strong>measurement frameworks, dashboards, and reporting</strong> to drive consistent executive visibility and <strong>coordinated execution</strong> across functions.",
              stats: [
                { value: "€53m productivity benefit delivered", hero: true },
                { value: "100+ initiatives delivered", hero: true },
                { value: "14 business units coordinated" },
              ],
              confidence: "medium",
            }} />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.4}>
        <div
          className="group mt-20 border-l-2 pl-8 md:pl-12 py-6 cursor-pointer transition-all duration-500 ease-out hover:border-l-4 hover:pl-10 md:hover:pl-14 hover:py-8 rounded-r-sm"
          style={{
            borderColor: "hsl(var(--purple-muted) / 0.6)",
            background: "linear-gradient(135deg, hsl(var(--purple-muted) / 0.08) 0%, hsl(var(--purple-muted) / 0.02) 50%, transparent 100%)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "hsl(var(--purple-muted))";
            e.currentTarget.style.background = "linear-gradient(135deg, hsl(var(--purple-muted) / 0.1) 0%, hsl(var(--purple-muted) / 0.03) 60%, transparent 100%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "hsl(var(--purple-muted) / 0.4)";
            e.currentTarget.style.background = "linear-gradient(135deg, hsl(var(--purple-muted) / 0.04) 0%, transparent 50%)";
          }}
        >
          <p className="text-xl md:text-2xl lg:text-[1.75rem] italic font-normal leading-[1.4] transition-all duration-500 ease-out opacity-60 group-hover:opacity-90 group-hover:tracking-wide"
            style={{ color: "hsl(var(--purple-muted))" }}>
            If this approach reflects what RIQ needs most in a delivery partner, Elixirr can prepare a <strong>detailed and fully costed response</strong> on this basis — we would ask for <strong>7–10 working days</strong> to complete this.
          </p>
          <span className="block mt-2 text-xs font-bold uppercase tracking-[0.25em] opacity-0 transition-all duration-500 group-hover:opacity-50 group-hover:mt-4"
            style={{ color: "hsl(var(--purple-muted))" }}>
            → CONFIRM & PROCEED BY CONTACTING CHRIS.BANNOCKS@ELIXIRR.COM
          </span>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ProofByLot;
