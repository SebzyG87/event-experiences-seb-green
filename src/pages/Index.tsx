import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventTimeline } from "@/components/EventTimeline";
import { ExperienceMatrix } from "@/components/ExperienceMatrix";
import { PricingSection } from "@/components/PricingSection";
import { AudioZone } from "@/components/AudioZone";
import { ActionZone } from "@/components/ActionZone";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FreeToolsSection } from "@/components/FreeToolsSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <EventTimeline />
      <ExperienceMatrix />
      <PricingSection />
      <AudioZone />
      <FreeToolsSection />
      <TestimonialsSection />
      <ActionZone />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
