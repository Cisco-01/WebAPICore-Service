import React, { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Query2Ordenes from './Query2Ordenes';

const ConsultasDeClienteyAnio = () => {

    // cargar Clientes
    const[clientes, setclientes] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44330/api/WebAPICoreNorthwind/ListarClientes')
        .then(resp => {
            setclientes(resp.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    // cargar Años
    const[anios, setanios] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44330/api/WebAPICoreNorthwind/AniodeVentas')
        .then(resp => {
            setanios(resp.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
    const[codcliente, setcodcliente] = useState("");
    function obtenerCliente(e) {
        setcodcliente(e.target.value);
    }
    const[anio, setanio] = useState("");
    function obtenerAnio(e) {
        setanio(e.target.value);
    }
    return (
        <Fragment>
            <div className="form-group">
                <h1 className="text-center">Consulta de Ordenes Vendidas por Cliente y Año de Venta</h1>
                <h4><b>Seleccione un Cliente: </b></h4>
                <select 
                    name="cboclientes" 
                    className="form-control" 
                    value={codcliente} 
                    onChange={(e) => obtenerCliente(e)}>
                        <option>Seleccionar</option>
                        {clientes.map(item => (
                            <option key={item.customerId} value = {item.customerId}>
                                {item.contactName}
                            </option>
                        ))}
                </select>
                <h4><b>Año de Venta: </b></h4>
                <select 
                    name="cboventas" 
                    className="form-control" 
                    value={anio} 
                    onChange={(e) => obtenerAnio(e)}>
                        <option>Seleccionar</option>
                        {anios.map(item => (
                            <option key={item.anios} value = {item.anios}>
                                {item.anios}
                            </option>
                        ))}
                </select>
            </div>
            <button 
                type="button"
                className="btn btn-primary mt-3"
            >
                Consultar
            </button>
            <Fragment>
                <Query2Ordenes
                    anio = {anio} 
                    codcliente = {codcliente}
                />
            </Fragment>
        </Fragment>
    )
}

export default ConsultasDeClienteyAnio
