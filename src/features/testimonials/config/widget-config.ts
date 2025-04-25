
export interface Testimonial {
  id: number;
  avatar: string;
  name: string;
  role: string;
  company: string;
  testimonialText: string;
  rating: number;
  date: string;
}

export interface WidgetConfig {
  containerId: string;
  testimonials: Testimonial[];
}

export const defaultConfig: WidgetConfig = {
  containerId: 'ghl-testimonial-slider',
  testimonials: [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Solutions Inc.",
      testimonialText: "The service exceeded our expectations. We saw a 40% increase in leads within the first month!",
      rating: 5,
      date: "March 2024"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Dynamics",
      testimonialText: "Their strategies transformed our business. The ROI has been incredible, and the team is fantastic to work with.",
      rating: 5,
      date: "February 2024"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Swift Solutions",
      testimonialText: "The best decision we made for our business growth. Highly recommend their services!",
      rating: 5,
      date: "April 2024"
    }
  ]
};

