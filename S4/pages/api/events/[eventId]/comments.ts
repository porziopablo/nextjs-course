// vendors
import type { NextApiRequest, NextApiResponse } from 'next';

// types
import { NewCommentData } from '@/types/requests/comments';
import { Comment } from '@/types/entities/comments';

const DUMMY_COMMENTS: Comment[] = [
  {
    id: 'c1',
    eventId: 'e1',
    email: 'max@gmai.com',
    username: 'Max',
    text: 'A first comment!',
  },
  {
    id: 'c2',
    eventId: 'e1',
    email: 'manuel@gmail.com',
    username: 'Manuel',
    text: 'A second comment!',
  },
];

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'success', data: DUMMY_COMMENTS });
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;
  const commentData: NewCommentData = req.body;
  const { email = '', username = '', text = '' } = commentData;

  if (!email.includes('@') || !username.trim() || !text.trim()) {
    return res.status(422).json({ message: 'Invalid request' });
  }

  const newComment = {
    id: new Date().toISOString(),
    eventId,
    ...commentData,
  };

  console.log(newComment);

  res.status(201).json({ message: 'success', data: newComment });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      handleGet(req, res);
      break;
    case 'POST':
      handlePost(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
