// vendors
import React from 'react';

// types
import { Feedback } from '@/types/entities/feedback';

interface FeedbackItemProps {
  item: Feedback;
}

function FeedbackItem(props: FeedbackItemProps) {
  const { item } = props;

  return (
    <li>
      {item.email} - {item.feedback}
    </li>
  );
}

export default FeedbackItem;
