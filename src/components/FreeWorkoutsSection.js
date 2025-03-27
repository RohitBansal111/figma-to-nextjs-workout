'use client'
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FreeWorkoutsSection() {
  return (
    <section className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work out at home for free.</h2>
            <p className="text-gray-400 mb-6">
              We believe fitness should be accessible to everyone, everywhere, 
              regardless of income or access to a gym. With hundreds of 
              professional workouts, healthy recipes and informative articles, as 
              well as one of the most positive communities on the web, you'll have 
              everything you need to reach your personal fitness goals – for free!
            </p>
            <Link 
              href="#see-more" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <span>See More</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            {/* Woman doing yoga with laptop image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}