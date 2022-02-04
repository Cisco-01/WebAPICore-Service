import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import {useNavigate} from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

function Menu() {
  const cookies = new Cookies();
    let navigate= useNavigate();
    const cerrarSesion=()=>{
        cookies.remove('id', {path: '/'});
        cookies.remove('nombres', {path: '/'});
        cookies.remove('apellidos', {path: '/'});               
        cookies.remove('correo', {path: '/'});
        cookies.remove('username', {path: '/'});
        cookies.remove('password', {path: '/'});        
        navigate('/');
    }

    useEffect(()=>{
        if(!cookies.get('id')){            
            navigate('/');
        }
          },[]);
 
  return (
   <Fragment>
    <div className="containerMenu">
    <br />
    <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
    <br />    
    <h1>Bienvenidos al Sistema de Consulta de Northwind(Ventas)</h1>
    <h2>Usuario :{cookies.get('nombres')} , {cookies.get('apellidos')}</h2>
    </div>
    
    <table>
      <tr>
        <td>Id</td>
        <td>{cookies.get('id')}</td>
      </tr>
      <tr>
        <td>Nombres</td>
        <td>{cookies.get('nombres')}</td>
      </tr>
      <tr>
        <td>Apellidos</td>
        <td>{cookies.get('apellidos')}</td>
      </tr>
      <tr>
        <td>Correo</td>
        <td>{cookies.get('correo')}</td>
      </tr>
    </table>    
  </Fragment>  
  );
}

export default Menu;