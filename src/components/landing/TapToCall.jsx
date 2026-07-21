export default function TapToCall() {
  return (
    <div className="w-full bg-[#4c0c0c] border-y border-[#4c0c0c]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">

        <div className="flex flex-row flex-wrap items-center justify-center md:justify-between py-3 gap-x-4 gap-y-1 text-xs sm:text-sm">

          {/* Counties */}
          <div className="flex items-center gap-1 text-gray-400">
            <svg
              className="w-3 h-3 text-[#e4c58a]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Hillsborough & Polk Counties</span>
          </div>

          {/* Phone */}
          <a
            href="tel:8638163117"
            className="text-white font-semibold hover:text-[#e4c58a] transition"
          >
            (863) 816-3117
          </a>

          {/* Credentials */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>20+ Years</span>
            <span>•</span>
            <span>Licensed</span>
            <span>•</span>
            <span>Insured</span>
          </div>

        </div>

      </div>
    </div>
  );
}