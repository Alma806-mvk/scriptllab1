import { useEffect, useMemo, useState } from "react";

function useCountdown(deadline: Date) {
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, deadline.getTime() - now.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export default function Urgency() {
  const deadline = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d;
  }, []);
  const { d, h, m, s } = useCountdown(deadline);
  return (
    <section className="container mx-auto px-4 py-12" id="urgency">
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-sm">
        <div className="text-sm font-semibold text-slate-700">
          Launch Incentives
        </div>
        <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          First 100 customers: Lifetime 40% discount
        </h3>
        <p className="mt-1 text-slate-600">
          Early access closes in{" "}
          <span className="font-semibold text-[hsl(var(--brand))]">
            {String(d).padStart(2, "0")}d : {String(h).padStart(2, "0")}h :{" "}
            {String(m).padStart(2, "0")}m : {String(s).padStart(2, "0")}s
          </span>
        </p>
      </div>
    </section>
  );
}
