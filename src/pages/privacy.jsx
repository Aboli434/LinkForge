export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-gray-700 leading-relaxed">
            At <strong>Freelance Market</strong>, your privacy is important to us. 
            We are committed to protecting your personal information and being transparent 
            about how we collect, use, and safeguard your data.
          </p>
        </section>

        {/* Data Usage */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect only the information necessary to provide and improve our services. 
            This includes account registration details, communication history, and 
            transaction records. Your data may be used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>Enhance and personalize your user experience</li>
            <li>Communicate important updates and support responses</li>
            <li>Process payments and manage transactions securely</li>
            <li>Ensure platform safety and compliance with laws</li>
          </ul>
        </section>

        {/* Cookie Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to improve your browsing experience 
            and provide essential features. Cookies allow us to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>Remember your preferences and login sessions</li>
            <li>Analyze site traffic and improve performance</li>
            <li>Deliver personalized content and relevant services</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            You may choose to disable cookies in your browser settings, but some 
            features of the platform may not function properly without them.
          </p>
        </section>

        {/* Final Note */}
        <section>
          <p className="text-gray-700 leading-relaxed">
            We do not share your personal information without consent, except as required by law. 
            By using our platform, you agree to this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
}
