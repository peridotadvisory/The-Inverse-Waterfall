import { HeroCover } from './components/HeroCover';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { SectionBlock } from './components/SectionBlock';
import { DataCallout } from './components/DataCallout';
import { FullBleedVisual } from './components/FullBleedVisual';
import { SplitVisual } from './components/SplitVisual';
import { LaminarTurbulent } from './components/LaminarTurbulent';
import { QuoteBlock } from './components/QuoteBlock';
import { ClosingStatement } from './components/ClosingStatement';

export default function App() {
  return (
    <div 
      style={{ 
        fontFamily: "'Inter', sans-serif",
        background: '#F5F5F3',
      }}
    >
      <HeroCover />
      
      <ExecutiveSummary />

      <SectionBlock title="The Problem with Traditional Capital Flow" background="#F5F5F3">
        <p className="mb-8">
          In conventional portfolio design, income is drawn from the top. Dividends, distributions, and periodic rebalancing fund lifestyle—exposing life to the volatility of markets.
        </p>

        <p className="mb-8">
          When markets decline, so does income stability. When asset prices compress, families face a choice: reduce spending, liquidate positions at inopportune times, or accept sequence-of-returns risk.
        </p>

        <DataCallout label="Observed Market Behavior">
          <p className="mb-4">
            During the 2008 financial crisis, portfolios structured for 4% withdrawal rates experienced significant stress. Families drawing income from equity-heavy allocations saw distributions fall by 30–50%.
          </p>
          <p>
            The system did not protect life. Life absorbed the shock.
          </p>
        </DataCallout>

        <p>
          The issue is not diversification. It is structural coupling—the direct linkage between market movement and lifestyle continuity.
        </p>
      </SectionBlock>

      <FullBleedVisual />

      <SectionBlock title="Capital Sequencing: Building from the Bottom" background="#F5F5F3">
        <p className="mb-8">
          The Inverse Waterfall reverses this flow. Capital is not drawn from the top. It is structured from the foundation upward, each layer serving a distinct function within the system.
        </p>

        <p className="mb-12">
          The layering is intentional:
        </p>

        <div className="space-y-10 mb-12 ml-8">
          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Layer 1 — Foundation
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Structural reserves. Multi-year income buffer. Liquidity without volatility. This layer does not move.
            </p>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Layer 2 — Income / Stability
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Yield-generating assets. Fixed income. Dividend strategies. Low correlation to growth assets. Predictable, not optimized.
            </p>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Layer 3 — Growth
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Long-duration equity. Compounding assets. Capital appreciation without income dependency. This layer can be volatile because it is structurally insulated from life.
            </p>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Layer 4 — Adaptive
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Opportunistic capital. Tactical allocations. Alternative structures. This layer responds to dislocations without disrupting the system.
            </p>
          </div>
        </div>

        <p>
          Life is funded by Layer 1. The system refills Layer 1 from Layers 2, 3, and 4. Market volatility exists in the lower layers. Life exists above them.
        </p>
      </SectionBlock>

      <SplitVisual />

      <SectionBlock title="Structural Resilience" background="#0B0B0C">
        <p className="mb-8">
          Resilience is not the ability to recover. It is the absence of disruption.
        </p>

        <p className="mb-8">
          A resilient system does not require intervention during stress. It does not depend on rebalancing at the wrong time, forced liquidations, or behavioral discipline under pressure.
        </p>

        <p className="mb-8">
          The Inverse Waterfall achieves this through separation:
        </p>

        <ul className="space-y-4 ml-8 mb-8">
          <li style={{ listStyleType: 'disc' }}>Life remains funded regardless of market conditions</li>
          <li style={{ listStyleType: 'disc' }}>Growth assets can decline without lifestyle impact</li>
          <li style={{ listStyleType: 'disc' }}>Rebalancing occurs from strength, not necessity</li>
          <li style={{ listStyleType: 'disc' }}>Capital flows upward only when conditions permit</li>
        </ul>

        <p>
          The system is designed for non-linearity. Turbulence is expected. The architecture absorbs it.
        </p>
      </SectionBlock>

      <LaminarTurbulent />

      <QuoteBlock background="#F5F5F3">
        "A portfolio is optimized for expected returns. A system is designed for unexpected conditions."
      </QuoteBlock>

      <SectionBlock title="The Architecture of Usable Wealth" background="#F5F5F3">
        <p className="mb-8">
          Wealth is not an account balance. It is the capacity to fund life without friction, interruption, or forced compromise.
        </p>

        <p className="mb-8">
          The Inverse Waterfall does not maximize wealth. It maximizes usability—the ability to deploy capital when needed, without structural constraint.
        </p>

        <DataCallout label="Design Principle">
          <p className="mb-4">
            Traditional planning asks: "How much can I safely withdraw?"
          </p>
          <p className="mb-4">
            The Inverse Waterfall asks: "What structure ensures life is never interrupted?"
          </p>
          <p>
            The first is optimization. The second is architecture.
          </p>
        </DataCallout>

        <p className="mb-8">
          This approach does not eliminate risk. It relocates it—away from daily life, into layers designed to absorb volatility without transmitting it upward.
        </p>

        <p>
          The result is not comfort. It is structural certainty.
        </p>
      </SectionBlock>

      <QuoteBlock background="#0B0B0C">
        "The system does not require you to believe in it. It requires you to build it correctly."
      </QuoteBlock>

      <SectionBlock title="Implementation Considerations" background="#F5F5F3">
        <p className="mb-8">
          Implementing an Inverse Waterfall structure requires precision in both capital allocation and flow mechanics. This is not a passive framework.
        </p>

        <p className="mb-12">
          Key design elements include:
        </p>

        <div className="space-y-8 ml-8 mb-12">
          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Layer Sizing
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Foundation layer must hold 24–36 months of lifestyle expenses. Income layer sized to refill foundation annually. Growth and adaptive layers determined by surplus capital.
            </p>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Flow Triggers
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Capital moves upward based on pre-defined thresholds, not discretion. When lower layers exceed target levels, excess flows to foundation. Manual intervention is a design flaw.
            </p>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Tax Integration
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Layer structure must align with tax efficiency. Foundation typically held in after-tax liquidity. Income layer may utilize qualified accounts. Growth in tax-deferred or tax-advantaged structures.
            </p>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Behavioral Discipline
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              The system works only if life does not exceed the foundation layer's capacity. Lifestyle inflation must be controlled, or the entire structure fails.
            </p>
          </div>
        </div>

        <p>
          This is not a model. It is a commitment to structural thinking.
        </p>
      </SectionBlock>

      <ClosingStatement />
    </div>
  );
}
