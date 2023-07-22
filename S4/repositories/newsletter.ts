// types
import { API_ROUTES } from '@/types/internal/pages';
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

export function subscribeToNewsletter(data: NewsletterSubscriptionData) {
  fetch(API_ROUTES.NEWSLETTER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}
