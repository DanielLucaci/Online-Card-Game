import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CardContainer from "./components/CardContainer";
import { cards } from "./data";

function App() {
  const [playing, setPlaying] = useState(false);
  const [category, setCategory] = useState("Fruits");
  const [difficulty, setDifficulty] = useState("Easy");
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    switch(difficulty) {
      case 'Easy':
        setCardItems(shuffle(cards[category]).slice(0, 6));
        break;
      case 'Medium':
        setCardItems(shuffle(cards[category]).slice(0, 8));
        break;
      case 'Hard':
        setCardItems(shuffle(cards[category]).slice(0, 12));
        break;
      default:
        break;
    };
  }, [difficulty, category])

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }



  return (
    <>
      <Header />
      {playing ? (
        <CardContainer 
          difficulty={difficulty}
          cards={cardItems}
        />
      ) : (
        <Menu
          difficulty={difficulty}
          category={category}
          onChangeCategory={(category) => setCategory(category)}
          onChangeDifficulty={(difficulty) => setDifficulty(difficulty)}
          onPlayButton={() => setPlaying(true)}
        />
      )}
    </>
  );
}

export default App;
