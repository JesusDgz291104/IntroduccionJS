const inputName = document.querySelector('#nombre') 
const inputPassword = document.querySelector('#password') 
const heading = document.querySelector('.heading')

inputName.addEventListener('input', (e)=>{
    heading.textContent = e.target.value


    console.log("writing...")
})