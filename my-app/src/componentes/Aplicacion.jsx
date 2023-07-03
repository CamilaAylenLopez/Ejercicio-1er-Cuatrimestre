import './Aplicacion.css'
import React, { Fragment, useState, useEffect } from "react"

const Aplicacion = () => {
    /*const [variable, setVariable] = useState(*valorInicial*)*/
    const [texto, setTexto] = useState("")
    const [contador, setContador] = useState(0)
    const [letras, setletras] = useState(0)
    const [input, setInput] = useState("")


    /**cuando cambia el valor del input se ejecuta lo de adentro */
    const handleChange = (e) =>{
        setTexto(e.target.value)
        setletras(e.target.value.length)
    }

    const subirValor = () => {
        setInput(document.getElementById(1).value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        subirValor();
        document.getElementById(1).value = ""
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
            <p>Letras: {letras}</p>

            <form onSubmit={handleSubmit}>
                <input type="text" className="u-full-width" placeholder='texto' id='1'/>
                <button type="submit" className="u-full-width button-primary">Submit</button>
            </form>

            <p>{input}</p>
        </>
    )
}
export default Aplicacion

