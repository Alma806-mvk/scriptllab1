export default function TrustBar() {
  return (
    <section className="border-t border-b border-slate-200 bg-slate-50/50">
      <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4 text-slate-600">
        <div className="text-sm">As seen in</div>
        <div className="flex flex-wrap items-center gap-6 opacity-80">
          {[
            "GrowthDaily",
            "SaaSWeekly",
            "CreatorHub",
            "AdOps Pro",
            "PMM Today",
          ].map((name) => (
            <div
              key={name}
              className="h-6 text-sm font-semibold tracking-wide text-slate-500"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="text-sm ml-auto">
          17,834 videos transcribed this week
        </div>
      </div>
    </section>
  );
}
