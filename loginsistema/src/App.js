import React from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Menu from './Components/Menu';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listadoclientes from './Aplicaciones/Listadoclientes';
import Consultaproductos from './Aplicaciones/Consultaproductos';
import ConsultaClienteyAnio from './Aplicaciones/ConsultaClienteyAnio';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
  <Fragment>
    <div className='containerMenu'>
    <h1>INICIO DE SESION Y CONSULTA DE DATOS</h1>        
    <BrowserRouter>
    <div className="container mt-5">
      <div className="btn-group">     
        <Link to="/listadoclientes" className="btn btn-success">
          Listado de Clientes
        </Link>
        <Link to="/consultaproductos" className="btn btn-success">
          Consulta de Ordenes por Producto
        </Link>
        <Link to="/consultaClienteyAnio" className="btn btn-success">
          Consulta de Ordenes por Cliente y Año
        </Link>
      </div>
      <hr/>
   
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/menu" element ={<Menu/>}/>
      <Route path="/listadoclientes" element={<Listadoclientes/>} />                       
      <Route path="/consultaproductos" element={<Consultaproductos/>}/>            
      <Route path="/consultaClienteyAnio" element={<ConsultaClienteyAnio/>}/>
    </Routes>
    </div>
  </BrowserRouter>   
   </div> 
  </Fragment>
  );
}

export default App;
