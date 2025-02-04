import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  return (
    <div className="bots-page">
        <header>
            <YourBotArmy />
        </header>
      <BotCollection />
    </div>
  )
}

export default BotsPage;
