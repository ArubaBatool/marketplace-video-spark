
import React from 'react';
import { Play } from 'lucide-react';
import { Testimonial } from '../constants/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
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
  );
}
