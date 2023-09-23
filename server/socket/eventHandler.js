const {
  addPlayer,
  removePlayer,
  getAllPlayers,
} = require("../handlers/playersHandler");

const eventHandler = (socket) => {
  socket.on("join-player", (data, cb) => {
    const { error } = addPlayer(data);
    if (error) return console.log(error);
    //event
    socket.broadcast.emit("player-joined", data);
    cb(true);
  });

  socket.on("get-players", (cb) => {
    const players = getAllPlayers();
    cb(players);
  });

  socket.on("disconnect", () => {
    const player = removePlayer(socket.id);
    //event
    socket.broadcast.emit("player-removed", getAllPlayers());
  });
};

module.exports = eventHandler;
