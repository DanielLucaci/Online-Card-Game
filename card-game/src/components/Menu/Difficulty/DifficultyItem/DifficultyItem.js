import { useContext } from "react";
import GameContext from "../../../../store/game-context";
import "./DifficultyItem.css";

export default function DifficultyItem(props) {
  const gameCtx = useContext(GameContext);

  return (
    <div
      className={`item difficulty-item ${props.active && "active"}`}
      key={props.name}
      onClick={() =>
        props.name !== gameCtx.difficulty.value && gameCtx.difficulty.updateDifficulty(props.name)
      }
    >
      <h4>{props.name}</h4>
    </div>
  );
}
