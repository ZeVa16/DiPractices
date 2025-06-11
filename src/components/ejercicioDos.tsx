

export default function EjercicioDos() {
    


    const nombreProducto : string = 'SmartTV';

    function agregarAlCarrito():void{
        console.log('El producto', nombreProducto, 'ha sido agregado')

    }
    function eliminarAlCarrito():void{
        console.log('El producto', nombreProducto, 'ha sido eliminado')

    }

    return (
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">Ejercicio 2</h2>
            <hr />
        </div>

        <div className="d-flex justify-content-evenly">
        <button onClick={agregarAlCarrito} className="btn btn-primary col-4 p-1 fs-4 rounded-pill">
        <i className="bi bi-patch-plus-fill"></i>
        <span className="ms-2">Add</span>
        </button>
        <button onClick={eliminarAlCarrito} className="btn btn-danger col-4 p-1 fs-4 rounded-pill">
        <i className="bi bi-trash3-fill"></i>
        <span className="ms-2">Del</span>
        </button>
        </div>
    </div>
  )
}
