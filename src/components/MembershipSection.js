'use client'
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function MembershipSection() {
  const freeTierFeatures = [
    'Daily Full-Length Workout Videos',
    'Nutrition Guides',
    'Exercise Demos',
    'Custom Workout Creation',
    'Positive and Supportive Online Community',
    'No Credit Card Needed'
  ];

  const premiumTierFeatures = [
    'Everything in Free Plan',
    'Premium Workout Series',
    'Exclusive Expert Q&A Sessions',
    'Custom Meal Plans by Certified Nutritionists',
    'Progress Tracking Tools',
    'HD Video Quality Workouts',
    'Ad-Free Experience',
    'Offline Downloads for On-the-Go Workouts',
    'Priority Support',
    'Real-Time Feedback'
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Membership</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-4">Join for Free</h3>
            <p className="text-gray-400 mb-6">
              Kickoff your fitness goals in knockout style 
              with everything you need to maximize your 
              workouts and achieve powerful results – no 
              credit card required!
            </p>
            
            <div className="mb-6 flex-grow">
              <ul className="space-y-2">
                {freeTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              href="#join-free" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-4">WO Plus</h3>
            <p className="text-gray-400 mb-6">
              WO Plus includes everything you get with a 
              free membership plus exclusive premium 
              content, advanced features, and much more!
            </p>
            
            <div className="mb-6 flex-grow">
              <ul className="space-y-2">
                {premiumTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition-colors duration-300 text-center">
              Sign Up Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}