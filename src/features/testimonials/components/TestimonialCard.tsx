
import React from 'react';
import { Check, Clock } from 'lucide-react';
import { Testimonial } from '../config/widget-config';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

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
            <span className="text-sm text-gray-500">({testimonial.ratingCount})</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-4">{testimonial.name}</h3>
      <p className="text-sm text-gray-500 mt-1">MEMBER SINCE {testimonial.memberSince}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{testimonial.employmentType}</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-medium">Experience:</span>
          <span>{testimonial.experience}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <span className="text-2xl font-bold text-emerald-600">${testimonial.hourlyRate}/hr</span>
        <button className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
