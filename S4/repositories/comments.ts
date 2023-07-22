// types
import { Comment } from '@/types/entities/comments';
import { API_PARAMS, API_ROUTES } from '@/types/internal/pages';
import { NewCommentData } from '@/types/requests/comments';

export async function sendComment(
  eventId: string,
  data: NewCommentData
): Promise<Comment> {
  return fetch(API_ROUTES.COMMENTS.replace(API_PARAMS.EVENT_ID, eventId), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => data.data);
}

export async function getComments(eventId: string): Promise<Comment[]> {
  return fetch(API_ROUTES.COMMENTS.replace(API_PARAMS.EVENT_ID, eventId))
    .then((res) => res.json())
    .then((data) => data.data);
}
