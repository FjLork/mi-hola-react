import "../../styles/main/Menu.css"
import { MENU_ITEMS } from "../../utils/constants"

function Menu({ onSelect }) {
  return (
    <aside className="menu">
      <ul>
        {MENU_ITEMS.map((item) => (
          <li key={item} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Menu