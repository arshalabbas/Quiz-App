import { useEffect, useState } from "react";

const Waiting = ({ player }) => {
  const { name, avatar } = player;
  const [loadingEmoji, setLoadingEmoji] = useState("⌛");

  useEffect(() => {
    const interval = setInterval(
      () =>
        loadingEmoji === "⌛" ? setLoadingEmoji("⏳") : setLoadingEmoji("⌛"),
      2000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="h-[calc(100vh - 100px)] flex_center flex-col">
      <img
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full bg-yellow-500 mt-11"
      />
      <h4 className="font-biryani font-bold text-black text-cener mt-2">
        {name}
      </h4>
      <h1 className="font-biryani font-extrabold text-black text-2xl mx-11 my-11 text-center">
        {loadingEmoji} Wait the host to start the quiz...
      </h1>
    </section>
  );
};

export default Waiting;
