// vendors
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

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

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'success', data: DUMMY_COMMENTS });
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const eventId = req.query.eventId as string;
    const commentData: NewCommentData = req.body;
    const { email = '', username = '', text = '' } = commentData;

    if (!email.includes('@') || !username.trim() || !text.trim()) {
      return res.status(422).json({ message: 'Invalid request' });
    }

    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI as string
    );
    const db = client.db('events');
    const collection = db.collection('comments');
    const result = await collection.insertOne({ eventId, ...commentData });

    const data: Comment = {
      id: result.insertedId.toString(),
      eventId,
      ...commentData,
    };

    res.status(201).json({ message: 'success', data });
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      await handleGet(req, res);
      break;
    case 'POST':
      await handlePost(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
