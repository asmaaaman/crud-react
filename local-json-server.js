// local-json-server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3030, () => {
  console.log("JSON Server is running at http://localhost:3030");
});
