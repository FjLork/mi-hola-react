import { useEffect, useState } from "react"
import { getTareas } from "../services/tareasService"

// Hook personalizado para obtener tareas desde un servicio/API
function useTareas() {
  // Estado para guardar las tareas
  const [tareas, setTareas] = useState([])

  // Estado para indicar si está cargando
  const [loading, setLoading] = useState(true)

  // Estado para guardar posibles errores
  const [error, setError] = useState("")

  useEffect(() => {
    // Variable para evitar actualizar el estado si el componente se desmonta
    let isMounted = true

    // Función asíncrona para cargar las tareas
    async function loadTareas() {
      try {
        // Activamos loading y limpiamos errores previos
        setLoading(true)
        setError("")

        // Llamada al servicio que obtiene las tareas (API, backend, etc.)
        const data = await getTareas()

        // Solo actualizamos el estado si el componente sigue montado
        if (isMounted) {
          setTareas(data)
        }
      } catch (err) {
        // Si ocurre un error, lo guardamos
        if (isMounted) {
          setError(err.message || "Error al cargar tareas")
        }
      } finally {
        // Siempre desactivamos loading al terminar
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    // Ejecutamos la carga de tareas al montar el componente
    loadTareas()

    // Cleanup: se ejecuta cuando el componente se desmonta
    return () => {
      // Marcamos como desmontado para evitar actualizar estado después
      isMounted = false
    }
  }, []) // [] => se ejecuta solo una vez al montar

  // Devolvemos los datos y estados para usarlos en componentes
  return {
    tareas,
    loading,
    error,
  }
}

// Exportamos el hook
export default useTareas