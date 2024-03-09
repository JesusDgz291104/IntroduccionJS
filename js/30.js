const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    console.log("desdes api")
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            console.log("OK")
        })
}

consultarAPI()