import Image from "next/image";

export default function Hero({ openPopup }) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image3.webp"
          alt="Professional fencing"
          fill
          className="object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-center md:text-left">
          {/* Pre-heading */}
          <p className="text-[#e4c58a] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4 animate-fade-in">
            AJ Fence Inc.
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 md:mb-6 leading-tight">
            High-Quality Fence
            <span className="block text-[#e4c58a] drop-shadow-lg">
              For Less
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
            Your trusted, affordable fence company Lakeland FL serving Hillsborough & Polk
            Counties. If you are searching for top-rated fence companies near me, look no further. Family-owned with over 20 years of experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 sm:gap-4 mb-6 md:mb-8">
            {/* Call Button */}
            <a
              href="tel:8638163117"
              className="flex-1 relative overflow-hidden bg-[#e4c58a] hover:bg-[#d4b57a] text-black
    font-semibold px-3 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl
    flex items-center justify-center gap-2
    text-xs sm:text-sm md:text-base
    shadow-lg hover:shadow-[#e4c58a]/40
    hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Call
              </span>

              {/* Decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/50 rounded-tl-full" />
            </a>

            {/* Get Quote Button */}
            <button
              onClick={openPopup}
              className="flex-1 relative overflow-hidden bg-[#4c0c0c] hover:bg-[#2a0606] text-white
    font-semibold px-3 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl
    flex items-center justify-center gap-2
    text-xs sm:text-sm md:text-base
    shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Quote
              </span>

              {/* Decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/50 rounded-tl-full" />
            </button>

          </div>

          {/* SEO Keywords */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              "Top-Rated Fence Company Near You",
              "Fence Company Lakeland FL",
              "Fence Companies Near Me",
              "Affordable",
              "Local Experts",
              "Licensed & Insured",
            ].map((keyword, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm text-gray-200 bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
