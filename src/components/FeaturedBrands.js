export default function FeaturedBrands() {
  return (
    <section className="bg-black py-8 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 uppercase text-xs mb-6">AS FEATURED IN</p>
        
        <div className="flex flex-wrap gap-8 md:gap-12 items-center justify-center md:justify-start">
          {/* Nike */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <svg className="h-5 md:h-6 w-auto fill-current text-white" viewBox="0 0 24 24">
              <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a.314.314 0 00.056-.397.37.37 0 00-.28-.17.366.366 0 00-.218.075C1.031 8.888.159 10.424.024 11.648c-.134 1.225.289 2.173 1.267 2.844.7.467 1.643.7 2.828.7 1.204 0 2.55-.252 4.036-.756L24 7.8z" />
            </svg>
          </div>
          
          {/* BuzzFeed */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <svg className="h-5 md:h-6 w-auto fill-current text-white" viewBox="0 0 24 24">
              <path d="M12.971 5.594a5.55 5.55 0 11-11.1 0 5.55 5.55 0 0111.1 0m10.561 5.55a5.55 5.55 0 11-11.1 0 5.55 5.55 0 0111.1 0M12.971 21.456a5.55 5.55 0 01-5.55 5.55 5.55 5.55 0 01-5.55-5.55 5.55 5.55 0 0111.1 0" />
            </svg>
          </div>
          
          {/* Esprit */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <svg className="h-5 md:h-6 w-auto fill-current text-white" viewBox="0 0 24 24">
              <path d="M24 4.255L12 11.388 0 4.255V2.327L12 9.46 24 2.327m0 10.795v1.928l-12-7.133-12 7.133v-1.928l12-7.133z" />
            </svg>
          </div>
          
          {/* National Geographic */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <svg className="h-7 md:h-8 w-auto fill-current text-white" viewBox="0 0 24 24">
              <path d="M0 0v24h24V0H0zm22.385 22.385H1.615V1.615h20.77v20.77z M16.962 7.038H7.038v9.924h9.924V7.038z" />
            </svg>
          </div>
          
          {/* Huffpost */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <svg className="h-5 md:h-6 w-auto fill-current text-white" viewBox="0 0 24 24">
              <path d="M2.861 5h5.016v13.244h3.262V5h5v13.244H24V19H0V5h2.861z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
