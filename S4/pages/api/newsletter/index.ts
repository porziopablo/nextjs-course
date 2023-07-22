// vendors
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// types
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | undefined;
  try {
    const { email }: NewsletterSubscriptionData = req.body;

    if (!email?.includes('@')) {
      return res.status(422).json({ message: 'Invalid email' });
    }

    client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI as string
    );
    const db = client.db('events');
    const collection = db.collection('newsletter');

    await collection.insertOne({ email });

    res.status(201).json({ message: 'success' });
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
    case 'POST':
      await handlePost(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
