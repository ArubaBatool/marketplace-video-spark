
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Testimonial } from '../config/widget-config';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          {testimonial.isVerified && (
            <div className="absolute -right-1 -bottom-1 bg-emerald-500 text-white p-1 rounded-full">
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-1 text-amber-400">
            <span className="text-lg font-semibold">{testimonial.rating}</span>
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm text-gray-500">({testimonial.ratingCount})</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-4">{testimonial.name}</h3>
      <p className="text-sm text-gray-500 mt-1">MEMBER SINCE {testimonial.memberSince}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
          {testimonial.employmentType}
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-medium">Experience:</span>
          <span>{testimonial.experience}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <span className="text-2xl font-bold text-emerald-600">${testimonial.hourlyRate}/hr</span>
      </div>
    </div>
  );
}
