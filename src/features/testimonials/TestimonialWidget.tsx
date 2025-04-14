
import { TestimonialSlider } from './components/TestimonialSlider';
import type { WidgetConfig } from './config/widget-config';

interface TestimonialWidgetProps {
  config: WidgetConfig;
}

export function TestimonialWidget({ config }: TestimonialWidgetProps) {
  return (
    <div className="ghl-testimonial-widget">
      <TestimonialSlider testimonials={config.testimonials} />
    </div>
  );
}
