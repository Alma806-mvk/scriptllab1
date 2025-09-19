import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this legal?",
      a: "Yes. We only analyze publicly available content and respect each platform's terms of use.",
    },
    {
      q: "How accurate is the transcription?",
      a: "We use state‑of‑the‑art models and custom cleanup. In our tests, average word error rate is below 1%.",
    },
    {
      q: "What platforms do you support?",
      a: "Instagram (Reels, Posts, Stories), TikTok, and YouTube (Videos, Shorts). More are on the roadmap.",
    },
    {
      q: "Do you store the videos?",
      a: "No. We process media and store transcripts, metadata, and detected insights for search and analysis.",
    },
    {
      q: "Can I analyze my own content?",
      a: "Absolutely. Many teams use ScriptLab to audit their back catalog and find repeatable hooks.",
    },
    {
      q: "How is my data secured?",
      a: "All traffic is encrypted in transit. Transcripts are encrypted at rest and access is role‑based.",
    },
    {
      q: "Can I export data?",
      a: "CSV and JSON exports are available from any search or collection. API access is available on request.",
    },
    {
      q: "What about rate limits?",
      a: "We implement fair‑use rate limits per account to protect performance. Enterprise limits can be increased.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center">
          Frequently asked questions
        </h2>
        <div className="mt-8 rounded-xl border border-slate-200 bg-white">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="px-5 text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-slate-600">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
