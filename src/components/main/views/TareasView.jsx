import useTareas from "../../../hooks/useTareas"

function TareasView() {
  const { tareas, loading, error } = useTareas()

  if (loading) {
    return <p>Cargando tareas...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <h2>Listado de Tareas</h2>

      {tareas.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              {tarea.nombre ?? tarea.titulo ?? `Tarea ${tarea.id}`}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default TareasView