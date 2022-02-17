import { useEffect, useState} from "react";
import "./CardItem.css";

export default function CardItem(props) {
  const [isActive, setisActive] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
        if(isActive === true)
            setisActive(false);
    }, 2500);
  }, [isActive]);

  return (
    <div className={`card-item ${isActive ? 'active' : 'non-active'}`} onClick={() => {
        if(!isActive) 
         setisActive(true);
    }}>
      <div className="card-image">
        <img
          src={
            require(`../../../../data/Images/${props.category}/${props.name}.jpg`)
              .default
          }
          alt={props.name}
        />
      </div>
    </div>
  );
}
