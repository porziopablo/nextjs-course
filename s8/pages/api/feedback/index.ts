// vendors
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// types
import { FeedbackRequest } from '@/types/requests/feedback';
import { Feedback } from '@/types/entities/feedback';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath: string) {
  const file = fs.readFileSync(filePath);
  const data: Feedback[] = JSON.parse(file.toString()) || [];

  return data;
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { email, feedback }: FeedbackRequest = req.body;

  const newFeedback: Feedback = {
    id: new Date().toISOString(), // just for dev purposes
    email,
    feedback,
  };

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  data.push(newFeedback);
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.status(201).json({ message: 'success', data: newFeedback });
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  res.status(200).json({ message: 'success', data });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      handlePost(req, res);
      break;
    case 'GET':
      handleGet(req, res);
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
