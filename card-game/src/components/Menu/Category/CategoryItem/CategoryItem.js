import { useContext } from 'react';
import GameContext from '../../../../store/game-context';
import './CategoryItem.css'

export default function CategoryItem(props) {
  const gameCtx = useContext(GameContext);

  return (
    <div
      className={`item category-item ${props.active && "active"}`}
      key={props.name}
      onClick={() => props.name !== gameCtx.category.value && gameCtx.category.updateCategory(props.name)}
    >
      <h4>{props.name}</h4>
      <div className="category-image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}
