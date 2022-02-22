import { useContext } from 'react';
import GameContext from '../../../store/game-context';
import './CardFooter.css'

export default function CardFooter() {
    const gameCtx = useContext(GameContext);
    
    return (
        <div className="card-footer">
            <p>Category: {gameCtx.category.value}</p>
            <p>Difficulty: {gameCtx.difficulty.value}</p>
        </div>
    );
}