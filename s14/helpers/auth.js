import { hash } from 'bcryptjs';

const SALT_ROUNDS = 12;

export async function hashPassword(password) {
  const hashedPassword = await hash(password, SALT_ROUNDS);
  return hashedPassword;
}
