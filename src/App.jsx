import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'

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
      </div>
    </>
  )
}

export default App
