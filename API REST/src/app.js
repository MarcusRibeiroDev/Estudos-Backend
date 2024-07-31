import express from "express";
import TeamsControllers from "./app/controllers/TeamsControllers.js";

// Colocando o express no padrão json
const app = express();
app.use(express.json());

// Lista todos
app.get("/times", TeamsControllers.index);

// Lista individual
app.get("/times/:id", TeamsControllers.show);

// Cadastra/Posta individual
app.post("/times", TeamsControllers.store);

// Deleta individual
app.delete("/times/:id", TeamsControllers.delete);

// Atualiza individual
app.put("/times/:id", TeamsControllers.update);

export default app;
