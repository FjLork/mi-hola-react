import { useState, useEffect } from "react"
import { clamp } from "../utils/clamp"

// Hook personalizado para menú redimensionable usando useEffect
function useResizableMenu(initialWidth = 260, minWidth = 180, maxWidth = 500) {
  // Estado del ancho del menú
  const [menuWidth, setMenuWidth] = useState(initialWidth)

  // Estado para saber si el usuario está arrastrando
  const [isResizing, setIsResizing] = useState(false)

  // Se activa cuando el usuario empieza a arrastrar
  const handleMouseDown = () => {
    setIsResizing(true)
  }

  useEffect(() => {
    // Si no está redimensionando, no hacemos nada
    if (!isResizing) return

    // Función que se ejecuta al mover el ratón
    const handleMouseMove = (e) => {
      const newWidth = clamp(e.clientX, minWidth, maxWidth)
      setMenuWidth(newWidth)
    }

    // Función que se ejecuta al soltar el ratón
    const handleMouseUp = () => {
      setIsResizing(false)
    }

    // Añadimos los listeners
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    // Limpieza automática cuando:
    // - isResizing cambia
    // - el componente se desmonta
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing, minWidth, maxWidth])

  return {
    menuWidth,
    handleMouseDown,
  }
}

export default useResizableMenu