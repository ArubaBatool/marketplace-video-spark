
export interface Testimonial {
  id: number;
  thumbnail: string;
  videoUrl: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "#",
    name: "Sarah Johnson",
    title: "Chief Marketing Officer",
    company: "TechVision Inc."
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    videoUrl: "#",
    name: "Michael Chen",
    title: "Founder & CEO",
    company: "Innovation Labs"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    videoUrl: "#",
    name: "Emily Rodriguez",
    title: "Product Director",
    company: "Future Dynamics"
  }
];
