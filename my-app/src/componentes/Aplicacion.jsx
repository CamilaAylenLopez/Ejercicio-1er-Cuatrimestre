import './Aplicacion.css'
import React, { Fragment, useState, useEffect } from "react"

const Aplicacion = () => {
    /*const [variable, setVariable] = useState(*valorInicial*)*/
    const [texto, setTexto] = useState("")
    const [contador, setContador] = useState(0)

    /**cuando cambia el valor del input se ejecuta lo de adentro */
    const handleChange = (e) =>{
        setTexto(e.target.value)
    }

    /**cuando variable cambie su valor, se ejecutara lo que esta dentro del useEffect */
    useEffect( () => {
        setContador(contador + 1)
    }, [texto])

    return (
        <>
            <input onChange={handleChange} />
            <p>Texto: {texto}</p>
            <p>Contador: {contador}</p>
        </>
    )
}
export default Aplicacion

