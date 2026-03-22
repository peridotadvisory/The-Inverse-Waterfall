import { HeroCover } from './components/HeroCover';
import { FullBleedVisual } from './components/FullBleedVisual';
import { SplitVisual } from './components/SplitVisual';
import { LaminarTurbulent } from './components/LaminarTurbulent';
import { ClosingStatement } from './components/ClosingStatement';

import inverseWaterfallFlowImg from '@/assets/visuals/EVF_Inverse_Waterfall_Flow.png';

export default function App() {
  return (
    <main className="bg-[#0B0B0C] text-[#F5F5F3]">

      {/* HERO */}
      <HeroCover />

      {/* EXECUTIVE SUMMARY */}
      <section className="w-full bg-[#F5F3EE] py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">

          <h2 className="mb-10 text-[2.4rem] leading-none text-[#111]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Executive Summary
          </h2>

          <div className="space-y-6 text-[1.1rem] leading-8 text-[#2A2A2A]">

            <p>
              Most wealth strategies begin with allocation. Capital is distributed across markets
              with the expectation that long-term returns will support both lifestyle and growth.
            </p>

            <p>
              The flaw is not diversification. It is dependence.
            </p>

            <p>
              Life is funded from the same pool of capital that must also absorb volatility,
              support withdrawals, and preserve compounding.
            </p>

            <p>
              In stable periods, this tension is invisible. In stressed conditions, it becomes structural.
            </p>

            <p>
              The Inverse Waterfall introduces a different architecture.
            </p>

            <p>
              The system operates first.
              Life is funded last — by what the system produces, not by what markets permit.
            </p>

            <p>
              This is not a discipline framework.
              It is an aspirational one.
            </p>

            <p>
              Families are already consuming wealth through a system.
              The difference is whether that system creates fragility —
              or converts capital into continuity, clarity, and control.
            </p>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">

          <h2 className="mb-10 text-[2.4rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Hidden Tension
          </h2>

          <div className="space-y-6 text-[#C8C8C4] leading-8">

            <p>
              A portfolio is asked to do too many things at once.
            </p>

            <p>
              It must grow.
              It must provide income.
              It must remain liquid.
              It must withstand volatility.
            </p>

            <p>
              These demands conflict.
            </p>

            <p>
              When markets decline, capital is not simply marked down.
              It is removed.
            </p>

            <p>
              This is not a performance issue.
              It is a structural one.
            </p>

          </div>
        </div>
      </section>

      {/* VISUAL BLOCK */}
      <FullBleedVisual />

      {/* INVERSE WATERFALL */}
      <section className="w-full bg-[#F5F3EE] py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">

          <h2 className="mb-10 text-[2.4rem] text-[#111]" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Inverse Waterfall
          </h2>

          <div className="space-y-6 text-[#2A2A2A] leading-8">

            <p>
              The sequence is reversed.
            </p>

            <p>
              Capital is organized by function.
              Each layer serves a role before anything is asked to support life.
            </p>

            <p>
              Protection comes first.
              Liquidity follows.
              Income stabilizes.
              Growth compounds.
              Adaptation responds.
            </p>

            <p>
              Only then is life funded.
            </p>

            <p>
              Not first position.
              Last position.
            </p>

            <p>
              An inverse waterfall.
            </p>

          </div>
        </div>
      </section>

      {/* FLOW VISUAL */}
      <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">

          <img
            src={inverseWaterfallFlowImg}
            alt="Inverse Waterfall capital flow"
            className="w-full rounded-[28px]"
          />

          <p className="text-center text-[#A8A8A8] mt-6 max-w-3xl mx-auto">
            Movement resolves into stillness. Capital flows through the system and supports life from strength.
          </p>

        </div>
      </section>

      {/* LAMINAR FLOW */}
      <section className="w-full bg-[#F5F3EE] py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">

          <h2 className="mb-10 text-[2.4rem] text-[#111]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Laminar Flow
          </h2>

          <div className="space-y-6 text-[#2A2A2A] leading-8">

            <p>
              In turbulent systems, forces collide.
            </p>

            <p>
              Spending, volatility, taxation, and behavior exist in the same space.
            </p>

            <p>
              In laminar systems, flow is separated.
            </p>

            <p>
              Capital moves smoothly through defined layers.
              Each function is contained.
            </p>

            <p>
              The result is not just efficiency.
              It is calm.
            </p>

          </div>
        </div>
      </section>

      <LaminarTurbulent />

      {/* EMOTIONAL PAYOFF */}
      <SplitVisual />

      {/* CLOSING */}
      <ClosingStatement />

    </main>
  );
}
