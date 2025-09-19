export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Replaced our 3-person research team. We now analyze 50 competitor accounts weekly instead of 5.",
      name: "Sarah Chen",
      title: "Growth Lead",
      org: "Northbridge Agency",
    },
    {
      quote:
        "Found the exact hook formulas our top competitor uses. ROI in the first week.",
      name: "Marcus Rodriguez",
      title: "Content Director",
      org: "Helio Brands",
    },
    {
      quote:
        "Cut our content research from 2 days to 20 minutes. This is a game-changer.",
      name: "Emma Thompson",
      title: "Social Media Manager",
      org: "Quantify Co.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16" id="social-proof">
      <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
        Trusted by high-performance marketing teams
      </h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.quote}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <blockquote className="text-slate-800">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-600">
              {t.name}, {t.title} at {t.org}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
