import React, {Fragment,useEffect,useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import {useNavigate} from 'react-router-dom';

const Listadoclientes =() => {
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

    const[data,setData]= useState([]);

    useEffect(() =>{
        axios.get('https://localhost:44306/api/ServicioWebAPINorthwind/ListaClientes')
        .then((response)=>{
            setData(response.data);
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    var cantidad = data.length;
    var n=1;
    return (
        <Fragment>            
            <div className="text-start">
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            <br />
                <h1 className='text-center'>Lista de Clientes</h1>
                <br></br>
                <h4>Numero de Clientes {cantidad}</h4>               
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Customerid</th>
                    <th>CompanyName</th>
                    <th>Contacto</th>
                    <th>Titulo del Contacto</th>
                    <th>Direccion</th>
                    <th>Ciudad</th>
                    <th>Pais</th>
                    </tr>
                </thead>
                <tbody className="text-start">
                    {data.map(item =>(
                        <tr key={item.customerId}>
                           <td>{n++}</td>
                           <td>{item.customerId}</td>
                           <td>{item.companyName}</td>
                           <td>{item.contactName}</td>
                           <td>{item.contactTitle}</td>
                           <td>{item.address}</td>
                           <td>{item.city}</td>
                           <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Listadoclientes

