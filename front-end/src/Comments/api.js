import "./Comments.css";
import axios from 'axios';

export const getComments = async (resourceId) => {
  let res = await axios.get(`http://localhost:3001/comments/${resourceId}`)
  console.log(res.data)
  return res.data;
};

export const createComment = async (resourceId, userId, username, text, parentId = null) => {
  let res = await axios.post(`http://localhost:3001/comments/add`, { locationID: resourceId, userId: userId, username: username, comment: text, parentId: parentId });
  console.log(res);
  return res.data;
};

export const updateComment = async (resourceId, text, commentId) => {
  return { text };
};

export const deleteComment = async (resourceId, commentId) => {
  return {};
};