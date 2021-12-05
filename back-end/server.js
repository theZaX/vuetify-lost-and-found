const express = require("express");
const bodyParser = require("body-parser");

const { v4: uuidv4 } = require("uuid");

// export PATH="/C/Program Files/MongoDB/Server/5.0/bin"

const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: String,
  type: String,
  reporterId: String,
});

const Item = mongoose.model("item", itemSchema);

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

mongoose.connect("mongodb://localhost:27017/lostandfound", {
  useNewUrlParser: true,
});

const commentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  userId: String,
  text: String,
});

const Comment = mongoose.model("comment", commentSchema);

app.get("/api/comments/:id", async (req, res) => {
  const comments = await Comment.find({ itemId: req.params.id });
  return res.send(comments);
});
app.get("/api/comments", async (req, res) => {
  const comments = await Comment.find();
  return res.send(comments);
});

app.put("/api/comments/:id", async (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  if (!comment) {
    return res.status(404).send("Comment not found");
  }
  const updatedComment = {
    ...comment,
    ...req.body,
  };
  return res.send(updatedComment);
});

app.delete("/api/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({ id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// create

app.post("/api/comments", async (req, res) => {
  const comment = new Comment({
    id: uuidv4(),
    itemId: req.body.itemId,
    userId: req.body.userId,
    text: req.body.text,
  });
  const newComment = await comment.save();
  return res.send(newComment);
});

// crud for the items
app.get("/api/items", async (req, res) => {
  const query = {};

  if (req.query.type) {
    query.type = req.query.type;
  }
  if (req.query.userId) {
    query.reporterId = req.query.userId;
  }

  const items = await Item.find(query);

  return res.send(items);
});

app.post("/api/items", async (req, res) => {
  console.log(req.body);

  const item = new Item({
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    type: req.body.type,
    reporterId: req.body.reporterId,
  });

  const newItem = await item.save();

  return res.send(newItem);
});

app.put("/api/items/:id", async (req, res) => {
  // update the item with the id in the parameter
  const item = await Item.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
  });

  return res.send(item);
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
