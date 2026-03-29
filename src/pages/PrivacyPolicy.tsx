import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-brand-green mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <p className="mb-6">
              Welcome to APNA DOKAAN. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">1. Amazon Affiliate Disclosure</h2>
            <div className="bg-brand-light rounded-lg p-6 border border-brand-green/10 mb-6">
              <p className="text-sm text-gray-600 m-0">
                APNA DOKAAN is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in (or Amazon.com). When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We do not collect personal data like names or email addresses unless you voluntarily provide them (e.g., by contacting us via email). We may collect non-personal information such as browser type, device type, and IP address for basic analytics purposes to improve our website.
            </p>

            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">3. Cookies</h2>
            <p className="mb-4">
              We use cookies to improve your experience on our site. Third-party vendors, including Amazon, may also use cookies to serve ads or track affiliate referrals based on your prior visits to our website or other websites. You can choose to disable cookies through your individual browser options.
            </p>

            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">4. External Links</h2>
            <p className="mb-4">
              Our website contains links to external sites (like Amazon). We are not responsible for the privacy practices or content of these third-party websites. We encourage you to read their privacy policies when you leave our site.
            </p>

            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:eerieboom@gmail.com" className="text-brand-gold hover:text-brand-gold-hover font-medium">eerieboom@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
