import "../styles/Footer.css"
import { getFooterText } from "../services/appConfigService"

function Footer() {
  return (
    <footer className="footer">
      <p>{getFooterText()}</p>
    </footer>
  )
}

export default Footer