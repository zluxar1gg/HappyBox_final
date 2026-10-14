
export type MessengerPlatform = 'telegram' | 'whatsapp' | 'wechat' | 'email';
export type ClickLocation = 'header' | 'hero' | 'contact_section' | 'footer' | 'floating' | 'blog_cta' | 'blog_inline_cta';
export type InteractionType = 'click' | 'hover' | 'copy';

/**
 * Tracks a lead generation event with detailed metadata.
 * Optimized for GA4 'contact_interaction' event.
 */
export const trackLead = (
  platform: MessengerPlatform, 
  location: ClickLocation, 
  action: InteractionType = 'click'
) => {
  // Styles for console debugging
  const colors = {
    click: 'background: #2397d0; color: white',
    hover: 'background: #fff176; color: black',
    copy: 'background: #07C160; color: white'
  };

  // 1. Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'contact_interaction', {
      'messenger_platform': platform,
      'interaction_type': action,
      'click_location': location,
      'event_category': 'conversion',
      // Value helps GA4 identify importance
      'value': action === 'click' ? 1.0 : 0.2 
    });
    
    console.log(
      `%c[GA4 Event]%c ${platform.toUpperCase()} | ${action.toUpperCase()} | ${location}`,
      colors[action] || '',
      'font-weight: bold; color: inherit'
    );
  }

  // 2. Yandex Metrica (ID: 105783207)
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(105783207, 'reachGoal', 'messenger_click', {
      platform,
      action,
      location
    });
  }
};

/**
 * Tracks calculator price estimate calculation event.
 * Optimized for GA4 'calculator_estimate' key event.
 */
export const trackCalculator = (
  country: string,
  weightKg: number,
  method: string,
  estimatedPrice: number
) => {
  // 1. Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'calculator_estimate', {
      'calc_country': country,
      'calc_weight_kg': Math.round(weightKg * 10) / 10,
      'calc_shipping_method': method,
      'calc_estimated_price': estimatedPrice,
      'event_category': 'engagement',
      'value': estimatedPrice
    });

    console.log(`%c[GA4 Event] CALCULATOR_ESTIMATE: ${country} | ${weightKg}kg | ${method} | $${estimatedPrice}`, 'background: #f59e0b; color: black; font-weight: bold');
  }

  // 2. Yandex Metrica (ID: 105783207)
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(105783207, 'reachGoal', 'calculator_estimate', {
      country,
      weightKg,
      method,
      estimatedPrice
    });
  }

  // 3. Microsoft Clarity
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('set', 'calc_country', country);
    (window as any).clarity('set', 'calc_method', method);
  }
};

/**
 * Tracks shipping quiz completion event.
 * Optimized for GA4 'quiz_complete' key event.
 */
export const trackQuiz = (
  country?: string,
  category?: string,
  weight?: string,
  recommendedMethod?: string
) => {
  // 1. Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'quiz_complete', {
      'quiz_country': country || 'unknown',
      'quiz_category': category || 'general',
      'quiz_weight': weight || 'standard',
      'quiz_recommended_method': recommendedMethod || 'air',
      'event_category': 'engagement',
      'value': 1.0
    });

    console.log(`%c[GA4 Event] QUIZ_COMPLETE: ${country} | ${recommendedMethod}`, 'background: #10b981; color: white; font-weight: bold');
  }

  // 2. Yandex Metrica (ID: 105783207)
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(105783207, 'reachGoal', 'quiz_complete', {
      country,
      category,
      weight,
      recommendedMethod
    });
  }
};

