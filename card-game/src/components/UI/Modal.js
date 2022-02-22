import { useContext } from "react";
import { createPortal } from "react-dom";
import GameContext from "../../store/game-context";
import "./Modal.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const Modal = () => {
  const gameCtx = useContext(GameContext);

  return (
    <div className="modal">
      <h1>Game Over!</h1>
      <div className="statistics">
        <p>Category: {gameCtx.category.value} </p>
        <p>Difficulty: {gameCtx.difficulty.value}</p>
        <p>Elapsed Time: {gameCtx.elapsedTime.value}</p>
      </div>
      <button className="play-again" onClick={gameCtx.startNewGame}>
        Play Again
      </button>
    </div>
  );
};

export default function ModalOverlay() {
  const backdropDiv = document.getElementById("overlay");
  return (
    <>
      {createPortal(<Backdrop />, backdropDiv)}
      {createPortal(<Modal />, backdropDiv)}
    </>
  );
}
