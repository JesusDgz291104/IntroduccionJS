const product = {
    name : "tablet",
    cost : 800,
    available : true
}
const client = {
    name : "Daniel",
    premium : true
}

//delete product.name
const{name} = product
const{name:nameClient} = client
console.log(name)
console.log(nameClient)

