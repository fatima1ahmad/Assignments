//ejs 


import express from "express";
import bodyParser from "body-parser";
import{dirname } from "path"
import { fileURLToPath } from "url";

const __dirname =dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3002;


app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
   const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
   res.render("index.ejs" , data)

  });
app.listen(port, () => {
  console.log("server is done");
});