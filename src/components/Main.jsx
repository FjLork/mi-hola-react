import "../styles/Main.css"
import Menu from "./main/Menu"
import Content from "./main/Content"
import useResizableMenu from "../hooks/useResizableMenu"
import { LAYOUT } from "../utils/constants"
import { useState } from "react"

function Main() {
  const { menuWidth, handleMouseDown } = useResizableMenu(
    LAYOUT.MENU_INITIAL_WIDTH,
    LAYOUT.MENU_MIN_WIDTH,
    LAYOUT.MENU_MAX_WIDTH
  )

  const [selectedView, setSelectedView] = useState("Inicio")

  return (
    <main className="main-layout">
      <div className="menu-container" style={{ width: `${menuWidth}px` }}>
        <Menu onSelect={setSelectedView} />
      </div>

      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <div className="content-container">
        <Content view={selectedView} />
      </div>
    </main>
  )
}

export default Main