import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "STARTER",
    price: "$49/mo",
    features: [
      "500 videos/month",
      "3 social platforms",
      "Basic transcripts",
      "CSV export",
      "Perfect for creators",
    ],
    cta: "Get Starter",
    popular: false,
  },
  {
    name: "GROWTH",
    price: "$149/mo",
    features: [
      "2,000 videos/month",
      "All platforms",
      "AI insights",
      "Team workspace",
      "Priority support",
      "Built for agencies",
    ],
    cta: "Start Growth",
    popular: true,
  },
  {
    name: "SCALE",
    price: "$299/mo",
    features: [
      "Unlimited videos",
      "API access",
      "Custom integrations",
      "Dedicated success manager",
      "Enterprise-ready",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-16" id="pricing">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Simple Pricing. Massive ROI.
        </h2>
        <p className="mt-3 text-slate-600">
          Save 40 hours/month on average · Replaces $3,000/mo VA or researcher ·
          30-day money-back guarantee
        </p>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-xl border ${t.popular ? "border-[hsl(var(--brand))]" : "border-slate-200"} bg-white p-6 shadow-sm relative`}
          >
            {t.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-[hsl(var(--brand))] text-white px-2 py-1 rounded-md shadow">
                Most Popular
              </div>
            )}
            <div className="text-sm font-semibold text-slate-500">{t.name}</div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900">
              {t.price}
            </div>
            <ul className="mt-4 space-y-2 text-slate-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 mt-0.5" />{" "}
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#signup" className="inline-block mt-6 w-full">
              <Button className="w-full bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90">
                {t.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
