import React, { useState } from 'react'
import icons from "../assets/iconPaths.json"

export default function Icon({iconName}) {

  const svgViewBox = icons[iconName].viewBox
  const svgPath = icons[iconName].d

  const svgClass = () => {
    if (svgViewBox === "0 0 18 18") return "icon icon-small"
    else if (svgViewBox === "0 0 24 24") return "icon icon-normal"
    else if (svgViewBox === "0 0 36 36") return "icon icon-medium"
    return "icon icon-large"
  }

  return (
    <svg viewBox={svgViewBox} className={svgClass()}>
      <path d={svgPath}/>
    </svg>
  )
}
