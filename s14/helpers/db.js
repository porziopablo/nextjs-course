// vendors
import { MongoClient } from 'mongodb';

export async function connectToDb() {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
  return client;
}
