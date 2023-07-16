// types
import { Feedback } from '@/types/entities/feedback';
import { API_ROUTES } from '@/types/internal/pages';
import { FeedbackRequest } from '@/types/requests/feedback';

export function sendFeedback(data: FeedbackRequest) {
  fetch(API_ROUTES.FEEDBACK, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getFeedback(): Promise<Feedback[]> {
  return fetch(API_ROUTES.FEEDBACK)
    .then((res) => res.json())
    .then((data) => data.data);
}
