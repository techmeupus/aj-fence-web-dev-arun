export default function MapSection() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Serving Hillsborough & Polk Counties
          </h2>

          <p className="text-gray-600 mb-6">
            AJ Fence Inc proudly serves homeowners and businesses across
            Hillsborough and Polk Counties with high-quality fencing
            solutions.
          </p>

          <ul className="space-y-3 text-gray-700">

            <li>✔ Tampa Fence Installation</li>
            <li>✔ Lakeland Fence Contractors</li>
            <li>✔ Riverview Fence Company</li>
            <li>✔ Brandon Fence Installation</li>
            <li>✔ Plant City Fence Services</li>

          </ul>
        </div>

        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow">

          <iframe
            src="https://maps.google.com/maps?q=Hillsborough%20County&t=&z=10&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}