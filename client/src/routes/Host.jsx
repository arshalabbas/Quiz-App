import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const Host = () => {
  const url = window.location.hostname;
  const dummyUsers = [
    {
      name: "Arshal",
      avatar: "https://placekitten.com/g/200/200",
    },
    {
      name: "Navaneeth",
      avatar: "https://placekitten.com/g/200/200",
    },
    {
      name: "Athul",
      avatar: "https://placekitten.com/g/200/200",
    },
    {
      name: "Sunny",
      avatar: "https://placekitten.com/g/200/200",
    },
  ];
  const [participants, setParticipants] = useState(dummyUsers);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    function animate() {
      //   requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      participants.forEach((user) => {
        c.fillText(
          user.name,
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      });
    }
    animate();
    return () => {};
  }, []);

  useEffect(() => {
    setInterval(() => {
      setParticipants(
        (prev) =>
          (prev = [
            ...prev,
            {
              name: (Math.random() * 1000).toString(),
              avatar: "https://placekitten.com/g/200/200",
            },
          ])
      );
    }, 2000);
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
            <canvas id="participants"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
