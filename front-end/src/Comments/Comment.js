import './Comments.css'
import CommentForm from './CommentForm'
import userIcon from './user-icon.png'

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId
}) => {
  const isEditing =
    activeComment &&
    activeComment._id === comment._id &&
    activeComment.type === 'editing'
  const isReplying =
    activeComment &&
    activeComment._id === comment._id &&
    activeComment.type === 'replying'
  const fiveMinutes = 300000
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes
  const canDelete =
    currentUserId === comment._id && replies.length === 0 && !timePassed
  const canReply = Boolean(currentUserId)
  const canEdit = currentUserId === comment._id && !timePassed
  const replyId = parentId || comment._id
  const createdAt = new Date(comment.createdAt).toLocaleDateString()
  return (
    <div key={comment._id} className='comment'>
      <div className='comment-image-container'>
        <img src={userIcon} alt='User Icon' />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'>{comment.username}</div>
          <div className='comment-date'>{createdAt}</div>
        </div>
        {!isEditing && <div className='comment-text'>{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel='Update'
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment._id)}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}
        <div className='comment-actions'>
          {canReply && (
            <div
              className='comment-action'
              onClick={() =>
                setActiveComment({ _id: comment._id, type: 'replying' })}
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className='comment-action'
              onClick={() =>
                setActiveComment({ _id: comment._id, type: 'editing' })}
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className='comment-action'
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel='Reply'
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className='replies'>
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment
