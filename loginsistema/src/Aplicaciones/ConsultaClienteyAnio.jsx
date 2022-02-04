import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../App.css';
import Ordenesporclienteyanio from './Ordenesporclienteyanio';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import {useNavigate} from 'react-router-dom';

const ConsultaClienteyAnio=()=> {
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

    const[cliente,setCliente]= useState([]);
    const[anios,setAnios]=useState([]);

    const[consulta,guardarconsulta]=useState(0);
    const clientesGET=async()=>{
        axios.get('https://localhost:44306/api/ServicioWebAPINorthwind/ListaClientes')
        .then((response)=>{
            setCliente(response.data);
            console.log(response);
            guardarconsulta(1);
        }).catch((error)=>{
            console.log(error);
        })        
    }
    const AniosGET= async()=>{
        axios.get('https://localhost:44306/api/ServicioWebAPINorthwind/AniosVentas')
        .then((response)=>{
            setAnios(response.data);
            console.log(response);
            guardarconsulta(1);
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(() =>{
        clientesGET();
        AniosGET();
    },[])
    const[codcliente,setcodcliente]=useState("");
    function getcodigocliente(e){
        setcodcliente(e.target.value);
        guardarconsulta(1);
    }
    const[anio,setanio]=useState("");
    function getanio(e){
        setanio(e.target.value);
        guardarconsulta(1);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(codcliente.trim()===''|| anio.trim()===''){
            alert('Consulta: No ha seleccionado un cliente o un año de venta');
            return;
        }
        if(codcliente.trim()==='seleccionar'|| anio.trim()==='seleccionar'){
            alert('Consulta:Falto seleccionar el cliente o el año de venta');
            return;
        }
        guardarconsulta(0);
    }
    return (
        <div className="text-start">        
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            <br />        
          <h1>Consulta de Ordenes Vendidas por Cliente y Año</h1>
          <form onSubmit={handleSubmit}>
             <div>
                <label htmlFor="customerid">Seleccionar Cliente</label>
                <select name="customerid" className="form-control"
                   value={codcliente} onChange={(e)=> getcodigocliente(e)}>
                    <option value='seleccionar'>Seleccionar Cliente</option>
                    {cliente.map(item =>(
                        <option key={item.customerId} value={item.customerId}>
                            {item.companyName}
                        </option>
                    ))}
                </select>
             </div>
             <div>
                <label htmlFor="anios">Año de Venta</label>
                <select name="anios" className="form-control"
                   value={anio} onChange={(e)=> getanio(e)}>
                    <option value='seleccionar'>Seleccionar Año de Venta</option>
                    {anios.map(item =>(
                        <option key={item.anios} value={item.anios}>
                            {item.anios}
                        </option>
                    ))}
                </select>
             </div><br/>
             <div>
              <input type="submit" value="Consultar" className="btn btn-primary"/>
             </div>
             <div>
                 <Ordenesporclienteyanio
                    codcliente={codcliente}
                    anio={anio}
                    consulta={consulta}
                 />
             </div>
          </form>
        </div>
    )
}

export default ConsultaClienteyAnio
