import { useContext } from 'react';
import GameContext from '../../../store/game-context';
import './PlayButton.css'


export default function PlayButton(props) {
  const gameCtx = useContext(GameContext);

  return (
    <button type="button" className="play-button" onClick={gameCtx.toggleGame}>
      Play
    </button>
  );
}
