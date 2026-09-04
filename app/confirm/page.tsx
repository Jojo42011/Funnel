import type { Metadata } from "next";
import ProofSection from "@/components/ProofSection";
import SiteFooter from "@/components/SiteFooter";
import VslPlayer from "@/components/VslPlayer";
import { routes, vsl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Your Call Is Scheduled | Aethon Intelligence",
  description:
    "Your walkthrough call with Aethon Intelligence is booked. Watch the short preparation video and confirm your calendar invitation.",
  // Post-booking page — not meant to be found via search.
  robots: { index: false, follow: false },
};

const confirmSteps = [
  {
    title: "Check your email",
    body: "A confirmation with your call details is on its way to the address you entered when booking.",
  },
  {
    title: "Open the calendar invitation",
    body: "Inside that email you'll find a calendar invitation for the time you selected.",
  },
  {
    title: "Click “Yes” to confirm",
    body: "Accepting the invitation locks the time on both calendars, so the call actually happens.",
  },
];

const prepItems = [
  "Where your leads come from — ads, listings, portals, content, referrals",
  "Roughly how many leads you receive per month",
  "What you spend on advertising or content each month",
  "How new leads are responded to today, and by whom",
  "The CRM and tools your team currently runs on",
  "Your booking and close rates, if you know them — rough numbers are fine",
];

const duringCall = [
  {
    title: "We map your current lead flow",
    body: "From the moment a lead comes in to the moment a conversation is booked — sources, response times, follow-up, qualification, and where things stall.",
  },
  {
    title: "We look for the gap worth fixing",
    body: "Whether meaningful opportunity is being lost between the leads you generate and the conversations you book — and roughly what that's costing.",
  },
  {
    title: "We tell you honestly whether it's a fit",
    body: "If a system built around your operation would move the numbers, we'll show you what it looks like. If it wouldn't, we'll say so and you'll leave with a clearer map of your own process.",
  },
];

export default function ConfirmPage() {
  return (
    <>
      <main>
        {/* 1–2: Headline + supporting sentence */}
        <section
          aria-labelledby="confirm-heading"
          className="mx-auto w-full max-w-4xl px-5 pt-16 text-center sm:px-8 sm:pt-24"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
            You&rsquo;re booked
          </p>
          <h1
            id="confirm-heading"
            className="font-display mx-auto mt-4 max-w-3xl text-[2rem] leading-[1.15] sm:text-[2.75rem] sm:leading-[1.14]"
          >
            Congratulations — your walkthrough call is{" "}
            <em className="text-saffron">scheduled</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Before the call, do two things: watch the short video below, and
            confirm the calendar invitation in your inbox.
          </p>

          {/* 3: Preparation video (~3 min) */}
          <div className="mx-auto mt-10 max-w-3xl">
            <VslPlayer
              video={vsl.confirm}
              posterTitle={
                <>
                  Before your call, <em>watch this</em>
                </>
              }
              posterText="Three minutes on what the walkthrough covers, what to bring, and how we'll decide together whether there's a fit."
            />
          </div>
        </section>

        {/* 4: Calendar confirmation steps */}
        <section
          aria-labelledby="calendar-heading"
          className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20"
        >
          <h2
            id="calendar-heading"
            className="font-display text-center text-2xl sm:text-3xl"
          >
            First: confirm your <em>calendar invitation</em>
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {confirmSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="font-display text-2xl text-saffron">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 5: How to prepare */}
        <section
          aria-labelledby="prepare-heading"
          className="border-y border-line-soft bg-canvas-tint"
        >
          <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <h2
              id="prepare-heading"
              className="font-display text-center text-2xl sm:text-3xl"
            >
              How to prepare — <em>have these handy</em>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-muted">
              The walkthrough is built on your real numbers, not a generic
              pitch. The more of these you can bring, the more useful the call
              will be:
            </p>
            <ul className="mx-auto mt-10 max-w-2xl space-y-3.5">
              {prepItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white px-5 py-4 text-[15px] leading-relaxed text-ink-2"
                >
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
        </section>

        {/* 6: What happens during the call */}
        <section
          aria-labelledby="during-heading"
          className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20"
        >
          <h2
            id="during-heading"
            className="font-display text-center text-2xl sm:text-3xl"
          >
            What happens <em>on the call</em>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {duringCall.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="font-display text-sm text-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7: Proof */}
        <div className="border-t border-line-soft">
          <ProofSection />
        </div>

        {/* 8: Reschedule / contact */}
        <section
          aria-labelledby="reschedule-heading"
          className="border-t border-line-soft bg-canvas-tint"
        >
          <div className="mx-auto w-full max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16">
            <h2
              id="reschedule-heading"
              className="font-display text-2xl sm:text-3xl"
            >
              Need to <em>reschedule?</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-2">
              Life happens. Use the reschedule link in your confirmation email
              to pick a new time — it takes a few seconds and keeps your spot.
              If anything else comes up before the call,{" "}
              <a
                href={routes.contact}
                className="font-medium text-saffron underline-offset-4 hover:underline"
              >
                reach out to us directly
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
