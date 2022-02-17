import './CardFooter.css'

export default function CardFooter(props) { 
    return (
        <div className="card-footer">
            <p>Category: {props.category}</p>
            <p>Difficulty: {props.difficulty}</p>
        </div>
    );
}