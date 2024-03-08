const product = {
    name : "tablet",
    cost : 800,
    available : true
}

//Object.freeze(product)//Makes the object immutable
Object.seal(product); //Only changes properties  that are already in the object can be added 
//rewrite
product.name = 'laptop'
product.image = "image.png"

//delete data
//delete product.available;
//const {disponible,...product2} = product  delete a field  and return the rest of the object
//console.table(product2)
console.log(product)

//destruturing two or more objects

console.log("------------------------------------------------")


