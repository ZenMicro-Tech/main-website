// Google Analytics and Google Ads Event Tracking Utilities
console.log('📊 Analytics module loaded successfully!');

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
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


// Common tracking events for your website
export const trackPageView = (url: string, title: string) => {
  trackGAEvent('page_view', {
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
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackGAEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    success: success,
  });
};

export const trackContactSubmission = (method: string) => {
  trackGAEvent('generate_lead', {
    event_category: 'conversion',
    event_label: method,
  });
};

export const trackServiceInquiry = (serviceName: string) => {
  trackGAEvent('service_inquiry', {
    event_category: 'conversion',
    event_label: serviceName,
  });
};

// Google Ads Conversion Tracking
export const trackGoogleAdsConversion = (
  conversionLabel: string,
  value?: number,
  currency: string = 'USD'
) => {
  // Console log for development testing
  if (process.env.NODE_ENV === 'development') {
    console.log('💰 Google Ads Conversion:', { conversionLabel, value, currency });
  }
  
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  
  if (typeof window !== 'undefined' && window.gtag && adsId) {
    window.gtag('event', 'conversion', {
      'send_to': `${adsId}/${conversionLabel}`,
      'value': value,
      'currency': currency,
    });
  }
};

// Track conversion (you'll get the label from Google Ads)
// If no conversion label is set, this will still track the event to Google Ads
export const trackConversion = (value?: number) => {
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  
  if (conversionLabel) {
    // Track with specific conversion label
    trackGoogleAdsConversion(conversionLabel, value);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ CONVERSION TRACKED:', { conversionLabel, value });
    }
  } else {
    // Track as generic event without conversion label
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'get_started_click', {
        event_category: 'engagement',
        value: value,
      });
      
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ EVENT TRACKED (no conversion label):', { event: 'get_started_click', value });
      }
    }
  }
};
