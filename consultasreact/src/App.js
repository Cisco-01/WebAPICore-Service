import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Clientes from './Components/Clientes';
import Inicio from './Components/Inicio';
import ConsultaDeProducto from './Components/ConsultaDeProducto';
import ConsultasDeClienteyAnio from './Components/ConsultasDeClienteyAnio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <section className="cointainer mt-5">
        <div className='btn-group'>
          <Link to = "/" className='btn btn-success'>Inicio</Link>
          <Link to = "/Clientes" className='btn btn-success'>Listar Clientes</Link>
          <Link to = "/ConsultaDeProductos" className='btn btn-success'>Consultar Productos</Link>
          <Link to = "/ConsultarClientesyAnio" className='btn btn-success'>Consultar Clientes y Año</Link>
        </div>
        <hr />
        <Routes>
          <Route path="/" element= {<Inicio/>}/>
          <Route path="/Clientes" element={<Clientes/>}/>
          <Route path="/ConsultaDeProductos" element={<ConsultaDeProducto/>}/>
          <Route path="/ConsultarClientesyAnio" element={<ConsultasDeClienteyAnio/>}/>
        </Routes>
      </section>
    </Router>
  );
}

export default App;
