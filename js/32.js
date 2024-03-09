const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultAPI = async ()=> {
    const inicio = performance.now()
    const response = await  fetch(url)  //Espera a
    const result = await response.json()
   // console.log(result);
    const response2 = await  fetch(url2)  //Espera a
    const result2 = await response2.json()
   // console.log(result2);
    const fin = performance.now()
    console.log("Tiempo de ejecución: "+ (fin-inicio)+"ms");
}

const consultAPI2 = async ()=> {
    const inicio = performance.now()
   const [response, response2] = await Promise.all([
    fetch(url),
    fetch(url2)
   ])
   const result = await response.json();
   const result2 = await response2.json()
   const fin = performance.now()
   console.log(" Segunda Tiempo de ejecución: "+ (fin-inicio)+"ms");

}
consultAPI()
consultAPI2()