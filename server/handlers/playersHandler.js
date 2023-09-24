let players = [
  {
    id: "RjSyw9tR_a1_75lhAAAD",
    name: "Arshal Abbas",
    avatar: "https://robohash.org/RjSyw9tR_a1_75lhAAAD",
    institution: "Don Bosco College",
  },
  {
    id: "TE7Gs0vUSsu3vWJAAAAF",
    name: "Brotha",
    avatar: "https://robohash.org/TE7Gs0vUSsu3vWJAAAAF",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "hehe",
    name: "Jhon",
    avatar: "https://robohash.org/hehe",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "blah",
    name: "Nigger",
    avatar: "https://robohash.org/blah",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "RjSyw9tR_a1_75lhAAAD",
    name: "Arshal Abbas",
    avatar: "https://robohash.org/RjSyw9tR_a1_75lhAAAD",
    institution: "Don Bosco College",
  },
  {
    id: "TE7Gs0vUSsu3vWJAAAAF",
    name: "Brotha",
    avatar: "https://robohash.org/TE7Gs0vUSsu3vWJAAAAF",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "hehe",
    name: "Jhon",
    avatar: "https://robohash.org/hehe",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "blah",
    name: "Nigger",
    avatar: "https://robohash.org/blah",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "RjSyw9tR_a1_75lhAAAD",
    name: "Arshal Abbas",
    avatar: "https://robohash.org/RjSyw9tR_a1_75lhAAAD",
    institution: "Don Bosco College",
  },
  {
    id: "TE7Gs0vUSsu3vWJAAAAF",
    name: "Brotha",
    avatar: "https://robohash.org/TE7Gs0vUSsu3vWJAAAAF",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "hehe",
    name: "Jhon",
    avatar: "https://robohash.org/hehe",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "blah",
    name: "Nigger",
    avatar: "https://robohash.org/blah",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "RjSyw9tR_a1_75lhAAAD",
    name: "Arshal Abbas",
    avatar: "https://robohash.org/RjSyw9tR_a1_75lhAAAD",
    institution: "Don Bosco College",
  },
  {
    id: "TE7Gs0vUSsu3vWJAAAAF",
    name: "Brotha",
    avatar: "https://robohash.org/TE7Gs0vUSsu3vWJAAAAF",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "hehe",
    name: "Jhon",
    avatar: "https://robohash.org/hehe",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "blah",
    name: "Nigger",
    avatar: "https://robohash.org/blah",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "RjSyw9tR_a1_75lhAAAD",
    name: "Arshal Abbas",
    avatar: "https://robohash.org/RjSyw9tR_a1_75lhAAAD",
    institution: "Don Bosco College",
  },
  {
    id: "TE7Gs0vUSsu3vWJAAAAF",
    name: "Brotha",
    avatar: "https://robohash.org/TE7Gs0vUSsu3vWJAAAAF",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "hehe",
    name: "Jhon",
    avatar: "https://robohash.org/hehe",
    institution: "WMO",
    course: "BCA",
  },
  {
    id: "blah",
    name: "Nigger",
    avatar: "https://robohash.org/blah",
    institution: "WMO",
    course: "BCA",
  },
];

// let players = [];

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
    if (index !== -1) return players.splice(index, 1);
  },

  getAllPlayers: () => players,

  getPlayer: (id) => players.find((player) => player.id === id),
};
