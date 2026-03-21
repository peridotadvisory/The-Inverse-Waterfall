import { HeroCover } from './components/HeroCover';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { SectionBlock } from './components/SectionBlock';
import { DataCallout } from './components/DataCallout';
import { FullBleedVisual } from './components/FullBleedVisual';
import { SplitVisual } from './components/SplitVisual';
import { LaminarTurbulent } from './components/LaminarTurbulent';
import { QuoteBlock } from './components/QuoteBlock';
import { ClosingStatement } from './components/ClosingStatement';
import inverseWaterfallFlowImg from '@/assets/visuals/EVF_Inverse_Waterfall_Flow.png';

export default function App() {
  return (
    <main className="bg-[#0B0B0C] text-[#F5F5F3]">
      <HeroCover />
      <ExecutiveSummary />

      <SectionBlock title="The Hidden Tension in Conventional Portfolios" background="#F5F3EE">
        <div className="space-y-6 text-[1.05rem] leading-8 text-[#2A2A2A] md:text-[1.12rem]">
          <p>
            Most wealthy households rely on a familiar structure: capital is invested into markets, lifestyle is funded from
            distributions or withdrawals, and long-term growth is expected to solve the rest.
          </p>
          <p>
            In favorable periods, this tension remains hidden. In adverse periods, the same portfolio is asked to absorb losses,
            provide liquidity, and preserve future compounding all at once.
          </p>
          <p>
            Over time, the issue is not simply volatility. It is structural dependence. Life is sitting on top of the same engine
            that is supposed to power growth.
          </p>
        </div>
      </SectionBlock>

      <DataCallout label="The Structural Problem">
        <p className="mx-auto max-w-3xl px-6 pb-6 text-center text-base leading-8 text-[#C8C8C4] md:px-10 md:text-lg">
          When income, liquidity, and long-term growth compete for the same pool of assets, capital becomes turbulent.
          The portfolio may recover. Life still absorbs the interruption.
        </p>
      </DataCallout>

      <FullBleedVisual />

      <SectionBlock title="The Inverse Waterfall" background="#F5F3EE">
        <div className="space-y-6 text-[1.05rem] leading-8 text-[#2A2A2A] md:text-[1.12rem]">
          <p>
            The Inverse Waterfall reverses the sequence. Capital is not drawn from the top. It is built from the foundation upward,
            each layer serving a distinct structural role before anything is asked to support life.
          </p>
          <p>
            Foundation capital protects continuity. Stability capital refills what life consumes. Growth capital compounds without
            lifestyle dependency. Adaptive capital responds to opportunity without destabilizing the system.
          </p>
          <p>
            What matters is not simply the presence of these layers, but the order in which they relate to one another.
            The system operates first. Life is funded by what remains after the system has done its work.
          </p>
        </div>
      </SectionBlock>

      <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <figure className="space-y-6">
            <img
              src={inverseWaterfallFlowImg}
              alt="Inverse Waterfall capital flow model"
              className="w-full h-auto rounded-[28px] object-cover"
            />
            <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
              Movement is resolved into stillness. Capital flows through the lower system, converges upward, and supports life
              from a position of structural strength.
            </figcaption>
          </figure>
        </div>
      </section>

      <SectionBlock title="Laminar Flow and Usable Wealth" background="#F5F3EE">
        <div className="space-y-6 text-[1.05rem] leading-8 text-[#2A2A2A] md:text-[1.12rem]">
          <p>
            In fluid dynamics, laminar flow describes movement that is smooth, layered, and non-colliding. Turbulent flow is
            disordered, conflicted, and energy-intensive.
          </p>
          <p>
            The same distinction is useful in capital design. A turbulent system forces taxes, spending, volatility, and behavioral
            reaction into the same space. A laminar system sequences them.
          </p>
          <p>
            The reward is not simply efficiency. It is usability — the ability to enjoy wealth, preserve continuity, and deploy
            capital without daily life being held hostage by market conditions.
          </p>
        </div>
      </SectionBlock>

      <LaminarTurbulent />

      <SplitVisual />

      <QuoteBlock background="#F5F3EE">
        <div
          className="mx-auto max-w-4xl px-6 py-20 text-center text-[1.5rem] leading-[1.5] text-[#111111] md:px-10 md:text-[2rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          “Your life is not exposed to the system.
          <br />
          It is protected by it.”
        </div>
      </QuoteBlock>

      <SectionBlock title="What the Framework Ultimately Delivers" background="#F5F3EE">
        <div className="space-y-6 text-[1.05rem] leading-8 text-[#2A2A2A] md:text-[1.12rem]">
          <p>
            The aspiration is not merely to survive volatility. It is to build a system in which freedom, continuity, and
            optionality are less dependent on what markets do next.
          </p>
          <p>
            This is why the framework matters. Families are already spending from a structure. The real question is whether that
            structure compounds fragility or converts capital into a calmer, more durable life.
          </p>
          <p>
            A portfolio may be impressive on paper. A system must remain usable in real life.
          </p>
        </div>
      </SectionBlock>

      <ClosingStatement />
    </main>
  );
}
