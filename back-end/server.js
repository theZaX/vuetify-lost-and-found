const express = require("express");
const bodyParser = require("body-parser");

const { v4: uuidv4 } = require("uuid");

// export PATH="/C/Program Files/MongoDB/Server/5.0/bin"

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoose = require("mongoose");
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

const comments = [
  {
    id: "1",
    itemId: "1",
    userId: "1",
    text: "I found this item and it was a ferrari",
  },
  {
    id: "2",
    itemId: "1",
    userId: "2",
    text: "Do you want to meet up so I can pick it up?",
  },
  {
    id: "1",
    itemId: "2",
    userId: "1",
    text: "I found this item and it was a ferrari",
  },
  {
    id: "2",
    itemId: "2",
    userId: "2",
    text: "Do you want to meet up so I can pick it up?",
  },
];

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

app.listen(3000, () => console.log("Server listening on port 3000!"));
