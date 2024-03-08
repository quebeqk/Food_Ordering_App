import { useState, useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
  };

  return (
    <div className="user-card">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        You pressed me{count} times;
      </button>
      <h1>Count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Noida</h3>
      <h4>Contact: @abc</h4>
    </div>
  );
};

export default User;
