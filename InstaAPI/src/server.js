import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is on in port ${PORT}`);
});
