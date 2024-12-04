export default defineNuxtPlugin(() => {
    console.log('Google Analytics plugin loaded');
    if (process.client && process.env.GOOGLE_ANALYTICS_ID) {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      console.log('Google Analytics ID:', process.env.GOOGLE_ANALYTICS_ID);
      gtag('js', new Date());
      gtag('config', process.env.GOOGLE_ANALYTICS_ID);
    }
  });
  