import systemArchitectureImg from '@/assets/visuals/EVF_System_Architecture_Stack.png';
import enduringSystemImg from '@/assets/visuals/EVF_Enduring_System_Model.png';
import systemVsSingleEngineImg from '@/assets/visuals/EVF_System_vs_Single_Engine.png';

export function FullBleedVisual() {
  return (
    <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 md:px-10">
        <figure className="space-y-6">
          <img
            src={systemArchitectureImg}
            alt="Inverse Waterfall system architecture stack"
            className="w-full h-auto rounded-[28px] object-cover"
          />
          <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
            The system is built from the foundation upward. Protection, liquidity, and structural integrity
            carry the layers above them. Income, growth, and adaptive capital exist in service of continuity,
            not in competition with it.
          </figcaption>
        </figure>

        <figure className="space-y-6">
          <img
            src={systemVsSingleEngineImg}
            alt="System versus single engine architecture"
            className="w-full h-auto rounded-[28px] object-cover"
          />
          <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
            The contrast is structural. A single-engine model asks one pool of capital to absorb volatility,
            fund life, and preserve long-term growth at the same time. A layered system separates those jobs.
          </figcaption>
        </figure>

        <figure className="space-y-6">
          <img
            src={enduringSystemImg}
            alt="Enduring system stability model"
            className="w-full h-auto rounded-[28px] object-cover"
          />
          <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
            Endurance is not a matter of optimism. It is a function of balance, continuity, and layered strength.
            A sound system does not merely recover from stress. It contains it.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
