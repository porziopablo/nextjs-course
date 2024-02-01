// helpers
import { hashPassword } from '../../../helpers/auth';
import { connectToDatabase } from '../../../helpers/db';

const MIN_PASSWORD_LENGTH = 7;

async function signUp(req, res) {
  let client;

  try {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      !password.trim().length < MIN_PASSWORD_LENGTH
    ) {
      return res.status(422).json({ message: 'Invalid input' });
    }

    const hashedPassword = await hashPassword(password);

    client = await connectToDatabase();
    const db = client.db();
    const result = await db
      .collection('users')
      .insertOne({ email, password: hashedPassword });

    const userUid = result.insertedId.toString();

    res.status(201).json({ message: 'success', data: userUid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    client?.close();
  }
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      await signUp(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
