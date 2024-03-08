/*const nickname = "juanito"

console.log(typeof nickname) // Juanito
const numBig = BigInt(4854894545456456456412312341544987984545648565613546548645)
console.log(typeof numBig)


const symbol =  Symbol("symbol") 
console.log(typeof symbol) // symbol

const ducks =[1,2,3]
const alumno= {}
console.log(typeof  ducks) // object
console.log(typeof  alumno) // object
*/
const product = {
    name : "tablet",
    cost : 800,
    available : true
}
console.table(product)
console.log(product.name)
console.log(product[`cost`])


//destructuring
const{name}= product

console.log(name)

//object literal
const autentificated = true
const user = "juan"

const newObject={autentificated,user}
console.log(newObject)




