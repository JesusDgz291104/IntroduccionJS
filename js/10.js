const technologies =[ 'vue.js', 'node.js','react','angular']
//destructuring of arrays

/*const[firstElement, secondElement, , lastElement] = technologies; 
console.log(firstElement); // vue.js
console.log(secondElement); // node.
console.log(lastElement)   ; // angular*/



//iteradores en js
//forEach
const arrayForEach = technologies.forEach(function(tech,i) {//only view
    return tech
})
const arrayMap = technologies.map(function(tech,i) {//view and create new array with return
    return tech
})

console.log(arrayForEach)
console.log(arrayMap)
