import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import socket from "../socket/socket";

//Components
import { Waiting, Game } from "../components";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [player, setPlayer] = useState({});
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!location.state) return navigate("/");
    setPlayer(location.state);

    socket.on("started-response", () => setIsStarted(true));
  }, []);
  return isStarted ? <Game /> : <Waiting player={player} />;
};

export default Quiz;
