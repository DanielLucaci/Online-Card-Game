import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GameContextProvider } from './store/game-context'


ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


