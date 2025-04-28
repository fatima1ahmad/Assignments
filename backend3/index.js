import express from "express";
const app = express();

app.use(express.static("public"))

//this task 
let arr1 = [
  "Fatima", "Laila", "Sara", "Aisha", "Zainab",
  "Mariam", "Huda", "Noor", "Amira", "Layla",
  "Yasmin", "Hana", "Salma", "Rania", "Samira",
  "Nadia", "Dina", "Iman", "Khadija", "Sana"
];

let arr2 = [
  "Ahmad", "Ali", "Omar", "Hassan", "Yusuf",
  "Ibrahim", "Tariq", "Bilal", "Khalid", "Samir",
  "Zaid", "Amir", "Sami", "Majid", "Faris",
  "Nabil", "Rami", "Karim", "Adil", "Bashir"
];

const port = 3000;

app.get('/', (req, res) => {
  
  res.render("index.ejs" ,{

  });
});
app.post('/submit', (req, res) => {
    const randomName = arr1[Math.floor(Math.random() * arr1.length)];
    const randomName2 = arr2[Math.floor(Math.random() * arr2.length)];
    res.render("index.ejs", { randomName:randomName, randomName2:randomName2 });
});
 



app.listen(port, () => {
  console.log("server done");
});
