import { Mail, Phone, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>

      <div className="space-y-4 text-gray-700">
        <p className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-500" />
          <span>Email: <strong>support@example.com</strong></span>
        </p>

        <p className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-green-500" />
          <span>Mobile: <strong>+91-9876543210</strong></span>
        </p>

        <p className="flex items-center gap-2">
          <Twitter className="w-5 h-5 text-sky-500" />
          <span>
            Twitter:{" "}
            <a 
              href="https://twitter.com/example" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-600 font-semibold hover:underline"
            >
              support@example
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
