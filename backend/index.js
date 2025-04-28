
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const rightpassword = "Hello";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/sumbit", (req,res) => {
  const user = req.body.password;

  if (user === rightpassword) {
    res.sendFile(__dirname + "/public/right.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log("server is done");
});




// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// const rightpassword = "Hello";

// let userInfo={
//   password:"",
// };
// function saveToDb(req, res, next) {
//   if (req.body && req.body.password) {
//     userInfo.password = req.body.password;
//     console.log("Password ", userInfo.password);
//   }
//   next(); 
// }
// app.use(saveToDb)

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/sumbit", (req,res) => {
//   const user = req.body.password;

//   if (user === rightpassword) {
//     res.sendFile(__dirname + "/public/right.html");
//   } else {
//     res.sendFile(__dirname + "/public/index.html");
//   }
// });

// app.listen(port, () => {
//   console.log("server is done");
// });
