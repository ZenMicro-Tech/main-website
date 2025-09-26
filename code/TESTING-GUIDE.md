# Google Tags Testing Guide

## 🧪 Testing Methods Overview

| Method | Use Case | When to Use |
|--------|----------|-------------|
| **Console Logging** | Development debugging | Before going live |
| **GTM Preview Mode** | Tag configuration testing | After GTM setup |
| **Browser Extensions** | Production verification | After deployment |
| **GA4 DebugView** | Real-time event testing | After GA4 setup |
| **Network Tab** | Script loading verification | Any time |

## 🚀 Method 1: Local Development Testing

### Step 1: Create Test Environment Variables
Create `.env.local` with test IDs:
```bash
# Test GTM ID (won't work but won't error)
NEXT_PUBLIC_GTM_ID=GTM-TEST123

# Test GA4 ID (won't work but won't error)  
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST123456
```

### Step 2: Add Test Panel to Your Layout
Temporarily add the test panel to your layout for easy testing:

```tsx
// In src/app/layout.tsx (temporary for testing)
import AnalyticsTestPanel from '@/components/AnalyticsTestPanel';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Your existing content */}
        {children}
        
        {/* Add this temporarily for testing */}
        {process.env.NODE_ENV === 'development' && <AnalyticsTestPanel />}
      </body>
    </html>
  );
}
```

### Step 3: Start Development Server and Test
```bash
npm run dev
```

1. **Open Browser Console** (F12 → Console tab)
2. **Navigate to your site** (http://localhost:3000)
3. **Click the test buttons** in the floating panel (bottom-right corner)
4. **Watch console logs** to verify events are firing

### Expected Console Output:
```
🎯 GA Event Tracked: {event: "click", parameters: {...}, timestamp: "..."}
📊 GTM Event Pushed: {event: "button_click", data: {...}, timestamp: "..."}
🖱️ Button Click Tracked: {buttonName: "Test Button", location: "test_panel", ...}
```

## 🔧 Method 2: Testing with Real GTM (Preview Mode)

### Step 1: Set Up Google Tag Manager
1. Create GTM account and container
2. Get your GTM ID (GTM-XXXXXXX)
3. Add to `.env.local`:
```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Step 2: Use GTM Preview Mode
1. **In GTM Dashboard**: Click "Preview" button
2. **Enter your website URL**: http://localhost:3000 (for dev) or your live URL
3. **GTM Debug Panel Opens**: Shows real-time tag firing
4. **Test your website**: Click buttons, submit forms
5. **Verify events**: Check if custom events appear in GTM debugger

## 🌐 Method 3: Browser Extensions (Production Testing)

### Recommended Extensions:
1. **Google Tag Assistant (Legacy)**
   - Install from Chrome Web Store
   - Shows GTM and GA tags on page
   - Indicates if tags are working correctly

2. **GA4 Debugger**
   - Shows Google Analytics events in real-time
   - Displays event parameters and values

3. **dataLayer Inspector**
   - Shows GTM dataLayer events
   - Real-time event monitoring

### How to Use:
1. **Install extensions**
2. **Navigate to your website**
3. **Click extension icons** to see tag status
4. **Test interactions** (forms, buttons)
5. **Verify events** appear in extension panels

## 📊 Method 4: Google Analytics DebugView

### Setup:
1. **In GA4 Property**: Go to Admin → DebugView
2. **Enable Debug Mode**: Install GA Debugger extension or add `debug_mode` parameter
3. **View Real-time Events**: See events as they happen

### Testing Process:
1. **Open DebugView** in GA4
2. **Navigate to your website**
3. **Perform test actions**:
   - Fill out contact form
   - Click CTA buttons  
   - Navigate between pages
4. **Watch events appear** in DebugView (may take 1-2 minutes)

## 🔍 Method 5: Network Tab Verification

### Browser Developer Tools:
1. **Open DevTools** (F12)
2. **Go to Network tab**
3. **Filter by "gtm" or "analytics"**
4. **Reload page** and perform actions
5. **Verify requests** are being sent to:
   - `googletagmanager.com/gtm.js`
   - `google-analytics.com/collect`
   - `analytics.google.com/g/collect`

## ✅ Testing Checklist

### Development Testing:
- [ ] Console logs appear when clicking test buttons
- [ ] No JavaScript errors in console
- [ ] GTM and GA scripts load without errors
- [ ] Test panel appears in development mode

### GTM Preview Testing:
- [ ] GTM debugger connects to your site
- [ ] Built-in GA4 Configuration tag fires on page load
- [ ] Custom events appear in debugger
- [ ] Event parameters are correctly passed

### Production Testing:
- [ ] Google Tag Assistant shows green status
- [ ] GA4 DebugView shows real-time events
- [ ] Network requests to Google servers succeed
- [ ] No console errors on live site

### Functional Testing:
- [ ] Contact form submission tracking works
- [ ] Hero CTA button clicks tracked
- [ ] Service inquiry buttons tracked  
- [ ] Page view tracking on route changes
- [ ] Failed form submissions tracked correctly

## 🐛 Common Issues & Solutions

### Issue: No events in console
**Solution**: Check that `.env.local` exists and has correct format

### Issue: "gtag is not defined" error
**Solution**: Ensure GTM ID is valid and GTM script loads first

### Issue: Events not appearing in GA4
**Solution**: Wait 24-48 hours, or use DebugView for real-time testing

### Issue: GTM Preview not connecting
**Solution**: Disable ad blockers, use incognito mode

## 🚀 Quick Test Commands

```bash
# Test in development
npm run dev

# Build and test production bundle
npm run build
npm start

# Test with different environments
NEXT_PUBLIC_GTM_ID=GTM-TEST123 npm run dev
```

## 📱 Mobile Testing

Test on different devices:
```bash
# Expose dev server to network for mobile testing
npm run dev -- --host 0.0.0.0

# Then access from mobile: http://YOUR_IP:3000
```

Remember to remove the `AnalyticsTestPanel` component before deploying to production!
