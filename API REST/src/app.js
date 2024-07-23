import express from "express";
const app = express();
app.use(express.json());

//MOCK

let teams = [
  { id: 1, team: "Palmeiras" },
  { id: 2, team: "Botafogo" },
  { id: 3, team: "Flamengo" },
  { id: 4, team: "Bahia" },
];

// Functions

function searchWithId(id) {
  const teamFinded = teams.filter((team) => id == team.id);
  return teamFinded.length === 0 ? "Não encontrado" : teamFinded;
}
function searchIndexWithId(id) {
  const teamIndex = teams.findIndex((team) => id == team.id);
  return teamIndex ? teamIndex : "Não encontrado";
}

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.get("/times", (req, res) => {
  res.status(200).send(teams);
});

app.get("/times/:id", (req, res) => {
  res.status(200).send(searchWithId(req.params.id));
});

app.post("/times", (req, res) => {
  teams.push(req.body);
  res.status(201).send("Sucess");
});

app.delete("/times/:id", (req, res) => {
  teams.splice(searchIndexWithId(req.params.id), 1);
  res.status(202).send("Deleção feita com sucesso");
});

export default app;
