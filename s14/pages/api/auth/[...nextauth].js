import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDb } from '../../../helpers/db';
import { verifyPassword } from '../../../helpers/auth';

async function authorize(credentials) {
  let client;

  try {
    const { email, password } = credentials;

    if (!email || !password) throw new Error('Missing credentials');

    client = await connectToDb();

    const usersCollection = client.db().collection('users');
    const user = await usersCollection.findOne({ email });

    if (!user) throw new Error('User not found');

    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) throw new Error('Could not log in');

    return { email: user.email, userUid: user._id.toString() };
  } catch (error) {
    console.error(error);
    client?.close();
    throw error;
  }
}

const authHandler = NextAuth({
  session: { jwt: true },
  providers: [CredentialsProvider({ authorize })],
});

export default authHandler;
