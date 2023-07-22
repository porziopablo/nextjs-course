// vendors
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// types
import { NewCommentData } from '@/types/requests/comments';
import { Comment } from '@/types/entities/comments';

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | undefined;
  try {
    const eventId = req.query.eventId as string;
    client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI as string
    );
    const db = client.db('events');
    const collection = db.collection('comments');

    const results = await collection
      .find({ eventId })
      .sort({ _id: -1 })
      .toArray();

    const data = results.map((result) => ({
      ...result,
      id: result._id.toString(),
    }));

    res.status(200).json({ message: 'success', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    client?.close();
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | undefined;
  try {
    const eventId = req.query.eventId as string;
    const commentData: NewCommentData = req.body;
    const { email = '', username = '', text = '' } = commentData;

    if (!email.includes('@') || !username.trim() || !text.trim()) {
      return res.status(422).json({ message: 'Invalid request' });
    }

    client = await MongoClient.connect(
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    client?.close();
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
