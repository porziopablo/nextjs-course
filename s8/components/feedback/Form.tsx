// vendors
import React, { useRef } from 'react';

// types
import { FeedbackRequest } from '@/types/requests/feedback';

interface FeedbackFormProps {
  onSubmit: (data: FeedbackRequest) => void;
}

function FeedbackForm(props: FeedbackFormProps) {
  const { onSubmit } = props;

  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();

    const email = emailInputRef.current?.value;
    const feedback = feedbackInputRef.current?.value;

    // could validate here
    if (!email || !feedback) return;

    onSubmit({ email, feedback });
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="input">
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div className="input">
        <label htmlFor="feedback">Your Feedback</label>
        <textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
      </div>
      <button>Send Feedback</button>
    </form>
  );
}

export default FeedbackForm;
