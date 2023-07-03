/**console.log("Hago consulta - fetch")
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
console.log("Fin consulta - fetch")

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




function Swmovie() {
const [item,setItem] = useState(1)  //
const [movie,setMovie] = useState("")



 useEffect(()=>{
async function fetchData(){
    const res = await axios.get(`https://swapi.dev/api/films/${item}`)  // acá hacemos la consulta de axios a la API
    setMovie(res.data) // la data devuelta de la consulta la almacenamos en la variable movie
    console.log(res.data)  // mostramos por consola la data que devolvió la consulta de la API
}
fetchData() // ejecutamos la función de búsqueda de datos

},[item])



  return (
    <div>
        <h1>Pich a movie number:</h1>
        <select value={item} onChange={(e)=>{setItem(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        </select>
        
        <div style={{textAlign:"-webkit-center"}}>
           <h3> Your movie is : <span style={{color:'darkgreen'}}>{movie.title }</span>  </h3>
           <h3>Director is : <span style={{color:'darkgreen'}}>{movie.director }</span> </h3>
           <h3>Opning Crawl is :</h3> <p style={{color:'darkgreen',width:"40%"}}>{movie.opening_crawl }</p> 
        </div>
        <div>

        </div>
        </div>
        
  )
*/