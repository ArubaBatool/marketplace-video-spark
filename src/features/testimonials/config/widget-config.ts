
export interface Testimonial {
  id: number;
  avatar: string;
  name: string;
  memberSince: string;
  employmentType: string;
  experience: string;
  rating: number;
  ratingCount: number;
  hourlyRate: number;
  isVerified: boolean;
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
      name: "Nicholas Woods",
      memberSince: "02/20/2021",
      employmentType: "Part-Time",
      experience: "6 - 9 Years",
      rating: 4.2,
      ratingCount: 10,
      hourlyRate: 25,
      isVerified: true
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      name: "Michelle Hunter",
      memberSince: "02/15/2021",
      employmentType: "Full-Time",
      experience: "10+ Years",
      rating: 4.3,
      ratingCount: 10,
      hourlyRate: 25,
      isVerified: true
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      name: "Frank Chapman",
      memberSince: "03/08/2021",
      employmentType: "On-Demand",
      experience: "2 - 5 Years",
      rating: 4.0,
      ratingCount: 10,
      hourlyRate: 33,
      isVerified: true
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      name: "Maggie Wallace",
      memberSince: "03/03/2021",
      employmentType: "Part-Time",
      experience: "10+ Years",
      rating: 4.4,
      ratingCount: 10,
      hourlyRate: 32,
      isVerified: true
    }
  ]
};
