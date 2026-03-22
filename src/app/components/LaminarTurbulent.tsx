import { motion } from 'motion/react';

export function LaminarTurbulent() {
  return (
    <section className="w-full bg-[#0B0B0C] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <div
              className="mb-8 text-sm uppercase tracking-[0.22em] text-[#A8A8A8] md:text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Turbulent Flow
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-[#07110F]">
              {[...Array(18)].map((_, i) => {
                const left = 8 + ((i * 5) % 80);
                const top = 4 + ((i * 7) % 76);
                const rotate = -55 + ((i * 19) % 110);
                const width = 180 + ((i * 23) % 220);

                return (
                  <motion.div
                    key={`turbulent-${i}`}
                    className="absolute"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      width: `${width}px`,
                      height: '2px',
                      background: 'rgba(180, 180, 180, 0.32)',
                      borderRadius: '999px',
                      transform: `rotate(${rotate}deg)`,
                      transformOrigin: 'left center',
                    }}
                    animate={{
                      x: [0, i % 2 === 0 ? 10 : -10, 0],
                      y: [0, i % 3 === 0 ? -8 : 8, 0],
                      opacity: [0.28, 0.48, 0.28],
                    }}
                    transition={{
                      duration: 6 + (i % 5),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <div
              className="mb-8 text-sm uppercase tracking-[0.22em] text-[#1C5A46] md:text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Laminar Flow
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-[#07110F]">
              {[...Array(12)].map((_, i) => {
                const top = 12 + i * 6.5;

                return (
                  <motion.div
                    key={`laminar-${i}`}
                    className="absolute left-[4%] right-[4%] h-px"
                    style={{
                      top: `${top}%`,
                      background:
                        'linear-gradient(90deg, rgba(24,90,70,0.12) 0%, rgba(118,168,150,0.4) 50%, rgba(24,90,70,0.12) 100%)',
                    }}
                    animate={{
                      opacity: [0.35, 0.55, 0.35],
                    }}
                    transition={{
                      duration: 4 + (i % 4),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-[#A8A8A8] md:text-base">
          Traditional systems force spending, taxes, volatility, and behavior into the same pool of capital.
          The result is turbulence. The Inverse Waterfall seeks laminar flow — a smoother sequence in which
          capital moves through distinct layers before it is asked to support life.
        </p>
      </div>
    </section>
  );
}