'use client'
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PremiumTrainingSection() {
  return (
    <section className="bg-black py-16 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              {/* Woman doing exercise with weights */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
              
              {/* Certification Logo Overlay */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-gray-900/80 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L9.5 4.5L4.5 4.5L4.5 9.5L2 12L4.5 14.5L4.5 19.5L9.5 19.5L12 22L14.5 19.5L19.5 19.5L19.5 14.5L22 12L19.5 9.5L19.5 4.5L14.5 4.5L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8L10 13H14L12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get more with low-cost training programs and advanced features.</h2>
            <p className="text-gray-400 mb-6">
              We offer a variety of premium workout programs designed by certified professionals. 
              Access exclusive interactive features, customized meal plans, and detailed analytics, 
              all for a small fraction of the cost of a traditional gym membership. Take your fitness 
              to the next level with our affordable premium options.
            </p>
            <Link 
              href="#see-more" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <span>See More</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}