//USANDO SOMENTE NODE

// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write('Hello Node')

//   return response.end();
// });

// server.listen(3000);

//USANDO FRAMEWORK FASTIFY

import { fastify } from "fastify";
import DataBaseMemory from "./database-memory.js";

const databasememory = new DataBaseMemory();

const server = fastify();

server.get("/videos", () => {
  const videos = databasememory.list();

  console.log(videos);

  return videos;
});

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  databasememory.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});
server.put("/videos/:id", () => {
  return "PUT";
});

server.delete("/videos/:id", () => {
  return "delete";
});

server.listen({
  port: 3900,
});
