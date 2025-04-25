
import { TestimonialSlider } from "@/features/testimonials/components/TestimonialSlider";
import { defaultConfig } from "@/features/testimonials/config/widget-config";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Experts
          </h2>
          <p className="text-xl text-gray-600">
            Our most trusted and skilled experts.
          </p>
        </div>
        <TestimonialSlider testimonials={defaultConfig.testimonials} />
      </div>
    </div>
  );
};

export default Index;
