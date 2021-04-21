import React from 'react'
import Icon from "./components/Icon"
import { react18 } from "./assets/icons"

function App() {
  return (
    <ul className="react-logos">
      <li className="react-logos__card">
        <Icon icon={react18}/>
        <p className="react-logos__label">18*18 icon</p>
      </li >
    </ul>
  )
}

export default App
