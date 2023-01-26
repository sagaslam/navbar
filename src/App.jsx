import { useState } from 'react'

import './App.css'
import SideBar from './SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <SideBar></SideBar>
    </div>
  )
}

export default App
