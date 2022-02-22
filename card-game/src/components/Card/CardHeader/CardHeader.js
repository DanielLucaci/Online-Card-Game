import { useEffect, useState, useContext } from "react";
import GameContext from "../../../store/game-context";
import "./CardHeader.css";

export default function CardHeader(props) {
  const [elapsedTime, setElapsedTime] = useState(0);
  
  const gameCtx = useContext(GameContext);
  const { gameOver } = gameCtx;
  const { updateElapsedTime } = gameCtx.elapsedTime;

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      updateElapsedTime(elapsedTime);
    }
  }, [elapsedTime, gameOver, updateElapsedTime]);

  return (
    <div className="card-header">
      <p>Remaining pairs: {gameCtx.remainingPairs} </p>
      <p>Elapsed Time: {elapsedTime} </p>
    </div>
  );
}
