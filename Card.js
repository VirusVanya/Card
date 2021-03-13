let numElement = document.getElementById("num")
let newNumber = document.getElementById("newNumber")
newNumber.addEventListener('keyup',setNumber)

let nameElement = document.getElementById("nameElement")
let newName = document.getElementById("newName")
newName.addEventListener('keyup',setName)

let dateElement = document.getElementById("dateElement")
let newDate = document.getElementById("newDate")
newNumber.addEventListener('keyup',setDate)

function setNumber() {
	numElement.innerHTML = newNumber.value
}

function setName() {
	nameElement.innerHTML = newName.value
}

function setDate() {
	numElement.innerHTML = newNumber.value
}