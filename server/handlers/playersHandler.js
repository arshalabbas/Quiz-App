let players = [];

module.exports = {
  addPlayer: (data) => {
    const isPlayerExists = players.find((player) => player.id === data.id);
    if (isPlayerExists) return { error: "User already exists!!!" };
    players.push(data);
    console.log(players);
    return { data };
  },

  removePlayer: (id) => {
    const index = players.findIndex((player) => player.id === id);
    if (index !== -1) players.splice(index, 1);
  },

  getAllPlayers: () => players,

  getPlayer: (id) => players.find((player) => player.id === id),
};
