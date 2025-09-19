import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";

const SAMPLE_TRANSCRIPTS = [
  {
    id: 1,
    text: "Okay, here's the hook formula we used to 10x our reels...",
    highlights: ["hook formula", "10x our reels"],
  },
  {
    id: 2,
    text: "Comment 'HOOKS' and we'll send you the template we use.",
    highlights: ["Comment 'HOOKS'", "template"],
  },
  {
    id: 3,
    text: "We post 3 times a day, and here's why cadence matters.",
    highlights: ["3 times a day", "cadence"],
  },
];

export default function Demo() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof SAMPLE_TRANSCRIPTS>([]);

  const handleTry = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate processing
    setTimeout(() => {
      setResults(SAMPLE_TRANSCRIPTS);
      setLoading(false);
    }, 900);
  };

  return (
    <section className="container mx-auto px-4 py-16" id="demo">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Interactive Product Preview
          </h2>
          <p className="mt-3 text-slate-600">
            Try it: Paste any Instagram/TikTok/YouTube URL
          </p>
          <form
            onSubmit={handleTry}
            className="mt-4 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="url"
              required
              placeholder="https://www.instagram.com/username/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 rounded-md border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]"
            />
            <Button
              type="submit"
              className="h-12 px-6 bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90"
            >
              Extract
            </Button>
          </form>
          <div className="mt-3 text-xs text-slate-500">
            17,834 videos transcribed this week
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm min-h-[220px]">
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 w-1/2 rounded bg-slate-200" />
                <div className="h-4 w-2/3 rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
                <div className="h-4 w-1/3 rounded bg-slate-200" />
              </div>
            ) : results.length ? (
              <div className="space-y-3">
                {results.map((r) => (
                  <div
                    key={r.id}
                    className="rounded-lg border border-slate-200 p-3"
                  >
                    <div className="text-xs text-slate-500">Transcript</div>
                    <p className="mt-1 text-slate-800">
                      {r.text
                        .split(
                          /(hook formula|10x our reels|Comment 'HOOKS'|template|3 times a day|cadence)/i,
                        )
                        .map((chunk, i) => (
                          <span
                            key={i}
                            className={
                              /hook formula|10x our reels|Comment 'HOOKS'|template|3 times a day|cadence/i.test(
                                chunk,
                              )
                                ? "bg-yellow-200/60 rounded px-1"
                                : ""
                            }
                          >
                            {chunk}
                          </span>
                        ))}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 text-slate-500">
                <Search className="h-4 w-4" /> Paste a profile URL to preview
                transcripts
              </div>
            )}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Why teams love ScriptLab
          </h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
            <li className="rounded-lg border border-slate-200 p-3">
              <span className="font-semibold">Bulk Magic</span>
              <br />
              Extract 1,000+ videos in one click
            </li>
            <li className="rounded-lg border border-slate-200 p-3">
              <span className="font-semibold">Cross-Platform</span>
              <br />
              Instagram + TikTok + YouTube in one place
            </li>
            <li className="rounded-lg border border-slate-200 p-3">
              <span className="font-semibold">AI Insights</span>
              <br />
              Auto-detect viral hooks, CTAs, and patterns
            </li>
            <li className="rounded-lg border border-slate-200 p-3">
              <span className="font-semibold">Export Everything</span>
              <br />
              CSV, PDF, or API access to all data
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
