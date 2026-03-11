import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Category from './components/Category/Category';
import Cricketers from './components/Cricketers/Cricketers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

function App() {
  const [coins, setCoins] = useState(0);

  const [isActive, setIsActive] = useState({
    status: 'available'
  })
  console.log(isActive)

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // coins increment
  const handleCoinIncrement = () => {
    const newCoins = coins + 150000;
    setCoins(newCoins);
  }

  // active button
  const handleIsActiveButton = (status) => {
    if (status === 'available') {
      setIsActive({
        status: 'available'
      })
    }

    else {
      setIsActive({
        status: 'selected'
      })
    }
  }

  // choose player
  const handleChoosePlayer = (player) => {
    const isExist = selectedPlayers.find(p => p.playerId === player.playerId);

    if (isExist) {
      return
    }
    else {
      const newSelectedPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newSelectedPlayers);
      // console.log(newSelectedPlayers);
    }

  }

  return (
    <>
      <div className='max-w-[1320px] mx-auto w-11/12 lg:w-full'>
        <Header coins={coins}></Header>

        <Banner
          handleCoinIncrement={handleCoinIncrement}
        ></Banner>

        <Category
          isActive={isActive}
          handleIsActiveButton={handleIsActiveButton}
          selectedPlayers={selectedPlayers}
        ></Category>

        {
          isActive.status === 'available' ?

            (<Cricketers
              handleChoosePlayer={handleChoosePlayer}
            ></Cricketers>)

            : (<SelectedPlayers
              selectedPlayers={selectedPlayers}
            ></SelectedPlayers>)
        }

      </div>
    </>
  )
}

export default App
