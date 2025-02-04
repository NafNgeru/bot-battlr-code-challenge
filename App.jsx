import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BotsPage from "./components/BotsPage";
import { BotContextProvider } from './components/context/BotContext';

function App() {
  return (
    <div className="App">
      <BotContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BotsPage />} />
        </Routes>
      </Router>
      </BotContextProvider>
      
    </div>
  );
}

export default App;