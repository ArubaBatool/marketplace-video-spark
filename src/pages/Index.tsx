
import { TestimonialSlider } from "@/features/testimonials/components/TestimonialSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why leading businesses trust our marketplace for their success
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Index;
