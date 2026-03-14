window.DOMAIN_DATA = {
    id: "dce",
    title: "Digital Factory Knowledge Hub",
    navbarTitle: "Digital Factory Knowledge Hub",
    
    tracks: [
        { id: 'strategy', title: 'TRACK 1: STRATEGY', startIndex: 0, endIndex: 6 },
        { id: 'intel', title: 'TRACK 2: INTEL', startIndex: 6, endIndex: 12 },
        { id: 'ai', title: 'TRACK 3: AI ADOPTION', startIndex: 12, endIndex: 17 },
        { id: 'comp', title: 'TRACK 4: COMPETITION', startIndex: 17, endIndex: 22 }
    ],

    dashboard: [
        { icon: '🚀', title: 'The Rookie', desc: 'Start here to understand the Strategy & "Why".', trackId: 'strategy' },
        { icon: '⚔️', title: 'The Deal Closer', desc: 'Jump to competitive battlecards & ROI data.', trackId: 'comp' },
        { icon: '🧙', title: 'The Futurist', desc: 'Master AI adoption and new tech trends.', trackId: 'ai' },
        { icon: '🧠', title: 'The Expert', desc: 'Deep dive into product pillars and Intel.', trackId: 'intel' }
    ],

    modules: [
        // TRACK 1: DCE STRATEGY
        {
            title: "1. Strategic Context",
            desc: "The Burning Platform & Urgency",
            cards: [
                { q: "What is 'Permacrisis'?", a: "A state of persistent instability (War, Energy, Supply) where static processes fail because variables change constantly.", tags: ["Strategy & Mindset", "Market Context"] },
                { q: "Sick Man of Europe Stat", a: "Germany ranks 18th of 21 industrial economies (ZEW). Competitiveness is lost due to a 'Digital Lag'.", tags: ["Market Context", "Strategy & Mindset"] },
                { q: "Shock Digitalization", a: "The argument that incremental pilots are too slow. Radical digital overhaul is needed to prevent de-industrialization.", tags: ["Strategy & Mindset", "Technology"] },
                { q: "The LkSG 'Trojan Horse'", a: "Using Supply Chain Act compliance to force deep-tier visibility, creating the backbone for a DCE.", tags: ["Supply Chain (APS)", "Market Context"] },
                { q: "The Tech Triad", a: "<b>1. IIoT/5G:</b> Nervous System.<br><b>2. Big Data:</b> Brain.<br><b>3. GenAI:</b> Accelerator.", tags: ["Technology", "AI & Future"] }
            ]
        },
        {
            title: "2. Psychology & Culture",
            desc: "Navigating the Mindset Gap",
            cards: [
                { q: "What is 'Angststillstand'?", a: "Fear-induced stagnation. CEOs paralyzed between today's crises and tomorrow's AI.", tags: ["Strategy & Mindset", "Sales Tactics"] },
                { q: "Burger vs. Döner", a: "<b>US (Burger):</b> Start now, fix later (Winning).<br><b>EU (Döner):</b> Plan to end, avoid error (Fear of Losing).", tags: ["Strategy & Mindset", "Market Context"] },
                { q: "The Poet (Archetype)", a: "Reflects on meaning. Needs narrative and context before acting.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "The Thinker (Archetype)", a: "Analyzes risks. Demands 100% accuracy. Prone to paralysis.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "The Doer (Archetype)", a: "Executes immediately. Our goal: Use data to give the 'Thinker' the courage to become a 'Doer'.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "Trust Pyramid", a: "Base: Empathy. Middle: Authority. Top: Partnership.", tags: ["Sales Tactics", "Strategy & Mindset"] }
            ]
        },
        {
            title: "3. Solution Architecture",
            desc: "The DCE Engine",
            cards: [
                { q: "The Great Synergy", a: "<b>Logility:</b> Strategic Eye (Plan).<br><b>Germanedge:</b> Operational Hand (Execute).", tags: ["Technology", "Supply Chain (APS)"] },
                { q: "What is Edge.One?", a: "A PaaS Integration Hub (Unified Production Workplace) connecting ERP, SCADA, and Apps.", tags: ["Technology", "Manufacturing (MES)"] },
                { q: "Pillar 1: Speed", a: "Reducing concept-to-cash cycle. Removing decision latency.", tags: ["ROI & Value", "Strategy & Mindset"] },
                { q: "Pillar 2: Flexibility", a: "Modular consistency. Reconfiguring lines overnight without breaking the system.", tags: ["Technology", "Manufacturing (MES)"] },
                { q: "Pillar 3: Resilience", a: "Absorbing shocks (cyber/supply) via security-by-design and prediction.", tags: ["ROI & Value", "Supply Chain (APS)"] },
                { q: "Pillar 4: Courage", a: "Using predictive certainty to lower the risk threshold for bold decisions.", tags: ["Strategy & Mindset", "ROI & Value"] }
            ]
        },
        {
            title: "4. Sales Playbook",
            desc: "Winning Tactics",
            cards: [
                { q: "Beating SAP", a: "<b>Accountant vs. Engineer.</b> SAP runs the office (Finance). We run the factory (Ops).", tags: ["Competition", "Sales Tactics"] },
                { q: "ZF Lesson: Phase Mismatch", a: "Stop 'Vision Selling' when the customer is in 'Evaluation' mode. Map features to spreadsheets.", tags: ["Sales Tactics"] },
                { q: "Hidden Stakeholder", a: "Create a 5-min video reel for executives who vote but never attend demos.", tags: ["Sales Tactics"] },
                { q: "Customer Intimacy Platform", a: "A portal for existing customers. Use search data to detect upsell signals.", tags: ["Sales Tactics", "Technology"] },
                { q: "Flow Economy Formula", a: "(Speed + Flexibility + Resilience) × Courage = Flow Economy", tags: ["Strategy & Mindset", "ROI & Value"] }
            ]
        },
        {
            title: "5. Technical Roadmap",
            desc: "Implementation Journey",
            cards: [
                { q: "Stage 1: Connectivity", a: "Goal: Visibility. Implement IIoT/5G to see what is happening.", tags: ["Technology", "Manufacturing (MES)"] },
                { q: "Stage 2: Analytics", a: "Goal: Understanding. Aggregate data to know WHY it happened.", tags: ["Technology", "AI & Future"] },
                { q: "Stage 3: Prediction", a: "Goal: Foresight. DCE Core. AI predicts failures before they occur.", tags: ["AI & Future", "ROI & Value"] },
                { q: "Stage 4: Autonomous Flow", a: "Goal: Autonomy. Self-optimizing lines. Human strategy only.", tags: ["AI & Future", "Manufacturing (MES)"] },
                { q: "Cybersecurity", a: "We secure the decision loop. Segregating OT networks from public internet.", tags: ["Technology", "Security"] }
            ]
        },
        {
            title: "6. Brand Identity",
            desc: "Tone of Voice",
            cards: [
                { q: "Brand Promise", a: "In the moment of truth, empowering you to take the right decision.", tags: ["Strategy & Mindset"] },
                { q: "Tone of Voice", a: "The 'Professional Provocateur'. Reliable but challenging the status quo.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "Brand Architecture", a: "'Germanedge is an Aptean company.' Combine German agility with US scale.", tags: ["Strategy & Mindset", "Competition"] },
                { q: "Key Message", a: "'Germany, Stop Whining!' - Move from analysis to action.", tags: ["Sales Tactics", "Strategy & Mindset"] }
            ]
        },
        // TRACK 2: DIGITAL FACTORY INTEL
        {
            title: "7. Portfolio & Factory 0",
            desc: "The Disruptive Offer",
            cards: [
                { q: "The 4 Pillars", a: "1. MES (GEFASOFT)<br>2. Planning (ORSOFT)<br>3. Quality (QDA)<br>4. Worker (New Solutions)", tags: ["Technology", "Manufacturing (MES)"] },
                { q: "Factory 0 Concept", a: "Pre-defined end-to-end processes for immediate value. Zero setup time.", tags: ["Manufacturing (MES)", "ROI & Value"] },
                { q: "Speed USP", a: "Deployment in <b>under 10 minutes</b> vs traditional months.", tags: ["ROI & Value", "Competition"] },
                { q: "App Composer", a: "Low-code capability for 2-week agile enhancement cycles.", tags: ["Technology", "Workforce"] },
                { q: "Target Matrix", a: "<b>Regions:</b> DACH & Nordics.<br><b>Industries:</b> Auto, Pharma, Electronics.", tags: ["Market Context", "Sales Tactics"] }
            ]
        },
        {
            title: "8. MES Landscape",
            desc: "GEFASOFT Domain",
            cards: [
                { q: "Top Incumbents", a: "Siemens, Rockwell, SAP. Strengths: Scale. Weakness: Monolithic/Slow.", tags: ["Competition", "Manufacturing (MES)"] },
                { q: "The Disruptor", a: "<b>Tulip:</b> No-code platform. Wins on agility and ease of use.", tags: ["Competition", "Technology"] },
                { q: "Cloud Trend", a: "Cloud MES growing to $24B by 2031. Driven by multi-site scalability.", tags: ["Market Context", "Technology"] },
                { q: "AI in MES", a: "Predictive Maintenance & Quality are now standard requirements.", tags: ["AI & Future", "Manufacturing (MES)"] },
                { q: "Our Positioning", a: "'End-to-End, Yet Modular'. Integrated platform vs point solutions.", tags: ["Competition", "Strategy & Mindset"] }
            ]
        },
        {
            title: "9. Supply Chain Planning",
            desc: "ORSOFT Domain",
            cards: [
                { q: "The Leaders", a: "Kinaxis, o9 Solutions, Blue Yonder. (Gartner Magic Quadrant).", tags: ["Competition", "Supply Chain (APS)"] },
                { q: "The Unicorn", a: "<b>o9 Solutions:</b> The 'Digital Brain'. Growing fast via Graph tech.", tags: ["Competition", "AI & Future"] },
                { q: "AI Forecasting", a: "Demand sensing using external data (weather, trends) vs historic data.", tags: ["AI & Future", "Supply Chain (APS)"] },
                { q: "Integration Edge", a: "ORSOFT's deep certification inside SAP. No separate data silo needed.", tags: ["Competition", "Technology"] },
                { q: "Startup Agility", a: "New players (Relex, Pigment) win on speed (Weeks vs Months implementation).", tags: ["Competition", "ROI & Value"] }
            ]
        },
        {
            title: "10. Quality & LIMS",
            desc: "QDA Domain",
            cards: [
                { q: "The Old Guard", a: "ETQ, MasterControl, TrackWise. Reliable but heavy/expensive.", tags: ["Competition", "Quality (QMS)"] },
                { q: "Predictive Quality", a: "The shift from 'inspecting defects out' to 'predicting them away' with AI.", tags: ["Quality (QMS)", "AI & Future"] },
                { q: "Phantom of Heilbronn", a: "Story hook: High cost of lab failure (DNA contamination case).", tags: ["Story", "Quality (QMS)"] },
                { q: "LIMS Disruptors", a: "Benchling & Labguru. Modern, R&D focused, cloud-native.", tags: ["Competition", "Quality (QMS)"] },
                { q: "Regulatory Drivers", a: "EU MDR & FDA 21 CFR Part 11 are major sales catalysts.", tags: ["Market Context", "Quality (QMS)"] }
            ]
        },
        {
            title: "11. Connected Worker",
            desc: "New Solutions Domain",
            cards: [
                { q: "EAM Market Leader", a: "IFS (#1 Market Share). Focus on Asset Lifecycle.", tags: ["Competition", "Workforce"] },
                { q: "Consumer-App Threat", a: "MaintainX & UpKeep. Winning because workers actually like the UX.", tags: ["Competition", "Workforce"] },
                { q: "Demographic Gap", a: "Capturing tribal knowledge from retiring workers for the next gen.", tags: ["Workforce", "Market Context"] },
                { q: "The Integrated USP", a: "A checklist app fails without MES integration. We connect the worker to the machine.", tags: ["Workforce", "Technology"] },
                { q: "ROI Logic", a: "Reducing shift handover times by 50%.", tags: ["ROI & Value", "Workforce"] }
            ]
        },
        {
            title: "12. Strategy & OKRs",
            desc: "Execution Targets",
            cards: [
                { q: "Enterprise Strategy", a: "Sell Scalability, Security, and 'Transformation Partner' status.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "Mid-Market Strategy", a: "Sell 'Turnkey Cloud', Low TCO, and Quick Wins.", tags: ["Sales Tactics", "ROI & Value"] },
                { q: "Trojan Horse", a: "Use LkSG (Supply Chain Act) compliance to sell the platform.", tags: ["Sales Tactics", "Market Context"] },
                { q: "Objective: DACH", a: "Win 5 new enterprise customers in target sectors by 2025.", tags: ["Sales Tactics", "Market Context"] },
                { q: "Objective: Innovation", a: "Release 4 new AI-powered features by 2025.", tags: ["AI & Future", "Technology"] }
            ]
        },
        // TRACK 3: AI ADOPTION
        {
            title: "13. The Centaur Mindset",
            desc: "Human-Centric AI & Symbiosis",
            cards: [
                { q: "What is the 'Centaur Model' in AI?", a: "A hybrid collaboration model where humans (Strategic Direction/Creativity) and AI (Data Processing/Speed) combine strengths to outperform either alone.", tags: ["AI & Future", "Strategy & Mindset"] },
                { q: "\"AI relieves you from work, not from...\"", a: "<b>\"...Thinking.\"</b> The human remains the \"Pilot\" responsible for critical judgment, context, and final quality control.", tags: ["AI & Future", "Workforce"] },
                { q: "What is 'AI Triangulation'?", a: "Using multiple different AI models (e.g., ChatGPT + Claude + Perplexity) to compare perspectives and validate results, like a board of advisors.", tags: ["AI & Future", "Technology"] },
                { q: "The Core Human Role in the Centaur Model", a: "<b>Quality Control & Direction.</b> The human must set the context (Prompting) and rigorously evaluate the AI's output (Editing).", tags: ["AI & Future", "Workforce"] },
                { q: "Iterative Workflow Principle", a: "The best results come from a \"Ping-Pong\" dialogue: Human Draft -> AI Critique -> Human Refinement -> AI Polish.", tags: ["AI & Future", "Workforce"] },
                { q: "Why is 'Prompt Engineering' a social skill?", a: "Because it requires empathy and clear communication context, similar to onboarding a highly intelligent but literal-minded human intern.", tags: ["AI & Future", "Workforce"] }
            ]
        },
        {
            title: "14. AI as a Social Partner",
            desc: "Overcoming Social Friction",
            cards: [
                { q: "The \"Invisible Assistant\" Ideal", a: "AI should function like a \"Digital Shadow\" or \"Prompter in a Theater\"—always present and helpful, but never dominating the stage.", tags: ["AI & Future", "Workforce"] },
                { q: "\"Human-in-Control\" Principle", a: "The psychological necessity that humans must always feel they can intervene and steer the AI, reducing stress and rejection.", tags: ["AI & Future", "Psychology"] },
                { q: "The \"Polarity Map\" of Team AI", a: "Teams must balance two poles: **Efficiency/Control** (AI Automation) vs. **Exploration/Learning** (Human Creativity). Both are needed.", tags: ["AI & Future", "Strategy & Mindset"] },
                { q: "Neuroscience of AI Adoption", a: "\"Visible\" automation can trigger threat responses (Cortisol). \"Invisible/Supportive\" automation triggers trust (Oxytocin).", tags: ["AI & Future", "Psychology"] },
                { q: "Artificial Colleagues vs. Tools", a: "Moving from viewing AI as a \"Calculator\" to viewing it as a \"Team Member\" (e.g., An Artificial Expert for Quality or an Artificial Challenger for Strategy).", tags: ["AI & Future", "Strategy & Mindset"] },
                { q: "The Cultural Catalyst Effect", a: "AI forces teams to ask \"Who are we?\" and \"What is our purpose?\", acting as a mirror that accelerates cultural transformation.", tags: ["AI & Future", "Strategy & Mindset"] }
            ]
        },
        {
            title: "15. Leadership in the Age of Speed",
            desc: "Dromology & Resonance",
            cards: [
                { q: "What is 'Dromology'?", a: "The study of speed (derived from *dromos*). It posits that speed is the primary engine of modern power and societal change.", tags: ["Strategy & Mindset", "Market Context"] },
                { q: "The Danger of \"Rasender Stillstand\"", a: "<b>\"Frenzied Standstill.\"</b> A state where high-speed activity (Frantic AI loops) leads to a loss of meaning and no actual progress.", tags: ["Strategy & Mindset", "Psychology"] },
                { q: "What are \"Resonance Spaces\" (Resonanzräume)?", a: "Deliberate pauses or \"slow zones\" created by leaders to allow teams to digest information and reflect, counteracting the speed of AI.", tags: ["Strategy & Mindset", "Leadership"] },
                { q: "The Paradox of Acceleration", a: "As AI accelerates information flow, the *time* available for human decision-making shrinks, increasing the risk of \"Decision Paralysis.\"", tags: ["Strategy & Mindset", "AI & Future"] },
                { q: "The \"Sprint & Pause\" Rhythm", a: "A leadership strategy: Alternate between high-speed AI execution sprints and slow, human-centric reflection phases.", tags: ["Strategy & Mindset", "Leadership"] },
                { q: "Speed as a Power Factor", a: "In a Dromological organization, power belongs to those who control the *tempo* of information, not just the content.", tags: ["Strategy & Mindset", "Market Context"] }
            ]
        },
        {
            title: "16. Strategic Execution",
            desc: "Culture, Governance & KPIs",
            cards: [
                { q: "The \"Scaling Gap\" Statistic", a: "74% of companies fail to scale AI beyond the pilot phase. The barrier is rarely technology, but **Culture and Governance**.", tags: ["Strategy & Mindset", "AI & Future"] },
                { q: "Leadership Formula for AI", a: "<b>Leadership = Technology × Culture.</b> You cannot buy adoption; you must cultivate the social acceptance of the tool.", tags: ["Strategy & Mindset", "Leadership"] },
                { q: "The \"Early vs. Late\" Risk", a: "Investing too early is expensive (learning curve). Investing too late is dangerous (market irrelevance). The sweet spot is \"Strategic Exploration.\"", tags: ["Strategy & Mindset", "ROI & Value"] },
                { q: "Types of AI Integration", a: "1. **Embedded:** Invisible (e.g., Spam filter). 2. **Copilot:** Collaborative (e.g., Coding assistant). 3. **Agent:** Autonomous (e.g., Auto-booking).", tags: ["AI & Future", "Technology"] },
                { q: "The \"Social Competence\" Bias", a: "The risk that employees using AI are perceived as \"lazy\" or \"less competent.\" Leaders must reframe AI usage as \"Smart Leverage.\"", tags: ["Psychology", "Workforce"] },
                { q: "Strategic KPI for AI", a: "Don't just measure \"Time Saved.\" Measure \"Quality Gained\" and \"Employee Satisfaction\" (Trust in the tool).", tags: ["ROI & Value", "AI & Future"] }
            ]
        },
        {
            title: "17. Social Interaction",
            desc: "Defining AI Roles",
            cards: [
                { q: "AI Role: Experts", a: "AI acting as a deep-domain specialist (e.g., Legal, Code, Medicine) available on demand to answer complex queries.", tags: ["AI & Future", "Workforce"] },
                { q: "AI Role: Colleagues", a: "AI working alongside humans on daily tasks (\"Co-Pilot\"), handling the repetitive load while the human guides the workflow.", tags: ["AI & Future", "Workforce"] },
                { q: "AI Role: Decision Makers", a: "AI taking over specific autonomous decisions based on data thresholds (e.g., automated stock reordering), freeing humans for strategic choices.", tags: ["AI & Future", "Automation"] },
                { q: "AI Role: Discussion Partners", a: "AI acting as a \"Sparring Partner\" or \"Devil's Advocate\" to challenge human assumptions and refine ideas through dialogue.", tags: ["AI & Future", "Workforce"] }
            ]
        },
        // TRACK 4: COMPETITIVE MASTERY
        {
            title: "18. The Factory 0 Disruption",
            desc: "Tech Advantage & Speed",
            cards: [
                { q: "What is the 'Factory 0' Concept?", a: "Pre-defined end-to-end processes allowing immediate value and zero setup time. A 'Factory in a Box' approach.", tags: ["Manufacturing (MES)", "Technology"] },
                { q: "The '10-Minute' Promise", a: "The ability to deploy a digital factory module in minutes, not months. A bold claim that proves true agility against legacy MES.", tags: ["ROI & Value", "Technology"] },
                { q: "The Enabler: App Composer", a: "Low-code capability allowing customers to enhance processes in 2-week Scrum cycles without heavy IT dependency.", tags: ["Technology", "Workforce"] },
                { q: "Target Audience Positioning", a: "<b>Mid-Market:</b> Needs 'Turnkey' solutions.<br><b>Enterprise:</b> Needs 'Agility' to pivot fast.", tags: ["Sales Tactics", "Market Context"] },
                { q: "The Competitive Wedge", a: "We beat Legacy on <b>Speed</b> (minutes vs months). We beat Startups on <b>Completeness</b> (full suite vs apps).", tags: ["Competition", "Strategy & Mindset"] },
                { q: "The Market Trend", a: "Cloud MES is skyrocketing. The market is projected to reach <b>$24 Billion by 2031</b>.", tags: ["Market Context", "Manufacturing (MES)"] }
            ]
        },
        {
            title: "19. Battling the Giants",
            desc: "Enterprise Strategy (SAP/Siemens)",
            cards: [
                { q: "The Opponents", a: "<b>Siemens, Rockwell, SAP.</b> Strengths: Brand & Scale. Weaknesses: Monolithic, slow, and 'Aging Architectures'.", tags: ["Competition", "Market Context"] },
                { q: "The 'Silo' Argument", a: "Buying point solutions creates data silos. We offer a unified spine (Edge.One) versus fragmented tools.", tags: ["Sales Tactics", "Technology"] },
                { q: "The Integration Advantage", a: "<b>Data Convergence.</b> A quality issue in QDA automatically adjusts the schedule in ORSOFT—a seamless loop.", tags: ["Technology", "Supply Chain (APS)"] },
                { q: "Countering the 'Suite' Pitch", a: "Big vendors offer suites but they are cobbled together acquisitions. Edge.One is 'End-to-End, Yet Modular'.", tags: ["Sales Tactics", "Competition"] },
                { q: "The 'Risk' Neutralizer", a: "Leverage <b>Aptean's global backing</b> + ISO 27001 compliance. We have the stability of a giant with the speed of a startup.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "Winning on Agility", a: "Enterprises are stuck with static systems. Our 2-week innovation cycles mean they are never obsolete.", tags: ["ROI & Value", "Technology"] }
            ]
        },
        {
            title: "20. Crushing the Startups",
            desc: "Mid-Market Strategy (Tulip/MaintainX)",
            cards: [
                { q: "The Opponents", a: "<b>Tulip, MaintainX, o9.</b> Strengths: Modern UI & Speed. Weaknesses: Lack of breadth & long-term stability.", tags: ["Competition", "Startups"] },
                { q: "The 'App Fatigue' Trap", a: "Startups offer fragmented tools (just checklists, just planning). We offer a platform that grows with you.", tags: ["Sales Tactics", "Technology"] },
                { q: "The 'Risk' Argument", a: "Startups are 'Here today, gone tomorrow.' Germanedge offers modern SaaS tech backed by decades of domain stability.", tags: ["Sales Tactics", "Strategy & Mindset"] },
                { q: "The Pricing Strategy", a: "<b>GermanedgeNOW.</b> A SaaS/Marketplace model that lowers upfront costs, making us accessible to the 'Mittelstand'.", tags: ["Sales Tactics", "ROI & Value"] },
                { q: "Domain Expertise Difference", a: "Startups have cool tech but shallow logic. We have deep manufacturing logic (GEFASOFT/ORSOFT) wrapped in new tech.", tags: ["Competition", "Manufacturing (MES)"] },
                { q: "The Mid-Market Pitch", a: "\"Enterprise Power at Mid-Market Cost.\" You don't need to be BMW to run a BMW-grade system.", tags: ["Sales Tactics", "Strategy & Mindset"] }
            ]
        },
        {
            title: "21. ROI & Financial Selling",
            desc: "The CFO Pitch & Metrics",
            cards: [
                { q: "The Strategy Pivot", a: "Stop selling features. Start selling <b>Outcomes</b>. Moving from 'Technical Feasibility' to 'Financial Transparency'.", tags: ["Sales Tactics", "ROI & Value"] },
                { q: "Key Metric: Payback Period", a: "Target ROI in <b>< 1.5 Years</b> (vs industry avg 2.5 years for legacy MES projects).", tags: ["ROI & Value", "Manufacturing (MES)"] },
                { q: "Key Metric: Inventory", a: "Our APS can cut inventory holding costs by <b>15%</b>, freeing millions in working capital.", tags: ["ROI & Value", "Supply Chain (APS)"] },
                { q: "Key Metric: Throughput", a: "Mid-sized plants increased throughput by <b>5-10%</b> without buying new machines, just by optimizing flow.", tags: ["ROI & Value", "Manufacturing (MES)"] },
                { q: "Key Metric: Efficiency", a: "Reducing shift handover times by <b>50%</b> using the Digital Shift Book (New Solutions).", tags: ["ROI & Value", "Workforce"] },
                { q: "Key Metric: OEE", a: "LNS Research data shows Digital Lean tools drive <b>10-20%</b> improvement in OEE (Overall Equipment Effectiveness).", tags: ["ROI & Value", "Manufacturing (MES)"] }
            ]
        },
        {
            title: "22. Sales Narratives",
            desc: "Storytelling for Sales",
            cards: [
                { q: "The 'Phantom of Heilbronn'", a: "<i>The Quality Story.</i> A police hunt for a serial killer turned out to be contaminated cotton swabs. <b>Lesson: Quality data integrity is everything.</b>", tags: ["Story", "Quality (QMS)"] },
                { q: "The '10-Minute Factory'", a: "<i>The Speed Story.</i> Imagine setting up a full digital factory before you finish your coffee. That is the new standard we set.", tags: ["Story", "Manufacturing (MES)"] },
                { q: "The 'Safe Bet' Trap", a: "<i>The Innovation Story.</i> \"Nobody gets fired for buying Siemens\"... until the factory closes because it couldn't adapt fast enough.", tags: ["Story", "Competition"] },
                { q: "The 'Excel House of Cards'", a: "<i>The Planning Story.</i> One wrong formula in a spreadsheet can cost millions in stockouts. Why run a €50M plant on a €100 tool?", tags: ["Story", "Supply Chain (APS)"] },
                { q: "The 'Silo Detective'", a: "<i>The Integration Story.</i> Maintenance blames Production. Production blames Planning. Why? Because they look at different data.", tags: ["Story", "Technology"] },
                { q: "The 'Centaur' Future", a: "<i>The AI Story.</i> AI doesn't replace the worker; it gives them superpowers. Be the Pilot, not the Passenger.", tags: ["Story", "AI & Future"] }
            ]
        }
    ],
    
    quizzes: {
        'strategy': {
            questions: [
                { q: "What is 'Permacrisis'?", answers: ["A temporary recession", "A state of persistent instability", "A software bug"], correct: 1 },
                { q: "What is the primary psychological barrier for German CEOs?", answers: ["Arrogance", "Angststillstand (Fear-induced stagnation)", "Lack of budget"], correct: 1 },
                { q: "What is the key differentiator of Edge.One?", answers: ["It is the cheapest option", "It connects ERP, SCADA, and Apps (PaaS)", "It is only for automotive"], correct: 1 }
            ]
        },
        'intel': {
            questions: [
                { q: "What is the 'Factory 0' concept?", answers: ["A factory with no workers", "Pre-defined end-to-end processes for zero setup time", "A factory with zero emissions"], correct: 1 },
                { q: "Who is the main disruptor in the MES space?", answers: ["SAP", "Tulip", "Oracle"], correct: 1 },
                { q: "What is the ROI logic for the Connected Worker?", answers: ["Reducing shift handover times by 50%", "Replacing all workers with robots", "Cheaper coffee in the breakroom"], correct: 0 }
            ]
        },
        'ai': {
            questions: [
                { q: "What is the 'Centaur Model'?", answers: ["AI replacing humans", "Human creativity + AI speed working together", "A mythical creature strategy"], correct: 1 },
                { q: "What is 'Dromology'?", answers: ["The study of drones", "The study of speed as power", "A new coding language"], correct: 1 },
                { q: "What is the core human role in the AI era?", answers: ["Data entry", "Quality Control & Direction", "Coffee fetching"], correct: 1 }
            ]
        },
        'comp': {
            questions: [
                { q: "How fast can the Digital Factory be deployed?", answers: ["6 Months", "10 Minutes", "2 Weeks"], correct: 1 },
                { q: "What is the key weakness of legacy giants like SAP?", answers: ["Too expensive", "Monolithic architectures & slow speed", "Lack of brand awareness"], correct: 1 },
                { q: "What is the target ROI payback period?", answers: ["5 Years", "< 1.5 Years", "10 Years"], correct: 1 }
            ]
        }
    }
};
