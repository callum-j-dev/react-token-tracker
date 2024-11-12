import { useState, useEffect } from 'react';
import Token from './components/Token';
import Header from './components/Header';

const App = ()=> {
  return (
    <div>
      <Header title="Token Tracker" />
      <div class="container">
        <Token name='Treasure' color='goldenrod' />
        <Token name='Clue' color='lightblue' />
        <Token name='Food' color='lightgreen' />                  
      </div>
      
      
    </div>
  );
}

export default App;
