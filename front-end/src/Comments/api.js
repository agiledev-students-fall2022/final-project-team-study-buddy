import "./Comments.css";
import axios from 'axios';

export const getComments = async (resourceID) => {
  let res = await axios.get(`http://localhost:3001/comments/${resourceID}`)
  return res.data;
};

export const createComment = async (resourceID, text, parentId = null) => {
  let res = await axios.post(`http://localhost:3001/comments/${resourceID}/add`, { comment: text, parentId: parentId });
  return res.data;
};

export const updateComment = async (text) => {
  //return { text };
};

export const deleteComment = async () => {
  //return {};
};