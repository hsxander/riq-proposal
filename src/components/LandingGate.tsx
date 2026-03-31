import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import elixirrLogo from "@/assets/elixirr-logo.png";

const PASS = "ElixirrRIQ2026";

const LandingGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASS) {
      setExiting(true);
      setTimeout(onUnlock, 800);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "hsl(var(--indigo))" }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--surface)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--surface)) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Gold accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32"
            style={{ background: "linear-gradient(to bottom, hsl(var(--gold)), transparent)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center px-8 max-w-xl"
          >
            <img src={elixirrLogo} alt="Elixirr" className="h-8 mb-12 opacity-90" />

            <h1
              className="text-3xl font-semibold leading-tight tracking-tight mb-4 md:text-3xl"
              style={{ color: "hsl(var(--surface))" }}
            >
              Building RIQ: the AI-native reinsurer
            </h1>
            <p
              className="text-lg md:text-xl italic font-light mb-10"
              style={{ color: "hsl(var(--gold))" }}
            >
              Elixirr response
            </p>

            <div
              className="w-16 h-px mb-10"
              style={{ background: "hsl(var(--gold) / 0.4)" }}
            />

            <p
              className="text-sm tracking-widest uppercase mb-8 font-medium"
              style={{ color: "hsl(var(--purple-light))" }}
            >
              Confidential — enter passcode to continue
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-xs">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Passcode"
                  autoFocus
                  className="w-full px-5 py-3 rounded-md text-center text-sm tracking-[0.15em] font-medium border transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    background: "hsl(var(--indigo-light))",
                    borderColor: error ? "hsl(0 72% 51%)" : "hsl(var(--gold) / 0.3)",
                    color: "hsl(var(--surface))",
                    ...(error ? {} : {}),
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "hsl(46 100% 45%)";
                    e.target.style.boxShadow = "0 0 0 2px hsl(46 100% 45% / 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "hsl(46 100% 45% / 0.3)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-7 left-0 right-0 text-xs font-medium"
                    style={{ color: "hsl(0 72% 60%)" }}
                  >
                    Incorrect passcode
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                className="mt-8 w-full py-3 rounded-md text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.3em]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                  color: "hsl(var(--indigo))",
                }}
              >
                Enter
              </button>
            </form>
          </motion.div>

          {/* Bottom accent */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20"
            style={{ background: "linear-gradient(to top, hsl(var(--gold) / 0.3), transparent)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingGate;
