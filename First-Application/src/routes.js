const { Router } = require("express");
const crypto = require("node:crypto");
const { verifyToken } = require("./middlewares/authMiddlewares");

const {
  statusApi,
  createUser,
  listAllUsers,
  listUser,
  deleteUser,
  updateUser,
} = require("./controllers/users");

const routes = Router();

routes.get("/health", statusApi); // Status da API

routes.get("/users", listAllUsers); // Listar todos os usúarios

routes.get("/users/:id", listUser); // Listar usúario expecífico

routes.post("/users", verifyToken, createUser); // Cadastrar usúario

routes.put("/users/:id", verifyToken, updateUser); // Atualizar informação

routes.delete("/users/:id", verifyToken, deleteUser); // Deletar usúario expecífico

module.exports = routes;
