const { addPlayer, removePlayer } = require("../handlers/playersHandler");

const eventHandler = (socket) => {
  socket.on("join-player", (data) => {
    const { error } = addPlayer(data);
    if (error) return console.log(error);
  });

  socket.on("disconnect", () => {
    removePlayer(socket.id);
  });
};

module.exports = eventHandler;
