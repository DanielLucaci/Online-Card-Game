import './PlayButton.css'

export default function PlayButton(props) {
  return (
    <button type="button" className="play-button" onClick={props.onPlayButton}>
      Play
    </button>
  );
}
