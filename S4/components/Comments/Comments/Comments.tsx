// vendors
import React, { useState } from 'react';

// components
import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';

// types
import { CommentData } from '@/types/requests/comments';

// styles
import classes from './Comments.module.css';

interface CommentsProps {
  eventId: string;
}

function Comments(props: CommentsProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: CommentData) {
    // send data to API
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
