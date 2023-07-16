// vendors
import React from 'react';

// types
import { Feedback } from '@/types/entities/feedback';

interface FeedbackItemProps {
  item: Feedback;
  onClick?: (id: string) => void;
}

function FeedbackItem(props: FeedbackItemProps) {
  const { item, onClick } = props;

  return (
    <li>
      {item.email} - {item.feedback}
      {onClick && <button onClick={() => onClick(item.id)}>See detail</button>}
    </li>
  );
}

export default FeedbackItem;
