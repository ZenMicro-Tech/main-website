'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export const usePageTracking = (pageTitle?: string) => {
  const pathname = usePathname();

  useEffect(() => {
    const title = pageTitle || document.title;
    const url = window.location.href;
    
    // Track page view
    trackPageView(url, title);
  }, [pathname, pageTitle]);
};

export default usePageTracking;
