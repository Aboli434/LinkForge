/**
 * About Component
 *
 * A static "About Us" page that describes the FreelanceMarket platform.
 *
 * Sections:
 * 1. **Top Section** → Split layout with text (About Us description) and an illustration.
 * 2. **Bottom Section** → Three feature cards highlighting Mission, Vision, and Values.
 *
 * Features:
 * - Responsive grid layout using Tailwind (`md:grid-cols-2` and `md:grid-cols-3`).
 * - Decorative illustrations/icons from external URLs.
 * - Hover effects on the bottom cards for interactivity.
 *
 * No props are required; this is a static page.
 */

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Top Section: Intro text and illustration */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: About Us text content */}
        <div>
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">LinkForge</span>, we connect talented freelancers 
            with clients looking for quality services and products. Our goal is to 
            make freelancing simple, secure, and rewarding for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe in empowering freelancers with opportunities and helping 
            clients find the right experts to bring their ideas to life. Our platform 
            bridges the gap between creativity and business.
          </p>
        </div>

        {/* Right: Illustration image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/freelancer-working-laptop-concept-illustration_114360-2406.jpg"
            alt="Freelancer working illustration"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Bottom Section: Mission | Vision | Values cards */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        
        {/* Mission card */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Mission icon" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 text-sm">
            To provide freelancers and businesses with a secure, transparent, 
            and efficient marketplace for collaboration.
          </p>
        </div>

        {/* Vision card */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png" 
            alt="Vision icon" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600 text-sm">
            To be the most trusted global platform where talent meets opportunity, 
            shaping the future of freelancing.
          </p>
        </div>

        {/* Values card */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" 
            alt="Values icon" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-600 text-sm">
            Integrity, innovation, and inclusivity drive everything we do 
            at LinkForge.
          </p>
        </div>
      </div>
    </div>
  )
}
