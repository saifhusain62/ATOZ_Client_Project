import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <p className="text-sm text-gray-500 mb-4">Effective Date: 01-01-2024</p>
            <p>
              AtoZ RealEstatePro LLC ("we", "us", "our") values your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <a href="" className="text-blue-600 hover:underline">
               
              </a>{' '}
              or provide us with your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Personal Information:</strong> First and last name, phone number, email address, and physical address from forms on our website.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and duration of your visit.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your browsing experience. You can control cookies via your browser settings.</li>
              <li><strong>Text Message Communications:</strong> We may communicate with you via text messages about our services. Normal messaging rates apply, and message frequency may vary. Mobile carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p className="mt-2">
              No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All other categories, excluding text messaging opt-in data, are also confidential.
            </p>
            <p className="mt-2">
              <strong>Opt-out of text message communications:</strong> Reply STOP to any message or contact us at{' '}
              <a href="mailto:clients@azzrepro.com" className="text-blue-600 hover:underline">clients@azzrepro.com</a>. 
              This stops messages from that number but you may still receive non-marketing messages from other numbers.
            </p>
            <p className="mt-2">
              <strong>Opt-out of marketing communications:</strong> Follow the unsubscribe instructions in emails or contact us at{' '}
              <a href="mailto:clients@azzrepro.com" className="text-blue-600 hover:underline">clients@azzrepro.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use of Your Information</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Provide and maintain our website and services</li>
              <li>Respond to inquiries and communicate with you</li>
              <li>Personalize your experience on our website</li>
              <li>Improve our website and services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Disclosure of Your Information</h2>
            <p>
              We do not share, sell, rent, or disclose your personal information except in these circumstances:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Your Consent:</strong> If you have explicitly consented.</li>
              <li><strong>Legal Obligations:</strong> To comply with laws or governmental requests.</li>
              <li><strong>Protection of Rights and Property:</strong> To protect our rights, agreements, and policies.</li>
              <li><strong>Business Transfers:</strong> During mergers, acquisitions, restructuring, or sales of assets.</li>
            </ul>
            <p className="mt-2">
              All mobile information and text messaging opt-in data remain strictly confidential and are never shared for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Security of Your Information</h2>
            <p>
              We take reasonable measures to protect your personal information, but no method of transmission or storage is completely secure. Absolute security cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p>
              Under New York State law, you have rights including access, correction, deletion, and objection regarding your personal information.
            </p>
            <p className="mt-2">
              To exercise these rights or ask questions about our privacy practices, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in practices or legal requirements. Updated policies will be posted on our website with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>
              AtoZ RealEstatePro LLC<br/>
              6107 Thomas Dr.<br/>
              Springfield, VA 22150<br/>
              Tx-75078, USA
            </p>
            <p className="mt-2">
              Email: <a href="mailto:clients@azzrepro.com" className="text-blue-600 hover:underline">clients@azzrepro.com</a><br/>
              Phone: 
              <br/>
              <a href="tel:+15712026607" className="text-blue-600 hover:underline">571 202-6607</a><br/>
              <a href="tel:+12764447023" className="text-blue-600 hover:underline">276 444-7023</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;