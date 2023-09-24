import { useEffect, useState } from "react";
import socket from "../socket/socket";

const Game = () => {
  const [question, setQuestion] = useState({});
  useEffect(() => {
    socket.emit("get-question", (data) => {
      setQuestion(data);
    });
  });
  return <div>{question.question}</div>;
};

export default Game;
