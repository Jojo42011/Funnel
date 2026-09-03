import CalBooking from "@/components/CalBooking";
import CtaButton from "@/components/CtaButton";
import FaqSection, { faqs } from "@/components/FaqSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import VslPlayer from "@/components/VslPlayer";
import { site } from "@/lib/config";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BuiltAroundSection />
        <ProofSection />
        <FitSection />
        <FaqSection />
        <BookSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 text-center sm:px-8 sm:pt-20"
    >
      <p className="mx-auto inline-block rounded-full border border-line bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 sm:text-xs">
        For Texas brokerages &amp; real-estate operators already generating
        inbound leads
      </p>

      <h1
        id="hero-heading"
        className="font-display mx-auto mt-7 max-w-4xl text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.12] lg:text-[3.4rem]"
      >
        We install a custom AI lead-response system that turns the leads
        you&rsquo;re already paying for into{" "}
        <em className="text-saffron">booked conversations</em>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Built around your existing ads, CRM, and sales process — so new
        inquiries get a fast response, consistent follow-up, real
        qualification, and a clear next step. Without buying more leads.
      </p>

      <div className="mx-auto mt-10 max-w-3xl">
        <VslPlayer />
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <CtaButton>Book a Free Walkthrough</CtaButton>
        <p className="text-sm text-faint">
          A short call to map your current lead flow. If the fit isn&rsquo;t
          there, we&rsquo;ll tell you.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Problem                                                             */
/* ------------------------------------------------------------------ */

const leakSteps = [
  {
    title: "A lead raises their hand",
    body: "Your ads, listings, or content are working. Someone fills out a form, calls in, or replies — a real person, interested, right now.",
  },
  {
    title: "The response comes late",
    body: "Your team is at a showing, on a call, or it's 9pm on a Saturday. Hours pass before anyone replies — and interest cools by the minute.",
  },
  {
    title: "Follow-up fades out",
    body: "One or two touches, then the lead sits in the CRM — half-qualified, notes incomplete, nobody's clear responsibility.",
  },
  {
    title: "Someone else gets the conversation",
    body: "The prospect moves on to whoever answered first. So the budget goes up — more spend to generate demand that's leaking at the same point.",
  },
];

function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-y border-line-soft bg-canvas-tint"
    >
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
          The expensive part
        </p>
        <h2
          id="problem-heading"
          className="font-display mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl"
        >
          You&rsquo;re paying to generate demand. The leak is in what happens{" "}
          <em>after someone raises their hand.</em>
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {leakSteps.map((step, i) => (
            <div key={step.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className="font-display mt-0.5 text-2xl text-saffron"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-display mt-14 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          More ad spend doesn&rsquo;t fix that.{" "}
          <em>Handling the demand you already have does.</em>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Solution: three pillars                                             */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    name: "Respond",
    body: "Every new inquiry gets timely, context-aware outreach — written the way your team would write it, at the speed your team can't always match. Nights and weekends included.",
  },
  {
    name: "Qualify",
    body: "The system carries the conversation forward and reads intent against your actual criteria — budget, timeline, area, motivation — not a generic script.",
  },
  {
    name: "Coordinate",
    body: "Qualified opportunities move to a real next step: logged in your CRM, scheduled on your calendar, or handed to the right team member with full context.",
  },
];

function SolutionSection() {
  return (
    <section
      aria-labelledby="solution-heading"
      className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
        What we install
      </p>
      <h2
        id="solution-heading"
        className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl leading-tight sm:text-4xl"
      >
        One system, doing the three things that{" "}
        <em>turn a lead into a conversation</em>
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.name}
            className="rounded-2xl border border-line bg-white p-8"
          >
            <span className="font-display text-sm text-faint">
              0{i + 1}
            </span>
            <h3 className="font-display mt-3 text-2xl">
              <em>{pillar.name}</em>
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted">
        You&rsquo;ll see exactly what it does and why — the outcome is the
        point, not the plumbing.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Built around your operation                                         */
/* ------------------------------------------------------------------ */

const operationInputs = [
  "Your lead sources",
  "Your current CRM",
  "Team responsibilities",
  "Qualification criteria",
  "Your messaging style",
  "Scheduling & calendars",
  "Escalation rules",
  "Reporting",
  "Human handoff",
];

const sequence = [
  {
    step: "Audit",
    body: "We map how leads actually move through your operation today — sources, tools, responsibilities, where responses stall, and what it's costing.",
  },
  {
    step: "Build",
    body: "We build the system around that reality and validate it against live lead flow — proving the workflow before trusting it, never automating a guess.",
  },
  {
    step: "Hand over",
    body: "Your team runs it with clear visibility into every conversation and every handoff. It's your system, in your operation — not a subscription to a black box.",
  },
];

function BuiltAroundSection() {
  return (
    <section
      aria-labelledby="built-heading"
      className="border-y border-line-soft bg-canvas-tint"
    >
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
              Not a template
            </p>
            <h2
              id="built-heading"
              className="font-display mt-4 text-3xl leading-tight sm:text-4xl"
            >
              We don&rsquo;t hand you a bot.{" "}
              <em>We build around how you already work.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-2">
              Aethon is an AI implementation consultancy, not a software
              vendor. Nothing here is a prebuilt product with your logo on it —
              the system is designed around the specifics of your operation:
            </p>
            <ul className="mt-6 grid max-w-xl grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {operationInputs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink-2"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {sequence.map((item, i) => (
              <div
                key={item.step}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <p className="font-display text-xl">
                  <span className="mr-3 text-sm text-faint">0{i + 1}</span>
                  <em>{item.step}</em>
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Proof                                                               */
/* ------------------------------------------------------------------ */

const leadSmartStats = [
  { value: "$576,270", label: "Paid out monthly through the platform we built" },
  { value: "76,935", label: "Calls screened for fraud, from zero screening" },
  { value: "$31,040", label: "Recovered in one verified reconciliation run" },
  { value: "55–85 hrs", label: "Of manual work removed every month" },
];

function ProofSection() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
        Documented work
      </p>
      <h2
        id="proof-heading"
        className="font-display mx-auto mt-4 max-w-3xl text-center text-3xl leading-tight sm:text-4xl"
      >
        We build production systems that run{" "}
        <em>real, high-volume operations</em>
      </h2>

      {/* Lead Smart */}
      <article className="mt-14 overflow-hidden rounded-2xl border border-line bg-white">
        <div className="border-b border-line-soft px-7 py-6 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
            Case study · Lead Smart — pay-per-call performance marketing
          </p>
          <h3 className="font-display mt-2 text-2xl sm:text-3xl">
            Five production systems for an operation handling{" "}
            <em>~3,000 inbound calls a day</em>
          </h3>
        </div>
        <div className="grid gap-px bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
          {leadSmartStats.map((stat) => (
            <div key={stat.label} className="bg-white px-7 py-7">
              <p className="font-display text-3xl text-saffron">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-line-soft px-7 py-6 sm:px-10">
          <p className="text-[15px] leading-relaxed text-ink-2">
            Payments across 1,124 affiliates in 11 currencies, fraud detection,
            buyer reconciliation, dispute automation, and an internal AI
            assistant — designed, built, and deployed in roughly six weeks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Shown to demonstrate how Aethon builds and operates complex
            business systems tied to measurable outcomes. This engagement was
            for a performance-marketing company — it is not a real-estate
            lead-response result.
          </p>
        </div>
      </article>

      {/* Aquatic Pools */}
      <article className="mt-6 rounded-2xl border border-line bg-white px-7 py-7 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
          Case study · Aquatic Pools — custom pool design-build, Arizona
        </p>
        <h3 className="font-display mt-2 text-xl sm:text-2xl">
          Four roles an owner would hire for, <em>run by one platform</em>
        </h3>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-2">
          Autonomous local SEO with 30 indexed pages across 15 cities, content
          and social operations, 24/7 inbound and outbound phone coverage that
          qualifies and routes every call, and chief-of-staff support for the
          owner — so after-hours inquiries stopped going to voicemail.
        </p>
      </article>

      <p className="mt-8 text-center text-sm text-muted">
        Full write-ups, with the numbers in context:{" "}
        <a
          href={site.caseStudies}
          className="font-medium text-saffron underline-offset-4 hover:underline"
        >
          aethonintelligence.com/case-studies
        </a>
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Who this is for                                                     */
/* ------------------------------------------------------------------ */

const goodFit = [
  "Texas brokerages and real-estate operators",
  "Already generating inbound leads from ads, listings, or content",
  "Enough lead volume that response and follow-up materially matter",
  "Willing to share access and context so we can map the real workflow",
  "Want a custom implementation tied to a measurable business outcome",
];

const notFit = [
  "Looking for a generic chatbot or an off-the-shelf tool",
  "Not currently generating inbound opportunities",
  "Expecting results without any operational participation",
  "Wanting mass lead generation with no internal sales process",
  "Unwilling to define what a qualified lead means for the business",
];

function FitSection() {
  return (
    <section
      aria-labelledby="fit-heading"
      className="border-y border-line-soft bg-canvas-tint"
    >
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <h2
          id="fit-heading"
          className="font-display mx-auto max-w-2xl text-center text-3xl leading-tight sm:text-4xl"
        >
          This works best for a <em>specific kind of operation</em>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-saffron">
              A strong fit
            </h3>
            <ul className="mt-5 space-y-3.5">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-2">
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0 text-saffron"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white/60 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">
              Probably not a fit
            </h3>
            <ul className="mt-5 space-y-3.5">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="mt-1 shrink-0 text-faint"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA + booking                                                 */
/* ------------------------------------------------------------------ */

function BookSection() {
  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="scroll-mt-20 bg-canvas-deep"
    >
      <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          The next step
        </p>
        <h2
          id="book-heading"
          className="font-display mx-auto mt-4 max-w-2xl text-center text-3xl leading-tight text-cream sm:text-4xl"
        >
          You&rsquo;ve already paid for the demand.{" "}
          <em className="text-gold">Now capture more of it.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-cream/70 sm:text-base">
          The walkthrough is a working session, not a pitch: we map how leads
          flow through your operation today, find where response and follow-up
          break down, and determine together whether there&rsquo;s a gap worth
          fixing. If there isn&rsquo;t, you&rsquo;ll leave knowing that too.
        </p>

        <div className="mt-12">
          <CalBooking />
        </div>
      </div>
    </section>
  );
}
