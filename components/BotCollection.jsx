import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((response) => response.json())
    .then((data) => setBots(data))
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (<BotCard key={bot.id} bot={bot} />))}
      </div>
    </div>
  );
}

export default BotCollection;
