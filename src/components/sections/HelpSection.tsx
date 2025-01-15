import React from 'react';
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

export default function HelpSection() {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your email.',
    },
    {
      question: 'How can I update my profile?',
      answer: 'Go to Settings > Profile and click on the Edit button to update your information.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security measures to protect your data.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <HelpCircle className="mr-2" />
          Help Center
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg">
            <Book className="text-blue-600 mb-2" size={24} />
            <h3 className="font-semibold mb-1">Documentation</h3>
            <p className="text-sm text-gray-600">Browse our detailed guides and documentation</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <MessageCircle className="text-green-600 mb-2" size={24} />
            <h3 className="font-semibold mb-1">Community</h3>
            <p className="text-sm text-gray-600">Join our community forums for support</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <Phone className="text-purple-600 mb-2" size={24} />
            <h3 className="font-semibold mb-1">Contact Support</h3>
            <p className="text-sm text-gray-600">Get in touch with our support team</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}