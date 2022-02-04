import React,{useState,useEffect,Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import OrdenesporProducto from './OrdenesporProducto';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import {useNavigate} from 'react-router-dom';

const Consultaproductos=()=>{
    //cookies
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
    //----------------------------------------------//

    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://localhost:44306/api/ServicioWebAPINorthwind/ListaProductos')
        .then((response)=>{
            setData(response.data);
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    //Crear un metodo para recuperar el codigo del producto seleccionado
    const[producto,setproducto]=useState("");
    function getcodigo(e){
        setproducto(e.target.value); //e.target.value (recupera el codigo de la etiqueta select)
    }

    return (
        <div>
            <div className="text-start">
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            <br />
            </div>
            <div className="form-group">
                <h1 className="text-center">
                    Consulta de Ordenes Vendidas por Producto
                </h1>
                <h4><b>Seleccione un Producto</b></h4>
                <select name="cboproductos" className="form-control"
                  value={producto} onChange={(e)=> getcodigo(e)}>
                      {data.map(item =>(
                <option key={item.productId} value={item.productId}>
                       {item.productName}
                </option>
                      ))}
                  </select>
            </div>
            <Fragment>
              <OrdenesporProducto
                  producto={producto}
              />
            </Fragment>
        </div>
    )
}

export default Consultaproductos