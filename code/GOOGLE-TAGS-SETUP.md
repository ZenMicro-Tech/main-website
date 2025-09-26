# Google Tags Setup Guide for ZenMicro Website

## 🎯 Overview
This guide will help you set up Google Tag Manager and Google Analytics for comprehensive ad tracking and conversion measurement on your ZenMicro website.

## 📋 Prerequisites
- Google Account
- Website deployed and accessible

## 🚀 Step 1: Create Google Tag Manager Account

1. **Go to Google Tag Manager**: [https://tagmanager.google.com](https://tagmanager.google.com)
2. **Create Account**:
   - Account Name: `ZenMicro`
   - Container Name: `ZenMicro Website`
   - Target Platform: `Web`
3. **Copy Your GTM ID**: Format will be `GTM-XXXXXXX`

## 📊 Step 2: Create Google Analytics Account

1. **Go to Google Analytics**: [https://analytics.google.com](https://analytics.google.com)
2. **Create Account**:
   - Account Name: `ZenMicro`
   - Property Name: `ZenMicro Website`
   - Choose `GA4` (Google Analytics 4)
3. **Add Data Stream**:
   - Choose `Web`
   - Enter your website URL
4. **Copy Your Measurement ID**: Format will be `G-XXXXXXXXXX`

## 🔧 Step 3: Configure Environment Variables

1. **Create `.env.local` file** in your project root:
```bash
# Google Tag Manager ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. **Replace the X's** with your actual IDs from Steps 1 and 2

## ✅ Step 4: Verify Installation

1. **Deploy your website** with the environment variables
2. **Open your website** in a browser
3. **Check Browser Console**: Look for GTM and GA scripts loading
4. **Use Browser Extensions**:
   - Install "Google Tag Assistant" Chrome extension
   - Install "GA Debugger" Chrome extension
   - Visit your site and verify tags are firing

## 📈 Step 5: Set Up Key Tracking Events in GTM

### 5.1 Contact Form Submissions
- **Event Name**: `contact_submission`
- **Trigger**: Custom Event with event name `contact_submission`
- **Variables**: `contact_method`

### 5.2 Service Inquiries
- **Event Name**: `service_inquiry`
- **Trigger**: Custom Event with event name `service_inquiry`
- **Variables**: `service_name`

### 5.3 Button Clicks
- **Event Name**: `button_click`
- **Trigger**: Custom Event with event name `button_click`
- **Variables**: `button_name`, `button_location`

## 🎯 Step 6: Set Up Conversion Goals

### In Google Analytics:
1. Go to **Admin** → **Events** → **Create Event**
2. Create conversion events for:
   - `contact_submission` (Lead Generation)
   - `service_inquiry` (Service Interest)
   - `form_submit` (Form Completions)

### In Google Ads (if using):
1. Go to **Tools & Settings** → **Conversions**
2. Import conversions from Google Analytics
3. Set up conversion tracking for ad campaigns

## 🔍 Currently Tracked Events

| Event | Description | Location | Data Captured |
|-------|-------------|----------|---------------|
| **Form Submissions** | Contact form completions | Contact.tsx, AboutContact.tsx | Form name, success/failure |
| **CTA Button Clicks** | Hero section buttons | Hero.tsx | Button name, location |
| **Service Interactions** | Service icon/button clicks | Services.tsx | Service name, action type |
| **Page Views** | Automatic page tracking | All pages | Page title, URL |

## 🛠 Available Tracking Functions

```typescript
// Import in any component
import { 
  trackButtonClick, 
  trackFormSubmission, 
  trackServiceInquiry, 
  trackContactSubmission 
} from '@/lib/analytics';

// Usage examples
trackButtonClick('Get Quote', 'pricing_page');
trackFormSubmission('newsletter', true);
trackServiceInquiry('Cloud Optimization');
trackContactSubmission('contact_form');
```

## 🔧 Troubleshooting

### No Events Firing
1. Check environment variables are set correctly
2. Verify GTM container is published
3. Check browser console for errors

### Events Not in GA4
1. Wait 24-48 hours for data to appear
2. Check GTM preview mode
3. Verify GA4 configuration tag is firing

### Development vs Production
- Events will only fire when environment variables are set
- Use different GTM containers for dev/staging/production if needed

## 📊 Analytics Dashboard Setup

### Key Metrics to Track:
1. **Conversions**: Form submissions, service inquiries
2. **Engagement**: Button clicks, page views, session duration
3. **Sources**: Where your best leads come from
4. **Funnel**: Homepage → Services → Contact form completion

### Recommended GA4 Reports:
- **Acquisition** → **Traffic acquisition**
- **Engagement** → **Events**
- **Monetization** → **Conversions**

## 🎯 Ad Campaign Optimization

With this setup, you can:
1. **Track ROI**: See which ads drive actual conversions
2. **Create Audiences**: Retarget people who visited services pages
3. **Optimize Campaigns**: Focus budget on highest-converting sources
4. **A/B Test**: Track which page versions perform better

## 🔒 Privacy Considerations

- All tracking respects user privacy
- Consider adding cookie consent banner for GDPR compliance
- Analytics data is anonymized by default
- Users can opt-out via browser settings

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Use GTM preview mode to debug
3. Verify environment variables are correctly set
4. Test tracking in incognito mode

---

**Next Steps**: Once set up, monitor your analytics dashboard daily and use the insights to optimize your marketing campaigns and website performance!
