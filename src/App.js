import { useState } from 'react';
//import Token from './components/Token';
import Tokens from './components/Tokens';
import Header from './components/Header';
import AddToken from './components/AddToken';

const App = ()=> {
  const [showAddToken, setShowAddToken] = useState(false);
  
  const defaultTokens = [
    {
      id: 1,
      name: 'Treasure',
      color: 'goldenrod',
      untapped: 0,
      tapped: 0
    },
    {
      id: 2,
      name: 'Clue',
      color: 'lightblue',
      untapped: 0,
      tapped: 0
    },
    {
      id: 3,
      name: 'Food',
      color: 'lightgreen',
      untapped: 0,
      tapped: 0
    },
  ];

  const colorArray = [
    "antiquewhite",
    "aquamarine",
    "burlywood",
    "darkcyan",
    "coral",
    "greenyellow",
    "lavender",
    "lemonchiffon",
    "mediumorchid",
    "salmon",
    "steelblue",
    "tomato"
  ]

  const getRandomColor = () => {
    const randInd = Math.floor(Math.random() * colorArray.length);

    return colorArray[randInd];
  }

  const [tokens, setTokens] = useState(defaultTokens);
  
  // Add new token type
  const addTokenType = (token) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newToken = {id, ...token};
    newToken.tapped = 0;
    newToken.untapped = 0;
    newToken.color = getRandomColor();
    setTokens([...tokens, newToken]);
    console.log(tokens);
  }

  // Tap and untap functions
  const tapToken = (id) => {
    console.log('tapping');
    setTokens(tokens.map((token) => token.id === id && token.untapped > 0 ? { ...token, tapped: token.tapped + 1, untapped: token.untapped - 1 } : token));
  }

  const untapToken = (id) => {
    console.log('untapping');
    setTokens(tokens.map((token) => token.id === id && token.tapped > 0 ? { ...token, tapped: token.tapped - 1, untapped: token.untapped + 1 } : token));
  }

  const untapAll = () => {
    setTokens(tokens.map((token) => token.tapped > 0 ? { ...token, untapped: token.tapped + token.untapped, tapped: 0 } : token));
  }

  // Clear tokens
  // const clearToken = (id) => {
  //   setTokens(tokens.map((token) => token.id === id ? { ...token, untapped: 0, tapped: 0 } : token));
  // }

  const clearAll = () => {
    setTokens(tokens.map((token) => { return { ...token, tapped: 0, untapped: 0 }}))
  }

  // Add/Remove tokens
  const addToken = (id) => {
    console.log('adding token')
    setTokens(tokens.map((token) => token.id === id ? { ...token, untapped: token.untapped + 1 } : token));
  }

  const removeToken = (id) => {
    console.log('removing token')
    setTokens(tokens.map((token) => token.id === id && token.tapped > 0 ? { ...token, tapped: token.tapped - 1} : token.id === id && token.untapped > 0 ? { ...token, untapped: token.untapped - 1 } : token));
  }



  return (
    <div>
      <Header title="Token Tracker" onClearAll={clearAll} onUntapAll={untapAll} onAdd={() => setShowAddToken(!showAddToken)} showAdd={showAddToken}/>
      {showAddToken && <AddToken onAdd={addTokenType} />}
      <div className="container">
        <Tokens tokens={tokens} onUntap={untapToken} onTap={tapToken} onAdd={addToken} onRemove={removeToken} />
      </div>
      
      
    </div>
  );
}

export default App;
