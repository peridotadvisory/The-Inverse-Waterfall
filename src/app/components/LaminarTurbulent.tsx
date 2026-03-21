import laminarTurbulentImg from '@/assets/visuals/EVF_Laminar_vs_Turbulent.png';

export function LaminarTurbulent() {
  return (
    <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <figure className="space-y-6">
          <img
            src={laminarTurbulentImg}
            alt="Laminar versus turbulent capital flow"
            className="w-full h-auto rounded-[28px] object-cover"
          />
          <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
            Traditional capital systems are often turbulent: spending, volatility, taxes, and emotional decision-making
            collide inside the same pool of assets. The Inverse Waterfall seeks laminar flow — a smoother sequence in which
            capital moves through defined layers before it is asked to support life.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
