import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CardContainer from "./components/Card/CardContainer";
import './App.css';
import GameContext from "./store/game-context";
import ModalOverlay from "./components/UI/Modal";

function App() {
  const gameCtx = useContext(GameContext);

  return (
    <>
      <Header />
      <div className="main">
        {gameCtx.playing ? (
          <CardContainer  />
        ) : (
          <Menu />
        )}
        {gameCtx.gameOver && <ModalOverlay />}
      </div>
    </>
  );
}

export default App;
