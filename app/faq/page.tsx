import type { Metadata } from "next";
import FaqSection, { faqs } from "@/components/FaqSection";
import ProofSection from "@/components/ProofSection";
import SiteFooter from "@/components/SiteFooter";
import VslPlayer from "@/components/VslPlayer";
import { vsl } from "@/lib/config";

export const metadata: Metadata = {
  title: "How the System Works — Questions Answered | Aethon Intelligence",
  description:
    "How Aethon's custom AI lead-response system works, how it's built around your operation, the proof behind it, and answers to the questions operators ask most.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const processSteps = [
  {
    step: "Audit",
    body: "We map how leads actually move through your operation today — sources, tools, responsibilities, where responses stall, and what it's costing. We don't automate a guess: the real process comes first.",
  },
  {
    step: "Build",
    body: "We build the system around that reality — your CRM, your qualification criteria, your messaging style, your escalation rules — and validate it against live lead flow before trusting it.",
  },
  {
    step: "Hand over",
    body: "Your team runs it with clear visibility into every conversation and every handoff. Humans stay in the loop wherever you decide a person should take over.",
  },
];

const secondCallPrep = [
  "Watch the video above in full — it answers most of the questions that would otherwise take up call time",
  "Review the proof and case studies above, and note anything you want to challenge or dig into",
  "Skim the FAQ answers and bring the questions that are still open for your operation",
  "Loop in anyone else involved in the decision, so they can watch this page before the call too",
];

export default function FaqPage() {
  return (
    <>
      <main>
        {/* 1: Headline restating the outcome */}
        <section
          aria-labelledby="faq-hero-heading"
          className="mx-auto w-full max-w-4xl px-5 pt-16 text-center sm:px-8 sm:pt-24"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
            Before your next call
          </p>
          <h1
            id="faq-hero-heading"
            className="font-display mx-auto mt-4 max-w-3xl text-[2rem] leading-[1.15] sm:text-[2.75rem] sm:leading-[1.14]"
          >
            More of the leads you already generate, turned into{" "}
            <em className="text-saffron">booked conversations</em> — here&rsquo;s
            exactly how
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Watch this before your next call. It covers what Aethon actually
            builds, how the system fits around your existing workflow, where
            humans stay involved, and how results are measured.
          </p>

          {/* 2: Pre-conversion video */}
          <div className="mx-auto mt-10 max-w-3xl">
            <VslPlayer
              video={vsl.faq}
              posterTitle={
                <>
                  What we build, and <em>how it fits your operation</em>
                </>
              }
              posterText="Not a chatbot, not a marketing agency — how a custom lead-response system works around your CRM, your team, and your rules."
            />
          </div>
        </section>

        {/* 3: Process explanation */}
        <section
          aria-labelledby="process-heading"
          className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24"
        >
          <h2
            id="process-heading"
            className="font-display mx-auto max-w-3xl text-center text-2xl leading-tight sm:text-3xl"
          >
            The process: <em>Audit → Build → Hand over</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-muted">
            Aethon is an AI implementation consultancy. Nothing here is a
            prebuilt product with your logo on it — the system is designed
            around how your operation already works, and discovery sometimes
            reveals that the biggest opportunity is broader than lead response
            alone.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((item, i) => (
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
        </section>

        {/* 4–5: Proof and case studies directly underneath */}
        <div className="border-y border-line-soft bg-canvas-tint">
          <ProofSection />
        </div>

        {/* 6: FAQ / objection handling */}
        <FaqSection />

        {/* 7: Second-call preparation */}
        <section
          aria-labelledby="prep-heading"
          className="border-t border-line-soft bg-canvas-tint"
        >
          <div className="mx-auto w-full max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
            <h2
              id="prep-heading"
              className="font-display text-2xl sm:text-3xl"
            >
              Before your <em>next call</em>
            </h2>
            <ol className="mx-auto mt-8 max-w-2xl space-y-3.5 text-left">
              {secondCallPrep.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-line bg-white px-5 py-4 text-[15px] leading-relaxed text-ink-2"
                >
                  <span className="font-display mt-0.5 text-lg text-saffron">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted">
              Your next call is already on the calendar — there&rsquo;s nothing
              to book here. Come with your open questions and we&rsquo;ll work
              through them together.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
