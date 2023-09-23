import { useState } from "react";

const Quiz = () => {
  const [isWaiting, setIsWaiting] = useState(true);
  return isWaiting ? <div>waiting</div> : <div>not waiting</div>;
};

export default Quiz;
