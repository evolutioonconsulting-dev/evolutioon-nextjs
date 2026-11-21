export const site = {
  name: "EvoluTioon Strategic Group",
  legalName: "EvoluTioon Strategic Group Private Limited",
  url: "https://www.evolutioon.com",
  tagline: "Knowledge is our product. Readiness is our promise.",
  description:
    "EvoluTioon Strategic Group is a knowledge firm for organisations that refuse to be surprised by the future. We build the capabilities that turn uncertainty into advantage — anchored in Industry 5.0 standards and governance.",
  email: "evolutioonconsulting@gmail.com",
  phone: "+91 63092 65556",
  location: "India",
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" }
];

export const pillars = [
  {
    n: "01",
    title: "Learning",
    desc: "Capability as infrastructure — continuous, contextual, and strategic."
  },
  {
    n: "02",
    title: "Leadership",
    desc: "Adaptive leaders who can mobilise people through uncertainty."
  },
  {
    n: "03",
    title: "Innovation",
    desc: "Design thinking as our methodology — human-centered insight turned into new value."
  },
  {
    n: "04",
    title: "Strategic Foresight",
    desc: "Structured futures thinking that prepares you for several tomorrows."
  },
  {
    n: "05",
    title: "Human-Centered Transformation",
    desc: "Change that honours people — and therefore endures."
  },
  {
    n: "06",
    title: "Industry Research",
    desc: "Deep dives into policy, markets, and emerging socio-economic patterns — anchored in Industry 5.0 and governance."
  }
];

export type Service = {
  slug: string;
  n: string;
  title: string;
  desc: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "strategic-leadership-development",
    n: "01",
    title: "Strategic Leadership Development",
    desc: "Strategic leadership advisory that shapes decisive leadership behaviours, accelerates future-ready leadership pipelines, and builds executive & C-suite alignment — equipping mid-to-senior executives to lead through complexity.",
    icon: "compass"
  },
  {
    slug: "strategy-market-positioning",
    n: "02",
    title: "Strategy & Market Positioning",
    desc: "Corporate strategy for sustainable advantage — from Blue Ocean strategy and value innovation to sharpening your competitive edge and navigating market complexities with clarity and confidence.",
    icon: "target"
  },
  {
    slug: "startup-growth-strategy",
    n: "03",
    title: "Startup & Growth Strategy",
    desc: "From vision to scalable impact, preparing organisations for uncertainty, understanding emerging trends.",
    icon: "rocket"
  },
  {
    slug: "corporate-learning-programs",
    n: "04",
    title: "Corporate Learning Programs",
    desc: "Customized capability-building solutions aligned to your strategy, culture, and context.",
    icon: "book"
  },
  {
    slug: "facilitation-workshops",
    n: "05",
    title: "Facilitation & Workshops",
    desc: "Interactive, outcome-focused engagements that move groups from dialogue to decision.",
    icon: "users"
  },
  {
    slug: "content-development-knowledge-curation",
    n: "06",
    title: "Content Development & Knowledge Curation",
    desc: "Research-backed learning content, curated knowledge events, and thought leadership focused on Industry 5.0 standards and governance.",
    icon: "feather"
  },
  {
    slug: "academic-institutional-partnerships",
    n: "07",
    title: "Academic & Institutional Partnerships",
    desc: "Knowledge partnerships with universities, think tanks, and institutions — bridging knowledge, policy, and practice.",
    icon: "landmark"
  },
  {
    slug: "organisational-transformation",
    n: "08",
    title: "Organisational Transformation",
    desc: "Supporting cultural and strategic change initiatives from diagnosis through embedded delivery.",
    icon: "refresh"
  },
  {
    slug: "coaching",
    n: "09",
    title: "Leadership & Executive Coaching",
    desc: "Premium coaching frameworks — Executive, C-Suite, CliftonStrengths, High Potential, and Entrepreneur coaching for leaders and founders.",
    icon: "handshake"
  }
];

export const coachingTracks = [
  {
    n: "01",
    title: "Executive Coaching",
    desc: "Designed for mid-to-senior corporate leaders navigating complex organizational dynamics. This framework focuses on sharpening strategic foresight, enhancing emotional intelligence, and mastering high-stakes decision-making to drive sustainable business performance."
  },
  {
    n: "02",
    title: "C-Suite Coaching",
    desc: "Tailored exclusively for board-level executives, CEOs, and managing directors operating under intense market scrutiny. We act as a trusted sounding board to refine enterprise leadership, manage legacy transitions, align multi-stakeholder corporate governance, and navigate macroeconomic shifts."
  },
  {
    n: "03",
    title: "CliftonStrengths-Based Coaching",
    desc: "A data-driven, analytical methodology that unlocks individual and team performance by focusing on innate talents. By transforming raw strengths into mature leadership competencies, this coaching empowers leaders to build high-performance, resilient organizational cultures."
  },
  {
    n: "04",
    title: "High Potential (HiPo) Coaching",
    desc: "Accelerating the development of next-generation leaders and high-performing assets within the organization. This intervention bridges the gap between technical expertise and strategic leadership, ensuring a robust, future-ready internal succession pipeline."
  },
  {
    n: "05",
    title: "Entrepreneur Coaching",
    desc: "Built specifically for founders, promoters, and business owners navigating the scaling journey. Focus areas include shifting from operational management to strategic governance, managing rapid growth pressure, capital allocation strategies, and corporate vision building."
  }
];

export type Article = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
  image: string;
};

export const articles: Article[] = [
  {
    slug: "future-of-work-five-shifts-leaders-cannot-ignore",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    category: "Future of Work",
    readTime: "6 min read",
    title: "The Future of Work: Five Shifts Leaders Cannot Ignore",
    excerpt:
      "Automation, distributed teams, and the skills half-life are rewriting the employment contract. Here is how future-ready organisations are responding.",
    body: [
      "The employment contract of the last century assumed stability: a fixed role, a fixed location, a skill set that aged gracefully. None of those assumptions hold today. Automation is compressing task cycles, distributed teams have made geography optional, and the half-life of a technical skill keeps shrinking.",
      "Leaders who treat this as a temporary disruption to be weathered are misreading the moment. The organisations pulling ahead are the ones re-architecting how work gets structured, evaluated, and rewarded — not bolting new tools onto old assumptions.",
      "Five shifts define this re-architecture: from job descriptions to skills graphs, from annual planning to continuous capability sensing, from location-based management to outcome-based trust, from static learning calendars to embedded, just-in-time development, and from leadership-as-authority to leadership-as-orchestration.",
      "None of these shifts are optional extras. Together they form the operating system future-ready institutions are building now, while the window to build deliberately — rather than react under pressure — is still open."
    ],
    publishedAt: "2026-06-02"
  },
  {
    slug: "adaptive-leadership-leading-when-the-map-runs-out",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    category: "Leadership",
    readTime: "5 min read",
    title: "Adaptive Leadership: Leading When the Map Runs Out",
    excerpt:
      "Complexity demands a different kind of leader — one who mobilises people to confront challenges that have no ready-made answers.",
    body: [
      "Technical problems have known solutions and known experts. Adaptive challenges do not — they require the people experiencing the problem to change their own beliefs, habits, and loyalties. Most leadership training still prepares people for the former.",
      "Adaptive leadership is less about having the answer and more about regulating distress, protecting voices from the margins, and pacing the work of change so an organisation can absorb it without fracturing.",
      "In practice this means leaders spend more time asking sharper questions than issuing clearer instructions, and more time managing the emotional temperature of a room than managing its agenda.",
      "It is an uncomfortable shift for leaders promoted for their command of technical detail. But in a landscape where the map genuinely runs out, it is the only leadership style built for the terrain."
    ],
    publishedAt: "2026-06-10"
  },
  {
    slug: "innovation-as-a-discipline-not-a-department",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    category: "Innovation",
    readTime: "5 min read",
    title: "Innovation as a Discipline, Not a Department",
    excerpt:
      "Why the most innovative organisations treat human-centered problem solving as an enterprise-wide capability rather than a lab.",
    body: [
      "Innovation labs have a mixed track record precisely because they isolate the capability they were meant to spread. When 'innovation' lives in one room, the rest of the organisation quietly outsources the responsibility to think differently.",
      "The firms compounding advantage year over year treat design thinking not as a department but as a discipline — a shared, teachable method for turning human-centered insight into new value, available to any team solving any problem.",
      "That requires investment: structured training, common vocabulary, and permission to prototype badly before building well. It is slower to start than standing up a lab, and faster to scale.",
      "The payoff is an organisation where good ideas do not have to survive a handoff to 'the innovation team' to matter."
    ],
    publishedAt: "2026-06-16"
  },
  {
    slug: "geopolitics-has-entered-the-boardroom",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    category: "Geopolitics",
    readTime: "7 min read",
    title: "Geopolitics Has Entered the Boardroom",
    excerpt:
      "Supply chains, talent flows, and technology standards are now instruments of statecraft. Strategic planning must respond.",
    body: [
      "For a generation, boards treated geopolitics as background noise — relevant to risk committees, not to strategy. That separation no longer holds. Export controls, standards-setting, and talent mobility are now explicit levers of state policy, and they move markets as directly as interest rates.",
      "Supply chain decisions once optimised purely for cost are being re-run through a geopolitical lens. Technology standards are becoming sites of competition between blocs. Talent flows are shaped as much by visa policy as by compensation.",
      "Boards that keep geopolitics siloed in a risk report will keep being surprised by it. The organisations adapting fastest have brought structured geopolitical scenario work into core strategic planning — treating it as a planning input, not an annex.",
      "This is not a call to predict geopolitics. It is a call to build the organisational muscle to notice shifts early and respond with optionality already built in."
    ],
    publishedAt: "2026-06-22"
  },
  {
    slug: "sustainability-is-a-transformation-not-a-report",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    category: "Sustainability",
    readTime: "6 min read",
    title: "Sustainability Is a Transformation, Not a Report",
    excerpt:
      "Compliance-driven sustainability programmes stall the moment the reporting deadline passes. Durable programmes are structured differently.",
    body: [
      "Many sustainability functions were built to answer a question: what do we disclose, and by when? That question produces excellent reports and, too often, unremarkable operational change.",
      "The organisations seeing real transformation treat sustainability as a change programme with its own sponsorship, incentives, and capability-building — not a reporting exercise with a sustainability team attached.",
      "That means embedding sustainability criteria into capital allocation, procurement, and product design decisions, and building the internal fluency for line managers to make those trade-offs without escalating every decision upward.",
      "Reporting still matters. But it should be the record of a transformation already under way, not the whole of the effort."
    ],
    publishedAt: "2026-06-28"
  },
  {
    slug: "emerging-technologies-a-readiness-audit",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    category: "Emerging Technologies",
    readTime: "8 min read",
    title: "Emerging Technologies: A Readiness Audit",
    excerpt:
      "Before adopting the next wave of technology, most institutions need to audit something more fundamental: institutional readiness.",
    body: [
      "New technology adoption tends to fail for organisational reasons long before it fails for technical ones — unclear ownership, absent governance, and a workforce that was never brought along.",
      "A readiness audit asks different questions than a technology roadmap: who owns the decision rights for this capability, what governance exists for its risks, and what capability-building has to happen before rollout, not after.",
      "Industry 5.0 standards are converging on a common answer — technology adoption paired explicitly with human-centred governance, rather than governance retrofitted once something has gone wrong.",
      "Institutions that run this audit first adopt more slowly and more successfully. The ones that skip it adopt fast and re-adopt, more expensively, a year later."
    ],
    publishedAt: "2026-07-03"
  }
];

export type EventItem = {
  slug: string;
  status: "upcoming" | "past";
  category: string;
  title: string;
  desc: string;
  date: string;
  location: string;
};

export const events: EventItem[] = [
  {
    slug: "future-ready-leadership-masterclass",
    status: "upcoming",
    category: "Executive Masterclass",
    title: "Future-Ready Leadership Masterclass",
    desc: "A one-day immersive masterclass for senior leaders on adaptive leadership, decision intelligence, and leading through uncertainty.",
    date: "2026-07-24",
    location: "Hyderabad, India"
  },
  {
    slug: "strategic-foresight-lab-scenarios-for-2035",
    status: "upcoming",
    category: "Foresight Workshop",
    title: "Strategic Foresight Lab: Scenarios for 2035",
    desc: "A hands-on futures thinking lab where participants build and stress-test scenarios for their sector using structured foresight methods.",
    date: "2026-08-14",
    location: "Virtual · Live Online"
  },
  {
    slug: "design-thinking-for-institutional-innovation",
    status: "upcoming",
    category: "Innovation Sprint",
    title: "Design Thinking for Institutional Innovation",
    desc: "A two-day sprint for institutions and government teams applying human-centered design to live policy and service challenges.",
    date: "2026-09-10",
    location: "Bengaluru, India"
  },
  {
    slug: "succession-leadership-in-academia-fdp-cohort",
    status: "past",
    category: "Faculty Development Program",
    title: "Succession Leadership in Academia — FDP Cohort",
    desc: "A faculty development programme building succession-ready leadership pipelines inside academic institutions.",
    date: "2026-03-18",
    location: "India"
  }
];

export const testimonials = [
  {
    quote:
      "Evolutioon's design thinking engagement helped us reframe a policy challenge we had wrestled with for years. Evidence-based, human-centered, outcome-focused.",
    name: "Senior Advisor",
    org: "Government Policy Unit"
  },
  {
    quote:
      "EvoluTioon brought a rare combination of strategic depth and human understanding. Their foresight workshop reshaped how our leadership team thinks about the next decade.",
    name: "Director, Strategy",
    org: "Multinational Technology Firm"
  },
  {
    quote:
      "The executive education programme was among the most impactful learning experiences our senior team has had. Rigorous, practical, and genuinely transformative.",
    name: "Dean, Executive Programs",
    org: "Leading Business School"
  },
  {
    quote:
      "They don't deliver workshops — they build capability. Six months on, we can see measurable shifts in how our teams solve problems and lead change.",
    name: "Chief People Officer",
    org: "National Financial Institution"
  }
];

export const stats = [
  { value: "500+", label: "Professionals Engaged" },
  { value: "50+", label: "Learning Interventions" },
  { value: "12+", label: "Sectors of Experience" },
  { value: "2", label: "National & Global Perspectives" }
];

export const faqs = [
  {
    q: "Who do you work with?",
    a: "Corporates, universities, governments, and founders — any institution serious about preparing for what's next. Engagements range from a single masterclass to multi-year transformation programmes."
  },
  {
    q: "How are engagements structured?",
    a: "Every engagement is scoped to an outcome, staffed by industry practitioners, and measured against it, with a defined capability, certification, and accountability model."
  },
  {
    q: "What makes EvoluTioon different from a training company?",
    a: "We don't staff engagements with generalists. We assemble teams around the problem, matching industry-aligned practitioners to the sector, the stakes, and the standard of execution the work demands."
  },
  {
    q: "Do you work internationally?",
    a: "Yes. We work through knowledge partnerships with globally respected institutions, applied to real operating environments — from manufacturing floors to boardrooms."
  },
  {
    q: "How do we start?",
    a: "Reach out through the contact page or schedule a consultation directly. We'll scope the challenge together before proposing an engagement structure."
  }
];
