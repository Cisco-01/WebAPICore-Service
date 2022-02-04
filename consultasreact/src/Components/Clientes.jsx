import React, { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Clientes = () => {
    const[clientes, setclientes] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44330/api/WebAPICoreNorthwind/ListarClientes')
        .then(resp => {
            setclientes(resp.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
    var nfilas = clientes.length;
    var n = 1;
    return (
        <Fragment>
            <h1>Listado de Clientes</h1>
            <br />
            <h4>Número de Clientes: {nfilas}</h4>
            <div>
                <table className='table table-bordered table-striped'>
                    <tr>
                        <th>Item</th>
                        <th>Código</th>
                        <th>Cliente</th>
                        <th>Contacto</th>
                        <th>Título</th>
                        <th>Dirección</th>
                        <th>Ciudad</th>
                        <th>País</th>
                    </tr>
                    {clientes.map(item => (
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
                </table>
            </div>
        </Fragment>
    )
}

export default Clientes
