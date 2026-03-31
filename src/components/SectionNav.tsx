import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "INTRODUCTION" },
  { id: "who-is-elixirr", label: "WHO ARE ELIXIRR" },
  { id: "insurance-credentials", label: "Elixirr in Insurance" },
  { id: "what-riq-buys", label: "THE CORE CHALLENGE" },
  { id: "why-elixirr", label: "The Elixirr Approach" },
  { id: "how-we-mobilize", label: "Mobilisation" },
  { id: "proof-by-lot", label: "THE EVIDENCE" },
];

const SectionNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      if (offsets.length === 0) return;
      const current = offsets.reduce((best, item) =>
        Math.abs(item.top - 120) < Math.abs(best.top - 120) ? item : best
      );
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="flex flex-col justify-center h-full px-4 py-16"
      style={{
        width: "155px",
        background: "linear-gradient(180deg, hsl(278 42% 10%), hsl(275 35% 14%), hsl(278 42% 10%))",
      }}
    >
      <div className="relative flex flex-col justify-between h-full max-h-[70vh]">
        {/* Vertical track line */}

        {sections.map(({ id, label }, index) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative flex items-center gap-3 w-full text-left group cursor-pointer transition-all duration-300 py-1"
            >
              {/* Dot indicator */}
              <div
                className="relative z-10 flex-shrink-0 rounded-full transition-all duration-300"
                style={{
                  width: isActive ? "7px" : "5px",
                  height: isActive ? "7px" : "5px",
                  background: isActive
                    ? "hsl(var(--gold))"
                    : "hsl(0 0% 100% / 0.2)",
                  boxShadow: isActive
                    ? "0 0 10px hsl(var(--gold) / 0.5)"
                    : "none",
                }}
              />

              {/* Label */}
              <span
                className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 leading-tight"
                style={{
                  color: isActive
                    ? "hsl(var(--gold))"
                    : "hsl(0 0% 100% / 0.35)",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SectionNav;
