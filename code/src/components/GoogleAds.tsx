'use client'

import Script from 'next/script'

interface GoogleAdsProps {
  conversionId: string
}

const GoogleAds = ({ conversionId }: GoogleAdsProps) => {
  return (
    <>
      {/* Google tag (gtag.js) - Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${conversionId}');
          `,
        }}
      />
    </>
  )
}

export default GoogleAds
