// vendors
import React, { useRef, useState } from 'react';

// types
import { NewCommentData } from '@/types/requests/comments';

// styles
import classes from './NewComment.module.css';

interface NewCommentProps {
  onAddComment: (commentData: NewCommentData) => void;
}

function NewComment(props: NewCommentProps) {
  const { onAddComment } = props;

  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  function sendCommentHandler(event: React.FormEvent) {
    event.preventDefault();

    const email = (emailInputRef.current?.value || '').trim();
    const username = (nameInputRef.current?.value || '').trim();
    const text = (commentInputRef.current?.value || '').trim();

    if (!email || !username || !text) return setIsInvalid(true);

    setIsInvalid(false);
    onAddComment({ email, username, text });
  }

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows={5} ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  );
}

export default NewComment;
