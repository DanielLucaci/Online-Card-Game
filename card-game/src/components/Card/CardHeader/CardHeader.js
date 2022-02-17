import { useEffect, useState } from 'react'
import './CardHeader.css'

export default function CardHeader(props) {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    },[])

    return (
        <div className="card-header">
            <p>Remaining pairs: {props.remainingPairs}</p>
            <p>Elapsed Time: {elapsedTime} </p>
        </div>
    )
}