import { TIcon } from "../types"

export default function Icon(props: TIcon) {
  const {viewBox: svgViewBox, d: svgPath, className} = props;

  return (
    <svg viewBox={svgViewBox} className={`icon ${className}`}>
      <path d={svgPath}/>
    </svg>
  )
}
