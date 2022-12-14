import './Comments.css'
import axios from 'axios'

export const getComments = async (resourceId) => {
  const res = await axios.get(
    `http://${process.env.REACT_APP_SERVER_URL}/comments/${resourceId}`
  )
  console.log(res.data)
  return res.data
}

export const createComment = async (resourceId, text, parentId = null) => {
  const res = await axios.post(`http://${process.env.REACT_APP_SERVER_URL}/comments/add`, { locationID: resourceId, comment: text, parentId })
  return res.data
}

export const updateComment = async (resourceId, text, commentId) => {
  return { text }
}

export const deleteComment = async (resourceId, commentId) => {
  return {}
}
