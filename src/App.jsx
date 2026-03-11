import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Category from './components/Category/Category';
import Cricketers from './components/Cricketers/Cricketers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { toast, ToastContainer } from 'react-toastify';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  const [coins, setCoins] = useState(0);

  const [isActive, setIsActive] = useState({
    status: 'available'
  })

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // coins increment
  const handleCoinIncrement = () => {
    toast.success('Credit Added to your Account', {
      position: "top-center"
    });
    const newCoins = coins + 1500000;
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

    // existing player validation
    if (isExist) {
      toast.error('Player already selected', {
        position: "top-center"
      });
      return;
    }

    else {
      const newSelectedPlayers = [...selectedPlayers, player];

      // max player validation
      if (newSelectedPlayers.length > 6) {
        toast.error("Unable to add Additional Players", {
          position: "top-center"
        });
        return;
      }

      else {
        // enough coins validation
        if (coins < player.biddingPrice) {
          toast.error('Not Enough Credit', {
            position: "top-center"
          });
          return;
        }

        else {
          // add player
          toast.success(player.name + ' added', {
            position: "top-center"
          });
          setSelectedPlayers(newSelectedPlayers);
          // console.log(newSelectedPlayers);

          // coins decrement
          const decrementCoins = coins - player.biddingPrice;
          setCoins(decrementCoins);
        }
      }
    }
  }

  // delete choose player
  const handleDeletePlayer = (player) => {
    const remainingPlayer = selectedPlayers.filter(remaining => remaining.playerId !== player);
    // console.log(remainingPlayer);
    setSelectedPlayers(remainingPlayer);
    toast.warning('Player removed');
  }

  // add more player button
  const handleAddMorePlayer = () => {
    setIsActive({
      status: 'available'
    })
  }

  return (
    <>
      <ToastContainer />

      <div className='max-w-[1340px] mx-auto w-11/12 lg:w-full'>
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
              handleDeletePlayer={handleDeletePlayer}
              handleAddMorePlayer={handleAddMorePlayer}
            ></SelectedPlayers>)
        }

        <Newsletter></Newsletter>
      </div>
    </>
  )
}

export default App
