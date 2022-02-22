import { useContext } from "react";
import GameContext from "../../../store/game-context";
import CardItem from "./CardItem/CardItem";
import "./CardTable.css"

export default function CardTable(props) {
    const gameCtx = useContext(GameContext);

    return (
      <div className={`card-table ${gameCtx.difficulty.value.toLowerCase()}`}>
        {gameCtx.cards.map((card, index) => {
          return <CardItem name={card.name} found={card.isFound} key={index} />;
        })}
      </div>
    )
}