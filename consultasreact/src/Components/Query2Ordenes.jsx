import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Query2Ordenes = ({codcliente, anio}) => {
    const[ordenes, setordenes] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:44330/api/WebAPICoreNorthwind/OrdenesporClienteyAnio/${codcliente}/${anio}`)
        .then(resp => {
            setordenes(resp.data);
        }).catch(eror => {
            console.log(eror);
        })
    },[codcliente, anio]);
    var n = 1;
    var totalCantidadVendida = 0;
    //  recorriendo los valores de la variable de estado ordenes
    ordenes.map(item => {totalCantidadVendida += item.quantity
        console.log(totalCantidadVendida)
        return totalCantidadVendida})
    return (
        <div>
            <h1>Listado de Pedidos por Cliente y Año de Venta</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Orden</th>
                        <th>Fecha</th>
                        <th>Año</th>
                        <th>CodCliente</th>
                        <th>Venta</th>
                    </tr>
                </thead>
                <tbody className="text-start">
                    {ordenes.map(item => (
                        <tr key={item.orden}>
                            <td>{n++}</td>
                            <td>{item.orden}</td>
                            <td>{item.fecha}</td>
                            <td>{item.anio}</td>
                            <td>{item.codCliente}</td>
                            <td>{item.venta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-center">Total de Venta: 
                {totalCantidadVendida += ordenes.quantity}
            </h2>
        </div>
    )
}

export default Query2Ordenes
