import { site } from "@/lib/config";

const leadSmartStats = [
  { value: "$576,270", label: "Paid out monthly through the platform we built" },
  { value: "76,935", label: "Calls screened for fraud, from zero screening" },
  { value: "$31,040", label: "Recovered in one verified reconciliation run" },
  { value: "55–85 hrs", label: "Of manual work removed every month" },
];

/**
 * Documented Aethon proof, shared by /confirm and /faq. Uses only evidence
 * published on aethonintelligence.com, labeled with its real industry
 * context — never presented as real-estate lead-response results.
 */
export default function ProofSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      aria-labelledby="proof-heading"
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24"
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
      <article className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
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
              <p className="font-display text-3xl text-saffron">{stat.value}</p>
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
