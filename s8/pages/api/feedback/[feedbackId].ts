// vendors
import type { NextApiRequest, NextApiResponse } from 'next';

// utils
import { buildFeedbackPath, extractFeedback } from './index';

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const item = data.find((item) => item.id === req.query.feedbackId);

  if (!item) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json({ message: 'success', data: item });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      handleGet(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
