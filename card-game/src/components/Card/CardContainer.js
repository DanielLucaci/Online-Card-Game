import "./CardContainer.css";
import CardFooter from "./CardFooter/CardFooter";
import CardHeader from "./CardHeader/CardHeader";
import CardTable from "./CardTable/CardTable";

export default function CardContainer(props) {

  return (
    <div className="card-container">
      <CardHeader elapsedTime={props.elapsedTime} remainingPairs={props.remainingPairs}/>
      <CardTable cards={props.cards} category={props.category} difficulty={props.difficulty} />
      <CardFooter category={props.category} difficulty={props.difficulty} />
    </div>
  );
};

