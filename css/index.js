const buttonClick = document.getElementById('click_button');
const myForm = document.getElementById('my_form');
const mySelect = document.getElementById('myselect');
const myInput = document.getElementById('myinput');
const myDiv = document.getElementById('mydiv');
const inputElement = document.getElementById('myinput');
const input = document.querySelector("input");
const log = document.getElementById("log");
const input = document.querySelector("input");
const log = document.getElementById("log");
const password = document.querySelector('input[type="password"]');

buttonClick.addEventListener('click', () => {
    alert('Me diste click');
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado');
});

mySelect.addEventListener('change', () => {
    console.log('valor: ' + mySelect.id)
});

myInput.addEventListener('input', () => {
    console.log('valor: ' + myInput.value)
});

myDiv.addEventListener('mouseover', () => {
    myDiv.classList.add('mouseover');
});

myDiv.addEventListener('mouseout', () => {
    myDiv.classList.remove('mouseover');   
});
input.addEventListener("keyup", logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
    
input.addEventListener("keyup", logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
  };

  password.addEventListener("focus", (event) => {
    event.target.style.background = "orange";
  });

  password.addEventListener("blur", (event) => {
  event.target.style.background = "white";
});
