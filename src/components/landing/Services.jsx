import { FaHome, FaBuilding, FaPencilRuler } from "react-icons/fa";

export default function Services({ openPopup }) {
  const services = [
    {
      title: "Residential Home Fencing",
      description:
        "Custom wood, vinyl, and aluminum fencing to enhance your home's privacy, security, and curb appeal.",
      icon: FaHome,
      features: ["Privacy fencing", "Decorative borders", "Pool safety"],
    },
    {
      title: "Commercial Business Fencing",
      description:
        "Durable and secure fencing solutions for industrial sites, retail properties, and office complexes.",
      icon: FaBuilding,
      features: ["Security fencing", "Access control", "Branded designs"],
    },
    {
      title: "Custom Fence Design",
      description:
        "Bring your vision to life with bespoke fencing solutions tailored to your specific needs and style.",
      icon: FaPencilRuler,
      features: ["Architectural designs", "Mixed materials", "Unique patterns"],
    },
  ];

  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Professional Fencing Solutions <br />
            <span className="text-[#e4c58a]">You Can Trust</span>
          </h2>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Over 20 years of experience delivering exceptional fencing
            solutions for residential and commercial clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden
                shadow-lg hover:shadow-2xl transition-all duration-300
                transform hover:-translate-y-2"
              >
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#e4c58a]" />

                <div className="p-8">

                  {/* React Icon */}
                  <div className="mb-6 text-[#e4c58a]">
                    <Icon className="text-5xl group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-500">
                        <svg
                          className="w-5 h-5 text-[#e4c58a] mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    onClick={openPopup}
                    className="w-full bg-[#4c0c0c] text-white px-6 py-4 rounded-xl
                    font-semibold text-lg transition-all duration-300
                    hover:bg-[#3a0909] hover:shadow-lg
                    focus:outline-none focus:ring-4 focus:ring-[#4c0c0c]/50"
                  >
                    Get Free Quote
                  </button>
                </div>

                {/* Decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32
                bg-amber-50 rounded-tl-full opacity-50" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}