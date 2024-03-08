const product = {
    name : "tablet",
    cost : 800,
    available : true
}
const client = {
    name : "Daniel",
    premium : true
}

/*const clientProduct = {
    client, 
    product
} //Concatenated*/
const clientProduct = Object.assign(client, product)//Concatenated return one object, but delete rewrite fields equals

console.table(clientProduct)