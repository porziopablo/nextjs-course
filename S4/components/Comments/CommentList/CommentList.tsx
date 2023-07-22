// vendors
import React from 'react';

// types
import { Comment } from '@/types/entities/comments';

// styles
import classes from './CommentList.module.css';

interface CommentProps {
  comment: Comment;
}

export function Comment({ comment }: CommentProps) {
  const { username, email, text, id } = comment;
  return (
    <li>
      <p>{text}</p>
      <div>
        By <address>{`${username} - ${email}`}</address>
      </div>
    </li>
  );
}

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments = [] }: CommentListProps) {
  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
