// Test version of analytics functions with console logging
// Use this for development testing

// Test analytics functions - separate from main analytics to avoid conflicts

// Enhanced tracking functions with console logging
export const trackGAEventTest = (
  eventName: string,
  parameters?: { [key: string]: any }
) => {
  console.log('🎯 GA Event Tracked:', {
    event: eventName,
    parameters,
    timestamp: new Date().toISOString(),
  });
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackGTMEventTest = (
  eventName: string,
  eventData?: { [key: string]: any }
) => {
  console.log('📊 GTM Event Pushed:', {
    event: eventName,
    data: eventData,
    timestamp: new Date().toISOString(),
  });
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

export const trackButtonClickTest = (buttonName: string, location?: string) => {
  console.log('🖱️ Button Click Tracked:', {
    buttonName,
    location,
    url: window.location.href,
    timestamp: new Date().toISOString(),
  });
  
  trackGAEventTest('click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: location,
  });
  
  trackGTMEventTest('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

export const trackFormSubmissionTest = (formName: string, success: boolean = true) => {
  console.log('📝 Form Submission Tracked:', {
    formName,
    success,
    url: window.location.href,
    timestamp: new Date().toISOString(),
  });
  
  trackGAEventTest('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    success: success,
  });
  
  trackGTMEventTest('form_submission', {
    form_name: formName,
    success: success,
  });
};

export const trackContactSubmissionTest = (method: string) => {
  console.log('📞 Contact Submission Tracked:', {
    method,
    url: window.location.href,
    timestamp: new Date().toISOString(),
  });
  
  trackGAEventTest('generate_lead', {
    event_category: 'conversion',
    event_label: method,
  });
  
  trackGTMEventTest('contact_submission', {
    contact_method: method,
  });
};

export const trackServiceInquiryTest = (serviceName: string) => {
  console.log('🔍 Service Inquiry Tracked:', {
    serviceName,
    url: window.location.href,
    timestamp: new Date().toISOString(),
  });
  
  trackGAEventTest('service_inquiry', {
    event_category: 'conversion',
    event_label: serviceName,
  });
  
  trackGTMEventTest('service_inquiry', {
    service_name: serviceName,
  });
};

export const trackPageViewTest = (url: string, title: string) => {
  console.log('📄 Page View Tracked:', {
    url,
    title,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
  });
  
  trackGAEventTest('page_view', {
    page_title: title,
    page_location: url,
  });
  
  trackGTMEventTest('page_view', {
    page_title: title,
    page_location: url,
  });
};
