import React, { useState } from 'react'
import Icon from "./components/Icon";

function App() {
  return (
    <ul className="react-logos">
      <li className="react-logos__card">
      <Icon iconName="react18"/>
      <p className="react-logos__label">18*18 icon</p>
      </li >
      <li className="react-logos__card">
        <Icon iconName="react24"/>
        <p className="react-logos__label">24*24 icon</p>
      </li>
      <li className="react-logos__card">
        <Icon iconName="react36"/>
        <p className="react-logos__label">36*36 icon</p>
      </li>
      <li className="react-logos__card">
        <Icon iconName="react48"/>
        <p className="react-logos__label">48*48 icon</p>
      </li>
    </ul>
  )
}

export default App
