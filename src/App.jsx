import { useState } from 'react'
import { DisplayDifficulty } from './components/DisplayDifficulty/DisplayDifficulty'
import { MenuList } from './components/MenuList/MenuList';

function App() {

  const [currentDifficulty, setCurrentDifficulty] = useState(null)

  function changeDifficulty(newDifficulty) {
    if(newDifficulty==currentDifficulty) {
      setCurrentDifficulty(null)
    }
    else {
      setCurrentDifficulty(newDifficulty)
    }
  }
  
  return (
    <div style={{display:"inline-flex", width:"100%", justifyContent:"space-evenly"}}>

      <MenuList onItemClick={changeDifficulty} currentDifficulty={currentDifficulty} />
      <DisplayDifficulty currentDifficulty={currentDifficulty} />

    </div>
  )
}

export default App
