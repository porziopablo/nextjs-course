// vendors
import React, { useState, useEffect } from 'react';

// components
import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';

// types
import { NewCommentData } from '@/types/requests/comments';
import { Comment } from '@/types/entities/comments';

// repositories
import { getComments, sendComment } from '@/repositories/comments';

// styles
import classes from './Comments.module.css';

interface CommentsProps {
  eventId: string;
}

function Comments(props: CommentsProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  function fetchComments() {
    getComments(eventId).then(setComments);
  }

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData: NewCommentData) {
    const comment = await sendComment(eventId, commentData);
    setComments((prevComments) => [...prevComments, comment]);
  }

  useEffect(() => {
    showComments && fetchComments();
  }, [showComments]);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
