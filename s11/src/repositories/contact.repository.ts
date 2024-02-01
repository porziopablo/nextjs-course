// types
import { Message } from '@/interfaces/entities/message';
import { API_ROUTES } from '@/interfaces/internal/pages';
import { ContactRequest } from '@/interfaces/requests/contact';

export function sendContact(data: ContactRequest): Promise<Message> {
  return fetch(API_ROUTES.CONTACT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}
