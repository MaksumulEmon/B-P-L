import { Suspense, use, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Players from './Players/Players'
import Fallback from './Fallback/Fallback'
import { ToastContainer } from 'react-toastify'
import Fotter from './Footer/Fotter'


// Load Data from json

const fetchPlayers = async () => {
  const res = await fetch("/public/data.json")
  return res.json();
}
function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState(500000);

  return (
    <>

      <Navbar coin={coin}></Navbar>
      <Hero></Hero>

      <Suspense fallback={<Fallback></Fallback>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      <Fotter></Fotter>

      {/* React toastfly */}
      <ToastContainer />
    </>
  )
}

export default App
