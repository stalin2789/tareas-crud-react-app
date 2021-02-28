import React from 'react'

function App() {
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la tarea</span>
              <button className="btn btn-primary btn-sm float-right mx-2">Editar</button>
              <button className="btn btn-danger btn-sm float-right">Eliminar</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">Formulario</h4>
          <form>
            <input type="text" className="form-control mb-2" placeholder="Ingrese su tarea...">
            </input>
            <button className="btn btn-primary btn-block"
            type="submit"
            >Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
