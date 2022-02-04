import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Query1Ordenes = ({codproducto}) => {
    const[ordenes, setordenes] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44330/api/WebAPICoreNorthwind/OrdenesPorProducto/'+codproducto)
        .then(resp => {
            setordenes(resp.data);
        }).catch(eror => {
            console.log(eror);
        })
    },[codproducto]);
    var n = 1;
    /*
    var totalCantidadVendida = 0;
    //  recorriendo los valores de la variable de estado ordenes
    ordenes.map(item => {
        totalCantidadVendida += item.cantidad
    })*/
    return (
        <div>
            <h1>Lista de Ordenes por Producto Seleccionado</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Orden</th>
                        <th>CodCliente</th>
                        <th>CodEmpleado</th>
                        <th>CodProducto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody className="text-start">
                    {ordenes.map(item => (
                        <tr key={item.orden}>
                            <td>{n++}</td>
                            <td>{item.orden}</td>
                            <td>{item.codCliente}</td>
                            <td>{item.codEmpleado}</td>
                            <td>{item.codProducto}</td>
                            <td>{item.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Query1Ordenes
