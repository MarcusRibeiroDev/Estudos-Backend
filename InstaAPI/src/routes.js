import { Router } from "express";

const routes = new Router();

routes.get("/status", (req, res) => res.send({ message: "Server is ONLINE" }));

export default routes;
