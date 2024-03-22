
import Die from './Die'
import './App.css'
import LuckyN from './LuckyN'

function App() {

  return (
    <>
    <LuckyN numDice={3} goal={9}/>
    <LuckyN numDice={2} goal={7}/>
    <LuckyN numDice={10} goal={45}/>
    </>
  )
}

export default App
