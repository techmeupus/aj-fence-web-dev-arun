import Image from "next/image";

export default function FenceTypes({ openPopup }) {
  const types = [
    {
      name: "Aluminum",
      image: "/image1.webp",
      description: "Elegant, rust-resistant, and virtually maintenance-free",
      features: ["Durable", "Modern look", "Low maintenance"],
    },
    {
      name: "Wood",
      image: "/image2.webp",
      description: "Classic natural beauty with complete privacy options",
      features: ["Natural appeal", "Privacy", "Customizable"],
    },
    {
      name: "Chain Link",
      image: "/image3.webp",
      description: "Affordable security without compromising visibility",
      features: ["Cost-effective", "Secure", "Durable"],
    },
    {
      name: "Vinyl",
      image: "/image4.webp",
      description: "Long-lasting beauty that never needs painting",
      features: ["Weather-resistant", "Easy care", "Long warranty"],
    },
  ];

  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#e4c58a] font-semibold text-sm uppercase tracking-wider">
            Our Materials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Every Fence Type.
            <br />
            <span className="text-[#e4c58a]">One Local Company.</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional wood to modern aluminum, we master every fencing
            material to bring your vision to life.
          </p>
        </div>

        {/* Fence Types Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {types.map((type, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden 
              shadow-lg hover:shadow-2xl transition-all duration-500 
              transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                <Image
                  src={type.image}
                  alt={`${type.name} fence`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Overlay Title */}
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {type.name}
                  </h3>

                  <div className="flex gap-1">
                    {type.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 backdrop-blur-sm 
                        text-white px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {type.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#e4c58a]/20 text-[#4c0c0c] 
                      px-2 py-1 rounded-full"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* Get Quote Button */}
                <button
                  onClick={openPopup}
                  className="w-full bg-[#4c0c0c] text-white px-5 py-3 rounded-lg
                  font-semibold text-sm transition-all duration-300
                  hover:bg-[#3a0909] hover:shadow-lg flex items-center
                  justify-center gap-2"
                >
                  Get Quote
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {/* Decoration */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20
                bg-amber-50 rounded-tl-full opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Contact Bar */}
        <div className="mt-6 relative">
          {/* Main Contact Container */}
          <div
            className="bg-gradient-to-r from-[#4c0c0c] to-[#4c0c0c]/90 
                        rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Content */}
            <div
              className="relative px-8 py-3 md:py-6 flex flex-col md:flex-row 
                          items-center justify-between gap-6"
            >
              {/* Left side - Text */}
              <div className="text-center md:text-left">
                <span className="text-blue-100 font-medium text-sm uppercase tracking-wider">
                  Get In Touch
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  Speak With a Fence Specialist
                </h3>
                <p className="text-blue-100 mt-2 max-w-lg">
                  Our team is available 24/7 to answer your questions and
                  schedule a free consultation.
                </p>
              </div>

              {/* Right side - Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

  {/* Call Button */}
  <a
    href="tel:8638163117"
    className="group relative overflow-hidden flex items-center justify-center gap-3 
    bg-white text-gray-900 px-8 py-4 rounded-xl
    font-semibold text-lg transition-all duration-300
    hover:shadow-2xl hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    <span className="relative z-10 flex items-center gap-3">
      <svg
        className="w-5 h-5 text-[#e4c58a] group-hover:animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      Call Now
    </span>

    {/* Decoration */}
    <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#e4c58a]/50 rounded-tl-full" />
  </a>


</div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-6 flex justify-center gap-8 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#e4c58a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              24/7 Availability
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#e4c58a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Free Estimates
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#e4c58a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              Live Chat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
