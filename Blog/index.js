
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let recipes = [
    { id: 1, title: "Pizza", category: "Italian", instructions: "Bake it.", createdAt:new Date().toISOString() },
    { id: 2, title: "Burger", category: "Fast Food", instructions: "Grill it.", createdAt: new Date().toISOString() }
  ];
  let lastId = 2;

  

app.get("/", (req, res) => {
  res.render("index.ejs", { recipes });
});

app.get("/new-recipe", (req, res) => {
  res.render("new-recipe.ejs");
});

app.post("/submit-recipe", (req, res) => {
   lastId++;

  const newRecipe = {
    id:lastId,
    title: req.body.title,
    category: req.body.category,
    instructions: req.body.instructions,
    createdAt: new Date().toISOString()
  };
  recipes.push(newRecipe);
  res.redirect("/");
});

app.get("/edit-recipe/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex(recipe => recipe.id === id); 
    const recipe = recipes[recipeIndex]; 
    res.render("edit-recipe.ejs", { recipe });
  });
  
app.post("/update-recipe/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex(recipe => recipe.id === id); 
    const recipe = recipes[recipeIndex]; 
  recipe.title = req.body.title;
  recipe.category = req.body.category;
  recipe.instructions = req.body.instructions;
   
  res.redirect("/");
});

app.post("/delete-recipe/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex(recipe => recipe.id === id); 
  
    if (recipeIndex !== -1) {
      recipes.splice(recipeIndex, 1); 
    }
  
    res.redirect("/");
  });
  
app.listen(port, () => {
  console.log(`server is  done`);
});
