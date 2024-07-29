import express from "express";
import connection from "../infra/conection.js";

// colocando o express no padrão json
const app = express();
app.use(express.json());

//MOCK

// let teams = [
//   { id: 1, team: "Palmeiras", score: 80 },
//   { id: 2, team: "Botafogo", score: 65 },
//   { id: 3, team: "Flamengo", score: 76 },
//   { id: 4, team: "Bahia", score: 59 },
// ];

// Functions

function searchWithId(id) {
  const teamFinded = teams.filter((team) => id == team.id);
  return teamFinded.length === 0 ? "Não encontrado" : teamFinded;
}
function searchIndexWithId(id) {
  const teamIndex = teams.findIndex((team) => id == team.id);
  return teamIndex ? teamIndex : "Não encontrado";
}

// Check da API
// app.get("/", (req, res) => {
//   res.send("API de times do futebol Brasileiro!");
// });

// Lista todos
app.get("/times", (req, res) => {
  let sql = "SELECT * FROM db_team.teams;";
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

// Lista individual
app.get("/times/:id", (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM db_team.teams WHERE id=?;";
  connection.query(sql, id, (error, result) => {
    if (error) {
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

// Cadastra/Posta individual
app.post("/times", (req, res) => {
  teams.push(req.body);
  res.json(teams);
});

// Deleta individual
app.delete("/times/:id", (req, res) => {
  teams.splice(searchIndexWithId(req.params.id), 1);
  res.json(teams);
});

// Atualiza individual
app.put("/times/:id", (req, res) => {
  const index = searchIndexWithId(req.params.id);
  teams[index].team = req.body.team;
  teams[index].score = req.body.score;
  res.json(teams);
});

export default app;
