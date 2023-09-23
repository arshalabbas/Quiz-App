import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { PlayerCard } from "../components";
import socket from "../socket/socket";

const Host = () => {
  const url = window.location.hostname;
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.emit("get-players", (data) => {
      // console.log(data && players.length !== 0);
      if (data && players.length !== 0) setPlayers(data);
    });
    socket.on("player-joined", (data) => {
      setPlayers((prev) => [...prev, data]);
    });

    socket.on("player-removed", (data) => {
      console.log(data);
      setPlayers(data);
    });

    return () => {
      socket.off("player-joined");
      socket.off("get-players");
      socket.off("player-removed");
    };
  }, []);

  return (
    <section>
      <div className="flex items-center justify-evenly px-11">
        <div className="p-11 bg-grey rounded-lg shadow-xl flex_center flex-col">
          <QRCodeSVG value={url} className="mb-4" />
          <h2 className="font-biryani font-bold text-center text-2xl">
            Scan to join!
          </h2>
        </div>
        <div className="flex-1 rounded-lg border-1 border-black flex flex-col">
          <h2 className="text-center text-lightgreen text-xl font-bold">
            Participants
          </h2>
          <div className="flex-1">
            {players &&
              players.map((player) => (
                <PlayerCard avatar={player.avatar} name={player.name} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
