import React, { useContext } from "react";
import Menu from "./components/Menu/Menu";
import CardContainer from "./components/Card/CardContainer";
import "./App.css";
import GameContext from "./store/game-context";
import ModalOverlay from "./components/UI/Modal";
import { AiFillSound, AiOutlineSound } from "react-icons/ai";
import { IoMusicalNotesSharp, IoMusicalNotesOutline } from "react-icons/io5";
import { createPortal } from "react-dom";

const Settings = (props) => {
  return (
    <div className="settings">
      {props.soundAllowed ? (
        <AiFillSound onClick={props.toggleSound} size={28} />
      ) : (
        <AiOutlineSound onClick={props.toggleSound} size={28} />
      )}
      {props.musicAllowed ? (
        <IoMusicalNotesSharp onClick={props.toggleMusic} size={28} />
      ) : (
        <IoMusicalNotesOutline onClick={props.toggleMusic} size={28} />
      )}
    </div>
  );
};

function App() {
  const gameCtx = useContext(GameContext);

  return (
    <>
      <div className="main">
        {gameCtx.playing ? <CardContainer /> : <Menu />}
        {gameCtx.gameOver && <ModalOverlay />}
        {createPortal(
          <Settings
            musicAllowed={gameCtx.music.allowed}
            soundAllowed={gameCtx.sound.allowed}
            toggleMusic={gameCtx.music.toggle}
            toggleSound={gameCtx.sound.toggle}
          />,
          document.getElementById("settings")
        )}
      </div>
    </>
  );
}

export default App;
