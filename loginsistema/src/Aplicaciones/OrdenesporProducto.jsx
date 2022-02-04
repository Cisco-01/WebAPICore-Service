import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdenesporProducto=({producto}) => {
    const[ordenes,setOrdenes] = useState([]);

    useEffect(()=>{
        axios.get('https://localhost:44306/api/ServicioWebAPINorthwind/ConsultaOrdenesporProducto/'+producto)
        .then((response)=>{
            setOrdenes(response.data);
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[producto])
    var n=1;
    //para obtener el total de cantidades       
     var totalcantidad=0;
     ordenes.forEach(item =>{
            totalcantidad+=item.cantidad
     })        
    return (
        <div>
            <h1>Lista de Ordenes por Producto Seleccionado</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Nro.Orden</th>
                        <th>Cod.Cliente</th>
                        <th>Cod.Empleado</th>
                        <th>Cod.Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody className="text-start">
                    {ordenes.map(item =>(                         
                        <tr key={item.orderID}>
                            <td>{n++}</td>
                            <td>{item.orderID}</td>
                            <td>{item.customerID}</td>
                            <td>{item.employeeID}</td>
                            <td>{item.productID}</td>
                            <td>{item.cantidad}</td>                            
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="6" align="center">
                           <h3>Cantidad Total Vendida : {totalcantidad}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrdenesporProducto
