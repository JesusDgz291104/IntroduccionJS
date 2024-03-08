//ternar operator -(condition)? if true :  else
const available = 1000
const total = 500 
const card = false

available>total ? 
    console.log("you can pay with cash"): 
    card ? 
    console.log('you can pay with card'):
    console.log("you cannot pay")

//optional chaining

const alum={
    name: 'John',
    class: 'A' ,
    aprovatedd: true
}
console.log(alum.name?.lastName)//cheack if exist this field, else go to the next line