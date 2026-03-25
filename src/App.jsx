import { Suspense, use, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Players from './Players/Players'
import Fallback from './Fallback/Fallback'


// Load Data from json

const fetchPlayers = async () => {
  const res = await fetch("/public/data.json")
  return res.json();
}
function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] =useState(500000);

  return (
    <>

      <Navbar coin={coin}></Navbar>
      <Hero></Hero>

      <Suspense fallback={<Fallback></Fallback>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
