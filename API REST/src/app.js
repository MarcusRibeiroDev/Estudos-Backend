import express from "express";
const app = express();

//MOCK

const teams = [
  { id: 1, team: "Palmeiras" },
  { id: 2, team: "Botafogo" },
  { id: 3, team: "Flamengo" },
  { id: 4, team: "Bahia" },
];

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.get("/times", (req, res) => {
  res.status(200).send(teams);
});

export default app;
