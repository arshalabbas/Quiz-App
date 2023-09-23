import { socket } from "./socket";

export const joinPlayer = (data) => {
  socket.emit("join-player", { id: socket.id, ...data });
};
