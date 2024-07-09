const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json()); // Configura a API no padrão do Express
app.use(routes);

app.listen(3001);
