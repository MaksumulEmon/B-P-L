import { Suspense } from 'react'
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

  return (
    <>

      <Navbar></Navbar>
      <Hero></Hero>

      <Suspense fallback={<Fallback></Fallback>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
