import { useState } from "react"
import { clamp } from "../utils/clamp"

function useResizableMenu(initialWidth = 260, minWidth = 180, maxWidth = 500) {
  const [menuWidth, setMenuWidth] = useState(initialWidth)

  const handleMouseDown = () => {
    const handleMouseMove = (e) => {
      const newWidth = clamp(e.clientX, minWidth, maxWidth)
      setMenuWidth(newWidth)
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return {
    menuWidth,
    handleMouseDown,
  }
}

export default useResizableMenu