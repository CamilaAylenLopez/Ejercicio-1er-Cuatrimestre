/*console.log("Hago consulta - fetch")
fetch("https://mercados.ambito.com//home/general")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores");
        res.forEach(actual => {
            if (actual.compra && actual.venta) {
                dolar = document.createElement("li")
                dolar.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(dolar)    
            }            
        })
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")*/

console.log("Hago consulta - axios");
(async () => { 
    console.log("Hago async consulta - axios")
    await axios({
        method: 'get',
        url: 'https://mercados.ambito.com//home/general',
    })
    .then(res => {
        console.log("res", res)
        valores = document.getElementById("valores");
        res.data.forEach(actual => {
            if (actual.compra && actual.venta) {
                dolar = document.createElement("li")
                dolar.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(dolar)    
            }            
        })
    })
    .catch(err => console.error("error", err))
    console.log("Fin async consulta - axios")
})();
console.log("Fin consulta - axios")
