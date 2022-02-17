import './DifficultyItem.css'

export default function DifficultyItem(props) {
  return (
    <div
      className={`item difficulty-item ${props.active && "active"}`}
      key={props.name}
      onClick={() => props.onChangeDifficulty(props.name)}
    >
      <h4>{props.name}</h4>
    </div>
  );
}
