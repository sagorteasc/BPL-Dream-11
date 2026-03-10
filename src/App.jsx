import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Category from './components/Category/Category';
import Cricketers from './components/Cricketers/Cricketers';

function App() {
  const [coins, setCoins] = useState(0);
  const [active, setActive] = useState('available');

  // coins increment
  const handleCoinIncrement = () => {
    const newCoins = coins + 150000;
    setCoins(newCoins);
  }

  // available players
  const handleAvaiblePlayers = () => {
    // console.log('available');
    setActive('available');
  }

  // selected players
  const handleSelectedPlayers = () => {
    // console.log('selected');
    setActive('selected');
  }

  return (
    <>
      <div className='max-w-[1320px] mx-auto w-11/12 lg:w-full'>
        <Header coins={coins}></Header>
        <Banner handleCoinIncrement={handleCoinIncrement}></Banner>
        <Category
          active={active}
          handleAvaiblePlayers={handleAvaiblePlayers}
          handleSelectedPlayers={handleSelectedPlayers}
        ></Category>
        <Cricketers></Cricketers>
      </div>
    </>
  )
}

export default App
