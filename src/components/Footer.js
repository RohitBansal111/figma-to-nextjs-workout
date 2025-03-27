'use client'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">WORKOUT</h3>
            <p className="text-gray-400 text-sm">
              Your ultimate fitness destination for workouts, meal plans, and a supportive community.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-gray-400 hover:text-white text-sm">Programs</Link></li>
              <li><Link href="/healthy-living" className="text-gray-400 hover:text-white text-sm">Healthy Living</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white text-sm">Meal Plans</Link></li>
              <li><Link href="/store" className="text-gray-400 hover:text-white text-sm">Store</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-white text-sm">Community</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Instagram</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Twitter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Facebook</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">YouTube</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 WORKOUT. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <button 
              className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}