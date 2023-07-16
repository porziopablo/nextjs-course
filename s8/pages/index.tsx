// vendors
import React, { useState } from 'react';

// repositories
import { getFeedback, sendFeedback } from '@/repositories/feedback';

// types
import { Feedback } from '@/types/entities/feedback';

// components
import FeedbackForm from '@/components/feedback/Form';

function renderFeedbackItem(item: Feedback) {
  return (
    <li key={item.id}>
      {item.email} - {item.feedback}
    </li>
  );
}

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState<Feedback[]>([]);

  async function loadFeedbackHandler() {
    const feedback = await getFeedback();
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
