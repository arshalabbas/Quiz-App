import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { PlayerCard } from "../components";
import socket from "../socket/socket";

const Host = () => {
  const url = window.location.hostname;
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const playersDiv = useRef(null);

  const handleStart = () => {
    navigate("/host/game");
  };

  useEffect(() => {
    socket.emit("get-players", (data) => {
      setPlayers(data);
    });
    socket.on("player-joined", (data) => {
      setPlayers((prev) => [...prev, data]);
      playersDiv.current.scrollTo(0, playersDiv.current.scrollHeight);
    });

    socket.on("player-removed", (data) => {
      setPlayers(data);
    });

    return () => {
      socket.off("player-joined");
      socket.off("get-players");
      socket.off("player-removed");
    };
  }, []);

  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-evenly px-11">
        <div className="p-11 bg-grey rounded-lg shadow-xl flex_center flex-col h-full mt-11">
          <QRCodeSVG value={url} className="mb-4" />
          <h2 className="font-biryani font-bold text-center text-2xl">
            Scan to join!
          </h2>
        </div>
        <div className="flex-1 rounded-lg border-1 border-black flex flex-col">
          <h2 className="text-center text-lightgreen text-xl font-bold">
            Participants ({players.length})
          </h2>
          <div
            className="grid max-md:grid-cols-2 grid-cols-5 gap-3 m-3 overflow-auto max-h-[calc(100vh-200px)] py-3 mx-5 scroll-smooth"
            ref={playersDiv}
          >
            {players &&
              players.map((player) => (
                <PlayerCard avatar={player.avatar} name={player.name} />
              ))}
          </div>
        </div>
      </div>
      <button
        className="bg-darkgreen font-biryani text-lg py-2 px-11 rounded-lg text-white opacity-80 hover:opacity-100"
        onClick={handleStart}
      >
        START
      </button>
    </section>
  );
};

export default Host;
