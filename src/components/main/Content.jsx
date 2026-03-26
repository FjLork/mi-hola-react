import "../../styles/main/Content.css"
import InicioView from "./views/InicioView"
import TareasView from "./views/TareasView"
import AjustesView from "./views/AjustesView"

function Content({ view }) {
  const renderView = () => {
    switch (view) {
      case "Inicio":
        return <InicioView />
      case "Tareas":
        return <TareasView />
      case "Ajustes":
        return <AjustesView />
      default:
        return <h2>Vista no encontrada</h2>
    }
  }

  return <section className="content">{renderView()}</section>
}

export default Content