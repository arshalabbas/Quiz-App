const {
  addPlayer,
  removePlayer,
  getAllPlayers,
} = require("../handlers/playersHandler");
const { getQuestion } = require("../handlers/questionsHandlers");

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

  socket.on("started", () => {
    //event
    socket.broadcast.emit("started-response");
  });

  //Question Events
  socket.on("get-question", (cb) => {
    const currentQuestion = getQuestion();
    cb(currentQuestion);
  });
};

module.exports = eventHandler;
