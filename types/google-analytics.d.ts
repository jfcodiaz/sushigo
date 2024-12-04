import '@nuxt/schema';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    googleAnalytics?: {
      id: string; // Propiedad esperada para Google Analytics
    };
  }
}
