// vendors
import type { NextApiRequest, NextApiResponse } from 'next';

// types
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { email }: NewsletterSubscriptionData = req.body;

  if (!email?.includes('@')) {
    return res.status(422).json({ message: 'Invalid email' });
  }

  console.log({ email });

  res.status(201).json({ message: 'success' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      handlePost(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
