import "../styles/Header.css"
import { getAppTitle } from "../services/appConfigService"

function Header() {
  const handleClick = () => {
    alert("ok")
  }

  return (
    <header className="app-header">
      <button className="menu-button" onClick={handleClick}>
        ☰ Menú
      </button>
      <h1>{getAppTitle()}</h1>
    </header>
  )
}

export default Header