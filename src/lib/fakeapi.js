// a function that delays a random amount of time between 0 and 1 second

import { items, users, comments } from "./fakeDatabase";

const randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

export const getAllLostItems = async () => {
  await randomDelay();
  return items.filter((item) => item.type === "lost");
};
export const getAllFoundItems = async () => {
  await randomDelay();
  return items.filter((item) => item.type === "found");
};

export const getLostItemsByUser = async (userId) => {
  await randomDelay();
  return items.filter(
    (item) => item.type === "lost" && item.reporterId === userId
  );
};

export const getFoundItemsByUser = async (userId) => {
  await randomDelay();
  console.log(userId);
  return items.filter(
    (item) => item.type === "found" && item.reporterId === userId
  );
};

export const getCommentsByItemId = async (itemId) => {
  await randomDelay();
  return comments.filter((comment) => comment.itemId === itemId);
};

export const getUserById = (userId) => {
  return users.find((user) => user.id === userId);
};

export const getUserIdByName = (name) => {
  return users.find((user) => user.name === name).id;
};

export const updateItem = async (itemId, item) => {
  console.log(itemId, item);
  await randomDelay();
};

export const postComment = async (comment) => {
  await randomDelay();
  console.log(comment);
};

export const deleteItem = async (itemId) => {
  await randomDelay();
  console.log(itemId);
};

export const createNewItem = async (item, userId) => {
  await randomDelay();
  console.log(item, userId);
};
