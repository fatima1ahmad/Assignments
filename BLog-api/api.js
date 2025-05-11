import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let posts = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    content:
      "Spaghetti Carbonara is a traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    author: "John Doe",
    date: "2025-05-04",
  },
  {
    id: 2,
    title: "Vegetarian Tacos",
    content:
      "These vegetarian tacos are filled with black beans, corn, avocado, and a spicy salsa for a fresh, healthy meal.",
    author: "Jane Smith",
    date: "2025-05-02",
  },
  {
    id: 3,
    title: "Chicken Alfredo",
    content:
      "Chicken Alfredo is a creamy pasta dish made with grilled chicken, fettuccine, and a rich Parmesan cream sauce.",
    author: "Justin Noor",
    date: "2025-04-30",
  },
];

let lastId = 3;

//Read
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) res.json(post);
  res.status(404).json({ error: "Post Not Found" });
});

//Create
app.post("/posts", (req, res) => {
  lastId++;
  const newPost = {
    id: lastId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  posts.push(newPost);

  res.status(202).json(newPost); 
});

//update or edit

app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);

  const postObj = posts[postIndex];
  const updatedPost = {
    id: id,
    title: req.body.title || postObj.title,
    content: req.body.content || postObj.content,
    author: req.body.author || postObj.author,
    date: postObj.date,
  };

  posts[postIndex] = updatedPost;
  res.status(200).json(updatedPost);
});

app.put("/posts/:id", (req, res) => {
  // we used put to edit all the value

  if (posts) {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id);

    const postObj = posts[postIndex];
    const updatedPost = {
      id: id,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: new Date(),
    };

    posts[postIndex] = updatedPost;
    res.status(200).json(updatedPost);
  } else {
    res.status(404).json({ error: ` post id ${id} Not Found` });
  }
});

//delete

app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex > -1) {
    posts.splice(postIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: ` post id ${id} Not Found` });
  }
});

app.listen(port, () => {
  console.log("API Server running correctly");
});
