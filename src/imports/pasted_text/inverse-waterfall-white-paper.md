Design a high-end, editorial-style digital white paper experience for a financial firm called Peridot Advisory.
This is the second paper in a series and should visually align with the first paper:
“Wealth is Not a Portfolio”
Reference design language:
https://peridotadvisory.github.io/Wealth-is-Not-a-Portfolio/
Maintain layout continuity, typography hierarchy, and pacing, but elevate the experience with more advanced visual system elements.
🏛️ OVERALL PRODUCT DEFINITION
This is not a blog.
This is not a PDF.
This is a category-defining digital white paper experience that feels like:
a private bank institutional memo
a luxury editorial publication
a modern interactive system
Tone:
minimal
calm
precise
authoritative
architectural
🎨 VISUAL STYLE SYSTEM
Color palette:
deep black / charcoal (#0B0B0C)
soft white / bone (#F5F5F3)
muted stone / gray (#A8A8A8)
deep green accent (#1C3D2B)
Typography:
Headings: high-end serif (Canela / Playfair / similar)
Body: modern sans-serif (Inter / Neue Haas Grotesk)
Large line spacing, generous margins
Spacing:
extremely generous whitespace
no dense blocks
calm reading rhythm
📐 LAYOUT SYSTEM (REACT STRUCTURE)
Build as modular React components:
<HeroCover />
<ExecutiveSummary />
<SectionBlock />
<DataCallout />
<FullBleedVisual />
<SplitVisual />
<QuoteBlock />
<ClosingStatement />
Each section should be vertically stacked with smooth scroll.
Max width: 720–820px centered
Full-bleed visuals break container width
🔥 COVER PAGE (CRITICAL — CATEGORY SIGNAL)
Design a world-class cover.
Composition:
Full-screen dark background
Subtle animated gradient or texture (very slow, almost imperceptible)
Centered text:
Title:
THE INVERSE WATERFALL
Subtitle:
Capital Sequencing, Structural Resilience, and the Architecture of Usable Wealth
Footer:
Peridot Advisory
Enduring Value Framework Research Series
Visual Element (subtle, abstract):
A faint upward-flowing system:
layered lines or gradients moving upward
very soft glow
NOT literal water
feels like energy / capital flow
Interaction:
slow fade-in on load
slight parallax on scroll
🧩 SECTION STRUCTURE
1. EXECUTIVE SUMMARY
clean, centered column
large margins
elegant typography
include emphasized quote blocks
2. DATA CALLOUT (RIGHT FLOAT OR BREAKOUT)
Design a subtle boxed callout:
thin border
soft gray background
small caps label: “Observed Market Behavior”
🧩 VISUAL 1 — INVERSE WATERFALL SYSTEM
Component: <FullBleedVisual />
Design a vertical system diagram:
Layers from bottom to top:
Foundation (dark, stable base)
Income / Stability
Growth
Adaptive
Lifestyle (top, calm, bright)
Flow:
soft upward motion lines
glowing gradient transitions
smooth, controlled (laminar feel)
Top layer:
completely still
clean, minimal
Caption below:
“Capital flows through the system.
Life is funded by what remains.”
🧩 VISUAL 2 — CALM LIFE vs SYSTEM
Component: <SplitVisual />
Horizontal split:
Top:
warm, still, minimal
soft gradient, no movement
Bottom:
dynamic, subtle motion lines
darker tones
contained energy
Divider line between layers
Caption:
“The system absorbs movement.
Life remains unchanged.”
🧩 VISUAL 3 — LAMINAR vs TURBULENT
Side-by-side layout
Left:
chaotic lines
intersecting paths
jagged movement
Right:
smooth parallel lines
evenly spaced
clean directional flow
Caption:
“When structure is aligned, capital no longer collides with itself.”
🧩 OPTIONAL VISUAL — SYSTEM vs PORTFOLIO
Left:
single pillar (cracked under pressure)
Right:
multi-layered system distributing load
Minimal, abstract
📊 DATA CALLOUT COMPONENTS
Design minimal institutional-style inserts:
small font
subtle divider line
slightly indented
Do NOT use charts.
Text only.
🎬 INTERACTION DESIGN
smooth scroll
fade-in sections
slight parallax on visuals
NO aggressive animations
Everything should feel:
👉 calm
👉 controlled
👉 inevitable
📱 RESPONSIVE BEHAVIOR
Mobile:
visuals stack vertically
maintain spacing
preserve hierarchy
🏁 FINAL SECTION
Minimal, centered, large spacing:
“A Different Standard”
Large typography
single column
no distractions
🔧 OUTPUT REQUIREMENTS
Clean auto-layout frames
Component-based structure
Named layers for dev handoff
React-friendly spacing (8pt grid)
🔥 VISUAL PROMPT ADD-ONS (FOR FIGMA AI / IMAGE GEN)
Use these if Figma needs separate image prompts:
1. Inverse Waterfall Visual Prompt
“Abstract vertical system showing layered capital flow moving upward, soft gradients, smooth laminar motion, dark financial aesthetic, minimal luxury design, glowing lines, calm top layer representing lifestyle, cinematic lighting, black and deep green tones”
2. Calm Life vs System Prompt
“Split composition, top half calm minimal luxury environment, bottom half abstract dynamic energy system with flowing lines, contrast between stillness and controlled motion, dark modern financial aesthetic”
3. Laminar vs Turbulent Prompt
“Side-by-side abstract flow comparison, left chaotic intersecting lines, right smooth parallel flowing lines, minimal, high-end editorial style, black and neutral tones”
🏛️ FINAL PRODUCT INTENT (THIS IS IMPORTANT)
This should feel like:
“I am not reading a white paper.
I am experiencing a system.”