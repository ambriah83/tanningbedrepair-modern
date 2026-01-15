'use client';

import { useState } from 'react';

export default function TextHelpBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg md:text-xl font-bold mb-1">
              NEED HELP? TEXT YOUR QUESTIONS OR PICTURE OF THE PART YOU'RE LOOKING FOR TO OUR TEXT LINE
            </p>
            <a
              href="sms:1-800-667-9189"
              className="text-2xl md:text-3xl font-bold hover:text-orange-300 transition"
            >
              1-800-667-9189
            </a>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:text-gray-300 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
