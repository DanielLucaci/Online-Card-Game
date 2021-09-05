import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import CardContainer from './components/CardContainer';

function App() {
  const [playing, setPlaying] = useState(false); 
  const [category, setCategory] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  return (
    <>
      <Header />
      {playing ? 
       <CardContainer /> : 
       <Menu 
         difficulty={difficulty} 
         category={category}
         onChangeCategory={(category) => setCategory(category)}
         onChangeDifficulty={(difficulty) => setDifficulty(difficulty)}
         onPlayButton={() => setPlaying(true)}
       />
      }
    </>
  );
}

export default App;
