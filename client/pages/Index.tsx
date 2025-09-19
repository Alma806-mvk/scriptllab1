import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import SocialProof from "@/components/landing/SocialProof";
import Features from "@/components/landing/Features";
import Demo from "@/components/landing/Demo";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Urgency from "@/components/landing/Urgency";
import LeadForm from "@/components/landing/LeadForm";

export default function Index() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <SocialProof />
      <Demo />
      <Features />
      <Pricing />
      <Urgency />
      <FAQ />
      <LeadForm />
    </div>
  );
}
