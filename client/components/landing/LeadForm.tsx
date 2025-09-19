import { useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const challenges = [
  "Finding viral hooks that work",
  "Understanding competitor strategies",
  "Scaling content research",
  "Content performance analysis",
];

const profiles = ["1-5", "6-20", "21-50", "50+"];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [challenge, setChallenge] = useState(challenges[0]);
  const [count, setCount] = useState(profiles[0]);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      // 1) Save directly to Firestore (public write)
      await addDoc(collection(db, "leads"), {
        ts: serverTimestamp(),
        challenge,
        count,
        email,
        company,
        ua: typeof navigator !== "undefined" ? navigator.userAgent : "",
      });
      // 2) Optional: still ping server for logging/CSV backup (non-blocking)
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challenge, count, email, company }),
      }).catch(() => {});
      setDone(true);
    } catch {
      // fallback to server only if Firestore failed
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ challenge, count, email, company }),
        });
        setDone(true);
      } finally {
        setLoading(false);
      }
      return;
    }
    setLoading(false);
  };

  return (
    <section className="container mx-auto px-4 py-16" id="signup">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-700">
            Early Access
          </div>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Apply for ScriptLab access
          </h3>
          {!done ? (
            <div className="mt-6 space-y-6">
              {step === 1 && (
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    What's your biggest content challenge?
                  </label>
                  <select
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]"
                  >
                    {challenges.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    How many competitor profiles do you track?
                  </label>
                  <select
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]"
                  >
                    {profiles.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Company (optional)
                      </label>
                      <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="mt-2 w-full h-12 rounded-md border border-slate-300 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]"
                        placeholder="Acme Inc"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      onClick={onSubmit}
                      disabled={loading || !email}
                      className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90"
                    >
                      {loading ? "Submitting…" : "Request Access"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-4 text-slate-700">
              Thanks! You’re on the list. We’ll email you shortly.
            </div>
          )}
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="rounded-lg border border-slate-200 p-3 text-left">
              Minutes not hours
            </div>
            <div className="rounded-lg border border-slate-200 p-3 text-left">
              40x faster
            </div>
            <div className="rounded-lg border border-slate-200 p-3 text-left">
              SOC2 & GDPR ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
