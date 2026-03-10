import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Available from './components/Available/Available';
import Cricketers from './components/Cricketers/Cricketers';

function App() {
  const [coins, setCoins] = useState(0);

  const handleCoinIncrement = () => {
    const newCoins = coins + 120000;
    setCoins(newCoins);
  }

  return (
    <>
      <div className='max-w-[1320px] mx-auto w-11/12 lg:w-full'>
        <Header coins={coins}></Header>
        <Banner handleCoinIncrement={handleCoinIncrement}></Banner>
        <Available></Available>
        <Cricketers></Cricketers>
      </div>
    </>
  )
}

export default App
