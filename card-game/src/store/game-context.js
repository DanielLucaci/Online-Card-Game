import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { cards } from "../data/data";
import pairFound from '../data/Sounds/star.wav';
import backgroundMusicFile from "../data/Sounds/background.mp3";


const GameContext = createContext({
  playing: false,
  gameOver: false,
  toggleGame: () => {},
  difficulty: {
    value: "Easy",
    updateDifficulty: (newDifficulty) => {},
  },
  category: {
    value: "Fruits",
    updateCategory: (newCategory) => {},
  },
  cards: [],
  clicked: {
    firstCard: "",
    secondCard: "",
    updateCard: (cardName) => {},
  },
  remainingPairs: 0,
  elapsedTime: {
    value: 0,
    updateElapsedTime: (newElapsedTime) => {},
  },
});

const GameContextProvider = (props) => {
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [category, setCategory] = useState("Fruits");
  const [difficulty, setDifficulty] = useState("Easy");
  const [cardItems, setCardItems] = useState([]);
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");
  const [remainingPairs, setRemainingPairs] = useState(0);
  const [musicAllowed, setMusicAllowed] = useState(true);
  const [soundAllowed, setSoundAllowed] = useState(true);

  const pairFoundSound = useMemo(() => {return new Audio(pairFound)}, []);
  const backgroundMusic = useMemo(() => {return new Audio(backgroundMusicFile)}, []);

  useEffect(() => {
    if(musicAllowed && playing) {
      backgroundMusic.play();
    } else { 
      backgroundMusic.pause();
    } 
  }, [musicAllowed, backgroundMusic, playing]);

  const updateCardItems = useCallback(() => {
    let cards1 = [];
    switch (difficulty) {
      case "Easy":
        cards1 = cards[category].slice(0, 6);
        setRemainingPairs(6);
        break;
      case "Medium":
        cards1 = cards[category].slice(0, 8);
        setRemainingPairs(8);
        break;
      case "Hard":
        cards1 = cards[category].slice(0, 12);
        setRemainingPairs(12);
        break;
      default:
        break;
    }

    let cards2 = [...cards1];
    setCardItems(
      shuffle(cards1.concat(cards2)).map((card) => {
        return { name: card, isFound: false };
      })
    );
  }, [difficulty, category]);


  useEffect(() => {
      updateCardItems();
  }, [updateCardItems]);

  useEffect(() => {
    if (firstCard === "") return;
    const timeout = setTimeout(() => {
      setFirstCard("");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [firstCard]);

  useEffect(() => {
    if (secondCard === "") return;
    const timeout = setTimeout(() => {
      setSecondCard("");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [secondCard]);

  useEffect(() => {
    if (firstCard === secondCard && firstCard !== "") {
      soundAllowed && pairFoundSound.play();
      setRemainingPairs((prevRemainingPairs) => prevRemainingPairs - 1);
      setCardItems((prevCardItems) => {
        return prevCardItems.map((item) => {
          if (item.name === firstCard) item.isFound = true;
          return item;
        });
      });
      setFirstCard("");
      setSecondCard("");
    }
  }, [firstCard, secondCard, pairFoundSound, soundAllowed]);

  useEffect(() => {
    if (remainingPairs === 0 && playing) {
      setGameOver(true);
    }
  }, [remainingPairs, playing]);

  const toggleCard = (name) => {
    if (firstCard === "") setFirstCard(name);
    else if (secondCard === "") setSecondCard(name);
    else return;
  };

  const startNewGame = () => {
    setPlaying(false);
    setGameOver(false);
    setRemainingPairs(0);
    setElapsedTime(0);
    setCategory("Fruits");
    setDifficulty("Easy");
    setFirstCard("");
    setSecondCard("");
    updateCardItems();
  };

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  return (
    <GameContext.Provider
      value={{
        playing: playing,
        gameOver: gameOver,
        sound: {
          allowed: soundAllowed,
          toggle: () => setSoundAllowed((prevState) => !prevState)
        },
        music: {
          allowed: musicAllowed,
          toggle: () => setMusicAllowed((prevState) => !prevState)
        },
        startNewGame: startNewGame,
        toggleGame: () => setPlaying((prevPlaying) => !prevPlaying),
        difficulty: {
          value: difficulty,
          updateDifficulty: (newDifficulty) => setDifficulty(newDifficulty)
        },
        category: {
          value: category,
          updateCategory: (newCategory) => setCategory(newCategory),
        },
        cards: cardItems,
        clicked: {
          firstCard: firstCard,
          secondCard: secondCard,
          updateCard: toggleCard,
        },
        remainingPairs: remainingPairs,
        elapsedTime: {
          value: elapsedTime,
          updateElapsedTime: (newElapsedTime) => setElapsedTime(newElapsedTime),
        }
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContextProvider };
export default GameContext;
