const formSubmit = document.querySelector('.contactform');
const inputs = document.querySelectorAll('.contactform input');
const textarea = document.querySelector('.contactform textarea');
const outMassage = document.querySelector('.contactform .output_message');

function handleForm () {
    formSubmit.addEventListener("submit", function() {
        inputs.forEach(item => {
            if(item.value === "" && textarea.value === "") {
                outMassage.textContent = 'Please fill out the form first'
            }
            else {
                outMassage.textContent = 'Sending...'
            }
        })
    })
}
handleForm();