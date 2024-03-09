const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    try{
         const response = await fetch(url)
         const result =  await response.json()
         console.log(result);

    }catch(error){
        console.log(error)
    } finally{
        console.log("OK")
    }
}

consultarAPI()///async away