import React, { Fragment, useState, useEffect } from "react"
import './Prueba.css'

/*Con la siguiente URL: https://countriesnow.space/api/v0.1/countries/currency, hacer un componente, que al agregarlo a una app de React,
muestre dentro de una tabla, el país (name) y cuál es su moneda (currency).
Tengan en cuenta que la API, lo devuelve dentro de data.
El objetivo es que cuando se renderice el componente, se haga la consulta a la mencionada API.
Hacer y pegar en el cuadro de abajo el componente.*/

const Prueba = () => {
    const [pais, setPais] = useState([{
        nombre: null,
        moneda: null,
    }])

    useEffect(() => {
        const obtenerPais = async () => {
            try {
                const res = await fetch("https://countriesnow.space/api/v0.1/countries/currency")
                const data = await res.json()
                const updatedPais = data.data.map(e => ({
                    nombre: e.name,
                    moneda: e.currency
                }))
                setPais(updatedPais)
            }
            catch (error) {
                console.error(error)
            }
        }
        obtenerPais()
    }, [])


    return (
        <>
            <h2>Prueba</h2>
            {pais && pais.map((pais, i) => (
                <div key={i}>
                    <div>
                        <li><b>Pais n°{i+1}:</b> {pais.nombre}, <b>Moneda:</b> {pais.moneda}</li>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Prueba