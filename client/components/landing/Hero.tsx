import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(40%_40%_at_20%_100%,rgba(15,23,42,0.08),transparent)]" />
      <div className="container mx-auto px-4 pt-16 pb-10 lg:pt-24 lg:pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand))]"></span>
            Premium Coming Soon
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            Stop Watching. Start Knowing. Bulk-Transcribe Competitor Content
            Instantly.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            ScriptLab bulk-extracts and transcribes Instagram Reels, TikToks,
            and YouTube videos from any profile URL. Turn months of content into
            searchable competitive intelligence in minutes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#signup">
              <Button
                size="lg"
                className="h-12 px-6 bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90"
              >
                Join 500+ Marketers Getting Early Access
              </Button>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              See 3-Minute Demo
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-600" />{" "}
              <span>Enterprise-grade security. Your data never shared.</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />{" "}
              <span>40x faster than manual research</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="p-5 bg-slate-50 border-r border-slate-200">
                  <div className="text-xs font-semibold text-slate-500">
                    Before
                  </div>
                  <div className="mt-2 space-y-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-full rounded bg-slate-200"
                      ></div>
                    ))}
                    <div className="h-4 w-3/4 rounded bg-slate-200"></div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-slate-500">
                    After
                  </div>
                  <div className="mt-2 space-y-3">
                    {[
                      'Hook: "The secret nobody tells you about scaling reels"',
                      'CTA: "Comment HOOKS for the template"',
                      'Pattern: "Q&A style with on-screen text"',
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-slate-200 p-3"
                      >
                        <div className="text-xs text-slate-500">
                          Transcript snippet
                        </div>
                        <div className="mt-1 text-sm font-medium text-slate-800">
                          {t}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -top-6 rotate-3 rounded-lg bg-white border border-slate-200 shadow-md shadow-slate-900/5 p-3 text-xs w-[220px]">
              <div className="font-semibold text-slate-700">
                Auto-detected Insights
              </div>
              <ul className="mt-2 list-disc pl-4 text-slate-600 space-y-1">
                <li>Viral hooks</li>
                <li>CTA patterns</li>
                <li>Posting cadence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
