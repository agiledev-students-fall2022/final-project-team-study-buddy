import "./Comments.css";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const params = new URLSearchParams(window.location.search);
  const resourceID = params.get('resource_id');

  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const jsxComments = [];
  let rootComments = [];

  const getReplies = commentId => {
    backendComments
      .filter(backendComment => backendComment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }
  
  const addComment = (text, parentId) => {
    createCommentApi(resourceID, text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map(backendComment => {
        return backendComment.id === commentId ? { ...backendComment, body: text } : backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId);
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi(resourceID).then((data) => {
      setBackendComments(data.comments);
      rootComments = backendComments.filter(backendComment => backendComment.parentId === null);
      rootComments.forEach(comment => {
        // console.log('GOT HERE');
        jsxComments.push(
          <Comment
            key={comment.id}
            comment={comment}
            replies={getReplies(comment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        );
      });
      // console.log(jsxComments);
    });
  }, []);

  return (
    <div className="comments">
      <div className="comments-title">COMMENTS</div>
      <div className="comment-form-title">leave comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {jsxComments}
      </div>
    </div>
  );
};

export default Comments;