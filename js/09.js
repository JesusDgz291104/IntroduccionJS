// arrays

const technologies =[ 'vue.js', 'node.js','react','angular'];
/*console.log(technologies);
console.log(technologies[0])
//muted
technologies.push( "python")// add at the end
console.log(technologies)
technologies.unshift( '.net')//add at the beginning 
console.log(technologies);
technologies.pop()//delete element at the end
technologies.shift()//delete element at the beggining
technologies.splice(1,2)// delete from index 
//unmuted*/
const newArray =[...technologies,'Laravel']

const arraymodificated = newArray.filter(function(newElementToArray){//create new array
    

    return newElementToArray !== 'Laravel'
})


console.log(arraymodificated)
