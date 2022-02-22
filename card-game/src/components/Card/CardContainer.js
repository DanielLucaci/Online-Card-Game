import "./CardContainer.css";
import CardFooter from "./CardFooter/CardFooter";
import CardHeader from "./CardHeader/CardHeader";
import CardTable from "./CardTable/CardTable";

export default function CardContainer(props) {
  return (
    <div className="card-container">
      <CardHeader />
      <CardTable />
      <CardFooter />
    </div>
  );
};

