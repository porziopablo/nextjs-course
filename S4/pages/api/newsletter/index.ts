// vendors
import type { NextApiRequest, NextApiResponse } from 'next';

// types
import { NewsletterSubscriptionData } from '@/types/requests/newsletter';

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const newsletterData: NewsletterSubscriptionData = req.body;

  console.log(newsletterData);

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
