
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  thumbnail: string;
  videoUrl: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
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

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="relative aspect-video">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity hover:bg-opacity-50">
                    <Play className="w-16 h-16 text-white opacity-90" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.title}</p>
                  <p className="text-sm font-medium text-purple-600 mt-1">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
