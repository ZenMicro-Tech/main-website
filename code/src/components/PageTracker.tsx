'use client';

import { usePageTracking } from '@/hooks/usePageTracking';

interface PageTrackerProps {
  pageTitle?: string;
}

const PageTracker = ({ pageTitle }: PageTrackerProps) => {
  usePageTracking(pageTitle);
  return null; // This component doesn't render anything
};

export default PageTracker;
