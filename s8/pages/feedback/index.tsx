// vendors
import React, { useState } from 'react';

// components
import FeedbackItem from '@/components/feedback/FeedbackItem';

// types
import { Feedback } from '@/types/entities/feedback';

// api
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

// repositories
import { getFeedbackById } from '@/repositories/feedback';

interface FeedbackPageProps {
  feedbackItems: Feedback[];
}

export default function FeedbackPage(props: FeedbackPageProps) {
  const { feedbackItems } = props;

  const [feedbackData, setFeedbackData] = useState<Feedback>();

  async function loadDetailHandler(id: string) {
    const feedback = await getFeedbackById(id);
    setFeedbackData(feedback);
  }

  function renderItem(item: Feedback) {
    return (
      <FeedbackItem key={item.id} item={item} onClick={loadDetailHandler} />
    );
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.id}</p>}
      <ul>{feedbackItems.map(renderItem)}</ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const feedbackItems = extractFeedback(filePath);
  return { props: { feedbackItems }, revalidate: 60 };
}
