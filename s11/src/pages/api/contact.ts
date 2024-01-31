// vendors
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// types
import { ContactRequest } from '@/types/requests/contact';
import { Message } from '@/types/entities/message';

async function handleAddContact(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | undefined;

  try {
    const { email, name, message }: ContactRequest = req.body;

    if (!email?.trim() || !name?.trim() || !message?.trim()) {
      return res.status(422).json({ message: 'Invalid input' });
    }

    const newMessage = { email, name, message };

    client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI as string
    );
    const result = await client
      .db('events')
      .collection('contacts')
      .insertOne(newMessage);

    const data: Message = { id: result.insertedId.toString(), ...newMessage };

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
    case 'POST':
      await handleAddContact(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
