const faqs: { question: string; answer: string }[] = [
  {
    question: "Is this a chatbot?",
    answer:
      "No. A chatbot is a widget you bolt onto a website. What we install is a lead-response system built into your actual operation: it works from your lead sources, writes into your CRM, follows your qualification rules, and hands conversations to your team at the moments you define. AI handles the conversational work; the system around it is designed for your business specifically.",
  },
  {
    question: "Is Aethon a marketing agency?",
    answer:
      "No. We don't run ads, produce content, or generate leads. You keep whatever is already creating demand. Our work starts the moment a lead exists — making sure it gets a fast response, consistent follow-up, real qualification, and a clear next step instead of going quiet.",
  },
  {
    question: "Does this replace our team?",
    answer:
      "No. It removes the repetitive work your team shouldn't be doing — first responses at odd hours, fifth follow-ups, chasing incomplete CRM records — so their time goes to actual conversations and closings. Handoff to a human is a designed part of the system, not an afterthought.",
  },
  {
    question: "Will it work with our existing CRM?",
    answer:
      "That's the intent of the build. We design around the tools you already run rather than asking you to switch. During the walkthrough we look at your current CRM and lead sources specifically and tell you what integration would look like before anything is committed.",
  },
  {
    question: "How custom is the implementation?",
    answer:
      "Fully. There is no prebuilt product being resold. We audit how leads actually flow through your operation — sources, team responsibilities, qualification criteria, scheduling, escalation — and build the system around that. Our rule is simple: we don't automate a guess. We map the real process first, prove the workflow, then automate it.",
  },
  {
    question: "What happens when a lead needs a human?",
    answer:
      "The system escalates. You define the moments that require a person — a qualified buyer ready to talk, a pricing question, a sensitive situation — and the conversation routes to the right team member with full context, not a cold transfer.",
  },
  {
    question: "How is success measured?",
    answer:
      "Against your numbers, defined before the build: response times, follow-up completion, qualified conversations, appointments booked, and what your CRM actually captures. We establish the baseline during the audit so improvement is measured, not asserted.",
  },
  {
    question: "How quickly can implementation begin?",
    answer:
      "The walkthrough is the first step. If there's a fit, the audit begins from there, and build timelines are scoped to your operation's complexity — we'll give you a realistic timeline in writing rather than a universal promise.",
  },
  {
    question: "What does the free walkthrough involve?",
    answer:
      "A focused call about your operation: where leads come from, what happens when one arrives, where responses and follow-up currently break down, and what that's likely costing. If there's a meaningful gap, we'll show you what a system built around your workflow would look like. If there isn't, we'll say so.",
  },
  {
    question: "Do you guarantee a specific number of appointments?",
    answer:
      "Not universally, and you should be wary of anyone who does before seeing your operation. We first evaluate your lead volume, sources, workflow, and baseline performance. Any performance commitment is defined around those real inputs, in written terms, for your specific engagement.",
  },
];

/**
 * Accessible FAQ accordion built on native <details>/<summary> — fully
 * keyboard operable with no client-side JavaScript.
 */
export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
        Questions, answered
      </p>
      <h2
        id="faq-heading"
        className="font-display mt-4 text-center text-3xl sm:text-4xl"
      >
        What operators usually <em>want to know</em>
      </h2>

      <div className="mt-12 divide-y divide-line-soft rounded-2xl border border-line bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item group px-6 sm:px-8">
            <summary className="flex items-center justify-between gap-4 py-5 text-left text-base font-medium sm:text-lg">
              {faq.question}
              <span
                aria-hidden="true"
                className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="pb-6 pr-2 text-[15px] leading-relaxed text-ink-2 sm:pr-10">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Exported for the FAQPage structured-data block on the landing page. */
export { faqs };
