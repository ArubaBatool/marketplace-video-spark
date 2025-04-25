
import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../config/widget-config';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mx-4 my-6 transform transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-24 h-24 rounded-full object-cover mb-6"
        />
        
        <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index}
              className={`w-5 h-5 ${index < testimonial.rating ? 'fill-current' : 'stroke-current fill-transparent'}`}
            />
          ))}
        </div>

        <p className="text-gray-700 text-lg italic mb-6">"{testimonial.testimonialText}"</p>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600 mt-1">{testimonial.role}</p>
          <p className="text-gray-600 font-medium">{testimonial.company}</p>
          <p className="text-sm text-gray-500 mt-2">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

