import React, { useEffect, useState } from "react";
let url = "https://official-joke-api.appspot.com/random_joke";

const Jokes = () => {
  let [latefa, setlatefa] = useState({});
  const gjokes = async () => {
    let responde = await fetch(url);
    let joke = await responde.json();
    setlatefa(joke);
  };
  useEffect(() => {
    const gjokes = async () => {
      let responde = await fetch(url);
      let joke = await responde.json();
      setlatefa(joke);
    };
    gjokes();
  }, []);

  return (
    <div className="text-center mt-4 text-3xl font-bold">
      <h3>Joker!</h3>
      <h2>{latefa.setup}</h2>
      <h2>{latefa.punchline}</h2>
      <button className="btn btn-success mt-4" onClick={gjokes}>
        Get random
      </button>
    </div>
  );
};

export default Jokes;
