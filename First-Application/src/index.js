const express = require("express");

const app = express();
app.use(express.json()); // Configura a API no padrão do express

app.get("/health", (req, res) => {
  res.send("Minha API está On");
});

const users = [];

app.post("/users", (req, res) => {
  const { name, idade } = req.body;

  const newUser = {
    name,
    idade,
  };

  users.push(newUser);

  res.send(newUser);
});

app.get("/users", (req, res) => {
  return res.send(users);
});

app.listen(3001);
