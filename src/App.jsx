import { useState } from 'react'
import viteLogo from '/vite.svg'
import { DisplayDifficulty } from './components/DisplayDifficulty/DisplayDifficulty'
import { MenuList } from './components/MenuList/MenuList';

function App() {

  const [difficulty, setDifficulty] = useState(null)
  
  return (
    <div style={{display:"inline-flex", width:"100%", justifyContent:"space-evenly"}}>
      <MenuList />
      <DisplayDifficulty difficulty={difficulty} />
    </div>
  )
}

export default App
