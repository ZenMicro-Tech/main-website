'use client';

import React from 'react';
import { 
  trackButtonClickTest, 
  trackFormSubmissionTest, 
  trackContactSubmissionTest, 
  trackServiceInquiryTest,
  trackPageViewTest 
} from '@/lib/analytics.test';

const AnalyticsTestPanel = () => {
  const handleTestButtonClick = () => {
    trackButtonClickTest('Test Button', 'test_panel');
  };

  const handleTestFormSubmission = () => {
    trackFormSubmissionTest('test_form', true);
  };

  const handleTestContactSubmission = () => {
    trackContactSubmissionTest('test_contact');
  };

  const handleTestServiceInquiry = () => {
    trackServiceInquiryTest('Cloud Optimization Test');
  };

  const handleTestPageView = () => {
    trackPageViewTest(window.location.href, 'Test Page View');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h3 className="text-lg font-bold mb-4 text-yellow-400">🧪 Analytics Test Panel</h3>
      <div className="space-y-2">
        <button
          onClick={handleTestButtonClick}
          className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
        >
          Test Button Click
        </button>
        
        <button
          onClick={handleTestFormSubmission}
          className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 rounded text-sm"
        >
          Test Form Submit
        </button>
        
        <button
          onClick={handleTestContactSubmission}
          className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm"
        >
          Test Contact Submit
        </button>
        
        <button
          onClick={handleTestServiceInquiry}
          className="w-full px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded text-sm"
        >
          Test Service Inquiry
        </button>
        
        <button
          onClick={handleTestPageView}
          className="w-full px-3 py-2 bg-pink-600 hover:bg-pink-700 rounded text-sm"
        >
          Test Page View
        </button>
      </div>
      
      <div className="mt-4 text-xs text-gray-400">
        Open browser console to see tracking logs
      </div>
    </div>
  );
};

export default AnalyticsTestPanel;
