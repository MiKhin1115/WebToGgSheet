const scriptURL = 'https://script.google.com/macros/s/AKfycbxwX0Exikv5xHR3PbzohcIT6HAqTBK8vmU7IL5dBJSjT4RUP7hET4s74b3MaTn0UyU/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST' , body:new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(()=>{window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})