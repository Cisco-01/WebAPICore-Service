import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ordenesporclienteyanio=({codcliente,anio,consulta})=> {
    const[data,setdata]=useState([]);

    const ordenesporclienteyanioGET=async()=>{
        axios.get(
    'https://localhost:44306/api/ServicioWebAPINorthwind/ConsultaOrdenesporClienteyAnio/'+codcliente+'/'+anio)
        .then((response)=>{
            setdata(response.data);
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        if(consulta===0){
        ordenesporclienteyanioGET();
        consulta=0;
       }
    })
    var n=1;
    var venta=0;
    data.forEach(item=>{
        venta+=item.venta
    })
    return (
        <div>           
            <h1>Listado de Pedidos por Cliente y Año</h1>
            <table className="table table-bordered">
                <thead>                    
                    <th>Item</th>
                    <th>Orden</th>
                    <th>Fecha</th>
                    <th>Año</th>
                    <th>Cod.Cliente</th>
                    <th>Venta</th>
                </thead>
                <tbody className="text-start">
                    {data.map(item =>(
                        <tr key={item.orden}>
                            <td>{n++}</td>
                            <td>{item.orden}</td>
                            <td>{item.fecha}</td>
                            <td>{item.anio}</td>
                            <td>{item.customerid}</td>
                            <td>{item.venta}</td>
                        </tr>
                    ))}
                    <tr>
                      <td colSpan="6" align="center">
                          Total de Venta: {venta.toFixed(2)}
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Ordenesporclienteyanio
