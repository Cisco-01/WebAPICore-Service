import React, { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Query1Ordenes from './Query1Ordenes';

const ConsultaDeProducto = () => {
    const[productos, setproductos] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44330/api/WebAPICoreNorthwind/ListarProductos')
        .then(resp => {
            setproductos(resp.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
    const[codproducto, setcodproducto] = useState("");
    function obtenercodigo(e) {
        setcodproducto(e.target.value);
    }
    return (
        <Fragment>
            <div className="form-group">
                <h1 className="text-center">Consulta de Ordenes Vendidas por Producto Seleccionado</h1>
                <h4><b>Seleccione un Producto</b></h4>
                <select 
                    name="cboproductos" 
                    className="form-control" 
                    value={codproducto} 
                    onChange={(e) => obtenercodigo(e)}>
                        <option>Seleccionar</option>
                        {productos.map(item => (
                            <option key={item.productId} value = {item.productId}>
                                {item.productName}
                            </option>
                        ))}
                </select>
            </div>
            <hr />
            <Fragment>
                <Query1Ordenes
                    codproducto = {codproducto} />
            </Fragment>
        </Fragment>
    )
}

export default ConsultaDeProducto
