import React, { Fragment, useState, useEffect } from "react"
import './Prueba.css'

/*- Un Botón, con el cual se puede ir subiendo el valor del número.
- La visualización del número, que se debería ir actualizando a medida que se agrega el botón.
- Para el componente deben utilizar alguna biblioteca como Bootstrap, Material UI, 
un estilo propio, o alguna con la que conozcan (por lo tanto, tienen que tener un estilo, el componente, deben usar la creatividad).*/

const Prueba = () => {
    const [contador, setContador] = useState(0)
    

    const handleChange = (e) => {
        setContador(contador + 1)
    }

    return (
        <>
            <h2>Prueba</h2>
            <button type="submit" className="boton" onClick={handleChange}>SUBIR EL VALOR DEL CONTADOR!!</button>
            <p>Contador: {contador}</p>
        </>

    )

}

export default Prueba