// vendors
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// types
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email }: NewsletterSubscriptionData = req.body;

    if (!email?.includes('@')) {
      return res.status(422).json({ message: 'Invalid email' });
    }

    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI as string
    );
    const db = client.db('newsletter');
    const collection = db.collection('emails');

    await collection.insertOne({ email });

    await client.close();

    res.status(201).json({ message: 'success' });
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
    case 'POST':
      await handlePost(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
