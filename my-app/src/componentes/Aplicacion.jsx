import './Aplicacion.css'
import React, { Fragment, useState, useEffect } from "react"

const Aplicacion = () => {
    /*const [variable, setVariable] = useState(*valorInicial*)*/
    const [texto, setTexto] = useState("")
    const [contador, setContador] = useState(0)
    const [letras, setletras] = useState(0)
    const [input, setInput] = useState("")
    const [Bandera, setBandera] = useState([{
        bandera: null,
        nombre: null,
    }])
    const [BanderaActual, setBanderaActual] = useState(0)


    /**cuando cambia el valor del input se ejecuta lo de adentro */
    const handleChange = (e) => {
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
    useEffect(() => {
        setContador(contador + 1)
    }, [texto])


    useEffect(() => {
        const obtenerAbanderas = async () => {
            try {
                const res = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
                const data = await res.json()
                const updatedBandera = data.data.map(e => ({
                    bandera: e.flag,
                    nombre: e.name.toUpperCase()
                }))
                setBandera(updatedBandera)
                setBanderaActual(Math.floor(Math.random() * updatedBandera.length))
            } catch (error) {
                console.error(error)
            }
        }
        obtenerAbanderas()
    }, [])

    return (
        <>
            <input onChange={handleChange} />
            <p>Texto: {texto}</p>
            <p>Contador: {contador}</p>
            <p>Letras: {letras}</p>

            <form onSubmit={handleSubmit}>
                <input type="text" className="u-full-width" placeholder='texto' id='1' />
                <button type="submit" className="u-full-width button-primary">Submit</button>
            </form>

            <p>{input}</p>

            <ul id="valores" />
        </>
    )
}
export default Aplicacion

