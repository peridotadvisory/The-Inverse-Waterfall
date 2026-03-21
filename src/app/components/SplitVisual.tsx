import calmVsActiveImg from '@/assets/visuals/EVF_Calm_vs_Active_System.png';
import dislocationDeploymentImg from '@/assets/visuals/EVF_Dislocation_Deployment.png';

export function SplitVisual() {
  return (
    <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 md:px-10">
        <figure className="space-y-6">
          <img
            src={calmVsActiveImg}
            alt="Calm life versus active capital system"
            className="w-full h-auto rounded-[28px] object-cover"
          />
          <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
            This is the emotional center of the framework. Life remains calm not because markets are calm,
            but because movement is contained below the layer that funds life.
          </figcaption>
        </figure>

        <figure className="space-y-6">
          <img
            src={dislocationDeploymentImg}
            alt="Deployment into dislocation"
            className="w-full h-auto rounded-[28px] object-cover"
          />
          <figcaption className="mx-auto max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
            Dislocation is not merely something to survive. In a properly designed system, it becomes a field
            of controlled deployment. Optionality belongs to the party that is not forced to move.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
