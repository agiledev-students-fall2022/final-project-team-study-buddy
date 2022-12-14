import './Comments.css'
import { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi
} from './api'

const Comments = ({ currentUserId }) => {
  const params = new URLSearchParams(window.location.search)
  const resId = params.get('resource_id')

  const resourceID = resId
  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments
    .filter((backendComment) => backendComment.parentId === null)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())

  const addComment = (text, parentId) => {
    createCommentApi(resourceID, text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }

  const updateComment = (text, commentId) => {
    updateCommentApi(resourceID, text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        return backendComment._id === commentId ? { ...backendComment, body: text } : backendComment
      })
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }

  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi(resourceID, commentId).then(() => {
        const updatedBackendComments = backendComments.filter(backendComment => backendComment._id !== commentId)
        setBackendComments(updatedBackendComments)
      })
    }
  }

  useEffect(() => {
    getCommentsApi(resourceID).then((data) => {
      setBackendComments(data)
      console.log(data)
    })
  }, [resourceID])

  return (
    <div className='comments'>
      <div className='comment-form-title'>Leave a comment!</div>
      <CommentForm submitLabel='Write' handleSubmit={addComment} />
      <div className='comments-container'>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments
