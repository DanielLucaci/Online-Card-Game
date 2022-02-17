import DifficultyItem from "./DifficultyItem/DifficultyItem";
import { difficulties } from "../../../data/data.js";
import './DifficultyContainer.css'

export default function DifficultyContainer(props) {
  return (
    <div className="menu-item">
      <p>Difficulty</p>
      <div className="difficulty-container">
        {difficulties.map((difficulty) => {
          return (
            <DifficultyItem
              active={difficulty === props.difficulty} 
              name={difficulty}
              onChangeDifficulty={props.onChangeDifficulty}
            />
          );
        })}
      </div>
    </div>
  );
}
