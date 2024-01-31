// types
import { Message } from '@/types/entities/message';
import { API_ROUTES } from '@/types/internal/pages';
import { ContactRequest } from '@/types/requests/contact';

export function sendContact(data: ContactRequest): Promise<Message> {
  return fetch(API_ROUTES.CONTACT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}
