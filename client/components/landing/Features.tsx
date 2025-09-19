import { Bot, Database, FileDown, Layers } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Bulk Magic",
    desc: "Extract 1,000+ videos in one click",
  },
  {
    icon: Database,
    title: "Cross-Platform",
    desc: "Instagram + TikTok + YouTube in one place",
  },
  {
    icon: Bot,
    title: "AI Insights",
    desc: "Auto-detect viral hooks, CTAs, and patterns",
  },
  {
    icon: FileDown,
    title: "Export Everything",
    desc: "CSV, PDF, or API access to all data",
  },
];

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16" id="features">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <it.icon className="h-6 w-6 text-[hsl(var(--brand))]" />
            <div className="mt-3 text-lg font-semibold text-slate-900">
              {it.title}
            </div>
            <p className="mt-1 text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
