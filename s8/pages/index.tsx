// vendors
import React, { useState } from 'react';

// repositories
import { getAllFeedback, sendFeedback } from '@/repositories/feedback';

// types
import { Feedback } from '@/types/entities/feedback';

// components
import FeedbackForm from '@/components/feedback/Form';
import FeedbackItem from '@/components/feedback/FeedbackItem';

function renderFeedbackItem(item: Feedback) {
  return <FeedbackItem key={item.id} item={item} />;
}

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState<Feedback[]>([]);

  async function loadFeedbackHandler() {
    const feedback = await getAllFeedback();
    setFeedbackItems(feedback);
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <FeedbackForm onSubmit={sendFeedback} />
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>{feedbackItems.map(renderFeedbackItem)}</ul>
    </div>
  );
}

export default HomePage;
