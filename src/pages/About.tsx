export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-brand-green mb-6">About APNA DOKAAN</h1>
          
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              Welcome to APNA DOKAAN, your number one source for finding the best products online. 
              We're dedicated to giving you the very best recommendations, with a focus on quality, 
              value, and customer satisfaction.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to simplify your shopping experience. We spend hours researching, 
              testing, and reviewing products so you don't have to. When you buy through our links, 
              you get the best products, and we may earn a small commission that helps keep this site running.
            </p>

            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Affiliate Disclosure</h2>
            <div className="bg-brand-light rounded-lg p-6 border border-brand-green/10 mb-6">
              <p className="text-sm text-gray-600 m-0">
                APNA DOKAAN is a participant in the Amazon Services LLC Associates Program, 
                an affiliate advertising program designed to provide a means for sites to earn 
                advertising fees by advertising and linking to Amazon.com.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Contact Us</h2>
            <p>
              Have questions or suggestions? We'd love to hear from you. 
              Reach out to us at <a href="" className="text-brand-gold hover:text-brand-gold-hover font-medium">eerieboom@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
