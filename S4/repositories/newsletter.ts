// types
import { API_ROUTES } from '@/types/internal/pages';
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

// helpers
import { throwErrorIfNotOk } from './helpers';

export async function subscribeToNewsletter(data: NewsletterSubscriptionData) {
  return fetch(API_ROUTES.NEWSLETTER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(throwErrorIfNotOk);
}
