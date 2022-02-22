import DifficultyItem from "./DifficultyItem/DifficultyItem";
import { difficulties } from "../../../data/data.js";
import './DifficultyContainer.css'
import { useContext } from "react";
import GameContext from "../../../store/game-context";

export default function DifficultyContainer(props) {
  const gameCtx = useContext(GameContext);

  return (
    <div className="menu-item">
      <p>Difficulty</p>
      <div className="difficulty-container">
        {difficulties.map((difficulty) => {
          return (
            <DifficultyItem
              active={difficulty === gameCtx.difficulty.value} 
              name={difficulty}
              key={difficulty}
            />
          );
        })}
      </div>
    </div>
  );
}
