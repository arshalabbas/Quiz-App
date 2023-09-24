import { useEffect, useRef, useState } from "react";
import socket from "../../socket/socket";

const Game = () => {
  const [question, setQuestion] = useState({});

  const questionElement = useRef();
  useEffect(() => {
    socket.emit("started");

    let qTimeout;

    socket.emit("get-question", (data) => {
      setQuestion(data);
      qTimeout = setTimeout(() => {
        questionElement.current.classList.add("revealed");
      }, 1000);
    });

    return () => {
      socket.off("started");
      clearTimeout(qTimeout);
    };
  }, []);

  return (
    <section className="py-3">
      <h1 className="text-center font-rubik text-orange q_number">1</h1>
      <div ref={questionElement} className="flex_center flex-col reveal from-l">
        <div className="w-full bg-grey py-10">
          <h1 className="text-5xl font-extrabold text-center font-biryani">
            {question.question}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Game;
