import { TIcon } from "../types"

export default function Icon(props: TIcon) {
  const {viewBox: svgViewBox, d: svgPath} = props;

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
