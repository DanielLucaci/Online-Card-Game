import CardItem from "./CardItem/CardItem";
import "./CardTable.css"

export default function CardTable(props) {
    return (
      <div className={`card-table ${props.difficulty.toLowerCase()}`}>
        {props.cards.map((card, index) => {
          return <CardItem  name={card} key={index} category={props.category} />;
        })}
      </div>
    )
}