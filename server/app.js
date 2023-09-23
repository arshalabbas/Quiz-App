const express = require("express");
const { createServer } = require("http");
const connectSocket = require("./socket/socket");
const eventHandler = require("./socket/eventHandler");

const cors = require("cors");
const app = express();
const server = createServer(app);
connectSocket(server, eventHandler);
app.use(cors());

app.get("/", (req, res) => {
  res.send("All good!");
});

server.listen(3000, () => console.log("Server started..."));
