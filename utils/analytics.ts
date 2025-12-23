
export type MessengerPlatform = 'telegram' | 'whatsapp' | 'wechat' | 'email';
export type ClickLocation = 'header' | 'hero' | 'contact_section' | 'footer';

/**
 * Tracks a lead generation event (click on messenger)
 * Sends data to both Google Analytics 4 and Yandex Metrica
 */
export const trackLead = (platform: MessengerPlatform, location: ClickLocation) => {
  // 1. Google Analytics 4 Event
  // We use 'generate_lead' as it's a standard Google recommended event for ads optimization
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', {
      'messenger_platform': platform,
      'click_location': location,
      'event_category': 'conversion',
      'event_label': `${platform}_${location}`
    });
    console.debug(`[Analytics] GA4 lead tracked: ${platform} at ${location}`);
  }

  // 2. Yandex Metrica Event
  // Replace 105783207 with your actual Yandex ID if it changes
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(105783207, 'reachGoal', 'messenger_click', {
      platform: platform,
      location: location
    });
    console.debug(`[Analytics] YM lead tracked: messenger_click`);
  }
};
