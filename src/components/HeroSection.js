'use client'
import StatsCard from './StatsCard';
import { FireIcon, PlayIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white mb-6 tracking-wide">
              WORKOUT<br />WITH ME
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              A huge selection of health and fitness content, healthy recipes and
              transformation stories to help you get fit and stay fit!
            </p>
            <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg">
              Join Club Now!
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
              {/* Using a placeholder for the image */}
              <div className="h-full w-full relative">
                <div className="h-full w-full overflow-hidden relative">
                  {/* Fitness trainer image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute top-5 right-5 z-20">
                <StatsCard 
                  value="4.95" 
                  label="km" 
                  color="orange"
                  icon={<FireIcon className="h-5 w-5" />} 
                />
              </div>
              
              <div className="absolute bottom-32 left-1/2 md:left-auto md:right-10 z-20">
                <StatsCard 
                  value="350+" 
                  label="Video tutorial" 
                  color="orange"
                  icon={<PlayIcon className="h-5 w-5" />}
                />
              </div>
              
              <div className="absolute bottom-5 right-10 z-20">
                <StatsCard 
                  value="500+" 
                  label="Free Workout Videos" 
                  color="purple" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
