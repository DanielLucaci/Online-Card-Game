import { useContext, useEffect, useState } from "react";
import GameContext from "../../../../store/game-context";
import "./CardItem.css";

export default function CardItem(props) {
  const [isActive, setisActive] = useState(null);

  const gameCtx = useContext(GameContext);
  
  let className = '';
  if(props.found) {
    className = 'active';
  } else {
    switch (isActive) {
      case null:
        className = "";
        break;
      case false:
        className ="non-active";
        break;
      case true:
        className = "active";
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isActive === true && !props.found) setisActive(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    }
  }, [isActive, props.found]);

  return (
    <div
      className={`card-item ${className}`}
      onClick={() => {
        if (gameCtx.clicked.firstCard !== "" && gameCtx.clicked.secondCard !== "") return;
        if (!isActive || isActive === null) {
          setisActive(true);
          gameCtx.clicked.updateCard(props.name);
        }
      }}
    >
      <div className="card-image">
        <img
          src={
            require(`../../../../data/Images/${gameCtx.category.value}/${props.name}.jpg`)
              .default
          }
          alt={props.name}
          draggable="false"
        />
      </div>
    </div>
  );
}
