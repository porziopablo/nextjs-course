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

// context
import useNotificationContext, {
  NotificationStatus,
} from '@/context/NotificationContext';

// styles
import classes from './Comments.module.css';

interface CommentsProps {
  eventId: string;
}

function Comments(props: CommentsProps) {
  const { eventId } = props;

  const { showNotification } = useNotificationContext();
  const [showComments, setShowComments] = useState(false);
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  function fetchComments() {
    setIsFetchingComments(true);
    getComments(eventId)
      .then(setComments)
      .then(() => setIsFetchingComments(false))
      .catch((error) => {
        console.error(error);
        setIsFetchingComments(false);
        showNotification({
          title: 'Error!',
          message: 'Comments could not be loaded',
          status: NotificationStatus.Error,
        });
      });
  }

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData: NewCommentData) {
    try {
      showNotification({
        title: 'Sending comment...',
        message: 'Please await',
        status: NotificationStatus.Pending,
      });
      const comment = await sendComment(eventId, commentData);
      setComments((prevComments) => [...prevComments, comment]);
      showNotification({
        title: 'Success!',
        message: 'Comment was sent successfully',
        status: NotificationStatus.Success,
      });
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Error!',
        message: 'Something went wrong',
        status: NotificationStatus.Error,
      });
    }
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
      {showComments && isFetchingComments && <p>Loading...</p>}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
