'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-600 mb-4">500</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
          <p className="text-lg text-gray-600 mb-8">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium mr-4"
          >
            Try Again
          </button>
          
          <Link 
            href="/"
            className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500 mt-4">
            <Link href="/contact-us" className="hover:text-red-600">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
