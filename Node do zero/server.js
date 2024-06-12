//USANDO SOMENTE NODE

// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write('Hello Node')

//   return response.end();
// });

// server.listen(3000);

//USANDO FRAMEWORK FASTIFY

import { fastify } from "fastify";

const server = fastify();

server.get("/videos", () => {
  return "GET";
});
server.post("/videos", () => {
  return "POST";
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
