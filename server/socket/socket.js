const { Server } = require("socket.io");

function connectSocket(server, cb) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", cb);
}

module.exports = connectSocket;
