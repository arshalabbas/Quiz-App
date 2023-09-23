//Components
import { useEffect, useState } from "react";
import { Input } from "../components";
import socket from "../socket/socket";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      socket.off("join-player");
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const playerData = {
      id: socket.id,
      name,
      avatar: `https://robohash.org/${socket.id}?size=80x80`,
      institution,
      course,
    };
    socket.emit("join-player", playerData, (res) => {
      if (!res) return alert("failed to join the quiz");
      navigate("/quiz", {
        state: playerData,
      });
    });
  };

  return (
    <section className="flex_center my-4 py-2">
      <form className="flex_center flex-col" onSubmit={submitHandler}>
        <Input
          label="Full Name"
          id="name"
          placeholder={"Enter your name..."}
          required={true}
          value={name}
          onChange={setName}
        />
        <Input
          label="Institution"
          id="inst"
          name="institution"
          placeholder={"Enter institution's name... "}
          required={true}
          value={institution}
          onChange={setInstitution}
        />
        <Input
          label="Course"
          id="course"
          placeholder={"Enter your course..."}
          required={true}
          value={course}
          onChange={setCourse}
        />
        <button
          type="submit"
          className="bg-orange text-white py-2 w-40 rounded-md opacity-80 hover:opacity-100"
        >
          JOIN
        </button>
      </form>
    </section>
  );
};

export default Root;
