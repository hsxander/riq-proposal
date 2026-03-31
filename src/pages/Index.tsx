import { useState } from "react";
import Hero from "@/components/Hero";

import WhatRiqBuys from "@/components/WhatRiqBuys";
import WhyElixirr from "@/components/WhyElixirr";
import WhoIsElixirr from "@/components/WhoIsElixirr";
import InsuranceCredentials from "@/components/InsuranceCredentials";

import ProofByLot from "@/components/ProofByLot";
import HowWeMobilize from "@/components/HowWeMobilize";

import FadeIn from "@/components/FadeIn";
import SectionNav from "@/components/SectionNav";
import LandingGate from "@/components/LandingGate";

const SectionBridge = ({ text, className }: { text: string; className?: string }) => (
  <div className={`section-bridge ${className || ""}`}>
    <div className="section-container">
      <FadeIn>
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "hsl(var(--gold))" }} />
          <p className="section-bridge-text">{text}</p>
        </div>
      </FadeIn>
    </div>
  </div>
);

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked && <LandingGate onUnlock={() => setUnlocked(true)} />}
      <div className="flex min-h-screen relative">
        {/* Nav column */}
        <div className="sticky top-0 h-screen flex-shrink-0">
          <SectionNav />
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden min-w-0">
          <Hero />
          <WhoIsElixirr />
          <InsuranceCredentials />
          
          <WhatRiqBuys />
          <WhyElixirr />
          
          
          <SectionBridge className="bg-[hsl(var(--surface-mid))]" text="Leadership and orchestration only matter if they produce governed momentum. Here is how strategy becomes delivery." />
          <HowWeMobilize />
          <ProofByLot />
          
        </main>

        {/* Confidential label */}
        <div className="fixed bottom-4 left-4 z-[100] text-[10px] tracking-[0.2em] uppercase font-medium opacity-50" style={{ color: "hsl(var(--foreground))" }}>
          Confidential
        </div>
      </div>
    </>
  );
};

export default Index;
