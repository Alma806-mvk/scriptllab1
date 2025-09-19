export default function FAQ() {
  const faqs = [
    {
      q: "Is this legal?",
      a: "100% compliant. We only access publicly available content.",
    },
    {
      q: "How accurate is the transcription?",
      a: "99.2% accuracy with enterprise AI models.",
    },
    {
      q: "What platforms do you support?",
      a: "Instagram (Reels, Posts, Stories), TikTok, YouTube (Videos, Shorts).",
    },
    {
      q: "Can I analyze my own content?",
      a: "Yes! Perfect for content audits and repurposing.",
    },
    {
      q: "Do you store the videos?",
      a: "No. We only store text transcripts for instant search.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer list-none text-slate-900 font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
