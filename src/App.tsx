import EjercicioDos from "./components/ejercicioDos"
import { EjercicioUno } from "./components/ejercicioUno"

function App() {
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">Hola, utsh</h1>
            
          </div>
        </div>
        {/* Ejercicio 1 */}
        <EjercicioUno/>
        {/* Ejercicio 2 */}
        <EjercicioDos/>
      </div>
    
      
    </>
    
  )
}

export default App
