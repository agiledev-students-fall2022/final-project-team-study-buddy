import "./Comments.css";
import axios from "axios";

export const getComments = async (resourceId) => {
  let res = await axios.get(
    `http://${process.env.REACT_APP_SERVER_URL}/comments/${resourceId}`
  );
  console.log(res.data);
  return res.data;
};

export const createComment = async (
  resourceId,
  userId,
  username,
  text,
  parentId = null
) => {
  let res = await axios.post(
    `http://${process.env.REACT_APP_SERVER_URL}/comments/add`,
    {
      locationID: resourceId,
      userId: userId,
      username: username,
      comment: text,
      parentId: parentId,
    }
  );
  console.log(res);
  return res.data;
};

export const updateComment = async (resourceId, text, commentId) => {
  return { text };
};

export const deleteComment = async (resourceId, commentId) => {
  return {};
};
