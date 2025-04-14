
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../constants/testimonials';
import { TestimonialCard } from './TestimonialCard';
import { VideoPreviewModal } from './VideoPreviewModal';
import type { Testimonial } from '../constants/testimonials';

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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

  const handlePlayVideo = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  onPlayVideo={handlePlayVideo}
                />
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

      <VideoPreviewModal
        testimonial={selectedTestimonial}
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </>
  );
}
