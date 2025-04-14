
import { createRoot } from 'react-dom/client';
import { TestimonialWidget } from './TestimonialWidget';
import { WidgetConfig, defaultConfig } from './config/widget-config';

class GHLTestimonialSlider {
  private config: WidgetConfig;

  constructor(userConfig: Partial<WidgetConfig> = {}) {
    this.config = {
      ...defaultConfig,
      ...userConfig
    };
  }

  mount() {
    const container = document.getElementById(this.config.containerId);
    if (!container) {
      console.error(`Container with ID "${this.config.containerId}" not found`);
      return;
    }

    const root = createRoot(container);
    root.render(<TestimonialWidget config={this.config} />);
  }
}

// Make widget available globally
(window as any).GHLTestimonialSlider = GHLTestimonialSlider;
