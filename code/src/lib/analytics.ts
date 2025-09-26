// Google Analytics and GTM Event Tracking Utilities
console.log('📊 Analytics module loaded successfully!');

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer?: any[];
  }
}

// Track events to Google Analytics
export const trackGAEvent = (
  eventName: string,
  parameters?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  // Console log for development testing
  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 GA Event:', { eventName, parameters });
  }
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Push events to Google Tag Manager dataLayer
export const trackGTMEvent = (
  eventName: string,
  eventData?: { [key: string]: any }
) => {
  // Console log for development testing
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 GTM Event:', { eventName, eventData });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

// Common tracking events for your website
export const trackPageView = (url: string, title: string) => {
  trackGAEvent('page_view', {
    page_title: title,
    page_location: url,
  });
  
  trackGTMEvent('page_view', {
    page_title: title,
    page_location: url,
  });
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  // Console log for development testing
  if (process.env.NODE_ENV === 'development') {
    console.log('🖱️ BUTTON CLICKED:', { buttonName, location, timestamp: new Date().toISOString() });
  }
  
  trackGAEvent('click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: location,
  });
  
  trackGTMEvent('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackGAEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    success: success,
  });
  
  trackGTMEvent('form_submission', {
    form_name: formName,
    success: success,
  });
};

export const trackContactSubmission = (method: string) => {
  trackGAEvent('generate_lead', {
    event_category: 'conversion',
    event_label: method,
  });
  
  trackGTMEvent('contact_submission', {
    contact_method: method,
  });
};

export const trackServiceInquiry = (serviceName: string) => {
  trackGAEvent('service_inquiry', {
    event_category: 'conversion',
    event_label: serviceName,
  });
  
  trackGTMEvent('service_inquiry', {
    service_name: serviceName,
  });
};
