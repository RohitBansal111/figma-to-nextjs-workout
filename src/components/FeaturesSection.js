'use client'
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Workout Videos',
      description: 'Access to hundreds of free, full-length workout videos.',
      href: '#workout-videos',
    },
    {
      title: 'Workout Programs',
      description: 'Affordable and effective workout programs.',
      href: '#workout-programs',
    },
    {
      title: 'Meal Plans',
      description: 'Plans built with registered dietitians and nutritionists.',
      href: '#meal-plans',
    },
    {
      title: 'WO Plus ALL ACCESS',
      description: 'Add powerful features to your membership.',
      href: '#wo-plus',
    }
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Not sure where to start?</h2>
        <p className="text-gray-400 mb-10">Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              href={feature.href} 
              className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-lg transition-colors duration-300 flex flex-col h-full"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{feature.description}</p>
              <div className="flex justify-end"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}