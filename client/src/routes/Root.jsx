//Components
import { useEffect, useState } from "react";
import { Input } from "../components";
import { joinPlayer } from "../socket/emitEvents";

const Root = () => {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    joinPlayer({ name, institution, course });
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
