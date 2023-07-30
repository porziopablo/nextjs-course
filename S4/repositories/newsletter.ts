// types
import { API_ROUTES } from '@/types/internal/pages';
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

export async function subscribeToNewsletter(data: NewsletterSubscriptionData) {
  return fetch(API_ROUTES.NEWSLETTER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(async (response) => {
    if (response.ok) return response.json();

    return response.json().then((error) => {
      throw new Error(error?.message || 'Something went wrong.');
    });
  });
}
