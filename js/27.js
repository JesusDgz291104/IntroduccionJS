//events doom-submit

const form = document.querySelector('#formulario');

form.addEventListener('submit',e => {
    e.preventDefault()

    const alert = document.createElement('DIV')

    //console.log(alert)
    alert.textContent = "Shipping doesn't work here, please use the contact form."
    alert.classList.add('alert', 'bg-red-500', 'text-white', 'font-bold')
    const name = document.querySelector("#nombre").value;
    const password = document.querySelector("#password").value;
    //console.log(name, password);
    if(name === '' || password === ''){
        form.appendChild(alert)
        return
    }

})
