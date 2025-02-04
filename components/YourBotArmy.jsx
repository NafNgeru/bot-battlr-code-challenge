import React, { useEffect, useState, useContext } from "react";
import BotContext from "./context/BotContext";
import BotCard from "./BotCard";
import BotsPage from "./BotsPage";

function YourBotArmy() {
  const { userBotItems } = useContext(BotContext);

  const [bots, setBots] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
    }, []);
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {bots.map((bot) => {
          if (userBotItems[bot.id] !== 0){
            return (<BotCard key={bot.id} bot={bot} />)
          }
        })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
