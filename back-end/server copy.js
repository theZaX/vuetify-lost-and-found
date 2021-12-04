const express = require('express');
const bodyParser = require("body-parser");

// export PATH="/C/Program Files/MongoDB/Server/5.0/bin"

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/lostandfound', {
  useNewUrlParser: true
});


// 


// get comments



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
];

app.get('/comments/:id',  async(req, res) => { 
  return res.send(comments.filter(comment => comment.itemId === req.params.id));
}





// this is a comment


// Configure multer so that it will upload to '../front-end/public/images'
// const multer = require('multer')
// const upload = multer({
//   dest: '/var/www/museum.dylan-allen.com/images/',
//   limits: {
//     fileSize: 10000000
//   }
// });

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: String,
  type: String,
  reporterid: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});






app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    path: req.body.path,
    description: req.body.description,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/items/:id", async (req, res) => {
  try {
    // update the item
    await Item.updateOne(
      { _id: req.params.id },
      { title: req.body.title, description: req.body.description }
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));