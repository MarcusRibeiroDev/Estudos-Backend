const express = require("express");
const crypto = require("node:crypto");

const app = express();
app.use(express.json()); // Configura a API no padrão do express

app.get("/health", (req, res) => {
  res.send("Minha API está On");
});

let users = []; // Simulação de DB

app.post("/users", (req, res) => {
  const { name, idade } = req.body;
  const id = crypto.randomUUID();

  const newUser = {
    id,
    name,
    idade,
  };

  users.push(newUser);

  res.send(newUser);
}); // Cadastrar usúario

app.get("/users", (req, res) => {
  res.send(users);
}); // Listar todos os usúarios

app.get("/users/:id", (req, res) => {
  const findedUser = users.find((user) => user.id === req.params.id);
  if (!findedUser) res.send("Não encontrado");
  res.send(findedUser);
});

app.delete("/users/:id", (req, res) => {
  const findedUser = users.find((user) => user.id === req.params.id);
  if (!findedUser) res.send("Não encontrado para deleção");
  users = users.filter((user) => user.id !== req.params.id);
  res.send("Usuário excluido");
});

app.listen(3001);
