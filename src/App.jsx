import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className='max-w-[1320px] mx-auto w-11/12 lg:w-full'>
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
