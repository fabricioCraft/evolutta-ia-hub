import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <MethodologySection />
      <SecuritySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
