//arrow functions

const sumar= (number1 = 1, number2 = 0 ) => {
    console.log(number1+number2);
}
sumar();

const technologies =['vue.js', 'react', 'angular', 'node.js'];
const numbers=[ 10,20,30]

//includes
let result = technologies.includes('angular');
result= technologies.findIndex(tech=>tech === 'angular')
//some
result = numbers.some(numbers=> numbers > 15)//check if  any element is greater than 15
//find
result = numbers.find(numbers => numbers > 20)//return the first element  that is greater than 20
//every
result = numbers.every(numbers => numbers > 20)
//reduce
result = numbers.reduce((total, number)=> number+total,0)
console.log(result)
