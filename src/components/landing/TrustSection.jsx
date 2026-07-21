import Image from "next/image";
import {
  FaStar,
  FaMoneyBillWave,
  FaAward,
  FaBuilding,
  FaCalendarAlt,
  FaHome,
  FaPhone
} from "react-icons/fa";

export default function TrustSection({ openPopup }) {
  const trustPoints = [
    {
      title: "20+ Years Serving Locally",
      description: "Established 2004. Thousands of fences installed.",
      image: "/image1.webp",
      icon: FaStar,
      stats: "2004",
      statLabel: "Founded"
    },
    {
      title: "Affordable Pricing",
      description: "No hidden fees. Free estimates.",
      image: "/image2.webp",
      icon: FaMoneyBillWave,
      stats: "100%",
      statLabel: "Transparent"
    },
    {
      title: "Premium Materials",
      description: "High quality installations built to last.",
      image: "/image3.webp",
      icon: FaAward,
      stats: "25+",
      statLabel: "Years Warranty"
    },
    {
      title: "Residential & Commercial",
      description: "Backyard fences to commercial projects.",
      image: "/image4.webp",
      icon: FaBuilding,
      stats: "1000+",
      statLabel: "Projects"
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience", icon: FaCalendarAlt },
    { number: "5,000+", label: "Fences Installed", icon: FaHome },
    { number: "100%", label: "Satisfaction Rate", icon: FaStar },
    { number: "24/7", label: "Customer Support", icon: FaPhone }
  ];

  return (
    <section className="py-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            Why Choose Our Company
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Trusted Fence Installation <br />
            <span className="text-[#e4c58a]">Experts in Your Area</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            With 20+ years of experience, our team delivers high-quality fence
            installations using durable materials, expert craftsmanship, and
            reliable service you can trust.
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 gap-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />

                  {/* Icon + Stats */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-end gap-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
                      <Icon className="text-4xl text-white" />
                    </div>

                    <div className="text-white">
                      <div className="text-3xl font-bold">
                        {point.stats}
                      </div>
                      <div className="text-sm opacity-90">
                        {point.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6">
                    {point.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-[#4c0c0c] rounded-full" />
                      <span>Professional installation team</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-[#4c0c0c] rounded-full" />
                      <span>Licensed & insured company</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-[#4c0c0c] rounded-full" />
                      <span>Top rated customer service</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50" />
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-lg p-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div key={index} className="text-center">
                <Icon className="text-3xl text-[#4c0c0c] mx-auto mb-2" />

                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>

                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4c0c0c] to-[#4c0c0c] rounded-3xl opacity-90" />

          <div className="relative px-8 py-12 md:py-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. Our team is ready to help
              you find the perfect fencing solution.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              {/* Get Quote Button */}
              <button
                onClick={openPopup}
                className="bg-white text-[#4c0c0c] px-8 py-4 rounded-xl
                font-semibold text-lg hover:shadow-xl hover:scale-105 transition"
              >
                Get Free Quote
              </button>

              {/* Call */}
              <a
              href="tel:8638163117"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl
                font-semibold text-lg hover:bg-black hover:scale-105 transition 
                flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}