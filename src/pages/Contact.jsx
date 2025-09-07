import { Mail, Phone, Twitter } from "lucide-react";

/**
 * Contact Component
 *
 * This page provides users with multiple ways to reach out:
 * - Displays **contact details** (email, phone, Twitter link).
 * - Provides a **contact form** for users to send messages.
 *
 * Features:
 * - Responsive grid layout (2 columns on medium+ screens, stacked on mobile).
 * - Uses `lucide-react` icons for modern and consistent visuals.
 * - Contact form includes name, email, and message fields.
 * - Placeholder form submission (no backend integration yet).
 *
 * Future Enhancements:
 * - Add form validation (e.g., required fields, email format).
 * - Hook up form to backend/email service (e.g., Nodemailer, API).
 * - Replace placeholder details with real support contact info.
 */

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Contact Details */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            
            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>
                Email: <strong>support@example.com</strong>
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-green-500" />
              <span>
                Mobile: <strong>+91-9876543210</strong>
              </span>
            </li>

            {/* Twitter */}
            <li className="flex items-center gap-3">
              <Twitter className="w-4 h-4 text-sky-500" />
              <span>
                Twitter:{" "}
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-semibold hover:underline"
                >
                  @support
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4 text-sm">
            
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            {/* Message Input */}
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>

            {/* Submit Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
