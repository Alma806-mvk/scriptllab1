import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Sparkles } from "lucide-react";

export function Header() {
  const navLink =
    "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors";
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[hsl(var(--brand))] text-white grid place-items-center shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
            ScriptLab
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className={navLink}>
            Features
          </a>
          <a href="#demo" className={navLink}>
            Demo
          </a>
          <a href="#pricing" className={navLink}>
            Pricing
          </a>
          <a href="#faq" className={navLink}>
            FAQs
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://0ce05848e7a54d9287ec59f3566cb0fb-849c4e45d7bd4c788c5d8a70a.fly.dev/#signup">
            <Button className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90">
              Join Early Access
            </Button>
          </a>
        </div>
        <button className="md:hidden p-2 text-slate-600" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[hsl(var(--brand))] text-white grid place-items-center shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              ScriptLab
            </span>
          </div>
          <p className="mt-3 text-slate-600 max-w-xs">
            Turn any creator's entire content library into competitive
            intelligence in minutes.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Product</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>
              <a href="#features" className="hover:text-slate-900">
                Features
              </a>
            </li>
            <li>
              <a href="#demo" className="hover:text-slate-900">
                Demo
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-slate-900">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>
              <a href="/privacy" className="hover:text-slate-900">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-slate-900">
                Terms
              </a>
            </li>
            <li>
              <a href="#signup" className="hover:text-slate-900">
                Join Early Access
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>
              <a
                href="mailto:bencasdedenes6@gmail.com"
                className="hover:text-slate-900"
              >
                Email support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ScriptLab. All rights reserved.
      </div>
    </footer>
  );
}

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={cn("min-h-dvh bg-white text-slate-900")}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
