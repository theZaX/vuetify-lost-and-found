import { users } from "./fakeDatabase";

import axios from "axios";

export const getAllLostItems = async () => {
  // add a query parameter to the url of type lost
  const response = await axios.get("/api/items", {
    params: {
      type: "lost",
    },
  });

  return response.data;
};
export const getAllFoundItems = async () => {
  // add a query parameter to the url of type lost
  const response = await axios.get("/api/items", {
    params: {
      type: "found",
    },
  });

  return response.data;
};

export const getLostItemsByUser = async (userId) => {
  const response = await axios.get("/api/items", {
    params: {
      type: "lost",
      userId: userId,
    },
  });

  return response.data;
};

export const getFoundItemsByUser = async (userId) => {
  const response = await axios.get("/api/items", {
    params: {
      type: "found",
      userId: userId,
    },
  });

  return response.data;
};

export const getCommentsByItemId = async (itemId) => {
  const url = `/api/comments/${itemId}`;
  const response = await axios.get(url);
  return response.data;
};

export const postComment = async (comment) => {
  const response = await axios.post("/api/comments/", comment);
  console.log(response.data);
  return response.data;
};

export const deleteComment = async (itemId) => {
  const url = `/api/comments/${itemId}`;
  const response = await axios.delete(url);
  return response.data;
};

export const updateComment = async (itemId, comment) => {
  const url = `/api/comments/${itemId}`;
  const response = await axios.put(url, comment);
  return response.data;
};

export const getUserById = (userId) => {
  return users.find((user) => user.id === userId);
};

export const getUserIdByName = (name) => {
  return users.find((user) => user.name === name).id;
};

export const updateItem = async (itemId, item) => {
  const response = await axios.put(`/api/items/${itemId}`, item);

  return response.data;
};

export const deleteItem = async (itemId) => {
  const response = await axios.delete(`/api/items/${itemId}`);
  return response.data;
};

export const createNewItem = async (item, userId) => {
  const response = await axios.post("/api/items", {
    ...item,
    reporterId: userId,
  });
  console.log(response.data);
  return response.data;
};
