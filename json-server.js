// netlify-functions/json-server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

exports.handler = server.createHandler({
  path: "/api",
});
