// vendors
import React from 'react';

// components
import FeedbackItem from '@/components/feedback/FeedbackItem';

// types
import { Feedback } from '@/types/entities/feedback';

// api
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

interface FeedbackPageProps {
  feedbackItems: Feedback[];
}

function renderItem(item: Feedback) {
  return <FeedbackItem key={item.id} item={item} />;
}

export default function FeedbackPage(props: FeedbackPageProps) {
  const { feedbackItems } = props;
  return <ul>{feedbackItems.map(renderItem)}</ul>;
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const feedbackItems = extractFeedback(filePath);
  return { props: { feedbackItems }, revalidate: 60 };
}
